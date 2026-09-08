---
title: What changed in 3.0.0
description: LifeWell 3.0.0 is a full rebuild on a new backend. What is new, what was removed, what was corrected, and the reset that comes with it.
keywords: [lifewell 3.0.0, changelog, release notes, what is new]
tags: [about, changelog]
sidebar_position: 2
---

# What changed in 3.0.0

A full rebuild of the 2.x app. Same product, rewritten, on a different backend.

:::warning[3.0.0 resets your record]
The backend was replaced with **no migration path**. The record held by 2.x is not carried across. This was a
deliberate decision taken while the app had no real users, and it is stated plainly because a deliberate reset
and a catastrophic bug look identical from the inside.

[Export from 2.x before updating](../your-data/export.md) if you have anything in it.
:::

## The backend changed

From the document database the 2.x app used, to Postgres.

The reason is not fashion. The 2.x app exhausted a free daily read quota and took itself down for a day for
every real user until it reset. And sharing part of a record with one named person is a row-level question,
which Postgres answers in the database rather than in a rules file that has to stay in step with every query.

The consequences you can feel: no read quota to exhaust, every list capped in the database, and a share model
that is enforced where the data is.

## One store behind every tracker

`/tracking`, `/health/water` and the dashboard quick action were three places that wrote the same number and
drifted. They are now three views over one store. A glass logged anywhere appears everywhere, immediately.

## New in this release

- **[Calendar and appointments](../features/calendar-and-appointments.md)**, with a checklist on each
  appointment.
- **[Reminders](../features/reminders.md)** delivered by Android itself, with three master switches and
  device-level quiet hours.
- **[Community and chats](../features/community-and-chats.md)** — groups, posts, replies, messaging, blocking,
  and a moderation route that never tells an author who reported them.
- **[Professionals](../features/professionals.md)**, with a verification that claims exactly one thing.
- **[Blood donation](../features/blood-donation.md)**, with a contact release given once and withdrawable.
- **[The shopping list](../features/shopping-list.md)**, shareable as plain text.
- **[Six area switches](../domains/overview.md#switching-an-area-off)** — turn an area off without deleting
  anything.
- **[Gender-aware screens](../getting-started/first-run.md#the-one-answer-that-changes-what-you-see)** — one
  answer decides whether six life-stage screens are listed.
- **[Export in three formats](../your-data/export.md)**, built on your device, plus scheduled exports on a paid
  plan.
- **[One appearance panel](../concepts/appearance.md)** with nine settings, applied before the first paint.
- **[An admin panel](../admin.md)** of ten screens over an audit log nobody can write to directly.
- **[A referral programme](../features/referrals.md)** — the server half.

## Removed

- **iOS.** Removed 2026-07-16, because there is no Apple Developer account. See [iOS](../platforms/ios.md).
- **The browser extension.** Out of scope for this release, and not published. See
  [Browser extension](../platforms/browser-extension.md).
- **Fabricated popularity figures on `/health-tools`.** The 2.x page showed search-volume numbers beside each
  tool that had no source and were used to order the list. They were invented, and they are gone.
- **Calculators that duplicate ZTools.** Ten redirect out; four stayed because ZTools does not have them. See
  [Tools](../features/tools.md).

## Corrections to this documentation

Three statements in the 2.x documentation were wrong about the product, and are corrected here rather than
quietly edited:

| It said | The truth |
|---|---|
| `/feed` is a social feed | It is the **public readable blog feed**. There is no social feed in LifeWell. [Addresses](../reference/addresses.md) |
| Firebase Analytics is banned and replaced by Sentry and Amplitude | Google Analytics 4 **is** the Firebase analytics property, and it runs alongside Amplitude, Clarity and Sentry. [Third-party services](../reference/integrations.md) |
| Over-the-air updates are not yet integrated | Still true, and now stated with what actually exists: environment variables and a flag, no package, no service. [Android](../platforms/android.md#over-the-air-updates) |

The rest of the 2.x documentation described the old document data model, an iPhone app, a browser extension
and a component library the rebuild does not use. It was deleted rather than patched.

## Not built yet

Stated here in one place so nothing on this site has to be read hopefully:

| | |
|---|---|
| Push notifications | Subscription wired, sending service not written |
| Global search | The query exists; the page is a declared placeholder |
| Referral member screen | The server half is live; there is no screen showing your code |
| Delete one area | The transaction exists; there is no screen opening it |
| Delete your account, in-app | The button is wired; the server function is not deployed. Use [`/delete-account`](https://lifewell.aoneahsan.com/delete-account) |
| Google Play Billing | Built and tested against recorded responses; not configured and switched off |
| Over-the-air updates | Planned |
