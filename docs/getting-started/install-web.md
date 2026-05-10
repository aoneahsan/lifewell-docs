---
title: Install LifeWell on the web — open in your browser
description: LifeWell runs as a web app at lifewell.aoneahsan.com. No download needed. Works on Chrome, Firefox, Safari, Edge. Optional install as a PWA.
keywords: [lifewell web, install lifewell, lifewell pwa, lifewell browser, ahsan mahmood]
sidebar_position: 1
---

# Install LifeWell on the web

LifeWell on the web is a Progressive Web App (PWA) hosted at [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com). There's nothing to download — open the URL in any modern browser and you're already in. If you want LifeWell to feel more like a native app on your laptop or desktop, you can optionally install it as a PWA in Chrome, Edge, or Brave.

This page covers both paths and what to expect on each browser.

## Open LifeWell in any browser

Type `lifewell.aoneahsan.com` (or click [the link](https://lifewell.aoneahsan.com)) and the app loads. The first visit downloads about 1 MB of compressed assets; subsequent visits are near-instant because the service worker caches what it needs.

LifeWell's web build is tested on the last three versions of Chrome and Firefox, the last five versions of Safari, plus Edge and Brave (which share Chrome's engine). It targets `>0.5%` browser usage per Browserslist, so anything above that share will work.

You don't need an account to use the [calculators](/docs/tools/overview) — BMI, BMR, TDEE, the timers, and similar tools run entirely in the browser without a login. To track vitals, log medications, write notes, or sync across devices, sign in with Google, Apple, or email.

## Install as a PWA (optional)

A PWA install gives you:

- A standalone window without browser chrome.
- A launchpad icon (on macOS, in Applications; on Windows, in the Start menu; on ChromeOS, in the launcher).
- Faster cold-start because the runtime is already wired up.
- Optional desktop notifications for reminders.

**Chrome / Edge / Brave (desktop)**

1. Open [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com).
2. Click the **install** icon in the address bar (looks like a small monitor with a down-arrow). On Edge, it may appear as a `+` icon; on Brave, as a small download icon.
3. Confirm in the dialog. The app opens in its own window.
4. Pin the icon to your dock / taskbar / Start menu for one-click access.

**Safari (macOS 14+)**

1. Open the URL in Safari 14 or later.
2. File → **Add to Dock** (or use the share button → "Add to Dock").
3. Safari adds a standalone Dock icon. Click it to launch.

**Chrome on Android**

If you're on Android and don't want the Play Store install (see [Install on Android](./install-android)), Chrome's "Add to Home screen" gives you the PWA experience: long-press the URL bar's overflow menu → "Add to Home screen". The web app launches in a standalone webview.

## What works in private / incognito mode

Most of LifeWell works in private browsing, with one caveat: signed-in features only persist for the lifetime of the private window. Once you close it, the session and any local cached data are wiped. Calculators and the theme customizer still work fine since they don't require an account. If you sign in, sync to Firestore happens normally; Firestore just won't trust the local cache between private sessions.

## What you need (system requirements)

| Component | Minimum | Recommended |
| --- | --- | --- |
| Browser | Chrome 110+ / Firefox 110+ / Safari 16+ / Edge 110+ | Latest stable |
| Network | 3G or better for first load (~1 MB compressed) | Wi-Fi or LTE |
| Account (optional) | Google / Apple / email | Google for Drive sync features |
| Storage (PWA install) | ~10 MB on disk | — |

## Frequently asked

**Do I need an account to use LifeWell?**
Not for the calculators or the theme customizer — those work with no sign-in. For tracking history, family features, memories, notes, reminders, and anything that syncs across devices, you do need to sign in.

**Does it work on iPhone or iPad?**
Yes — Safari on iOS / iPadOS 16+ runs LifeWell well. You can also "Add to Home Screen" from Safari's share menu to get a standalone icon. A native iOS build is in preparation but not yet shipped.

**Why "private health" if it talks to Firestore?**
"Private" here means per-user — your data is locked to your account by Firestore Security Rules and no other user (including the developer) can read it. It is NOT a zero-knowledge / end-to-end-encrypted product. See [Privacy & security](/docs/concepts/privacy-and-security) for the full data flow.

**The page didn't load.**
Hard-refresh (`Cmd-Shift-R` on Mac, `Ctrl-F5` on Windows). If that doesn't help, clear site data for `lifewell.aoneahsan.com` in your browser settings, then reload. If the issue persists, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with the browser version and the exact error.

**Can I install LifeWell as a PWA on Firefox?**
Firefox doesn't currently support PWA installs in its main desktop release. Firefox itself works fine — you just won't get the standalone-window experience. Chrome, Edge, and Brave all support full PWA install on desktop.

## Next steps

- [Install on Android](./install-android) for the native mobile experience.
- [First-time setup](./first-time-setup) — sign in, set up your profile, choose a theme.
- [Quickstart tour](./quickstart-tour) — see what LifeWell can do in five minutes.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
