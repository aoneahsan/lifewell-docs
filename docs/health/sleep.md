---
title: Sleep — duration, quality, naps, sounds, dreams
description: LifeWell sleep tracking logs nightly duration (0–24 h) and a 1–5 quality rating, plus separate naps, sleep sounds, and a dreams journal. Manual entry.
keywords: [lifewell sleep, sleep tracker, sleep quality, nap log, sleep sounds, dreams journal, ahsan mahmood]
sidebar_position: 6
---

# Sleep

**Sleep** in LifeWell is a manual-entry nightly log: in the morning you record how long you slept (in hours) and how the sleep felt on a 1–5 quality scale. Two minutes of typing in the morning is the whole interaction. From those entries the app builds a 7-day average, a trend chart, and a streak counter for hitting your nightly target.

Naps live on a separate surface so they don't pollute your overnight duration. Two adjacent tools — **sleep sounds** (a curated audio mixer) and **dreams** (a free-text journal) — sit on the same nav node for users who want them.

## What the nightly log captures

| Field | Type | Notes |
| --- | --- | --- |
| `duration` | number (0–24) | Total sleep in hours; decimals OK (7.5 = 7 h 30 min) |
| `quality` | enum (1–5) | Very Poor / Poor / Fair / Good / Excellent |
| `notes` | string (optional) | Free text — interruptions, alarm time, dreams, anything |
| `loggedFor` | date | Defaults to "last night"; back-dateable |

That's it. No bed-time / wake-time split, no sleep-stage breakdown, no heart-rate-variability score. The app is **not** measuring your sleep — you are reporting it.

If you want a stage-by-stage estimate (REM, deep, light), pair a dedicated wearable; LifeWell will not replicate that.

## Quality scale

| Value | Label | Emoji |
| --- | --- | --- |
| 1 | Very Poor | 😫 |
| 2 | Poor | 😔 |
| 3 | Fair | 😐 |
| 4 | Good | 🙂 |
| 5 | Excellent | 😊 |

The form defaults to 3 ("Fair"). Pick the closest single answer rather than agonising — the value of this number comes from the 30-day trend, not the precision of any single night.

## 7-day averages

The page header shows two rolling 7-day averages:

- **Average duration** — sum(durations) / count over the last 7 entries.
- **Average quality** — same idea, on the 1–5 scale.

The averages compute on the last seven entries, not the last seven calendar days, so a gap doesn't reset them.

## Trend chart

The trend chart shows the last 30 entries as a dual-axis line: duration in hours on the left axis, quality on the right axis. You're looking for divergence — duration up while quality drops, or vice versa — to spot patterns. The chart range defaults to 30 days and can be switched to 90 or 365 from the chart header.

## Daily target and streaks

The default sleep target is **8 hours**, configurable from 4 to 12 under [Preferences → Daily targets](/docs/profile-and-settings/preferences#daily-targets). Hitting your target for two or more consecutive days starts a streak; missing breaks it.

A "hit" means duration ≥ target. Quality is not part of the streak — sleeping 8 hours badly still counts as a hit. This is deliberate: gamifying quality can encourage over-reporting.

## Naps

Naps live on a separate `/health/nap` page so they don't blend into the overnight log. A nap entry records duration in minutes and time of day (morning / afternoon / evening). The dashboard shows nap minutes separately from overnight sleep.

This separation matters because most sleep guidance distinguishes consolidated overnight sleep from daytime sleep — adding a 90-minute nap to an 8-hour overnight does not give you "9.5 hours of sleep" in any clinically meaningful sense.

## Sleep sounds

The **sleep sounds** tool is a layered audio mixer. You pick from a small library (rain, ocean, white noise, brown noise, fan, fireplace, café murmur, lo-fi instrumental) and adjust each track's volume. Tap **Play** and the mix runs from the device; tap **Sleep timer** to stop after a set duration (15 / 30 / 60 / 90 minutes, or off).

Sounds play locally; nothing is streamed. The library is small by design — no infinite scrolling, no algorithmic recommendations, no "what's trending" surface. It's a tool, not a content platform.

## Dreams journal

The **dreams** page is a date-indexed free-text journal. Each entry is a markdown-styled note tagged with the morning you woke up, optional mood at the time of writing, and free-form tags. Dreams entries are not surfaced anywhere else in the app — they don't feed the wellness score, the trend chart, or the dashboard.

The dreams journal exists for users who keep one. If you don't, hide it under [Preferences → Feature visibility](/docs/profile-and-settings/preferences#feature-visibility) and forget it exists.

## Reminders

A nightly **sleep reminder** can ping you at a set time to log the previous night's sleep. The default is 09:00 in your selected time zone. Two reminders make sense for some users:

- A morning "log last night" reminder (default).
- An evening "winding down" reminder, if you're trying to enforce a consistent bedtime.

Set these under [Reminders](/docs/profile-and-settings/reminders) → Sleep.

## Honest framing

Sleep tracking in LifeWell is:

- **Self-reported.** Both duration and quality come from your morning recollection. Studies show people are not precise estimators of either.
- **Not a sleep-stage breakdown.** There is no REM / deep / light split. If you need that, pair a wearable.
- **Not a sleep-disorder screening tool.** Persistent insomnia, suspected sleep apnea, or other concerns warrant a clinician, not a chart.
- **Not coupled to motion sensors.** LifeWell does not detect when you went to bed or woke up.

For most users — including those who just want to know if they're chronically under-sleeping — self-reported nightly duration captures the signal that matters at the resolution that's useful.

## Frequently asked

**Should I track quality if I'm not sure?**
Yes, even a noisy quality signal is more useful than no signal. Pick whichever number feels closest. The trend will be informative even if any single night is a guess.

**My duration includes 30 minutes lying awake — should I subtract it?**
Whatever you do, do it consistently. If you subtract on Monday and don't on Tuesday, the trend gets noisy. Most users find total time in bed easier to estimate than "actual sleep" and pick that consistently.

**Can I see my sleep sounds usage history?**
No — sleep sounds is a tool, not a tracked behaviour. Playback minutes are not logged.

**Are dreams journal entries searchable?**
Within the dreams page, yes (substring search across notes and tags). The dreams content is not searchable from the global search.

**The streak page says I'm on a streak but I missed last night.**
Streaks use a daily-target hit, computed against your selected time zone. If your day rolled over before you logged, the missed night counts as a miss the next day. Set a fixed time zone if you're travelling so the rollover is predictable.

## Where to read next

- [Mental health](./mental-health) — mood-journal, gratitude, breathing.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how sleep feeds the score.
- [Preferences](/docs/profile-and-settings/preferences) — change your sleep target and time zone.
- [Reminders](/docs/profile-and-settings/reminders) — wind-down and morning-log reminders.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
