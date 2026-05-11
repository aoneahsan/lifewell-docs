---
title: Browser compatibility — supported browsers and known quirks
description: LifeWell web app supports modern evergreen browsers (Chrome, Firefox, Safari, Edge). Known quirks per browser and minimum supported versions.
keywords: [browser support, web compatibility, supported browsers, chrome firefox safari edge, ahsan mahmood]
sidebar_position: 4
---

# Browser compatibility

The LifeWell web app at `https://lifewell.aoneahsan.com` targets **modern evergreen browsers**. The build uses standard ES2020+ features, modern CSS (flexbox, grid, custom properties), and current Web APIs (Service Worker, IndexedDB, Notifications API). Older browsers without these features are not supported.

## Supported browsers

| Browser | Minimum version | Status |
| --- | --- | --- |
| **Chrome** (desktop + Android) | 90+ | Fully supported |
| **Edge** (Chromium) | 90+ | Fully supported |
| **Firefox** | 88+ | Fully supported |
| **Safari** (macOS + iOS) | 14+ | Fully supported |
| **Opera** (Chromium) | 76+ | Should work; not formally tested |
| **Samsung Internet** | 14+ | Should work; not formally tested |
| **Brave** | recent | Fully supported (Chromium-based) |

**Not supported**:

- Internet Explorer (any version).
- Chrome / Firefox / Safari versions older than ~3 years.
- Stock Android browser (legacy, pre-Chrome WebView).
- UC Browser, QQ Browser, and similar non-evergreen browsers.

If you visit on an unsupported browser, the app shows a warning banner and may degrade gracefully (basic content visible, some interactions broken).

## Key Web APIs used

| API | Browser support |
| --- | --- |
| **Service Workers** | All modern; required for offline-first |
| **IndexedDB** | All modern; required for offline cache |
| **Web Notifications** | All modern; required for reminders |
| **Geolocation** | All modern; required for optional location features |
| **MediaRecorder** (audio) | All modern; required for audio notes |
| **MediaDevices** (camera) | All modern; required for photo capture in browser |
| **PWA install prompt** | Chromium-based; Firefox / Safari have alternatives |

## Known quirks

### Safari (iOS)

- **PWA install** via "Add to home screen" rather than a prompt.
- **Service Worker** limitations on iOS Safari (smaller cache quota, more aggressive eviction).
- **`backdrop-filter`** works as of iOS 9; verify against your minimum.
- **Push notifications** require Web Push API support (Safari 16.4+); for older iOS Safari, no web push.

### Firefox

- **Manifest V3 (extension)** support still evolving; the LifeWell extension's Firefox build trails Chrome.
- **Notification persistence** behaves slightly differently from Chromium.

### Mobile browsers

- **Mobile Chrome** runs the same engine as desktop Chrome; most things work.
- **Mobile Safari** has stricter resource limits — heavy use may hit IndexedDB quotas earlier than desktop.
- **In-app browsers** (Facebook, Instagram, WeChat) often have limited Web API support; the app may not work reliably. Open in the native browser instead.

## Feature degradation by browser

| Feature | If unsupported |
| --- | --- |
| Service Worker | No offline support; app still loads online |
| IndexedDB | No offline cache; reads always hit Firestore |
| Notifications | No browser-side reminders; check email for important ones |
| MediaRecorder | Audio notes disabled; text notes still work |
| Geolocation | Location tracking disabled |
| Push | Notifications fire only when tab is open |

The app degrades gracefully — missing one API removes one feature, doesn't break the whole experience.

## Mobile vs web vs extension

For mobile use:

- **Web on mobile browser**: functional but limited (no push, less offline reliability).
- **Mobile native app** (Android / iOS via Capacitor): full feature parity, better offline, push.

For desktop use:

- **Web app**: primary experience.
- **Browser extension**: complementary — adds reminders + quick-log without opening the web app.

We recommend the mobile app on phones and the web + extension combo on desktop.

## CSS and visual rendering

- **CSS Grid + Flexbox**: required (90%+ of layout).
- **Custom properties**: extensively used for theming (Radix tokens + LifeWell custom).
- **`@supports` queries**: rare; most features assume modern support.
- **Fluid typography** (`clamp()`): used; supported in all target browsers.
- **`prefers-reduced-motion`**: respected — animations disabled when user opts in OS-wide.
- **`prefers-color-scheme`**: respected for "system" appearance setting.

## Accessibility considerations

- **Screen reader**: tested with NVDA + VoiceOver. Most surfaces fully accessible; complex visualisations (D3 maps) have text alternatives.
- **Keyboard navigation**: tab order, Skip-to-content link, focus rings.
- **Colour contrast**: meets WCAG AA throughout; AAA on most surfaces.
- **Reduced motion**: animations disabled when OS-level setting on.

## Where to read next

- [Architecture](/docs/concepts/architecture) — system architecture.
- [Mobile overview](/docs/mobile/overview) — native app alternative.
- [Install web](/docs/getting-started/install-web) — installing the web app as a PWA.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
