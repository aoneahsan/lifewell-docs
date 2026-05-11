---
title: Browser extension — overview, scope, what it does
description: The LifeWell browser extension is a wellness reminder + quick-log surface for desktop browsers. Built on WXT, Manifest V3, Chrome Identity API.
keywords: [lifewell browser extension, chrome extension, wxt, manifest v3, wellness reminders, quick tracking, ahsan mahmood]
sidebar_position: 1
---

# Browser extension overview

The LifeWell **browser extension** is a desktop-focused companion to the web app. It runs in your browser's extension toolbar, fires wellness reminders (water, posture, eyes-off-screen, stretches) on the schedule you set, and lets you quick-log health entries without opening the full web app. It's built on WXT (the modern Manifest V3 framework), uses Chrome Identity API for auth (no Firebase Auth SDK in the extension), and ships with **no remote scripts** to comply with Chrome Web Store policy.

The extension is optional. The full LifeWell experience works without it. The extension exists for users who want wellness reminders in the browser tab rather than on their phone.

## What the extension does

| Capability | Notes |
| --- | --- |
| Wellness reminders | Water, posture, breathing, eye-rest, stretch on your schedule |
| Quick health entries | Log water, mood, vitals without leaving the page |
| Appointment reminders | Notifies you of upcoming LifeWell appointments |
| Diet tips | Rotating educational tips between reminders |
| Exercise prompts | Quick stretches and movement breaks |
| Education widget | Curated health-content rotation |
| Status widget | Today's progress visible at a glance |

## Browser support

| Browser | Status |
| --- | --- |
| Chrome (desktop) | Supported — primary target |
| Edge (Chromium) | Supported via Chrome Web Store |
| Brave | Supported |
| Opera (Chromium) | Should work; not formally tested |
| Firefox | Manifest V3 differences in progress |
| Safari | Future — different extension model |
| Mobile browsers | Not applicable — use the mobile app instead |

## Architecture in short

- **Framework**: WXT — modern build tool for cross-browser extensions.
- **Manifest version**: V3 — service-worker background script, declarative permissions.
- **UI**: React (rendered in popup + content scripts).
- **State**: Zustand stores scoped to extension.
- **Storage**: Chrome storage API + Capacitor-compatible wrappers.
- **Auth**: Chrome Identity API (NOT Firebase Auth SDK — Chrome Web Store rejects remote-script loading from auth providers).
- **Database**: Firestore via the standard JS SDK with token from Chrome Identity.

The extension follows Chrome Web Store's "no remote scripts" rule strictly. All JavaScript is bundled at build time; nothing loads from CDNs at runtime.

## Permissions

The extension declares:

| Permission | Why |
| --- | --- |
| `storage` | Save extension settings + cached data locally |
| `alarms` | Schedule wellness-reminder alarms via Chrome's alarms API |
| `notifications` | Show OS-level reminders |
| `identity` | Chrome Identity API for OAuth sign-in |

Optional (request at runtime when needed):

- `activeTab` — for context-aware features in the future.
- `tabs` — for cross-tab features.

Host permissions:

- `<all_urls>` — for content scripts (overlay reminders on any page).

The `<all_urls>` host permission looks broad, but in practice the content script:

- **Does not read** page content.
- **Does not modify** the page DOM beyond injecting reminder overlays in the corner.
- **Does not exfiltrate** anything.

This is documented in the Chrome Web Store listing's privacy policy.

## Why a separate extension instead of the web app

Three reasons:

1. **Persistent reminders.** A web tab can be closed. An extension service-worker stays alive long enough to fire scheduled alarms.
2. **Cross-tab.** The extension can remind you regardless of which website you're currently on.
3. **Low-friction quick-log.** A popup with three buttons (log water, log mood, log break) beats opening a new tab to lifewell.aoneahsan.com.

## Why Chrome Identity API, not Firebase Auth

Chrome Web Store strict-mode review blocks extensions that load remote scripts at runtime. The Firebase Auth web SDK uses `https://apis.google.com/js/api.js` for some flows, which counts as remote code.

LifeWell extension instead uses Chrome Identity API (`chrome.identity.getAuthToken`) to get a Google OAuth token directly from the browser, then constructs Firestore-authenticated calls manually. The trade-off is a bit more code; the gain is Chrome Web Store compliance.

See [browser-extension rules](https://chrome.google.com/webstore) for the policy specifics.

## What the extension is

- A reminder + quick-log surface for desktop.
- A complement to the web app, not a replacement.

## What the extension is not

- **Not a mobile-browser extension.** Mobile use the [native mobile app](/docs/mobile/overview).
- **Not standalone.** It signs into the same LifeWell account as the web app and mobile.
- **Not a full UI.** Complex flows (memory creation, family tree management) belong in the web app or mobile.
- **Not an ad blocker, password manager, or general utility.** Single purpose: LifeWell wellness companion.

## Privacy

The extension respects the same posture as the rest of LifeWell:

- Auth via Chrome Identity API; no password handling.
- Per-account Firestore data; no extension-server in the middle.
- No analytics that track your browsing.
- No remote script loading.
- Source code available for inspection on the Chrome Web Store listing (post-review).

## Where to read next

- [Install the extension](./install) — step-by-step install + first-run setup.
- [Wellness reminders](./wellness-reminders) — water / posture / eye / stretch reminders.
- [Quick tracking](./quick-tracking) — popup quick-log interface.
- [Mobile overview](/docs/mobile/overview) — the mobile-app alternative.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
