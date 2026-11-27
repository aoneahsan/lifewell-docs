---
id: intro
title: LifeWell
description: LifeWell keeps the people and moments of your life in one place — your family and friends, what you know about them, your memories and your plans, with wellbeing around them. Web and Android, kept by you.
keywords: [lifewell, life companion, family tree, people, memories, family and friends, android app]
topics: [overview, getting-started]
slug: /intro
sidebar_position: 1
---

# LifeWell

**Keep the people and moments of your life in one place — and everything around them.**

LifeWell keeps the people and moments of your life in one place. You start with yourself, add the people who
matter, keep what you know about them and the moments you share. Everything else LifeWell holds is there to
help your life go well.

LifeWell is not a health tracker. Health is one area around the people in your life, not the point of it.

## The seven areas, and you in the middle

| Area | What lives there |
|---|---|
| [People](./domains/people.md) | Family and work, the family tree, the people you connect with, groups and chats |
| [Memories](./domains/memories.md) | Photos, albums, a scrapbook, the captions that make them readable |
| [Everyday](./domains/everyday.md) | Calendar, notes, saved places, reminders, the shopping list |
| [Sharing](./domains/sharing.md) | What you have let other people read — links, partner sharing, the replies that come back |
| [Health](./domains/health.md) | Vitals, medication, food, movement, sleep, conditions, lab results |
| [Mind](./domains/mind.md) | A journal, guided sessions, mood, gratitude, breathing |
| [Life stages](./domains/stages.md) | Cycle, fertility, pregnancy, menopause, a child's early years |

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
| Browser extension | [Built for Chrome and Firefox](./platforms/browser-extension.md), not yet in either store |

## What is true of your record

- **A small set of quick entries can wait on your device.** If you enable offline logging, supported readings,
  cycle-day changes and symptom episodes are sent after the connection returns. Other pages pause when offline.
- **Photos and files go to your own Google Drive**, under a scope that only reaches the files LifeWell
  created. See [Where your record lives](./your-data/where-it-lives.md).
- **You can export a selected date range** — JSON or CSV record data, or a PDF summary, from inside the app.
  Each table is capped at 5,000 rows per export. The format is documented
  [field by field](./reference/export-format.md).
- **You can delete the live account, or one area of it**, and the app says which rows went. Encrypted manual
  backups may retain an earlier copy until rotation, as the privacy page explains.

## Version

This documentation covers the **LifeWell 3.x** app, rebuilt from the shipped 2.x version on a new backend.

:::warning[The 2.x to 3.0.0 upgrade reset records]
The backend was replaced with no migration path. A direct upgrade from 2.x to 3.0.0 did not carry the older
record across. This decision was taken while the app had no real users, and it remains documented here because
a deliberate reset and a serious failure can look the same to someone opening the app.
:::

## Where to go next

- Install it: [web](./getting-started/install-web.md) · [Android](./getting-started/install-android.md)
- Then: [the first run](./getting-started/first-run.md), [a short tour](./getting-started/tour.md) and
  [the page tour and the walkthrough](./getting-started/tours-and-walkthrough.md)
- If you are here about your data: [export](./your-data/export.md) ·
  [delete](./your-data/delete.md) · [the export file format](./reference/export-format.md)
- To connect LifeWell to a calendar app, a script or an AI assistant: [Developers](./developers/index.md)
