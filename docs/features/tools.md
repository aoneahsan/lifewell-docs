---
title: Tools and calculators
description: Which calculators live in LifeWell, which live on ZTools, and why the tools directory is mostly a set of links rather than re-implementations.
keywords: [lifewell tools, health calculators, bmi calculator, interval timer, child growth]
tags: [features, tools]
sidebar_position: 11
---

# Tools and calculators

[`/tools`](https://lifewell.aoneahsan.com/tools) is a directory. Most of what it lists is on
[ZTools](https://ztools.zaions.com), a separate site of stateless calculators, and the card takes you there.

That is deliberate. A calculator that already exists somewhere maintained does not get written a second time
here.

## What runs inside LifeWell

Four calculators stayed, because ZTools does not have them:

| Tool | Address |
|---|---|
| Waist-to-hip ratio | `/tools/waist-hip-ratio` |
| Child growth | `/tools/child-growth` |
| Weight gain | `/tools/wellness-weight-gain` |
| Interval timer | `/tools/interval-timer` |

Plus [`/baby-names`](https://lifewell.aoneahsan.com/baby-names), which is a browser rather than a calculator.

All five are public. They need no account, and they store nothing about you.

## What moved out

BMI, TDEE, BMR, macros, protein, body fat, ideal weight, heart-rate zones, age and the workout timer all
redirect to their ZTools equivalents. The old LifeWell addresses still work — they return a permanent redirect
rather than a 404, because people linked to them.

A handful of others redirect **inwards** instead, to the screen that replaced them:
`/tools/calorie-counter` → `/health/calories`, `/tools/fasting-tracker` → `/health/fasting`,
`/tools/sleep-tracker` → `/health/sleep`, `/tools/step-counter` → `/health/steps`.

The complete list is [Addresses that do not move](../reference/addresses.md#redirects).

## `/health-tools`

[`/health-tools`](https://lifewell.aoneahsan.com/health-tools) is an index of the health-related calculators.

:::note[The popularity figures are gone]
The 2.x version of this page listed a search-volume figure beside each tool — numbers like *3.2M* that had no
source and were used to order the list. They were invented. They are not in 3.0.0, and the page is ordered by
something real instead.
:::

## Timers inside the app

`/health/workout-timer` and the guided sessions under [Mind](../domains/mind.md#guided-sessions) are part of
the app rather than the tools directory, because they write to your record and the tools do not.
