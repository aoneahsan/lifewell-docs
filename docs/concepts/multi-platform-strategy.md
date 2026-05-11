---
title: Multi-platform strategy — web, Android, iOS, extension
description: How LifeWell ships one product across four surfaces. Web is the canonical UI; Capacitor wraps it for Android and iOS; the browser extension is a small separate bundle.
keywords: [lifewell platforms, capacitor cross platform, web vs android, chrome extension, ios capacitor, ahsan mahmood]
sidebar_position: 6
---

# Multi-platform strategy

LifeWell ships one product across four surfaces: the web app (canonical), Android (Capacitor wrapper), iOS (in preparation), and a Chrome-Web-Store-compliant browser extension. This page explains what is shared, what differs, and why the trade-offs were chosen the way they were.

If you're picking which surface to install, this page helps you decide. If you're a developer evaluating LifeWell's stack, this is the cross-platform story.

## The web app is the canonical UI

The web app at `lifewell.aoneahsan.com` is the source of truth for every screen, every interaction, every feature. The Capacitor Android build wraps the same React bundle in a native shell — there is no separate Android codebase. iOS will do the same once it ships. This is why React + Capacitor was chosen over React Native: code reuse approaches 100% for the UI, and only platform-specific plugins differ.

The browser extension is the exception. Per Chrome Web Store policy, extensions cannot load remotely-hosted code (including the LifeWell web bundle from `lifewell.aoneahsan.com`). The extension is therefore a separate, smaller codebase under `extension/` that targets a different audience and feature set.

## Comparison at a glance

| Capability | Web | Android | iOS (in prep) | Extension |
| --- | --- | --- | --- | --- |
| Full health tracking | ✓ | ✓ | ✓ | Limited |
| Family tree | ✓ | ✓ | ✓ | View-only |
| Memories & notes | ✓ | ✓ | ✓ | View-only |
| Calculators (12+) | ✓ | ✓ | ✓ | Linked out to web |
| Wellness reminders | In-app banners | Push notifications | Push notifications | Desktop notifications |
| Photo capture | File input | Camera plugin | Camera plugin | N/A |
| Offline tracking | Service worker | Native bundle | Native bundle | Limited |
| Sign-in | Firebase Auth (Google/Apple/email) | Same + native plugins | Same + native plugins | Chrome Identity API |
| Distribution | Live | Pending Play Store | App Store (in prep) | Pending Chrome Web Store |

## How code is shared

| Layer | Shared by |
| --- | --- |
| React UI (`src/`) | Web + Android + (future) iOS |
| Type definitions (`src/types/`) | All four surfaces |
| Service layer (`src/services/`) | Web + Android + iOS |
| State management (`src/stores/`) | Web + Android + iOS |
| i18next translations | Web + Android + iOS (extension uses static English for v1) |
| Capacitor plugin wrappers (`src/lib/capacitor-*.ts`) | Android + iOS only (web has stubs) |
| Browser extension UI (`extension/src/`) | Extension only |
| Browser extension types | Shared with `src/types/` via path alias |
| `firestore.rules` + indexes | All four surfaces (same database) |

The result: one feature change in `src/components/health/Vitals.tsx` ships to web AND Android in the next build. The browser extension's analogous "quick-log vitals" UI is separate and needs to be updated independently.

## Why Capacitor, not React Native?

Three reasons:

1. **Code reuse approaches 100%** with Capacitor's WebView shell. React Native ports require a separate UI tree built with `View`, `Text`, etc., even though the business logic could be shared.
2. **The Capacitor plugin ecosystem covers everything LifeWell needs**: camera, push, geolocation, biometrics, file picker, share sheet, haptics, edge-to-edge layouts, native back-gesture handling. Plus CapAwesome plugins (`@capawesome/*`) for app-update, app-review, badge, screenshot, etc.
3. **Web is the canonical surface**. We want every commit to ship to web AND mobile simultaneously, which Capacitor delivers natively. React Native would force a second deployment pipeline.

The trade-off is that Capacitor apps render in a WebView, so animation performance is closer to a fast PWA than a native app. For LifeWell's UI patterns (lists, forms, charts) this is invisible to the user. For animation-heavy games or AR experiences, native would be better — but that's not LifeWell.

## Why a separate extension codebase?

Chrome Web Store policy prohibits Manifest V3 extensions from loading remote code (no `eval`, no remote scripts, no remote `import()`). This means we cannot bundle the LifeWell web app into the extension's popup window — the extension must self-host its UI.

Rather than duplicate the entire app in `extension/`, the extension is intentionally scoped to the things you'd want from a toolbar popup:

- Wellness reminder schedules (alarms API).
- Quick-log buttons for water, mood, break-stretch.
- A tiny today-summary.
- A deep link into the full web app for everything bigger.

The extension at `extension/` uses WXT (a Vite-based extension framework) plus a small React tree. Its bundle is under 200 KB — small enough to load instantly. The auth flow uses Chrome's `chrome.identity` API, which brokers Google sign-in through the browser itself (no Firebase Auth SDK loaded, per Web Store policy).

## When iOS ships

The iOS Capacitor build is configured (`Capacitor 8` with iOS 8.3.1 platform) but the App Store listing isn't complete. When iOS ships, the comparison row "iOS (in prep)" flips to "✓" identically to Android, with these iOS-specific differences:

- Auth uses **Sign in with Apple** (required by App Store policy) plus optional Google.
- Push notifications use APNS via OneSignal.
- File picker uses iOS document/photo picker (different UI from Android).
- iOS Keychain stores Capacitor Preferences when a passcode is set.

The shared `src/` code path handles all of this through the Capacitor plugin abstraction.

## Frequently asked

**Should I install the Android app or the web PWA?**
If you want push notifications and native widgets, the Android app. If you don't mind missing push and prefer no install, the web PWA via Chrome's "Add to Home screen" is excellent. Both share the same data, so you can switch later.

**Why doesn't the extension have the calculators?**
The calculators are a more substantial UI surface than a 360x600 popup can fit. The extension shows a tiny summary plus a button into the full calculator UI on the web. Trying to cram a full calculator into the popup would degrade the experience for both audiences.

**Will there be a native macOS or Windows app?**
Not currently. The web app installed as a PWA on macOS / Windows already gets a standalone window, a dock/Start-menu icon, and desktop notifications. A separate Electron build would add overhead for marginal benefit.

**What about Linux?**
Same story as macOS / Windows — the PWA gives Linux users a standalone window and a launcher icon via Chrome / Edge / Brave. No separate Linux build is planned.

**Why no React Native or Flutter version?**
React Native would require a separate UI tree (cost: rebuilding every screen) for a marginal gain in animation smoothness. Flutter would require a full rewrite in Dart. Neither buys enough to outweigh the cost given Capacitor's near-100% code reuse with the web. If LifeWell ever needs native-grade performance for a specific feature (e.g. AR), we'd add that feature as a Capacitor plugin in Swift/Kotlin rather than rewrite the whole app.

## Where to read next

- [Architecture](./architecture) — the technology stack underneath each surface.
- [Install on web](/docs/getting-started/install-web) / [Android](/docs/getting-started/install-android) / [Extension](/docs/getting-started/install-extension) — per-surface install guides.
- [Mobile overview](/docs/mobile/overview) — Android-specific behavior.
- [Extension overview](/docs/extension/overview) — what the extension does and doesn't do.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
