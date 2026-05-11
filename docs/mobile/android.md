---
title: Android — install, permissions, edge-to-edge, foreground services
description: LifeWell Android app — install from Play Store, runtime permissions, edge-to-edge layout, foreground-service usage for reminders, troubleshooting.
keywords: [lifewell android, capacitor android, play store, android permissions, foreground service, edge to edge, ahsan mahmood]
sidebar_position: 2
---

# Android

LifeWell **Android** is the primary mobile target — a Capacitor 8 app that wraps the React web app in a native shell. Distributed via Google Play Store, supports Android 7.0 (API 24) and later, and uses native services for push, local notifications, and (opt-in) background location.

## Install

1. Open the Google Play Store on your phone.
2. Search for **LifeWell** by Ahsan Mahmood.
3. Tap **Install**.
4. Open the app once installed.
5. Sign in (Google or email) — same account as the web.

**App ID**: `com.aoneahsan.lifewell`.

## Minimum requirements

| Item | Minimum |
| --- | --- |
| Android version | 7.0 (Nougat) — API 24 |
| Storage | ~80 MB initial install; grows with cached data |
| RAM | 2 GB recommended |
| Architecture | armeabi-v7a, arm64-v8a, x86_64 (Play Store handles auto-selection) |
| Network | Required for first launch + sync; many features work offline |

The minimum API 24 covers ~95%+ of active Android devices as of 2024–2025.

## Permissions

LifeWell declares the following Android permissions (in `AndroidManifest.xml`):

| Permission | Purpose | When requested |
| --- | --- | --- |
| `INTERNET` | Network connectivity | Implicit |
| `ACCESS_NETWORK_STATE` | Detect online/offline state | Implicit |
| `POST_NOTIFICATIONS` | Show notifications (Android 13+) | First time a reminder fires |
| `RECEIVE_BOOT_COMPLETED` | Restore scheduled reminders after reboot | Implicit |
| `WAKE_LOCK` | Keep CPU awake for time-critical reminders | Implicit |
| `FOREGROUND_SERVICE` | Background reminder service | Implicit |
| `CAMERA` | Take photos for memories | At first camera use |
| `READ_MEDIA_IMAGES` | Gallery photo picker | At first photo selection |
| `READ_CONTACTS` | Optional device-contact import | At opt-in only |
| `ACCESS_FINE_LOCATION` | Optional location snapshots | At opt-in only |
| `ACCESS_BACKGROUND_LOCATION` | Optional background location | At opt-in only |
| `VIBRATE` | Reminder vibration | Implicit |

Every sensitive permission has:

1. **Runtime-prompt UX** — asked when you use the feature, not at launch.
2. **Privacy-policy section** explaining why it's needed.
3. **Data Safety form entry** in the Play Store listing.
4. **Non-permission fallback** — e.g. if you decline camera, you can pick from gallery.

## Edge-to-edge layout

Android 15+ enforces edge-to-edge layout by default. LifeWell handles this:

- Status bar overlays the app — content padded with `safe-area-inset-top`.
- Navigation bar overlays the app — content padded with `safe-area-inset-bottom`.
- Theme-aware status-bar colour (light icons on dark theme, dark icons on light theme).

The implementation uses Capacitor's `StatusBar` plugin + CSS `env(safe-area-inset-*)`.

## Notification channels

LifeWell uses Android notification channels to let you customise per-category notification behaviour:

| Channel | Default importance |
| --- | --- |
| General reminders | Default |
| Health & medication | High |
| Mental health | Default |
| Calendar events | Default |
| Baby reminders | High |
| Marketing | Off |
| System | Low |

Each channel has its own sound, vibration, and override settings — Android's "App info → Notifications" lets you tune them per channel.

## Foreground service usage

A few features use a **foreground service** (a persistent notification + background process):

- **Workout timer** — keeps the timer running when the screen locks.
- **Background location tracking** (when opt-in) — captures location snapshots.

Android requires the persistent notification — it's an OS policy, not a LifeWell choice. The notification text describes what's running (e.g. "Workout in progress").

When the activity completes, the foreground service stops and the notification disappears.

## Battery and background limits

Android aggressively kills background processes to save battery. LifeWell handles this:

- **Reminders use `AlarmManager`** (Android's official scheduled-alarm API), which survives most battery-optimisation modes.
- **OneSignal push** delivers notifications even when the app is killed.
- **Local notification scheduling** uses Capacitor's local-notifications plugin, also `AlarmManager`-backed.

For users on aggressive battery-saver OEMs (Xiaomi MIUI, Oppo, OnePlus, Huawei), LifeWell needs to be exempt from battery optimisation for reliable reminders. The app prompts for this on first reminder setup; the OEM-specific instructions are in the prompt.

## App size

Installed size: ~80 MB initial; grows with cached data.

The bundle includes:

- React app code (~5 MB compressed).
- Capacitor native shell (~10 MB).
- Lucide icons + Radix UI assets.
- i18n bundles (10 locales).
- Splash screens for various densities.

Updates are typically 10–25 MB (incremental).

## Building from source (developers only)

For developers wanting to build the Android app locally:

1. Clone the repo.
2. `yarn install` at the root.
3. `yarn build` — builds the React app.
4. `yarn cap:sync` — copies build into `android/app/src/main/assets/public`.
5. `npx cap open android` — opens Android Studio.
6. Sync Gradle, Run on device / emulator.

Signing for Play Store release uses a separate keystore (see `/home/ahsan/Documents/01-code/keystores/` for Ahsan's reference). Public users don't need to build — install from the Play Store.

## Play Store compliance

LifeWell follows the Play Console policy strictly:

- Every sensitive permission declared in the privacy policy + Data Safety form.
- No camera permission in the manifest unless the camera plugin is in use (LifeWell uses it for memory photos).
- No banned-package usage (`@capacitor-firebase/crashlytics` and `/performance` are not installed).
- Marketing copy in the Play Store listing avoids prohibited claims ("best", "top", "#1", user counts).

Past rejections (and the rules that fixed them) live in the global `~/.claude/play-console-rejection-rules.json` file.

## Troubleshooting

| Issue | Fix |
| --- | --- |
| Notifications don't appear | Settings → LifeWell → Notifications → enable all channels |
| Reminders fire late or not at all | Battery optimisation likely killing the alarm — exempt LifeWell in OS battery settings |
| Sign-in fails | Ensure Google Play Services is up-to-date; clear app cache; re-sign-in |
| App crashes on launch | Reinstall; check that Android version is 7.0+ |
| Camera doesn't open | Grant camera permission in OS Settings; restart app |
| Photos don't upload | Check Google Drive permission; check internet; check Drive storage quota |

## Privacy posture (Android-specific)

- Permissions follow least-privilege; nothing requested at launch.
- Data Safety form declares every data type collected and its purpose.
- No ads SDK, no analytics SDK that profiles for ads.
- Sentry crash reporter scrubs PII; only stack traces uploaded.

## Where to read next

- [iOS](./ios) — iOS status.
- [Push notifications](./push-notifications) — OneSignal integration details.
- [Offline usage](./offline-usage) — local-first architecture.
- [Overview](./overview) — mobile architecture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
