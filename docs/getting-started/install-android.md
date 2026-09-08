---
title: Install on Android
description: LifeWell on Android is a Capacitor build of the same app. Get it from Google Play, sign in with Google, and the record is the same one the web build reads.
keywords: [lifewell android, google play, capacitor app, install lifewell android]
tags: [getting-started, android]
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
| Version this documentation describes | **3.0.0** |

A device below Android 9 cannot install it. That floor is a build setting rather than a policy, and it is
stated here because Play will simply hide the listing rather than explaining why.

## What the Android build adds

- **Local reminders.** A reminder you set is delivered by Android itself, so it arrives whether or not the
  app is open. See [Reminders](../features/reminders.md).
- **Native sign-in and session storage.** The session lives in the platform keystore rather than in browser
  storage.

## What it does not ask for

The app declares a deliberately small set of permissions, and each one is explained inside the app at
`/permissions`. Nothing asks for contacts, SMS or call logs, and the reminder engine never requests the
exact-alarm permission — a reminder is scheduled inexactly on purpose, because the exact one is reserved by
Google for alarm clocks and calendars.

The full picture, including what changed from 2.x, is on [Android](../platforms/android.md).

## Updating

Updates arrive through Google Play like any other app. There is no in-app update channel today — over-the-air
delivery is [planned and not wired](../platforms/android.md#over-the-air-updates).
