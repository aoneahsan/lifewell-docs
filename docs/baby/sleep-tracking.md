---
title: Baby sleep tracking — naps, night sleep, wake-ups, location
description: LifeWell baby sleep logs naps and overnight sleep with quality, wake-ups, location (crib, bassinet, etc), position, and swaddled flag. Live-timer or post-hoc.
keywords: [baby sleep tracker, infant sleep log, baby nap tracker, night feeds, sleep quality, swaddled, sids, ahsan mahmood]
sidebar_position: 3
---

# Baby sleep tracking

The **baby sleep tracker** captures every nap and overnight sleep session — start time, end time, duration, quality, wake-ups during the session, where the baby slept, what position, and whether swaddled. The log supports both live-timer mode (tap Start at sleep onset, Stop on waking) and post-hoc entry (type the duration after the fact, useful for the 03:00 feeding-and-resettle that you didn't time).

Sleep is the part of infant care most parents obsess over. The log won't fix sleep, but a clean record over a few weeks reveals patterns (longest stretches, frequent night-waking windows, nap consolidation) that anecdotal memory misses.

## What a sleep session captures

| Field | Type | Notes |
| --- | --- | --- |
| `type` | enum | `night`, `nap` — distinguishes consolidated overnight sleep from daytime naps |
| `startTime` / `endTime` | timestamps | Or, live mode with a stop button |
| `duration` | minutes | Auto-computed if start + end provided |
| `isOngoing` | boolean | True between Start and Stop in live mode |
| `quality` | enum | `excellent`, `good`, `fair`, `poor`, `terrible` |
| `wakeUps` | number | How many times baby woke during the session |
| `wakeUpTimes` | timestamp array | When wake-ups happened (optional detail) |
| `location` | enum | `crib`, `bassinet`, `bed`, `stroller`, `car_seat`, `carrier`, `other` |
| `position` | enum | `back`, `side`, `stomach` |
| `swaddled` | boolean | |
| `mood` | enum | `calm`, `fussy`, `crying` on waking |
| `notes` | string | Free text |

Most parents log start/end/type/quality and skip the rest in the early weeks. Wake-ups, location, and position get more useful when you're trying to debug a sleep regression or doing sleep training.

## Quality scale

| Value | Label |
| --- | --- |
| `excellent` | Deep, uninterrupted sleep |
| `good` | Mostly settled, maybe one brief wake |
| `fair` | Some restlessness or 1–2 wakes |
| `poor` | Multiple wakes, hard to resettle |
| `terrible` | Constant waking, fussing, contact-naps only |

Pick the closest single value. The value of this scale is the trend, not the precision of any session.

## Daily summary

The page header summarises today's sleep:

- **Total sessions** today.
- **Total sleep duration** (sum of all sessions, in minutes / converted to hours).
- **Night sleep duration** vs **nap duration** — split useful for spotting day/night reversal.
- **Average quality** across the day.

## Typical sleep patterns

For reference (American Academy of Sleep Medicine + AAP):

| Age | Total daily sleep | Breakdown |
| --- | --- | --- |
| 0–3 months (newborn) | 14–17 hrs | Distributed across 24 hours, no day/night |
| 4–6 months | 12–16 hrs | Longer overnight stretches forming + 3–4 naps |
| 6–11 months | 12–15 hrs | Overnight + 2–3 naps |
| 12–18 months | 11–14 hrs | Overnight + 1–2 naps |
| 18–24 months | 11–14 hrs | Overnight + 1 afternoon nap |

These are wide reference ranges, not targets. Healthy babies vary widely; sleep is not a performance metric.

## Sleep environment

The `location`, `position`, and `swaddled` fields exist because safe-sleep guidance from the AAP is specific:

- **Back position** for all sleep until the baby can roll independently both ways.
- **Firm, flat surface** — crib, bassinet, play yard meeting current safety standards.
- **No soft bedding** — no pillows, blankets, bumpers, or stuffed animals in the sleep area for the first year.
- **Same room as parent** for the first 6 months (AAP), but not the same bed.
- **Swaddling** is acceptable for newborns who can't roll; stop swaddling as soon as the baby shows signs of rolling.

The log captures what you did; it does not enforce or warn. Parents make sleep-environment decisions; LifeWell records.

## SIDS safety note

Sudden Infant Death Syndrome (SIDS) risk is reduced by following AAP safe-sleep guidance: back to sleep, firm flat surface, no soft bedding, same room not same bed, breastfeeding when possible, pacifier at sleep onset (per AAP), avoiding overheating, avoiding tobacco/alcohol/drug exposure during pregnancy and after birth. These are public-health recommendations; for individualised guidance see your pediatrician.

LifeWell does not provide SIDS prevention advice beyond noting that the AAP publishes recommendations. The position / location / swaddled fields exist for the parent's own record-keeping, not as a safety system.

## Worked example: live mode

You put your 3-month-old down for an afternoon nap at 13:45. Open Baby sleep tracker → New session → live mode. Type: nap. Location: bassinet. Position: back. Swaddled: no. Tap Start.

She wakes at 15:20. Tap Stop. The page auto-fills duration (95 min), prompts for quality and wake-ups. You select "good", 0 wake-ups, mood "calm". Save.

The daily summary updates: 1 nap, 1h 35m napping, average quality "good".

## Worked example: post-hoc

Tuesday morning. Last night's sleep: down at 19:30, woke at 23:00 for a feed (back down by 23:30), woke at 03:00 for a feed (back down by 03:45), woke at 06:30.

Open the page → New session → post-hoc. Type: night. Start: 19:30. End: 06:30. Duration auto-fills: 11h. Wake-ups: 2 (with optional timestamps 23:00, 03:00). Quality: "fair" (decent run between feeds). Location: crib. Position: back. Swaddled: no.

You can log the two feedings separately on the [feeding page](./feeding) — they'll cross-reference by timestamp in the daily-summary export.

## Limits

- **Subjective quality.** The 5-point scale is your judgement, not a measurement.
- **No sensor integration.** Owlet, Nanit, and similar baby-monitoring wearables are not paired. The duration is what you logged, not what a wearable tracked.
- **No sleep-training programme.** Whether you co-sleep, do extinction, do Ferber, do fading, or just wing it — LifeWell logs, doesn't prescribe.
- **No predictive "wake-up window" tool** — the field is open for that to be built in a future update, but for now the log is descriptive only.

## Frequently asked

**My baby naps in a contact-nap only — what location should I log?**
Use `carrier` or `other`. Many parents in the first weeks find contact naps the only naps that happen at all. The log records what worked, not what an ideal sleep environment looks like.

**Can my partner see the sleep log?**
Yes — if you've granted partner access. Both parents log, both see the same combined record.

**Does the log handle daylight-saving-time shifts?**
The session uses timestamps, so the actual elapsed minutes are correct. The "night" vs "nap" classification is yours — log what feels right.

**Can I export sleep history for a pediatrician?**
Yes — PDF export from the page. For sleep consultants, the per-session detail (with wake-ups and locations) is what they'll want.

**Why is "stomach" available as a position when AAP advises against it?**
Because babies who roll independently end up on their stomachs anyway (which is fine after independent rolling), and parents sometimes need to log "she rolled to her stomach overnight." The log doesn't warn; you decide what to do.

## Where to read next

- [Feeding](./feeding) — feedings often coincide with sleep cycles.
- [Milestones](./milestones) — rolling, sleeping-through-night, etc.
- [Diapers](./diapers) — overnight diaper counts.
- [Adult sleep](/docs/health/sleep) — your sleep matters too.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
