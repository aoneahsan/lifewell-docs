---
id: intro
title: LifeWell
description: LifeWell is one record for a whole life — health, mind, life stages, people, memories and the everyday week. Web and Android, built by one person, kept by you.
keywords: [lifewell, life companion, personal record, health, memories, family, android app, ahsan mahmood]
tags: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**Your whole life, in one place.**

Health, family, work, memories, and the everyday things that hold them together. One record, kept by you.

LifeWell is not a health tracker. Health is its largest area — more of the app sits under `/health` than
under anything else — but the largest single folder of screens is the one about people, and the point of the
product is that none of the seven areas is the whole of you.

## The seven areas, and you in the middle

| Area | What lives there |
|---|---|
| [Health](./domains/health.md) | Vitals, medication, food, movement, sleep, conditions, lab results |
| [Mind](./domains/mind.md) | A journal, guided sessions, mood, gratitude, breathing |
| [Life stages](./domains/stages.md) | Cycle, fertility, pregnancy, menopause, a child's early years |
| [People](./domains/people.md) | Family and work trees, groups, chats |
| [Memories](./domains/memories.md) | Photos, albums, a scrapbook, the captions that make them readable |
| [Everyday](./domains/everyday.md) | Calendar, notes, saved places, reminders, the shopping list |
| [Sharing](./domains/sharing.md) | What you have let other people read — links, partner sharing, the replies that come back |

**You** is not one of the seven. It is the account — your profile, your plan, your settings, and the controls
over everything above.

Six of the seven can be [switched off](./domains/overview.md#switching-an-area-off). Off means quiet: the
menu stops listing it, anything you recorded is kept, and any page still opens if you go to it directly.
Sharing has no switch, because what you have let other people read has to stay visible to you.

## What it runs on

| | |
|---|---|
| Web | Any current browser, at [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) |
| Android | A Capacitor build of the same app — see [Android](./platforms/android.md) |
| iOS | [Removed on 2026-07-16](./platforms/ios.md). There is no Apple Developer account behind it |
| Browser extension | [Planned](./platforms/browser-extension.md), not built |

## What is true of your record

- **It is written on your device first** and syncs when there is a connection. A tunnel is not a reason to
  lose a day.
- **Photos and files go to your own Google Drive**, under a scope that only reaches the files LifeWell
  created. See [Where your record lives](./your-data/where-it-lives.md).
- **You can take all of it out** — JSON, CSV or PDF, from inside the app. The file format is documented
  [field by field](./reference/export-format.md).
- **You can delete all of it, or one area of it**, and the app says which rows went.

## Version

This documentation describes **LifeWell 3.0.0**, a full rebuild of the shipped 2.x app on a new backend.

:::warning[3.0.0 resets your data]
The backend was replaced with no migration path. When 3.0.0 reaches your device, the record held by 2.x is
not carried across. This was a deliberate decision taken while the app had no real users, and it is stated
here because a deliberate reset and a catastrophic bug look identical from the inside.
:::

## Where to go next

- Install it: [web](./getting-started/install-web.md) · [Android](./getting-started/install-android.md)
- Then: [the first run](./getting-started/first-run.md) and [a short tour](./getting-started/tour.md)
- If you are here about your data: [export](./your-data/export.md) ·
  [delete](./your-data/delete.md) · [the export file format](./reference/export-format.md)
