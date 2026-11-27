---
title: Install on Android
description: LifeWell on Android is a Capacitor build of the same app. Get it from Google Play, sign in with Google, and the record is the same one the web build reads.
keywords: [lifewell android, google play, capacitor app, install lifewell android]
topics: [getting-started, android]
sidebar_position: 2
---

# Install on Android

The Android app is the same application as the web build, wrapped by Capacitor. It reads the same record and
signs in against the same account, so what you write on the phone is on the laptop and the other way round.

## Getting it

[LifeWell on Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell)

| | |
|---|---|
| Application id | `com.aoneahsan.lifewell` |
| Minimum Android version | **Android 9 (API 28)** |
| Version series this documentation covers | **3.x** |

A device below Android 9 cannot install it. That floor is a build setting rather than a policy, and it is
stated here because Play will simply hide the listing rather than explaining why.

## What the Android build adds

- **Supported device reminders.** Event and wellness reminders can arrive through Android when device
  notifications are allowed, including while the app is closed. Medicine due-dose prompts stay in the LifeWell
  inbox. See [Reminders](../features/reminders.md).
- **Native sign-in and session storage.** The session lives in the platform keystore rather than in browser
  storage.

## What it does not ask for

The app declares a deliberately small set of permissions, and each one is explained inside the app at
`/permissions`. Nothing asks for SMS or call logs, contacts are asked for only when you press Contacts beside a phone
number (see the Android permissions table), and the reminder engine never requests the
exact-alarm permission — a reminder is scheduled inexactly on purpose, because the exact one is reserved by
Google for alarm clocks and calendars.

The full picture, including what changed from 2.x, is on [Android](../platforms/android.md).

## Updating

Google Play supplies native app updates. Compatible installs can also receive signed Native Update bundles
for web assets. The in-app release notice tells you when a newer version requires an update. See
[Over-the-air updates](../platforms/android.md#over-the-air-updates).
