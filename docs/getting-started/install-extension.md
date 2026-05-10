---
title: Install LifeWell browser extension — Chrome, Edge, Brave
description: The LifeWell browser extension delivers wellness reminders and quick check-ins from the toolbar. Built for Chrome Web Store with Manifest V3 and Chrome Identity API.
keywords: [lifewell extension, browser extension, chrome web store, wellness reminders, manifest v3, chrome identity api]
sidebar_position: 3
---

# Install the LifeWell browser extension

The LifeWell browser extension is a small companion to the web app that lives in your browser toolbar. It surfaces wellness reminders during your work day, lets you log a quick mood / water / break-stretch entry without switching tabs, and keeps a tiny dashboard one click away. It's built on Manifest V3 and is Chrome Web Store compliant.

This page covers the install path, what the extension does and doesn't do, and the design choices that keep it on the right side of Chrome Web Store policy.

## What the extension is for

The extension is NOT a replacement for the [web app](./install-web) or the [Android app](./install-android). It's an ambient companion: a tiny window into your LifeWell account that nudges you during long stretches at the keyboard. Use it for:

- Wellness reminders during work hours (water, posture, stretch, eyes-off-screen).
- Quick "log mood" / "log water glass" / "log break" buttons in a popup.
- A miniature today-summary so you can glance at your progress without opening the full app.
- Deep links into the full web app for any feature that needs the bigger UI.

It does not handle the heavy work — family trees, full memory editing, calculator workflows, admin features. For those, click "Open LifeWell" from the extension popup to jump into the [web app](https://lifewell.aoneahsan.com).

## Install from the Chrome Web Store

**Status as of 2026-05-10**: The extension build at `extension/` in the LifeWell codebase is Chrome Web Store compliant. Public listing is pending review. Once live, the install path will be:

1. Open the [Chrome Web Store](https://chromewebstore.google.com/) in Chrome, Edge, or Brave (all support Web Store extensions).
2. Search for **LifeWell** and confirm the developer is **Ahsan Mahmood** before installing.
3. Click **Add to Chrome** (or "Add to Edge" / "Add to Brave").
4. Pin the extension to your toolbar by clicking the puzzle-piece icon and toggling the pin next to LifeWell.
5. Click the LifeWell icon in the toolbar. Sign in via the popup (Chrome Identity API).

When the listing is live, this page will link directly to the Web Store URL.

## Install for testing right now (developer mode)

If you're a tester or want the extension before the public Web Store launch, you can install it from the source folder in unpacked mode. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) to request the build, then:

1. Receive the zipped `extension/dist/` folder.
2. Unzip somewhere stable on disk (don't move it after install).
3. Open Chrome / Edge / Brave and go to `chrome://extensions` (or `edge://extensions`).
4. Toggle **Developer mode** in the top-right corner.
5. Click **Load unpacked** and select the unzipped folder.
6. The LifeWell icon appears in the toolbar. Pin it for easy access.

Updates need a manual reinstall in this mode — that's part of the trade-off for testing before public launch.

## How sign-in works (Chrome Identity API)

Per Chrome Web Store policy, browser extensions are not allowed to load remote auth scripts (Firebase Auth's `signInWithPopup`, Google's `gapi`, anything served from a CDN). LifeWell's extension uses Chrome's built-in Identity API instead:

- `chrome.identity.getAuthToken()` brokers a Google sign-in via the browser itself.
- The token is sent directly to Firestore via Firebase's REST endpoints (no Firebase Auth SDK loaded).
- Document ownership is verified by `userId` field on each document, not by `request.auth.uid`, because Chrome Identity returns an access token (not a Firebase auth credential).

If you want the design rationale, see [Privacy & security](/docs/concepts/privacy-and-security). The short version is that the extension respects every Chrome Web Store rule, including the "no remote code" rule, while still delivering full functionality.

## Permissions the extension requests

| Permission | Why |
| --- | --- |
| `storage` | Persist your account session and cached settings |
| `alarms` | Schedule wellness reminders that fire even when no tab is open |
| `notifications` | Show desktop notifications for reminders |
| `identity` (optional) | Sign in via Chrome Identity API |
| `<all_urls>` | NOT requested — the extension never reads page content |

If a permission isn't in this list, the extension doesn't request it. You can verify by clicking the LifeWell extension entry on `chrome://extensions` and reviewing the permission list there.

## What you need (browser requirements)

| Component | Minimum |
| --- | --- |
| Chrome / Edge / Brave | Version 110+ (Manifest V3 fully supported) |
| OS | Any (Mac, Windows, Linux, ChromeOS) |
| Account | Google sign-in via Chrome Identity (recommended), or use the web app for email sign-in then carry the session |

Firefox is on the roadmap but not in the current build — Firefox handles WebExtensions differently (`browser.*` API, slightly different Manifest V3 semantics). Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) if you want to be notified when Firefox support ships.

## Frequently asked

**Is the LifeWell extension on the Chrome Web Store yet?**
Not as of 2026-05-10. The build is compliant and pending Web Store review. Tester access available via email request.

**Will the extension drain my battery?**
No — the service worker only wakes for scheduled alarms (wellness reminders) or your direct toolbar clicks. There's no background polling, no content-script injection on every page, and no constant network activity. Idle CPU and memory cost are near zero.

**Why doesn't the extension just embed the full web app?**
Two reasons. First, the extension's value is being ambient and instant — the popup needs to load in milliseconds, which a full app shell can't deliver. Second, Chrome Web Store policy disallows remotely-hosted code in extensions, so we can't lazy-load the web app's bundle from `lifewell.aoneahsan.com` at runtime. The extension ships a tiny self-contained UI that links out to the web app for heavier flows.

**Can I use the extension without signing in?**
Yes — you can run wellness reminders and break timers without an account. To log entries that sync with your tracking history, you need to sign in.

**Does the extension read my browsing data?**
No. The extension does not request `<all_urls>` host permissions, does not inject content scripts into your tabs, and never reads page content. Verify in `chrome://extensions` → LifeWell → "Site access" — should be "On click" or "When you click the extension," never "On all sites."

## Next steps

- [Extension overview](/docs/extension/overview) — full feature reference.
- [Wellness reminders](/docs/extension/wellness-reminders) — configure schedules and quiet hours.
- [Quick tracking](/docs/extension/quick-tracking) — log entries from the toolbar popup.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
