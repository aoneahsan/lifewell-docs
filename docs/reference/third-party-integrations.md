---
title: Third-party integrations — Firebase, Google Drive, OneSignal, Sentry
description: Reference list of every third-party service LifeWell integrates with — Firebase, Google Drive, OneSignal, Sentry, Amplitude, Clarity, Cloudflare Workers, FilesHub.
keywords: [third party integrations, firebase, google drive, onesignal, sentry, amplitude, cloudflare workers, ahsan mahmood]
sidebar_position: 3
---

# Third-party integrations

LifeWell depends on several third-party services for infrastructure. This page is the reference index — what each service does, why it was chosen, and how the data flow works.

The platform's free-tier discipline means each integration is on a free or very low-cost tier with realistic headroom for growth.

## Core infrastructure

### Firebase

- **Auth** — email + Google sign-in.
- **Firestore** — primary database (all the `lifewell_*` collections).
- **Hosting** — web app at `lifewell.aoneahsan.com`.
- **Cloud Functions** — minimal use; most features run client-side. Some scheduled functions for daily-summary generation.
- **Plan**: Spark (free) tier for most workloads; Blaze (pay-as-you-go) only if needed.

### Google Drive

- **Purpose**: User-owned media storage (photos, audio, video).
- **Scope**: `drive.file` (only files the app creates).
- **OAuth flow**: via the Cloudflare Worker proxy (no client_secret exposure).
- **Cost**: Free per user — uses each user's own Drive quota.

### Cloudflare Workers

- **Purpose**: OAuth token exchange + token refresh for Google Drive.
- **Worker**: `lifewell-gdrive-token-proxy`.
- **Plan**: Free tier (100k requests/day).
- **Why not Firebase Functions**: avoids the Blaze plan; CF Workers free tier covers token-exchange volume.

### FilesHub

- **Purpose**: Optional file storage / proxy for direct-uploaded media.
- **URL**: `https://fileshub.zaions.com/ai-integration`.
- **Auth**: `X-API-Key` header.
- **Visibility**: All uploads `public` (private requires API key for retrieval).

## Authentication

| Provider | Use |
| --- | --- |
| **Firebase Auth (Google)** | Primary sign-in on web + mobile |
| **Firebase Auth (Email)** | Alternative sign-in path |
| **Chrome Identity API** | Browser extension auth (Firebase Auth SDK not permitted there) |
| **Apple Sign-In** | Required by App Store for iOS apps offering social sign-in (implementation pending) |

## Notifications

### OneSignal

- **Purpose**: Cross-platform push notifications.
- **Backed by**: FCM (Android) + APNs (iOS) + browser-push (web).
- **Plan**: Free tier covers our user volume.
- **Why not direct FCM/APNs**: simpler cross-platform abstraction, single-API delivery.

## Crash + analytics

### Sentry

- **Purpose**: Crash and error reporting.
- **PII scrubbing**: enabled — only stack traces are uploaded, no user identifiers or content.
- **Plan**: Free tier (5k errors/month).

### Amplitude

- **Purpose**: Product analytics (which features are used, conversion funnels).
- **Privacy**: Opt-out toggle in user Settings.
- **Plan**: Starter (free) tier.
- **Banned**: Firebase Analytics is NOT used — Sentry + Amplitude cover the need with cleaner privacy controls.

### Microsoft Clarity

- **Purpose**: Heatmaps + session replays (web only).
- **Privacy**: Opt-out via Settings; PII masking on all input fields.
- **Plan**: Free.

## Communication

### Email

- **Provider**: TBD (Resend / SendGrid / Postmark all considered).
- **Use**: Password reset, account notifications, refund confirmations.
- **Volume**: low — < 10k emails/month projected.

### In-app push

Via OneSignal (above).

## Mobile-specific

### Capacitor

- **Purpose**: Hybrid-app framework (web → native shell).
- **Plugins**: 20+ official + community plugins (see [Mobile overview](/docs/mobile/overview)).
- **Cost**: Open-source (free).

### Capgo / native-update

- **Purpose**: (Future) OTA JS updates for Capacitor apps without store review.
- **Status**: Not yet integrated.

## Banned services

LifeWell explicitly does NOT use:

- **Google Analytics 4** — privacy concerns + Firebase Analytics already covered the need (which is itself replaced by Sentry+Amplitude).
- **Firebase Analytics** — replaced by Sentry+Amplitude.
- **`@capacitor-firebase/crashlytics`** — Gradle wiring issues caused runtime errors.
- **`@capacitor-firebase/performance`** — same family.
- **Stripe / PayPal direct** — uses `aoneahsan.com/payment` external flow to avoid platform fees.
- **CDN-loaded JavaScript** — Manifest V3 forbids; LifeWell complies.

## Data flow summary

```
User device (web / mobile / extension)
  → Firebase Auth (login)
  → Firestore (read/write structured data)
  → Cloudflare Worker (OAuth proxy)
    → Google (token exchange)
  → Google Drive (media upload/download, user's account)
  → OneSignal (push delivery)
  → Sentry / Amplitude / Clarity (telemetry — privacy-scrubbed)
```

Nothing in this stack profiles users for ad networks. No personal-data brokers.

## Data-residency notes

- **Firebase**: data location chosen per project (currently `us-central1`).
- **Google Drive**: user's Drive region (varies per Google account).
- **OneSignal**: US data centres.
- **Sentry**: US / EU options.

Users in regulated jurisdictions (GDPR, HIPAA-adjacent care) should consult LifeWell's [privacy policy](https://lifewell.aoneahsan.com/privacy) for compliance details.

## Where to read next

- [Env variables](./env-variables) — config keys for each integration.
- [Google Drive sync](/docs/memories-and-notes/google-drive-sync) — the most complex integration.
- [Push notifications](/docs/mobile/push-notifications) — OneSignal architecture.
- [Privacy and security](/docs/concepts/privacy-and-security) — privacy posture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
