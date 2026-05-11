---
title: Step counter — manual step log with daily goal
description: LifeWell step counter is a manual step-count log toward a daily goal (default 8000). No pedometer integration — you type the count from your phone or watch.
keywords: [step counter, daily steps log, 10000 steps, walking tracker, manual step entry, ahsan mahmood]
sidebar_position: 10
---

# Step counter

The **step counter** in LifeWell is a manual step-count log. Each day you type in the count from whatever source you use — phone health app, smartwatch face, pedometer — and the page tracks your progress against a daily target (default 8000, configurable 1000–30000). The page shows today's total, the weekly average, the current streak of days at or above your target, and a 30-day trend chart.

**LifeWell does not read your phone's step sensor.** This is a deliberate design choice: integrating with Apple Health, Google Fit, Samsung Health, or Capacitor's motion plugin adds significant complexity, permissions overhead, and platform fragmentation for a feature that — for most users — just needs to capture a number once a day.

## How to use it

1. Open your step source — phone Health app, smartwatch, Fitbit, or wherever your steps are counted.
2. Note today's total.
3. Open the step counter and type it in.
4. Save.

Replace your previous entry for the day if you log again later — the page keeps the latest entry for each calendar day, not multiple per day.

## Inputs

| Field | Range | Notes |
| --- | --- | --- |
| Step count | 1–100,000 | Validates to a reasonable upper bound (the world record for most steps in 24 hours is around 195,000, but those are outlier feats) |
| Date | Defaults to today; back-dateable | Useful if you forgot to log a day |
| Notes | Optional | Free text — workout type, weather, route |

## Daily target

The default target is **8000 steps**, configurable from 1000 to 30000 under [Preferences → Daily targets](/docs/profile-and-settings/preferences#daily-targets). The often-cited 10,000-step figure originated from a 1960s Japanese marketing campaign (the *manpo-kei* pedometer, literally "10,000-step meter"), not from peer-reviewed health research.

More recent studies have a more nuanced view:

- **Lee et al., *JAMA Internal Medicine* 2019** — studied women aged 70+ and found mortality risk decreased substantially from ~2700 to ~7500 steps/day, with diminishing returns above that.
- **Paluch et al., *The Lancet Public Health* 2022** — meta-analysis showing benefits across populations starting at ~3800 steps/day, with optimal range ~6000–8000 for older adults and 8000–10000 for younger adults.

The 8000 default is in line with this research. Pick whatever target motivates you and don't get fixated on a single round number.

## Output

- **Today's total** (your latest entry for the day).
- **Daily progress** vs your target.
- **Weekly average** (last 7 entries).
- **Streak** of consecutive days at or above target.
- **30-day trend chart**.

## What this tool is and isn't

- **Is** a manual log of your daily step count plus a simple goal-tracking layer.
- **Is** a way to bring step data from any source into LifeWell's wellness aggregate (the activity dashboard and wellness score).
- **Is not** an automatic pedometer.
- **Is not** a step-accuracy reference. Step counts from different sources vary — phones tend to under-count (they miss steps when in a pocket vs. swinging arm), wrist devices vary by gait and position. Pick one source and stick with it for consistent comparisons.

## Reminders

A daily evening reminder ("Did you hit your step goal today?") is available under [Reminders](/docs/profile-and-settings/reminders) → Step counter. Default off.

## Worked example

Wednesday evening, you check your iPhone Health app: **9347 steps**. Open the step counter, type 9347, save. The page shows:

- Today's total: 9347 steps.
- Goal: 8000 steps.
- Progress: 117% (over target).
- Weekly average (last 7 days): 7842 steps.
- Streak: 4 days at/above target.

## Limits

- **Source dependency.** Garbage in, garbage out. If your step source over-counts, your LifeWell numbers will too.
- **No GPS / route mapping.** This is a count, not a route tracker. For routes, use a dedicated app (Strava, Komoot, AllTrails).
- **No calorie estimation per step.** Calorie burn per step varies massively with body weight, stride length, pace, and terrain. The step count is the count; calories are not inferred.
- **One source of truth per day** — the page replaces an entry if you log twice on the same date. If you want multi-day backfill, log each date separately.

## Future: motion sensor integration

A native step-counter using the Capacitor `motion` plugin (with Android `Accelerometer` and iOS `CoreMotion`) is on the roadmap. It will be opt-in and battery-conscious. For now, manual entry keeps the surface simple, private, and battery-free.

## Frequently asked

**Why is the goal 8000 and not 10,000?**
The 10,000 number is a marketing artifact, not a clinical recommendation. Recent research (Paluch et al., *Lancet Public Health* 2022) shows benefits starting much lower, with diminishing returns past 8,000–10,000. We default to 8000; raise it if you want to challenge yourself.

**Can I import a CSV of historical step counts?**
Not yet. CSV import is on the roadmap. For now, manual back-dating one entry at a time.

**My phone shows 8500 but my watch shows 9200. Which do I log?**
Pick one source and stick with it. Most users find the watch consistently higher (it catches steps the phone misses when in a pocket). If you switch sources, expect a step or two in your trend chart.

**Does the step count feed wellness score?**
Yes — daily target hit is a wellness-score input. See [Wellness scoring](/docs/concepts/wellness-scoring).

**What about active minutes?**
Active minutes are tracked separately under [Exercise](/docs/health/exercise-and-workouts). Walking session minutes from there feed the active-minute total, while step count feeds a separate "steps today" metric.

## Where to read next

- [Exercise and workouts](/docs/health/exercise-and-workouts) — log walks and structured workouts.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how steps feed the score.
- [Preferences → Daily targets](/docs/profile-and-settings/preferences#daily-targets) — adjust the step goal.
- [Reminders](/docs/profile-and-settings/reminders) — daily-step reminder setup.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
