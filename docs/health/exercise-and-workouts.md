---
title: Exercise and workouts — walking, yoga, timers, kegel
description: LifeWell exercise covers walking, yoga, stretching, kegel training, workout timers, and interval timers — with pregnancy-safe filters and category-tagged routines.
keywords: [lifewell exercise, workout timer, yoga, stretching, kegel trainer, interval timer, walking tracker, pregnancy exercise, ahsan mahmood]
sidebar_position: 5
---

# Exercise and workouts

The **exercise** surface in LifeWell is the home for movement-tracking tools — walking, yoga, stretching, kegel exercises, interval timers, workout timers, and a small library of curated routines tagged for pregnancy phase and difficulty. Each tool logs a session (duration, optional intensity, optional notes), and the dashboard rolls them up into the day's active-minute total.

Exercise here is **tool-driven, not plan-driven**. You don't pick a 12-week program; you pick a tool, do the thing, log the session. The categorisation system lets pregnant users (and anyone managing a condition) filter for what's safe.

## Tools available

| Tool | What it does |
| --- | --- |
| [Walking](/docs/health/exercise-and-workouts) | Free-form session timer + step count entry |
| [Steps](/docs/health/exercise-and-workouts) | Manual step-count log (no pedometer integration) |
| [Yoga](/docs/health/exercise-and-workouts) | Routine library with pregnancy-phase tags |
| [Stretching](/docs/health/exercise-and-workouts) | Per-area stretches with timed holds |
| [Kegel trainer](/docs/tools/kegel-trainer) | Pelvic-floor squeeze/release timer |
| [Workout timer](/docs/tools/workout-timer) | Configurable work/rest interval timer |
| [Interval timer](/docs/tools/interval-timer) | High-intensity interval training timer |
| [Meditation](/docs/health/mental-health) | Breath-focused timer (counted under mental health) |

A session record from any of these stores: tool name, start/end timestamps, total duration in minutes, optional intensity tag, optional notes.

## Exercise categorisation

Every exercise the app surfaces is tagged with:

| Tag | Values |
| --- | --- |
| `category` | `strength`, `flexibility`, `cardio`, `balance`, `breathing`, `yoga`, `pelvic-floor`, `gentle-movement` |
| `difficulty` | `very-easy`, `easy`, `moderate`, `challenging` |
| `intensity` | `very-low`, `low`, `moderate`, `high` |
| `duration` | Recommended minutes |
| `phaseSafe` | A three-boolean tuple: `[firstTrimesterSafe, secondTrimesterSafe, thirdTrimesterSafe]` |
| `cautionWeeks` | Specific pregnancy weeks where extra care is recommended (if any) |
| `helpsWithConditions` | A bool map: `backPain`, `abdominalPain`, `pelvicPain`, `fatigue`, `swelling`, `stress`, `sleepIssues`, `constipation` |

These tags drive filters in the yoga / stretching libraries — "show me only first-trimester-safe yoga that helps with back pain" reduces the list to relevant routines. They also drive the conservative defaults when you mark yourself pregnant (high-intensity / high-difficulty options are hidden by default).

## Workout timer

The **workout timer** is a configurable interval timer for any kind of structured workout (HIIT, EMOM, Tabata, circuit training, custom). You set:

- **Work duration** (e.g. 45 s)
- **Rest duration** (e.g. 15 s)
- **Rounds** (e.g. 8)
- **Rest between rounds** (optional)
- **Sound cues** (start, midway, end)

The timer counts down with audible cues and a large on-screen number. When the workout ends, the session is logged with the total duration.

## Interval timer

The **interval timer** is the simpler version — a single work / rest pair you repeat as many times as you like, with the rep count up to you. Useful for running intervals, sprints, or any movement where "the same thing on repeat" beats configured rounds.

## Kegel trainer

The **kegel trainer** is a pelvic-floor squeeze/release timer with three preset programs:

| Program | Squeeze | Release | Reps |
| --- | --- | --- | --- |
| Beginner | 3 s | 3 s | 10 |
| Intermediate | 5 s | 5 s | 15 |
| Advanced | 10 s | 10 s | 20 |

The screen pulses with the rhythm so you don't need to watch a counter. Kegel sessions are filed under the pelvic-floor category and contribute to the day's active-minute total.

## Yoga library

The yoga library ships with a curated set of routines (single-pose holds and multi-pose flows) tagged by category, difficulty, and pregnancy phase. Each routine includes:

- A short description and why-it-helps note.
- Step-by-step instructions.
- A timed sequence (auto-advances through poses with a sound cue).
- Safety guidelines and a "when to stop" list.
- Modifications for common conditions.

Routines that require a doctor consult before doing them have a `doctorConsultRequired` flag — surfaced as a banner before you start.

## Stretching

The stretching tool is a body-area picker (neck, shoulders, back, hips, hamstrings, calves) with timed holds. You pick the areas, the app builds a session of 30-second holds, and a screen-reader-friendly timer walks you through each stretch.

## Logging a session manually

For activities the app doesn't cover natively (swimming, lifting, cycling, dance class, etc.), use **Add session manually**:

- Pick a category (`strength`, `cardio`, etc.)
- Type a name (e.g. "Bench press", "Pool laps", "Salsa class")
- Duration in minutes
- Optional intensity, notes, calories burned (manual estimate)

These manual sessions feed the same daily / weekly / monthly aggregates as native tool sessions.

## Pregnancy-aware defaults

When your profile marks you as pregnant, the exercise surface:

- Hides exercises whose `phaseSafe` array doesn't include your current trimester.
- Surfaces a "second-trimester-only" banner on routines that aren't first-trimester-safe but become safe later.
- Shows a "caution" badge on routines where your current pregnancy week is in the routine's `cautionWeeks`.
- Disables the high-intensity workout-timer preset and high-difficulty yoga routines by default (you can re-enable with a confirmation).

The defaults follow general public-health guidance for pregnancy exercise. They are not a substitute for an obstetrician's clearance. The app does not know if you've been told to bed-rest or restrict activity for a specific medical reason.

## Daily summary

The dashboard rolls exercise into:

- **Active minutes** — total session minutes today.
- **Active days** — consecutive days with at least one logged session.
- **Per-category breakdown** — pie chart of minutes by category.

A daily active-minutes target lives in [Preferences → Daily targets](/docs/profile-and-settings/preferences#daily-targets) (default 30, range 5–180). Hitting it shows a checkmark on the day's summary.

## Honest framing

Exercise in LifeWell does not:

- **Count steps via accelerometer.** Step counts are typed in. The app does not read motion sensors. (A Capacitor-based step counter is on the roadmap; pedometer accuracy depends on phone hardware.)
- **Estimate calorie burn.** The "calories burned" field on manual sessions is your own estimate. The app does not multiply duration by MET values.
- **Replace a trainer.** Pregnancy-phase tags are heuristics. If your provider gave you restrictions, follow them.
- **Pair with smartwatches.** No Apple Health, Google Fit, Fitbit, Garmin, or Polar integration. Sessions are typed in.

If you need accurate continuous tracking, use a dedicated fitness wearable and treat LifeWell as the lifestyle layer above it.

## Frequently asked

**Can I import workouts from Strava or Apple Health?**
Not yet. Import is on the long-term roadmap. For now, you'd manually log key sessions.

**The kegel trainer's "advanced" program feels too long.**
Start at beginner — even people with strong pelvic floors find the advanced 10-on/10-off program demanding. Build up over weeks.

**My yoga routine showed a "doctor consult required" banner — is it forbidden?**
No. The banner exists because the routine includes positions that are commonly restricted in late pregnancy or for specific conditions (back inversion, deep twists). Ask your provider; if they approve it, dismiss the banner and proceed.

**Does logging exercise count toward my wellness score?**
Yes — active minutes are one of the wellness-score inputs. See [Wellness scoring](/docs/concepts/wellness-scoring).

**The interval timer keeps stopping when I lock my phone.**
On Android, iOS, and some Linux/Mac browsers, locking the device or backgrounding the tab suspends timers. Pin the app foreground for the workout, or use the Android app where the timer runs in a foreground service.

## Where to read next

- [Workout timer](/docs/tools/workout-timer) — full timer reference.
- [Interval timer](/docs/tools/interval-timer) — simpler work/rest cycle.
- [Kegel trainer](/docs/tools/kegel-trainer) — pelvic-floor exercise tool.
- [Sleep](./sleep) — recovery counterpart to exercise.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
