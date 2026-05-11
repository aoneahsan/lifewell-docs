---
title: Troubleshooting FAQ — sign-in, sync, notifications, builds
description: Common LifeWell issues and fixes — sign-in failures, sync delays, missing notifications, photo upload failures, browser quirks, mobile-app problems.
keywords: [lifewell troubleshooting, sign in failed, sync issues, notifications not working, photo upload, ahsan mahmood]
sidebar_position: 5
---

# Troubleshooting FAQ

## I can't sign in.

Common causes + fixes:

| Cause | Fix |
| --- | --- |
| Wrong password | Tap "Forgot password" → email link → reset |
| Account suspended | Contact [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) |
| Google sign-in popup blocked | Allow popups for `lifewell.aoneahsan.com` |
| OAuth state expired | Refresh and try again |
| Browser doesn't support Web APIs | Update browser to current version |

## My data isn't syncing across devices.

1. Check internet on both devices.
2. Pull-to-refresh on the lagging device.
3. Sign out and back in on the lagging device.
4. If still stuck, email support with the username + timestamp.

## Reminders / notifications aren't firing.

Checklist:

1. **OS permission granted?** Settings → LifeWell → Notifications → enabled?
2. **Quiet hours active?** Are you in your configured quiet-hours window?
3. **Reminder enabled?** Open Reminders page → check the reminder is on.
4. **(Android only) Battery optimisation?** Some OEMs aggressively kill background apps; exempt LifeWell.
5. **(Mobile) Push token registered?** Sign out and back in to refresh.

## Photos / audio won't upload.

1. **Google Drive permission?** Settings → Connected accounts → Google Drive → reconnect if disconnected.
2. **Drive storage full?** Free up space in your Drive.
3. **OAuth token expired?** Sign out and back in to refresh.
4. **Internet connectivity?** Uploads queue offline; try again online.

## The app is slow / unresponsive.

1. **Close and reopen** the tab / app.
2. **Clear cache** (Settings → app data → clear cache).
3. **Update** to the latest app version.
4. **Check device storage** — full storage can cause slowness.
5. If it's persistent, email support with device model + browser + steps.

## A specific page won't load.

1. **Hard refresh** (Ctrl+Shift+R / Cmd+Shift+R) on web.
2. **Restart the app** on mobile.
3. **Sign out and back in** — refreshes auth + cache.
4. **Note the URL** and the error if any; email support.

## Calculator gives weird results.

1. Check the **units** in your inputs (kg vs lb, cm vs inches).
2. Try the formula manually (each calculator page documents the formula).
3. If still wrong, file a bug report — the formula is verified against published references but bugs happen.

## I deleted something by accident.

- **Most entries**: deletion is soft for 30 days. Open the trash on the relevant page (where supported) and restore.
- **Notes**: 30-day trash recovery.
- **Memory media**: stays in your Google Drive even if the memory metadata is deleted (recover from Drive directly).

## My family tree is rendering wrong.

1. **Refresh** — the simulation may settle better on second render.
2. **Reduce depth** in tree settings — too many nodes overwhelms the layout.
3. **Filter** by relationship type (family only, exclude work / friends).
4. If a relationship is missing, edit the person's profile to add it.

## My consultation messages aren't sending.

1. **Internet check**.
2. **Session window** — consultations have time-bound sessions; check the session is still active.
3. **Encrypted-thread state** — if encryption keys are out of sync (rare), email support.

## I can't open a community.

1. **Membership required?** Some communities are member-only; join first.
2. **Suspended community?** Platform-suspended communities show a banner.
3. **Bug?** Email support with the community name.

## My credits / premium aren't showing.

1. **Recent payment?** Allow 5-10 minutes for the external processor to confirm.
2. **Reload the app** to refresh from Firestore.
3. **Still missing?** Email support with the transaction reference.

## Where to get more help

- **Email**: [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).
- **In-app**: Settings → **Help & feedback**.
- **Community**: peer support in the relevant LifeWell community (note: peers, not official support).

For privacy-sensitive issues (account suspension review, data-deletion confirmation, GDPR requests), email is the only support channel — community visibility isn't appropriate for those.

## Where do I read next?

- [General FAQ](./general) — broad questions.
- [Privacy FAQ](./privacy) — data + privacy questions.
- [Health data FAQ](./health-data) — health-tracking specifics.
- [Billing FAQ](./billing) — payment / refund questions.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
