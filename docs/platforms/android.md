---
title: Android
description: LifeWell on Android — minimum Android 9, permissions, local reminders, signed updates, and features awaiting a store release.
keywords: [lifewell android, android permissions, contacts permission, minsdk 28, capacitor android, play store]
tags: [platforms, android]
sidebar_position: 2
---

# Android

The same application as the web build, wrapped by Capacitor. Same account, same record.

| | |
|---|---|
| Application id | `com.aoneahsan.lifewell` — permanent |
| Minimum version | **Android 9 (API 28)** |
| Current source version | **3.30.0**; check Google Play for the version available to your device |
| Distribution | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[The minimum is Android 9, not Android 7]
An earlier version of this documentation said Android 7.0. That was wrong — the build's minimum SDK is 28,
which is Android 9. A device below it cannot install the app, and Play simply hides the listing rather than
explaining why.
:::

## Permissions

The app explains its declared permissions at
[`/permissions`](https://lifewell.aoneahsan.com/permissions). The first five are asked for when you use
the feature and can be refused — the two contacts rows arrive as one prompt; the rest are granted by Android
at install.

| Permission | Why |
|---|---|
| Camera | Taking a photo straight into your memories or your record. Asked the first time you tap *Take a photo*; refuse, and you can still pick from your device |
| Microphone | Recording in Speak it. Asked when you press record; refuse, and you can still type. LifeWell does not listen in the background |
| Location (approximate) | Your position, while the professionals page is open, to sort by distance. Asked when you tap *Use my position*, and never stored |
| Contacts (reading) | The one contact you pick when you press **Contacts** beside a phone number — its name and numbers — so the number you choose goes into the field. Asked when you press Contacts, never at start |
| Contacts (changing) | Nothing. Android grants reading and changing contacts as one permission; LifeWell only reads, and never adds, changes or removes a contact |
| Notifications | To deliver a reminder you asked for |
| Internet | To sync your record |
| Network state | To know whether it can, and to say so instead of failing quietly |
| Run at startup | So reminders survive a restart |
| Wake lock | So a scheduled reminder can be delivered |
| Advertising id | Declared, and see below |

Say no to contacts and you type the number instead — every phone field works either way. Your address book
is never uploaded, searched or stored.

Nothing asks for SMS, call logs, background location or broad access to your photos and
files.

### Two that are actively removed

The notification library declares `SCHEDULE_EXACT_ALARM` and `USE_EXACT_ALARM` in its own manifest. LifeWell
**strips both** from the build.

Android reserves exact alarms for alarm clocks and calendars. Keeping them would mean asking for a permission
Google does not grant an app of this kind, and on Android 12 and later a scheduling call without it opens the
system *Alarms & reminders* settings screen instead of scheduling anything. So every reminder is scheduled
inexactly, and may land a few minutes either side of its time.

### The advertising id

It is declared in the manifest. **There is no advertising network in the app** and no third-party ad code —
the declaration exists because the store requires the answer to be consistent with what the build could do,
not because anything is being served to you.

## What the Android build adds

- **Local reminders**, delivered by Android itself, so they arrive with the app closed. See
  [Reminders](../features/reminders.md).
- **Native sign-in**, with the session in the platform keystore rather than in web storage.

## Push and Play Billing

### Push notifications

If you turn on push and the device subscription becomes active, LifeWell can receive a broadcast from the
team through OneSignal. The app does not automatically send push for account events. Push is separate from
local reminders, which Android schedules on the device. See [Reminders](../features/reminders.md#push-notifications).

### Google Play Billing

The purchase flow, server-side verification and Google's renewal notifications are written and compiled, and
the mapping from a Google response to an entitlement is tested against recorded responses. **No real purchase
has been made**, the service account is not configured, and the platform switch that enables the Play path
defaults to off. Billing can only be exercised in a Play-signed build installed from a track, so nothing short
of an internal test can prove it. See [Plans](../plans.md#on-android).

## Over-the-air updates

LifeWell integrates signed Native Update bundles for compatible Android installs. The app verifies a bundle
before applying it and can keep an applied update after a cold start. The public signing key is compiled into
the native build, so an older install without that key cannot gain OTA capability later. Native code and
permissions still arrive through Google Play. The release record in the app also tells you when a newer
version requires an update.

## iOS

[Removed on 2026-07-16.](./ios.md)
