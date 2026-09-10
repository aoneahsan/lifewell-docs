---
title: The data model
description: How LifeWell stores a life — one table per idea, one store behind every tracker, and the three decisions that shape everything above them.
keywords: [lifewell data model, postgres schema, metric entries, tracker data, database design]
tags: [concepts, architecture]
sidebar_position: 2
---

# The data model

Postgres. One table per idea, not one per screen.

## One store behind every tracker

`/tracking`, `/health/water` and the dashboard quick action are **three views over one store**, not three
stores.

| Object | What it is |
|---|---|
| `metric_definitions` | The registry of what a tracker is — unit, how a day collapses, sane bounds, which chart, which area, a default target. A row with no owner is a system tracker; a row with an owner is one you defined |
| `metric_entries` | Every reading, in every area. The time series |
| `user_metric_settings` | Your target, visibility and ordering per tracker. No row means the defaults apply |
| `metric_daily` | A view: one row per person, tracker and day, collapsed by that tracker's own rule |

The 2.x app wrote the same number into several places and let them drift. Fixing that was the single
highest-value change in the rebuild.

## Three decisions worth knowing before you read anything else

### How a day collapses is not cosmetic

A tracker either **adds up** (water, steps, calories) or takes the **latest** (weight, blood pressure, sleep,
mood).

That one field decides both how a day is totalled *and* whether a second entry on the same day is a new
reading or a correction. It is enforced by an index in the database rather than by a service somebody could
bypass.

### The date comes from your device

A daily tracker's *today* is the **person's** today. Somebody in UTC+5 logging water at two in the morning is
on today; a date derived from a server clock files it under yesterday, and their day appears to reset at seven
in the evening.

Only the device knows the offset, so the client says which day it is. There is no default.

### The unit is stored on every entry

Switching from metric to imperial must not silently reinterpret twelve years of records. History keeps the
unit it was written with, and conversion happens when it is read.

## Everything else

Around that core sit the tables for each area — conditions and episodes, medications and doses, meals and
saved meals, cycle days, children and their logs, people and the edges between them, memories and albums,
notes and folders, calendar events and their checklists, chats and messages, community posts, professional
listings, blood donor listings, and the account's own rows.

The full list, with what each one holds and how it exports, is [The export file
format](../reference/export-format.md). That page is generated from the same registry the export itself
reads, so it cannot describe a table the file does not contain.

## Standing rows and dated rows

Every table is one or the other, and the distinction runs through the whole product:

- A **dated** row belongs to a day — a reading, a dose, a meal, an appointment.
- A **standing** row is what the dated rows *mean* — a medicine, a condition, a saved meal, a target.

Date filters apply to the first and never to the second, because a list of doses with no medicines attached
is not a smaller export, it is a broken one.

## What is deliberately not modelled

- **No scores, streaks, rankings or levels.** There is no column for them, which is a stronger statement than
  a screen not showing them.
- **No email column.** The identity provider owns your email address; a second copy would have two writers
  and go stale on the first change.
- **No location sharing scope.** The enum naming what a share may carry has three members — trackers,
  medications and trees — and none of them is location.
