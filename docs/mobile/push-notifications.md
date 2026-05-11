---
title: Push notifications — OneSignal, FCM, APNs, local notifications
description: LifeWell push notifications use OneSignal (free tier) on top of Firebase Cloud Messaging (Android) and APNs (iOS), with local notifications for offline-safe scheduling.
keywords: [push notifications, onesignal, fcm, apns, local notifications, capacitor, ahsan mahmood]
sidebar_position: 4
---

# Push notifications

LifeWell mobile delivers reminders and event notifications via **push** (server-triggered, works even when the app is closed) and **local notifications** (device-scheduled, no server round-trip needed). The push layer uses **OneSignal** (free tier) on top of Firebase Cloud Messaging (FCM) for Android and Apple Push Notification service (APNs) for iOS. Local notifications use Capacitor's local-notifications plugin which wraps `AlarmManager` (Android) and `UNUserNotificationCenter` (iOS).

This page explains how each layer works, when each is used, what permissions are needed, and how to troubleshoot.

## Push vs local notifications

| Type | Origin | Use |
| --- | --- | --- |
| **Push** | LifeWell sends from a server (via OneSignal) | New chat message, partner action, app-wide announcement, content updates |
| **Local** | Scheduled on the device | Recurring reminders (water, medications, sleep), calendar events |

Push notifications are most useful for **unexpected events** (someone sent you a chat); local notifications are most useful for **scheduled events** you already know about (your 6 PM medication dose).

LifeWell uses both. The reminder system (water, medications, etc.) is local-notification-driven so it works without internet; push is for cross-device coordination.

## OneSignal architecture

OneSignal sits between LifeWell's backend logic (Cloud Functions / Cloudflare Worker) and the platform push services:

```
LifeWell event happens
  ↓
LifeWell backend posts to OneSignal API
  ↓
OneSignal routes via FCM (Android) or APNs (iOS)
  ↓
Push arrives on user's device
  ↓
Capacitor push-notifications plugin handles it
  ↓
App receives notification (foreground) OR OS shows it (background / closed)
```

OneSignal's free tier covers up to a generous monthly push volume; LifeWell's traffic fits comfortably within it.

## Why OneSignal vs direct FCM / APNs

Direct FCM + APNs integration requires:

- Separate iOS push certificates (annual rotation, complex).
- FCM token management per device.
- Topic-based routing logic.
- Cross-platform sending API.

OneSignal abstracts all that into one SDK + API. The trade-off: an extra hop and dependency on a third-party. For LifeWell's volume and complexity, the abstraction is worth it.

## Permission flow

### Android

- API < 33: Notifications are auto-granted; no runtime prompt.
- API 33+ (Android 13+): `POST_NOTIFICATIONS` permission must be requested at runtime. LifeWell prompts on first reminder setup.

### iOS

- Always requires explicit permission. LifeWell prompts on first reminder setup with a clear "LifeWell wants to send you reminders for water, medications, and updates" message.

### What if denied

If the user declines:

- Push notifications won't fire.
- Local notifications won't fire either.
- Reminders silently track schedules but don't surface visible alerts.
- The app shows a banner: "Notifications are disabled. Enable in Settings to get reminders."

You can re-enable from the OS Settings → LifeWell → Notifications at any time.

## Notification payload structure

Each notification carries:

| Field | Notes |
| --- | --- |
| `title` | Short headline ("Time to log water") |
| `body` | Brief description |
| `data` | Custom payload — for deep linking |
| `actions` | Action buttons (e.g. "Log it", "Snooze") |
| `channel` | Android: which notification channel (medication, wellness, etc.) |
| `sound` | Optional sound name |
| `image` | Optional image URL |

The `data` field includes:

- `target` — which page to open on tap (e.g. `/health/water`).
- `reminderId` — which reminder fired.
- `quickAction` — what the primary action does.

This drives the deep-link behaviour described in [deep linking](./push-notifications).

## Deep linking from notifications

Tapping a notification opens the relevant page:

- **Water reminder** → `/health/water`
- **Medication reminder** → `/health/medications`
- **Chat notification** → `/chats/[id]`
- **Memory reminder** → `/memories/[id]`
- **Calendar event** → `/calendar/[eventId]`

The Capacitor deep-link plugin handles the URL routing into the React app, which then opens the right page.

## Notification channels (Android)

LifeWell uses Android notification channels (introduced in API 26) for per-category control:

- **Wellness reminders** — water, posture, breathing (low-to-default importance).
- **Health & medication** — medication doses (high importance).
- **Mental health** — mood prompts (default importance).
- **Calendar events** — upcoming events (default importance).
- **Baby reminders** — feeding, diaper, sleep (high importance).
- **Marketing** — app updates, promos (low importance; off by default).
- **System** — account events, security (low importance).

Each channel has its own user-tunable sound, vibration, and importance via Android's "Notifications" settings.

## Battery + reliability

For consistent delivery on aggressive battery-optimisation OEMs (Xiaomi, Oppo, OnePlus, Huawei):

- LifeWell prompts to exempt itself from battery optimisation on first reminder setup.
- The exemption isn't permission-required by OS but is essential for time-critical reminders (medication).
- For users who decline, the app shows a banner explaining the trade-off.

Stock Android (Pixel, vanilla AOSP) is more reliable out of the box; OEM skins vary.

## Local notification specifics

For scheduled reminders (water every 60 min, medication at 09:00):

- Capacitor's local-notifications plugin schedules via `AlarmManager` (Android) / `UNUserNotificationCenter` (iOS).
- Scheduled alarms survive device reboot via `RECEIVE_BOOT_COMPLETED` permission (Android).
- iOS scheduled notifications have a 64-notification limit per app at any one time — LifeWell stays under by rolling schedules forward (only schedule the next 24 hours of notifications, refresh daily).

## Push token management

When you sign in to LifeWell on a device:

1. The app requests a push token from OneSignal.
2. The token is stored in your account's Firestore document under that device.
3. Push targeting uses the token; logging out invalidates it.

If you sign in on multiple devices, each gets a token; pushes can target one, several, or all.

## Privacy posture

- Push tokens are scoped per-device.
- OneSignal stores tokens but not the message content (LifeWell sends content via its own backend).
- Notification text doesn't contain sensitive data (no "Your BP is X" — just "Time to log BP").
- Analytics within OneSignal (delivery rates) don't profile individual users for ads.

## Troubleshooting

| Issue | Cause | Fix |
| --- | --- | --- |
| No notifications at all | OS permission denied | Settings → LifeWell → Notifications → enable |
| Some channels missing | Channel disabled | Notifications → tap channel → enable |
| Reminders late | Battery optimisation killing alarms | Exempt LifeWell in battery settings |
| Push works, local doesn't | Local-notification permission separate (rare) | Re-grant via OS |
| Notifications duplicate | Multiple devices signed in | Sign out of devices you don't use |
| Tap opens wrong page | Deep link payload corrupted | Re-install app to refresh token registration |

## What this is not

- **Not E2E encrypted.** Notification content goes through FCM / APNs / OneSignal in plain. Treat content like email — private to platform, not E2EE.
- **Not delivery-guaranteed.** Platforms occasionally drop pushes (rare but real). Critical notifications should be redundant: local notification + push.
- **Not for marketing.** LifeWell doesn't push promotional content. Channel is off by default and never used without user opt-in.

## Frequently asked

**Why use OneSignal instead of building our own push?**
Reliability + cross-platform abstraction + free tier. Building direct FCM + APNs takes weeks of engineering and certificate management. OneSignal is a few SDK calls.

**Can I disable notifications entirely?**
Yes — Settings → LifeWell → Notifications → toggle off. The app still works without them; reminders just won't surface.

**Why isn't my reminder firing exactly on time?**
Local notifications have small variance (~1-30 seconds). For medication doses where precision matters, the variance is acceptable. For "log water" reminders, completely irrelevant.

**Will notifications still fire if I'm in Do Not Disturb mode?**
Per the OS's DND rules. LifeWell respects DND; only your manually-set "always fire" reminders bypass.

**How does push work in the browser (web)?**
The web app uses the browser's native Notifications API (requires tab open or permission granted). Service-worker push is feasible but not currently implemented for web; the focus is mobile and extension.

## Where to read next

- [Reminders (main)](/docs/profile-and-settings/reminders) — the reminder system the push layer serves.
- [Offline usage](./offline-usage) — local notifications work offline.
- [Android](./android) — Android-specific notification setup.
- [iOS](./ios) — iOS APNs setup.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
