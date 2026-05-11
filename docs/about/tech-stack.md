---
title: Tech stack — what LifeWell is built with
description: LifeWell's tech stack — React 19 + TypeScript + Vite 8 + Capacitor 8 + Radix UI + Tailwind 4 + TanStack Router + Firebase + Cloudflare Workers + OneSignal.
keywords: [lifewell tech stack, react 19, capacitor 8, vite 8, radix ui, tailwind 4, firebase, ahsan mahmood]
sidebar_position: 2
---

# Tech stack

The technologies LifeWell is built on. The choices reflect a few overall constraints: **free or low-cost infrastructure**, **modern but stable** (no bleeding-edge experiments in critical paths), **cross-platform single codebase**, and **user data ownership** (Google Drive for media, your own Firebase quota when possible).

## Frontend

| Layer | Technology |
| --- | --- |
| Language | TypeScript 5.9+ |
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | TanStack Router (file-based) |
| State (client) | Zustand 5 |
| State (server data) | TanStack Query |
| UI components | Radix UI primitives + Radix Themes |
| Styling | Tailwind CSS 4 + Radix tokens |
| Forms | React Hook Form + Zod |
| Rich text | TipTap |
| Charts / D3 graphs | D3.js |
| Date handling | date-fns |
| Icons | Lucide React |
| Animation | CSS only (no framer-motion as dep) |

## Mobile

| Layer | Technology |
| --- | --- |
| Native shell | Capacitor 8 |
| Android target | API 24+ (Android 7.0+) |
| iOS target | iOS 15+ |
| Plugins | `@capacitor/*` official + community |
| Push | OneSignal (over FCM + APNs) |
| Local notifications | `@capacitor/local-notifications` |
| Storage | `@capacitor/preferences` (canonical) |
| Camera | `@capacitor/camera` |
| Geolocation | `@capacitor/geolocation` (opt-in) |

## Browser extension

| Layer | Technology |
| --- | --- |
| Framework | WXT |
| Manifest | V3 |
| Auth | Chrome Identity API (NOT Firebase Auth SDK) |
| UI | React (popup + content scripts) |
| Build | Vite + WXT |
| Distribution | Chrome Web Store (Edge / Brave install from there too) |

## Backend / services

| Service | Use |
| --- | --- |
| Firebase Auth | Sign-in (Google + email) |
| Firestore | Primary database |
| Firebase Hosting | Web app hosting |
| Firebase Cloud Functions | Minimal use (scheduled jobs) |
| Google Drive (user's) | Media storage |
| Cloudflare Workers | OAuth token-exchange proxy |
| OneSignal | Push notifications |
| Sentry | Crash reporting |
| Amplitude | Product analytics |
| Microsoft Clarity | Web heatmaps |
| FilesHub | Optional file storage |

## Internationalisation

- **i18next** + `react-i18next`
- 10 locales: English, Arabic, Spanish, French, German, Portuguese, Russian, Turkish, Urdu (planned), Chinese (Simplified)
- RTL support for Arabic + Urdu

## Build / CI / tooling

| Tool | Use |
| --- | --- |
| Yarn (4) | Package manager — canonical |
| ESLint | Linting (typescript-eslint + eslint-plugin-react + react-hooks) |
| Prettier | Formatting |
| TypeScript | Type checking |
| GitHub Actions | CI |
| Firebase CLI | Deploy hosting + Firestore indexes |
| Wrangler CLI | Deploy Cloudflare Workers |
| Capacitor CLI | Sync + open native projects |

## Repository structure

```
lifewell/
├── src/              # React app
├── extension/        # WXT browser extension
├── functions/        # Firebase Cloud Functions (minimal)
├── android/          # Capacitor Android wrapper
├── ios/              # Capacitor iOS wrapper
├── workers/          # Cloudflare Workers (OAuth proxy)
├── docs/             # Markdown documentation (private repo)
├── app-publish-assets/  # Play Store / App Store assets
└── public/           # Static files
```

The `lifewell-docs` repo (where this documentation lives) is **separate and public** — open-sourced under CC-BY-4.0 so anyone can learn from the docs.

## Why these choices

A few notes on the high-conviction picks:

- **React 19 + TanStack Router**: file-based routing with strong TypeScript + concurrent React features.
- **Capacitor over React Native**: web-first then native makes more sense for LifeWell's surface area; one codebase across web + mobile.
- **Radix + Tailwind**: accessible primitives + utility-first styling. Avoids the heavy abstraction of MUI.
- **Firestore**: free tier covers our launch volume; structured documents fit the schema; rules are battle-tested.
- **OneSignal**: free push that abstracts FCM + APNs.
- **Cloudflare Workers**: free OAuth proxy. Could have been Firebase Functions but those need Blaze plan.
- **TipTap**: extensible rich-text editor that doesn't bake in opinions.
- **Yarn 4**: monorepo-friendly, fast, modern lockfile format.

## Versions

LifeWell tracks the latest stable versions of all dependencies. Major-version upgrades happen quarterly with full regression testing. Security patches are applied within days of disclosure.

## Open source

LifeWell's main codebase is private. This documentation site is open-source at [github.com/aoneahsan/lifewell-docs](https://github.com/aoneahsan/lifewell-docs) (once the repo goes public in Phase 14 of the docs build plan).

Components and libraries we use are open-source — we're grateful to those communities.

## Where do I read next?

- [Architecture](/docs/concepts/architecture) — system-level architecture.
- [About the developer](/docs/about/about-the-developer) — who built it.
- [Contributing](./contributing) — how to contribute (mostly the docs repo).
- [Changelog](./changelog) — version history.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
