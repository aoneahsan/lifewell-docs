---
title: Mobile apps — overview, Capacitor 8, native plugins
description: LifeWell mobile apps wrap the React web app via Capacitor 8 for Android (and iOS, in progress) — native push, local notifications, deep links, offline-first.
keywords: [lifewell mobile, capacitor 8, hybrid app, android app, ios app, native plugins, ahsan mahmood]
sidebar_position: 1
---

# Mobile apps overview

The LifeWell **mobile apps** wrap the React web app via Capacitor 8, with native plugins for push notifications, local notifications, deep links, file picking, contacts, and local-data persistence. They run the same UI code as the web app, but on native shells (Android + iOS) that handle OS-level integration the web can't reach — background tasks, OS notifications even when the app is closed, hardware-accelerated rendering, and proper offline support.

The Android app is the current primary mobile target. iOS is in progress (pending App Store submission). The Capacitor architecture means both platforms run identical React code; the differences are native plugin availability and platform-specific UX patches.

## Platforms

| Platform | Status | Notes |
| --- | --- | --- |
| **Android** | Available | Play Store distribution; min Android 7.0 (API 24) |
| **iOS** | In progress | App Store submission pending; iOS 15.0+ target |
| **Electron / desktop** | Considered | Lower priority; web app + browser extension cover desktop |

## What the mobile app adds beyond the web

The web app works on mobile browsers — but the native app adds:

| Capability | Why it matters |
| --- | --- |
| **Push notifications** | Fire reminders even when the app is closed (web tabs can't) |
| **Local notifications** | Schedule reminders that don't need a server round-trip |
| **Offline-first** | Capacitor Preferences for persistent local storage + Firestore offline cache |
| **Native sharing** | Open / share via the OS share sheet |
| **Camera + photo picker** | Native UX rather than HTML file input |
| **Contacts access** | Optional device-contact import (opt-in) |
| **Biometric auth** | Fingerprint / face unlock for app open |
| **Deep links** | Open specific pages from a URL or notification tap |
| **Background tasks** | Capture location snapshots, fire alarms in the background |
| **Status bar / splash** | Native polish — splash screen, status bar colours |

## Capacitor architecture

LifeWell mobile uses Capacitor 8:

- **WebView**: Android System WebView (Chrome-based) / WKWebView (iOS Safari-based).
- **JS bridge**: native calls via `@capacitor/core`.
- **Plugins**: 20+ official + community plugins wired in.
- **Build**: Android Gradle / iOS Xcode build of the wrapping shell.
- **OTA updates**: future — Capacitor live-update mechanism for non-store-review JS updates.

## Capacitor plugins used

A short list of the most-load-bearing plugins:

| Plugin | Purpose |
| --- | --- |
| `@capacitor/app` | App lifecycle events |
| `@capacitor/preferences` | Local key-value storage (canonical persistence) |
| `@capacitor/push-notifications` | OneSignal-backed push |
| `@capacitor/local-notifications` | OS-scheduled reminders without server |
| `@capacitor/camera` | Photo capture |
| `@capacitor/filesystem` | File access |
| `@capacitor/network` | Network state |
| `@capacitor/share` | OS share sheet |
| `@capacitor/splash-screen` | Splash on launch |
| `@capacitor/status-bar` | Status bar styling |
| `@capacitor/geolocation` | Location snapshots (opt-in) |
| `@capacitor/keyboard` | Soft-keyboard events |

The full list is in `package.json`. Each integration is in the relevant feature's code.

## Banned plugins

LifeWell explicitly does NOT use:

- `@capacitor-firebase/crashlytics` — runtime errors from missing Gradle wiring.
- `@capacitor-firebase/performance` — same family.

Instead: **Sentry** for crash reporting + **Amplitude** for performance metrics.

## Build flow

For users, the build flow is transparent — install from the Play Store / App Store and you get the prebuilt app.

For developers (LifeWell's own engineers):

1. `yarn build` — builds the React app to `dist/`.
2. `yarn cap:sync` — copies `dist/` into the native projects.
3. **Android**: `npx cap open android` → Android Studio → run.
4. **iOS**: `npx cap open ios` → Xcode → run.

The official build pipeline is documented in the repo's `docs/development/` folder.

## Account sync between platforms

You can sign in to the same LifeWell account on:

- Web app at `https://lifewell.aoneahsan.com`.
- Android app.
- iOS app (when available).
- Browser extension.

All share Firestore as the source of truth. Changes on one device reflect on others within seconds.

## Storage / database

| Surface | Where it lives |
| --- | --- |
| App state (Zustand) | RAM, persisted to Capacitor Preferences |
| Local cache (Firestore offline) | IndexedDB / SQLite |
| Media (photos, audio) | Your Google Drive (via the [Drive sync](/docs/memories-and-notes/google-drive-sync)) |
| Auth token | Capacitor Preferences (encrypted at rest by OS) |
| User settings | Firestore (synced) + Capacitor Preferences (cached) |

## App version + updates

Updates come through the Play Store / App Store mechanisms. The app shows a "new version available" banner if a major update lands; minor updates are silent.

Currently no in-app OTA updates — every change requires a store-review cycle (1–7 days for Play Store; 1–14 days for App Store typically).

## Privacy posture on mobile

The mobile app respects the same posture as web + extension:

- Per-account data, Firestore-rule-protected.
- No tracking SDKs that profile you for ads.
- Sentry (crash reporting) configured with PII scrubbing — only stack traces, no user data.
- Amplitude (analytics) opt-out toggle in Settings.
- Permissions requested at use (camera, contacts, location) — none at launch.

## What mobile is not

- **Not a separate product.** Same React app + Firestore data, different shell.
- **Not a "thin client".** Full feature parity with the web app.
- **Not auto-installed.** Free download from the official store; no sideloaded forced installs.
- **Not for desktop.** Capacitor Electron isn't built; desktop users get the web app + extension.

## Where to read next

- [Android](./android) — Android-specific setup, permissions, build details.
- [iOS](./ios) — iOS status and roadmap.
- [Push notifications](./push-notifications) — OneSignal integration.
- [Offline usage](./offline-usage) — local-first architecture details.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
