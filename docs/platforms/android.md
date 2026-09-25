---
title: Android
description: LifeWell on Android — minimum Android 9, every permission the app declares and why each one is there, local reminders, and the two things that are built but not switched on.
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
| This release | **3.0.0** |
| Distribution | [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell) |

:::note[The minimum is Android 9, not Android 7]
An earlier version of this documentation said Android 7.0. That was wrong — the build's minimum SDK is 28,
which is Android 9. A device below it cannot install the app, and Play simply hides the listing rather than
explaining why.
:::

## Permissions

Ten, and the app explains each one at
[`/permissions`](https://lifewell.aoneahsan.com/permissions). The first five are asked for when you use
the feature and can be refused — the two contacts rows arrive as one prompt; the rest are granted by Android
at install.

| Permission | Why |
|---|---|
| Camera | Taking a photo straight into your memories or your record. Asked the first time you tap *Take a photo*; refuse, and you can still pick from your device |
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

Nothing asks for SMS, call logs, background location, the microphone or broad access to your photos and
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

## Two things that are built and not switched on

### Push notifications

The subscription plumbing and the application identifier are in place. The service that uses them is not
written, so **no push notification arrives yet, on any platform**. Reminders are unaffected — they are
scheduled by your own device.

### Google Play Billing

The purchase flow, server-side verification and Google's renewal notifications are written and compiled, and
the mapping from a Google response to an entitlement is tested against recorded responses. **No real purchase
has been made**, the service account is not configured, and the platform switch that enables the Play path
defaults to off. Billing can only be exercised in a Play-signed build installed from a track, so nothing short
of an internal test can prove it. See [Plans](../plans.md#on-android).

## Over-the-air updates

**Planned, not integrated.** The intent is that a web-layer fix can reach devices without a store release.

Today there is no update package in the build, no update service in the app, and no bundle is ever fetched or
applied. Environment variables are reserved for it and a feature flag reads them, and that is the whole of
what exists. Updates arrive through Google Play like any other app.

## iOS

[Removed on 2026-07-16.](./ios.md)
