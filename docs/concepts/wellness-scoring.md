---
title: Wellness scoring — what the score means and what it does not
description: LifeWell's wellness score is a relative, weekly self-comparison built from tracked inputs. Not medical advice, not a comparison to other users, not a diagnosis.
keywords: [wellness score, lifewell wellness, health score, self comparison, not medical advice, ahsan mahmood]
sidebar_position: 7
---

# Wellness scoring

LifeWell's wellness score is a single number that summarizes how well your tracked inputs over the past week compare to your own recent baseline. It is a self-comparison tool, not a medical score, not a comparison to other users, and not a diagnosis. This page documents what the score actually measures, what it explicitly does not claim, and how to interpret it without over-reading.

If you're a user wondering "what is this number on my dashboard?", this page is the honest answer.

## What the score is

The wellness score is a weekly summary in the range 0–100, computed from the inputs you've tracked over the previous seven days. It compares your current week's behavior to your own trailing 90-day baseline, not to any normative population standard.

A score of 60 doesn't mean "you are 60% healthy." It means "this week, your tracked inputs are roughly aligned with what you typically do, with a small lean toward your better weeks." A score of 85 means "this week is clearly better than your usual baseline." A score of 30 means "this week is clearly off from your baseline — worth a look."

The number is a glance, not a verdict.

## What goes into the score

The score takes a weighted average across the input domains you actively track. If you don't track a domain, it doesn't contribute to your score — there is no penalty for not tracking something.

| Input | Weight | What's measured |
| --- | --- | --- |
| Vitals consistency | 15% | Did you take readings at roughly the same times you usually do? |
| Vitals trend | 10% | Are key vitals (BP, sugar, weight) inside your typical range? |
| Water intake | 15% | Did you hit your daily target on most days? |
| Sleep | 15% | Total sleep + bedtime consistency vs your baseline |
| Exercise / activity | 15% | Movement minutes vs your trailing 90-day average |
| Medications taken on time | 10% | Adherence to logged schedule |
| Mindfulness / breathing / mood logs | 10% | Frequency of mental-health check-ins |
| Reminders responded to | 10% | Did you act on or dismiss your own reminders consistently? |

The weights are heuristic, calibrated to make a "typical good week" score in the high 70s without celebrating either streak-padding or burnout. Weights are not user-tunable in v1 — keeping them fixed makes the score comparable across your own weeks.

## What the score does NOT do

- **Not medical advice.** A low score is not a diagnosis. A high score is not a clean bill of health. LifeWell does not have access to lab results, imaging, or anything a clinician would actually need to evaluate you.
- **Not a comparison to other users.** Your baseline is your own. We do not benchmark you against age, sex, region, or any population.
- **Not gamification.** There are no streaks attached to the score, no "you fell from 75 to 70" notifications, no celebratory confetti. The number sits on your dashboard; you look at it when you want to.
- **Not a target.** Optimizing for the wellness score directly is the wrong use of it. Tracking inputs honestly and using the score as a weekly reflection trigger is the right use.

## How the baseline is built

Your trailing 90-day baseline is computed from your own tracked entries over the last 90 days, with seasonal weighting (more recent weeks weighted slightly higher than older ones). The baseline excludes outlier days more than 2 standard deviations from your mean to avoid skewing on, say, a one-off illness or a long flight.

If you have fewer than 30 days of tracking, the score is shown as "Building baseline" rather than a number. After 30 days a provisional score appears with a caveat. After 90 days the baseline is considered established.

This is why the score behaves oddly in your first month of LifeWell use — there isn't enough history yet to compute a fair self-comparison.

## How to interpret a score change

Week-over-week swings are noisy. Don't read meaning into a 5-point change. The signals worth attending to are:

- **A 15+ point drop** that lasts two weeks. Worth a moment of reflection — what changed?
- **A consistent climb** over a month, especially if you added a habit (e.g. logged water for 30 days running). Confirmation that the habit landed.
- **A score that stays in the 50s for months** despite full tracking. Worth wondering whether your inputs reflect what you actually do, or whether your baseline expectations have drifted.

A score that jumps from 75 to 82 in one week is normal noise.

## Why we don't show a numeric breakdown by input

The temptation, when you see a score of 65, is to ask "which input dragged me down?" — and to optimize that one input next week. We deliberately don't show input-by-input breakdowns because:

- It encourages gaming the score (water-only weeks, etc.).
- It treats wellness as a sum of independent inputs, which it isn't.
- It distracts from the actual goal: tracking honestly, then reflecting weekly.

If you want to dig into a specific domain, the per-feature screens (`/health/vitals`, `/health/water-tracking`, `/health/sleep`) show full trends on their own terms. The wellness score is intentionally just a summary.

## When the score is hidden

If you've turned tracking off for every domain (e.g. you only use LifeWell for calculators), no score is shown. The dashboard simply omits the card.

If you've turned off the wellness score itself in **Profile → Preferences**, it's hidden everywhere — dashboard, summary emails, achievement criteria. Some users find the number adds anxiety more than insight; the off switch exists for that.

## Frequently asked

**Why a single number and not a multi-dimensional summary?**
Multi-dimensional summaries (radar charts, etc.) are mathematically more honest but harder to glance at. The single number is a trade-off: less precision, faster comprehension. The per-feature trend charts give you the precision when you want it.

**Can I export my weekly scores?**
Yes — the data export endpoint includes every computed weekly score alongside the inputs that produced it. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) for an export.

**Does the score affect achievements?**
Some achievements are tied to score milestones (e.g. "Score above 80 for four consecutive weeks"). Most achievements are tied directly to tracked inputs, not the score. See [Achievements](/docs/profile-and-settings/achievements) for the full list.

**Will the weights ever be user-tunable?**
Maybe in a future version, gated behind an "advanced" flag. The hesitation is that user-tunable weights make the score non-comparable across users — and one of its benefits is that you can compare your own score history against itself. If we ship tunable weights, they'll come with a clear caveat that historical scores would need to be re-computed.

**Why does my score say "Building baseline" two months in?**
That message shows until you have at least 30 days of tracked inputs across at least three domains. If you've only been logging one domain (e.g. water only), the score waits for more breadth before showing a number, because a single-input "score" wouldn't be meaningful.

## Where to read next

- [Health overview](/docs/health/overview) — the input domains the score reads from.
- [Achievements](/docs/profile-and-settings/achievements) — the badges tied to consistent tracking.
- [Preferences](/docs/profile-and-settings/preferences) — turn the score on or off.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
