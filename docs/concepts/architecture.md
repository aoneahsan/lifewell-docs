---
title: LifeWell architecture — web, mobile, extension, backend
description: How LifeWell is built. React 19 + Vite 8 + TanStack Router on the web, Capacitor 8 for Android/iOS, WXT for the browser extension, Firebase + Cloudflare Workers for backend.
keywords: [lifewell architecture, react 19, capacitor 8, firebase, cloudflare workers, tanstack router, wxt, ahsan mahmood]
sidebar_position: 1
---

# Architecture

LifeWell is a four-surface product — web app, Android (with iOS in prep), browser extension, and a Firebase Functions backend — that shares a single React + TypeScript codebase wherever possible. The architecture optimizes for code reuse across surfaces, no-cost backend operation under Firebase's free Spark plan, and strict permission hygiene at every boundary.

This page covers the high-level shape: which technology runs where, why those choices were made, and where to look in the codebase for each layer.

## The four surfaces at a glance

| Surface | Code location | Runtime | Distribution |
| --- | --- | --- | --- |
| Web app | `src/` | React 19 + Vite 8 in the browser | [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com), Firebase Hosting |
| Android (and iOS in prep) | `android/`, `ios/` | Capacitor 8 + same `src/` React app inside a WebView | Play Store (pending), App Store (in prep) |
| Browser extension | `extension/` | WXT-built Manifest V3 extension | Chrome Web Store (pending) |
| Backend functions | `functions/` | Node 22 on Firebase Cloud Functions | Internal — only invoked from clients |

The web `src/` is the canonical UI. Capacitor wraps it in a native shell with platform-specific plugins; the extension is a separate, much smaller bundle that talks to the same Firestore data.

## Frontend stack (web + Android)

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 19 | Server components are not used; we want client-side interactivity everywhere |
| Build | Vite 8 | Fast HMR in dev, small production bundles, mature ecosystem |
| Language | TypeScript 6 | Strict mode, no `any` in app code |
| Routing | TanStack Router | File-based routes in `src/routes/`, type-safe params and search |
| State | Zustand 5 | Lightweight, no Provider wrapping, persist middleware |
| Forms | react-hook-form + Zod | Type-safe schemas, no rerenders on every keystroke |
| UI primitives | Radix UI + `@radix-ui/themes` | Accessible primitives, full theme customizer exposed to users |
| Styling | Tailwind CSS 4 | Utility-first, design tokens in `tailwind.config.ts` |
| Data fetching | TanStack Query (selected screens) | Server-state caching, background refetch |
| Tables | TanStack Table v8 + react-virtual | One `DataTable<T>` primitive for every grid in the app |
| Charts | D3 7.9 | Direct SVG control, no chart-library lock-in |
| i18n | i18next | 10 locales (English, Arabic with RTL, Spanish, French, German, Portuguese, Russian, Turkish, Urdu, Chinese) |
| Mobile shell | Capacitor 8 + 25+ plugins | Same React app on Android (and iOS soon) |
| Push notifications | OneSignal (free tier) | Cross-platform delivery, web + Android + iOS |
| Errors | Sentry | DSN configured; gracefully no-ops if env key missing |
| Analytics | Amplitude | Event-level analytics; gracefully no-ops if env key missing |

## Backend (Firebase + Cloudflare Workers)

LifeWell deliberately avoids paid backend services. The free Firebase Spark plan handles the bulk of state, and Cloudflare Workers (also free) handle the few server-side responsibilities Firebase Security Rules can't.

| Concern | Where it lives | Why |
| --- | --- | --- |
| User accounts (auth) | Firebase Authentication | Google + Apple + email; per-account JWT |
| User data | Firestore (collection prefix `lifewell_*`) | Real-time, offline-cached, per-user security rules |
| Indexes + rules | `firestore.indexes.json` + `firestore.rules` | Versioned in the source repo |
| Files (avatars, memory media) | FilesHub API (https://fileshub.zaions.com) | Free, simple object storage; FilesHub is another Ahsan project |
| Token brokering (Google Drive, third-party APIs) | Cloudflare Worker `lifewell-gdrive-token-proxy` | Keeps `client_secret` off the frontend |
| Push delivery | OneSignal (free tier) | We send via the OneSignal REST API, delivery is OneSignal's job |
| Heavy compute | Firebase Cloud Functions (Node 22) | Used sparingly — only when Security Rules can't enforce something |

Cloudflare Worker secrets follow a strict naming rule: every variable is prefixed with the project name (e.g. `LIFEWELL_GOOGLE_CLIENT_SECRET`) so multiple Ahsan projects can share one Cloudflare account without collisions.

## How the surfaces share code

The React app in `src/` is the bulk of the codebase. Capacitor doesn't fork it — Capacitor packages the production web build into an Android app, with native shell + Capacitor plugins providing access to platform features (camera, push, geolocation, biometrics, native back-gesture handling, edge-to-edge layouts, native haptics).

The browser extension at `extension/` is a separate small bundle. It can't reuse the full app — Chrome Web Store policy disallows remotely-hosted code in extensions, so the extension can't lazy-load `lifewell.aoneahsan.com`'s bundle. Instead it has a tiny self-contained UI that talks directly to Firestore via the REST API and brokers Google sign-in via Chrome Identity API (no Firebase Auth SDK).

| Layer | Web | Android | Extension |
| --- | --- | --- | --- |
| UI bundle | `src/` (React 19 + Vite) | `src/` packaged by Capacitor | Tiny separate `extension/` bundle |
| Auth | Firebase Auth SDK | Firebase Auth SDK + Capacitor native plugins | Chrome Identity API |
| Storage | Firestore (online cache) + Capacitor Preferences | Firestore + native Preferences | Chrome storage API |
| Push | OneSignal Web SDK | OneSignal Android SDK | Service worker `chrome.notifications` |

## Component organization

`src/components/` is grouped by feature domain (one folder each for `health/`, `tools/`, `family/`, `memories/`, `notes/`, `chat/`, etc.) plus shared primitives (`ui/`, `form-fields/`, `layout/`, `theme/`). The pattern is:

- `src/components/<feature>/*` — feature-specific React components.
- `src/components/ui/*` — Radix-wrapped primitives shared across features.
- `src/components/form-fields/*` — react-hook-form-aware field wrappers (text input, select, date, etc.) used everywhere a form is rendered.
- `src/components/theme/*` — theme customizer dialog + utilities.

Services live in `src/services/` (one per feature domain). Stores live in `src/stores/` (Zustand stores, also one per domain). Hooks live in `src/hooks/`. Types in `src/types/`.

## Discipline rules baked into the codebase

LifeWell enforces several project-wide rules through ESLint, Husky pre-commit hooks, and explicit code structure:

- **Centralized logger.** No direct `console.*` calls in app code. ESLint flags any. The `src/utils/logger.ts` module is the single API; level is controllable at runtime via `localStorage['lifewell:logLevel']`.
- **No raw localStorage.** Use `@/lib/preferences-storage` (Capacitor Preferences with localStorage fallback). Direct `localStorage.*` is banned in `src/`.
- **No banned packages.** `@capacitor-firebase/crashlytics` and `@capacitor-firebase/performance` are explicitly forbidden — they cause Gradle wiring problems on Android. Sentry and Amplitude cover error/perf instead.
- **URL state preservation.** Modals, tabs, filters, multi-step forms — anything the user expects to survive a refresh — lives in URL search params via `src/hooks/use-url-state.ts`, never raw `useState`.
- **Form fields convention.** `<FieldLabel required>` for required fields (red asterisk); plain `<Label>` for optional. Optional fields must always allow empty submit.

These rules are enforced because each one was earned the hard way — see [About the developer](/docs/about/about-the-developer) for the back-story on the centralized-logger and Play-Console-permissions rules.

## Frequently asked

**Why React 19 instead of a server-rendered framework?**
LifeWell's UI is interaction-heavy (drag-to-edit family tree, real-time chat, calculator inputs that update live). Server rendering buys little here. Vite 8's static build still produces small bundles, gets cached aggressively by the service worker, and integrates cleanly with Capacitor's WebView packaging on Android.

**Why Capacitor instead of React Native?**
Code reuse. Capacitor wraps the same React app you ship on the web — one codebase, three surfaces. React Native would require a separate UI tree. Capacitor's native plugin ecosystem (camera, push, geolocation, biometrics, native back-gesture handling) covers everything LifeWell needs for the mobile surface.

**Why Cloudflare Workers if you're already on Firebase?**
Firebase Functions are paid (Blaze plan) for any non-trivial workload. Cloudflare Workers' free tier (100k requests/day) is generous enough for our token-proxy needs. We only use Workers for things Firestore Security Rules can't guard — like exchanging an OAuth code for an access token, where `client_secret` needs to stay server-side.

**Why FilesHub instead of Firebase Storage?**
Firebase Storage is paid (counts against Blaze egress). FilesHub (https://fileshub.zaions.com) is a separate free-tier service Ahsan built for exactly this case. The trade-off is that FilesHub is single-region (no global edge), but for user avatars and memory media the latency is fine.

**How do you avoid `any` in TypeScript when integrating Firebase?**
Firebase's TypeScript types are strong from v9+. Where SDK types are weak (some admin SDK corners, third-party plugins), we wrap them in our own typed services in `src/services/`. App code never imports the raw SDK; everything goes through the typed wrapper.

## Where to read next

- [Data model](/docs/concepts/data-model) — Firestore collections, security rule shape, document structure.
- [Privacy & security](/docs/concepts/privacy-and-security) — what data lives where, what touches the network.
- [Offline-first design](/docs/concepts/offline-first-design) — how the app handles connectivity changes.
- [Multi-platform strategy](/docs/concepts/multi-platform-strategy) — what differs between web, Android, and the extension.
- [Tech stack](/docs/about/tech-stack) — exhaustive version list and version-bump policy.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
