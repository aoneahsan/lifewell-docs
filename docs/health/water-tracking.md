---
title: Water tracking — quick-log hydration with daily goals
description: LifeWell water tracking logs hydration per container (glass, bottle, sports bottle, custom) toward a daily goal that can auto-calculate from weight, activity, climate, and pregnancy.
keywords: [lifewell water tracking, hydration log, daily water goal, water intake calculator, water reminder, ahsan mahmood]
sidebar_position: 3
---

# Water tracking

**Water tracking** in LifeWell is a one-tap hydration log — every entry records an amount (in millilitres) and an optional context (which container, what activity), and the page rolls those up into a daily total against your goal. The interface is built for speed: tap a glass-size preset, hit "Add", done. No forms, no friction.

This page covers the data model, the goal calculation, reminders, and what the chart and streak counters actually mean.

## What you can log

Each entry stores:

| Field | Type | Notes |
| --- | --- | --- |
| `amount` | number | Millilitres (default 250) |
| `containerType` | enum | `glass`, `cup`, `small_bottle`, `bottle`, `large_bottle`, `sports_bottle`, `custom` |
| `customContainerName` | string (optional) | Used when `containerType` is `custom` |
| `loggedAt` | timestamp | Defaults to "now" unless you back-date |
| `activity` | enum (optional) | `exercise`, `meal`, `wakeup`, `sleep`, `work`, `other` |
| `temperature` | enum (optional) | `cold`, `room`, `warm` |
| `withAdditive` | string (optional) | e.g. "lemon", "mint" |
| `notes` | string (optional) | Anything you want to remember |

Only `amount` and `loggedAt` are required. Most users tap a preset and skip every optional field.

## Container presets

The standard presets and their default volumes:

| Preset | Volume |
| --- | --- |
| Cup | 200 ml |
| Glass | 250 ml |
| Small bottle | 330 ml |
| Bottle | 500 ml |
| Large bottle | 750 ml |
| Sports bottle | 1000 ml |
| Custom | Any amount you specify |

Your **default** glass size for the one-tap "Add" button is configurable under [Preferences → Glass size](/docs/profile-and-settings/preferences#glass-size-and-serving-defaults). Most users pick 250 ml or 500 ml and rarely touch it again.

## Daily goal

The daily goal is a millilitre target you're aiming for each calendar day (resetting at midnight in your selected time zone — see [Preferences → Time zone](/docs/profile-and-settings/preferences#time-zone)).

You can:

- **Set a fixed goal** — default is **2000 ml**, choose anywhere from 500 to 5000 ml.
- **Let it auto-calculate** from your profile inputs.

### Auto-calculation formula

When you turn on auto-calculation, the goal is computed in millilitres from your inputs:

```
base = weightKg × 30                         # ~30 ml per kg
base × activityMultiplier                    # see table below
base × climateMultiplier                     # see table below
+ 300 ml if "active phase" is on
+ 700 ml if "breastfeeding" is on
round down to the nearest 100 ml
```

| Activity level | Multiplier |
| --- | --- |
| Sedentary | 1.00 |
| Light | 1.10 |
| Moderate | 1.20 |
| Active | 1.30 |
| Very active | 1.50 |

| Climate | Multiplier |
| --- | --- |
| Cold | 0.95 |
| Temperate | 1.00 |
| Hot | 1.20 |

For example, a 70-kg moderately active person in a temperate climate gets `70 × 30 × 1.20 = 2520` → rounded to **2500 ml**. The same person breastfeeding in a hot climate gets `70 × 30 × 1.20 × 1.20 + 700 = 3724` → **3700 ml**.

This is a heuristic, not a clinical recommendation. The Institute of Medicine's general adequate-intake reference is ~2.7 L/day for women and ~3.7 L/day for men *including water from food*, with significant inter-individual variation. The LifeWell formula tries to approximate beverage-water target. Adjust to taste.

### Manual override

You can override the calculated goal with a fixed `customAdjustmentMl` (e.g. "always add 500 ml on training days"). Or just turn auto-calc off and pick a goal manually.

## The progress ring and quick-add

The water page's centrepiece is a progress ring that fills as you log entries against the goal. To its right are three quick-add buttons — 250 / 500 / 750 — plus a custom-amount field. Pressing one of them sets the amount; the **Add** button below logs it.

The page also exposes the most recent 10 entries in a scrollable list, each with its amount, unit, and timestamp. Tap an entry to edit or delete it.

## Reminders

Water reminders are off by default. To turn them on, go to [Reminders](/docs/profile-and-settings/reminders) → **Water** and pick:

- **Start time** (default 07:00) — earliest ping of the day.
- **End time** (default 21:00) — latest ping of the day.
- **Interval** (default 60 minutes) — how often during the window.

Reminders fire as push notifications on mobile (if installed), and as in-app banners on web. Snoozed reminders re-fire after the snooze duration (default 15 min).

If you have the [LifeWell browser extension](/docs/extension/overview) installed, water reminders can route to the extension's wellness-reminder system instead of the web tab — handy for users who keep many tabs open.

## Streaks and achievements

Hitting your daily goal for two or more consecutive days starts a **streak**. The streak counter lives in the page header and on the dashboard. Missing a day breaks the streak — there is no streak-freeze yet (planned).

Streak milestones (7-day, 30-day, 100-day) trigger achievement unlocks under [Achievements](/docs/profile-and-settings/achievements). These are cosmetic — they don't unlock features.

## Hydration insights

For Pro accounts (when monetisation lands), the **Insights** subview computes weekly / monthly / yearly aggregates: average daily intake, best day, most-active hour for logging, longest streak. The free tier shows the daily ring and a 7-day mini-chart only.

## Honest framing

Water tracking in LifeWell is:

- A behaviour-shaping tool, not a clinical recommendation. The "30 ml per kg" formula is a useful starting point, not a medical prescription.
- Beverage-focused. Water from food (which the Institute of Medicine counts) is not estimated here.
- Self-reported. Mis-logged amounts produce wrong totals.
- Browser-blind. If you sip from a bottle at your desk and forget to tap, LifeWell will never know.

If you have a medical condition that limits or requires a specific fluid intake (kidney disease, heart failure, etc.), follow your clinician's guidance — not LifeWell's default goal.

## Frequently asked

**My phone is offline at the gym — will my logs save?**
Yes. Entries write to local Capacitor Preferences first and sync to Firestore as soon as connectivity returns. See [Offline-first design](/docs/concepts/offline-first-design).

**Can I log non-water (coffee, tea, juice)?**
Yes — set `containerType` to `custom` and put the beverage name in `customContainerName`. There's no separate caffeine or sugar tracking here; this surface counts hydration volume.

**My streak broke because I was travelling and the timezone shifted.**
Streaks compute against your selected time zone, not your device's. If you're hopping zones, set [Preferences → Time zone](/docs/profile-and-settings/preferences#time-zone) to a fixed home zone so days roll over consistently.

**Can I see my historical water entries on a calendar?**
The insights tab includes a calendar heatmap (per-day fill levels) on the planned Pro tier. The free tier shows the 7-day mini-chart.

**Does the browser extension count clicks I make on the web app?**
No — the extension has its own quick-log button that writes to the same Firestore collection. Both surfaces show the same total.

## Where to read next

- [Vitals](./vitals) — log blood pressure, blood sugar, weight, BMI.
- [Reminders](/docs/profile-and-settings/reminders) — set up the water reminder schedule.
- [Preferences](/docs/profile-and-settings/preferences) — change your default glass size and goal.
- [Achievements](/docs/profile-and-settings/achievements) — see your streak milestones.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
