---
title: Environment variables reference — required + optional
description: Reference of every VITE_ environment variable LifeWell uses. Required keys cause boot failure if missing; optional keys degrade gracefully.
keywords: [environment variables, vite env, firebase config, env reference, .env.example, ahsan mahmood]
sidebar_position: 2
---

# Environment variables reference

This page documents every `VITE_*` environment variable LifeWell uses. The canonical source is the `.env.example` file in the repo — this page mirrors it with context. Every variable is tagged `[REQUIRED]` (app fails to boot without it) or `[OPTIONAL]` (degrades gracefully).

LifeWell uses Vite's environment-variable convention: variables prefixed with `VITE_` are exposed to the client. Non-`VITE_` variables stay server-side (used by the Cloudflare Worker, not the React app).

## Required variables

These cause the app to render a "missing config" screen on boot if absent:

| Variable | Purpose |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase Web API key — for Firestore + Auth client SDK |
| `VITE_FIREBASE_AUTH_DOMAIN` | `<project>.firebaseapp.com` for OAuth redirects |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID for Firestore + Storage |
| `VITE_FIREBASE_APP_ID` | Firebase web-app ID (for SDK init) |

Without these, no Firestore reads work — the app is functionally dead. The boot validator catches this and renders an `<EnvMissingScreen>` listing the missing keys.

## Optional but commonly set

| Variable | Default behaviour if absent |
| --- | --- |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage disabled (we use Google Drive instead) |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | FCM not initialised; push fails silently |
| `VITE_GOOGLE_CLIENT_ID_WEB` | Google sign-in disabled on web |
| `VITE_GOOGLE_CLIENT_ID_ANDROID` | Native Google sign-in disabled on Android |
| `VITE_GOOGLE_CLIENT_ID_IOS` | Native Google sign-in disabled on iOS |
| `VITE_GOOGLE_DRIVE_TOKEN_PROXY_URL` | Google Drive integration disabled; media uploads fail |
| `VITE_ONESIGNAL_APP_ID` | Push notifications disabled |
| `VITE_SENTRY_DSN` | Crash reporting disabled (no harm, just lost telemetry) |
| `VITE_AMPLITUDE_API_KEY` | Analytics disabled |
| `VITE_CLARITY_PROJECT_ID` | Microsoft Clarity heatmaps disabled |
| `VITE_FILES_HUB_*` | FilesHub uploads fall back to direct Drive upload |

## Build / app metadata

| Variable | Use |
| --- | --- |
| `VITE_APP_NAME` | Display name on splash + about page |
| `VITE_APP_VERSION` | Version shown in UI (must match `package.json`) |
| `VITE_APP_BUILD` | Build number incremented per CI build |
| `VITE_LOG_LEVEL` | Logger default level — `warn` in prod, `info` in dev |

## Server-side (Cloudflare Worker)

The Cloudflare Worker for Google Drive token exchange uses:

| Variable | Use |
| --- | --- |
| `LIFEWELL_GOOGLE_CLIENT_SECRET` | Google OAuth client secret (NEVER exposed to client) |

This is stored via `wrangler secret put` on the Worker, not in any `.env` file the client sees.

## Boot validation

LifeWell validates required env vars at startup:

```typescript
import { getMissingRequiredEnv } from '@/config/env'

const missing = getMissingRequiredEnv()
if (missing.length > 0) {
  renderEnvMissingScreen(missing)
}
```

The screen lists which keys are missing and (in dev) a copy-paste `.env.example` snippet. In production it shows a generic "service not fully configured — contact support" message; key names are still logged to console + Sentry.

## Format and storage

- **Dev**: `.env.local` (gitignored) overrides `.env`. Vite picks up both.
- **Prod**: env vars set in the build environment (Firebase Hosting, Cloudflare Workers).
- **Mobile**: Capacitor reads from `.env` at `cap sync` time and bakes the values into the build.

## Updating env vars — the 4-place sync

Whenever a new env var is added or removed, **all four** must update:

1. `.env.example` — add the key with `[REQUIRED]` or `[OPTIONAL]` tag and a 1-line reason.
2. `src/config/env.ts` — typed accessor via `requireEnv()` / `optionalEnv()`.
3. `src/vite-env.d.ts` — TypeScript declaration on `ImportMetaEnv`.
4. The project's CLAUDE.md env section.

Missing any of these = subtle bugs at runtime. The repo's lint guard catches the most common (missing TS declaration).

## Security notes

- **Never commit `.env`** — it's gitignored.
- **`.env.example` is committed** with placeholder values (e.g. `your_api_key_here`).
- **`VITE_*` variables are exposed to the client** — anyone can read them via DevTools. Don't put secrets in `VITE_*`. Secrets go server-side (Cloudflare Worker, etc.).
- **Firebase API key is public by design** — it's not a secret, it's a project identifier. Security is enforced by Firestore rules, not by the key.

## Where to read next

- [Architecture](/docs/concepts/architecture) — where env vars feed into the system.
- [Google Drive sync](/docs/memories-and-notes/google-drive-sync) — the OAuth proxy + secrets architecture.
- [Third-party integrations](./third-party-integrations) — what each integration needs.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
