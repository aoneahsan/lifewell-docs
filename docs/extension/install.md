---
title: Install the extension — Chrome Web Store + first-run setup
description: Step-by-step installation of the LifeWell browser extension from the Chrome Web Store, including sign-in via Chrome Identity API and first-run permissions.
keywords: [install lifewell extension, chrome web store, sign in, permissions, first run setup, ahsan mahmood]
sidebar_position: 2
---

# Install the LifeWell extension

This page walks through installing the LifeWell browser extension from the Chrome Web Store, signing in with your existing LifeWell account, and granting the permissions the extension needs to fire reminders and quick-log entries.

## Prerequisites

- A modern Chromium-based browser (Chrome, Edge, Brave, or Opera).
- An existing LifeWell account (or create one via the web app at `https://lifewell.aoneahsan.com`).
- A Google account (LifeWell auth uses Google for the extension).

## Install from the Chrome Web Store

1. Open the [LifeWell extension listing](https://chrome.google.com/webstore) (replace with the actual listing URL when published).
2. Click **Add to Chrome** (or the equivalent on Edge / Brave).
3. The browser shows a permissions prompt. Review the four core permissions:
   - **Storage** — local settings + cached data.
   - **Alarms** — schedule wellness reminders.
   - **Notifications** — show OS-level reminders.
   - **Identity** — Google OAuth sign-in.
4. Click **Add extension** to confirm.
5. The extension icon appears in the toolbar. Click it.

The icon is a green-cyan **L** mark — designed to be readable at 16×16 px in a busy toolbar.

## First-run setup

Click the extension icon → the popup opens.

1. **Welcome** — tap **Sign in with Google**.
2. The browser opens a Google account-chooser popup.
3. Pick the Google account associated with your LifeWell account (or sign up if you don't have one).
4. Approve the scopes:
   - `userinfo.email` — to identify your account.
   - `userinfo.profile` — to display your name/photo in the extension.
5. Once signed in, the extension's popup shows your LifeWell profile chip.

The Chrome Identity API handles the OAuth flow — no password is collected by the extension.

## Grant optional permissions

The extension declares a few **optional permissions** that aren't requested at install:

- `activeTab` — for future context-aware features.
- `tabs` — for cross-tab coordination.

These are requested at runtime when a feature needs them. If you decline, the dependent feature won't work but the rest of the extension is unaffected.

## Configure wellness reminders

Right after sign-in, the popup walks you through:

- Pick which reminders you want — water, posture, breathing, eye-rest, stretch.
- Set the cadence for each (every 30 / 60 / 90 minutes).
- Define your active window (default 09:00–18:00; reminders silent outside).
- Quiet hours (default 22:00–07:00).

Defaults are sensible if you skip the wizard.

## Pin the extension

Most browsers hide extension icons by default behind a puzzle-piece menu. To pin LifeWell:

1. Click the puzzle-piece icon in the toolbar.
2. Find LifeWell.
3. Click the pin icon next to it.

Now the LifeWell icon is always visible in your toolbar.

## Keyboard shortcut

The extension binds **Alt+L** (Mac: **Option+L**) to open the popup. You can change this:

1. Open `chrome://extensions/shortcuts`.
2. Find LifeWell.
3. Click the input next to "Open LifeWell" and press your preferred combo.

## Verify the install

A quick sanity check:

1. Click the extension icon. The popup should show your name and today's progress.
2. Click **Log water** → 250 ml. The extension fires a small confirmation toast.
3. Open `https://lifewell.aoneahsan.com/health/water` in a new tab. Today's water count should include the 250 ml you just logged.

If the count matches, sync is working.

## Updating the extension

The Chrome Web Store auto-updates extensions in the background. You'll see a small badge on the extension icon when a major version brings new features.

To force-update:

1. Open `chrome://extensions/`.
2. Toggle **Developer mode** on.
3. Click **Update**.

## Uninstall

1. Right-click the LifeWell icon → **Remove from Chrome**.
2. Confirm.
3. The extension is gone; your LifeWell account remains untouched.

To also clear local extension data:

1. Open `chrome://extensions/`.
2. Click **Details** on LifeWell (if still listed).
3. **Site settings** → **Clear data**.

## Troubleshooting

| Issue | Likely cause | Fix |
| --- | --- | --- |
| Sign-in popup doesn't appear | Browser popup blocker | Allow popups for `lifewell.aoneahsan.com`; try again |
| Reminders not firing | Notification permission denied | OS settings → Notifications → enable for Chrome |
| Quick-log fails with "Sign in" error | OAuth token expired | Re-sign-in from the popup |
| Extension icon stays grey | Background service worker idle | Click the icon — it wakes the service worker |
| "Failed to fetch" errors in console | Firestore connectivity / CORS | Retry; check internet connection |

## What gets stored locally

The extension caches:

- Your settings (reminder schedules, quiet hours, etc.).
- Today's quick-log entries (for offline support).
- Auth token (refreshable; expires per OAuth standard).

Local storage is per-browser-profile. Signing out of the extension clears the token; cached entries sync to Firestore first.

## What does NOT get stored locally

- Your full LifeWell history (memories, notes, etc.) — those live in Firestore + Google Drive.
- Sensitive data beyond today's logs — the extension is a quick-log surface, not a full data mirror.

## Where to read next

- [Wellness reminders](./wellness-reminders) — configure each reminder type.
- [Quick tracking](./quick-tracking) — popup quick-log interface.
- [Overview](./overview) — extension architecture.
- [Mobile overview](/docs/mobile/overview) — alternative for on-the-go.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
