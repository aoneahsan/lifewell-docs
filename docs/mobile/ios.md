---
title: iOS — in-progress App Store submission, iOS 15 target
description: LifeWell iOS app status — in progress for App Store submission, iOS 15.0+ target, APNs push notifications, native iOS permissions, Capacitor 8.
keywords: [lifewell ios, app store, capacitor ios, apns push, ios permissions, iphone app, ahsan mahmood]
sidebar_position: 3
---

# iOS

LifeWell **iOS** is in active development for App Store submission. The mobile codebase is shared with Android via Capacitor 8 — the same React app runs on both; the iOS work focuses on App Store-specific configuration, Apple-required disclosures, native iOS plugin parity, and the App Store submission flow itself. This page describes the current status, the target platform, and how to participate in the beta if you want early access.

## Status (as of this writing)

| Item | Status |
| --- | --- |
| Core app | Builds and runs on iOS simulator + device |
| Push notifications | APNs integration in progress |
| Background location | iOS-specific implementation pending |
| App Store Connect setup | In progress |
| Store listing assets | In progress |
| App Review submission | Pending |
| TestFlight beta | Pending — will open once App Store Connect is set up |

When the App Store submission is approved, this page will switch to "available — here's how to install" similar to the [Android](./android) page.

## Target platform

| Item | Minimum |
| --- | --- |
| iOS version | 15.0 |
| iPhone | iPhone 6s and later (any device that runs iOS 15) |
| iPad | All iPads running iPadOS 15+ |
| Storage | ~80–100 MB initial install |
| Architecture | arm64 (Apple Silicon + A12+) |

iOS 15+ covers ~95% of in-use iOS devices as of 2024-2025 (per Apple's published distribution statistics).

## Why iOS later

LifeWell's launch order — web first → Android second → iOS later — reflects:

1. **Web has the most reach** for early traction.
2. **Android Play Store** has a faster review cycle (24-48h typical).
3. **Apple App Store** review is slower (1-14 days) and requires more upfront paperwork (D-U-N-S number, paid developer account, business-entity setup).
4. **iOS specific dev work** (TestFlight, push certificates, App Store Connect) is meaningful one-time overhead.

The order maximises learning per dev-hour. iOS lands when foundational pieces stabilise.

## Native plugins on iOS

Capacitor plugins targeting iOS:

| Plugin | iOS notes |
| --- | --- |
| `@capacitor/push-notifications` | Backed by APNs (Apple Push Notification service) |
| `@capacitor/local-notifications` | Uses `UNUserNotificationCenter` |
| `@capacitor/camera` | Uses `UIImagePickerController` / `PHPhotoLibrary` |
| `@capacitor/filesystem` | Uses iOS sandbox file system |
| `@capacitor/network` | Reachability monitoring |
| `@capacitor/preferences` | UserDefaults-backed key-value storage |
| `@capacitor/geolocation` | Foreground works; background requires "always" auth (separate prompt) |
| `@capacitor/share` | UIActivityViewController |

The plugin contracts are identical to Android — React code doesn't distinguish.

## iOS-specific permissions

iOS requires `NSUsageDescription` keys in `Info.plist` for every permission:

| Permission | Info.plist key | Why |
| --- | --- | --- |
| Notifications | (registered at runtime) | OS-level notification permission |
| Camera | `NSCameraUsageDescription` | Memory photo capture |
| Photo Library | `NSPhotoLibraryUsageDescription` | Memory photo selection |
| Photo Library Add | `NSPhotoLibraryAddUsageDescription` | Save photos to gallery |
| Location (in-use) | `NSLocationWhenInUseUsageDescription` | Location snapshots while app open |
| Location (always) | `NSLocationAlwaysAndWhenInUseUsageDescription` | Background location (opt-in) |
| Contacts | `NSContactsUsageDescription` | Optional contact import |
| Face ID | `NSFaceIDUsageDescription` | Biometric app lock |

Each `Usage Description` is shown to the user in the OS permission prompt. We write specific descriptions so the prompt explains exactly what the data's used for.

## Background mode capabilities

iOS background processing is more restricted than Android. LifeWell uses:

- **Remote notifications** — APNs wake the app for new push.
- **Background fetch** — periodic sync of cached data when the app is in the background (~30 min cadence).
- **Background location** (opt-in only) — captures snapshots when permission is "Always".

iOS does not let apps run arbitrary code in the background like Android does. Background tasks have time limits (~30 seconds for `URLSession` callbacks; longer for `background fetch`).

## App Store compliance

To pass App Store review:

- **Privacy policy URL** prominently in the listing.
- **App Tracking Transparency (ATT)** prompt if any analytics SDK qualifies as tracking — LifeWell's analytics opt-out is built in.
- **In-app purchases** must use Apple's IAP system for digital goods (otherwise 30% commission tax + rejection). Consultation credits and premium will route through IAP on iOS once submitted.
- **Sign in with Apple** required if other social sign-in (Google) is offered — implemented for compliance.
- **Health data** — Apple HealthKit integration is opt-in for reading data into LifeWell; not required for App Store approval.

## TestFlight beta (planned)

Once App Store Connect is set up:

1. We invite beta testers via TestFlight email.
2. Testers download TestFlight app + accept invite.
3. Latest beta builds appear in TestFlight for install.
4. Crash reports + feedback flow back via TestFlight.

To request beta access: email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with your Apple ID email + device model.

## Future iOS-specific features

A few items on the iOS roadmap once the base app ships:

- **HealthKit integration** — read vitals (heart rate, weight, etc.) into LifeWell with explicit opt-in.
- **Apple Watch companion app** — quick-log + glance widget.
- **Widgets (Home Screen)** — today's progress at a glance.
- **Shortcuts integration** — voice / automation shortcuts for log actions.
- **Sign in with Apple** as primary auth path.
- **iCloud Drive backup** as alternative to Google Drive (TBD).

These are post-launch items, not blockers for first submission.

## What iOS is not (yet)

- **Not available** on the App Store as of this writing.
- **Not on macOS** — iOS-on-Mac (Catalyst) is a separate consideration.
- **Not feature-divergent** from Android — same React app, same data, same flows.
- **Not delayed indefinitely** — the work is in progress; ETA depends on the App Store review cycle.

## Frequently asked

**When will iOS be available?**
Target: within 2-3 months of Android stabilising. The App Store Connect setup is the longest single task. We'll announce on the [blog](/blog) when TestFlight opens, then again when the public release happens.

**Can I use the web app on my iPhone?**
Yes — `https://lifewell.aoneahsan.com` works on Mobile Safari. You'll miss push notifications and offline persistence; everything else works. Add to home screen for an app-like experience.

**Will the iOS app have feature parity with Android?**
Yes — same React app + Firestore + Capacitor plugins. Where iOS plugin availability differs (background location, file system specifics), we adapt the UI but keep the data + flow identical.

**Will iOS have in-app purchases?**
Yes — Apple's policy requires IAP for digital goods (consultation credits, premium subscription). The iOS app will use IAP; web + Android will continue offering the lower-fee external payment route alongside.

**Can I sideload the iOS app via Xcode?**
Developers can build from source and sideload to their own device (7-day Apple personal cert) or via Apple Developer enterprise distribution. Public sideloading isn't permitted on stock iOS.

## Where to read next

- [Android](./android) — current primary mobile target.
- [Push notifications](./push-notifications) — APNs + OneSignal architecture.
- [Offline usage](./offline-usage) — local-first details.
- [Overview](./overview) — mobile architecture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
