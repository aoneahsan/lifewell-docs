---
title: Workout timer — full-session timer that logs minutes
description: LifeWell workout timer runs a 5–300 minute session timer and saves the session record to your active-minutes log. Optional workout-type notes.
keywords: [workout timer, gym session timer, exercise duration log, strength training timer, fitness session log, ahsan mahmood]
sidebar_position: 12
---

# Workout timer

The **workout timer** is a session-level timer that logs minutes to your activity record. Unlike the [interval timer](./interval-timer) (pure work/rest cycles), the workout timer is for the full session — strength training, HIIT, cardio, circuits — where you want the duration captured and added to your daily active-minute total.

You can run the timer in two modes:

- **Live mode**: tap Start when you begin, tap Stop when you finish. The page captures the elapsed time.
- **Log-only mode**: type the duration after the fact. Useful for sessions where you didn't time them or where you used another app's timer.

Either way, the session writes to the `lifewell_workout` collection and contributes to the daily active-minute aggregate.

## Inputs

| Field | Range | Notes |
| --- | --- | --- |
| Duration | 5–300 min | Validates the range |
| Workout type / notes | Optional | Free text — strength, cardio, HIIT, circuit, what exercises, intensity, how you felt |

## Live-mode workflow

1. Open the workout timer page.
2. Optionally type the workout type in the notes field.
3. Tap **Start**. A timer begins counting up from 00:00.
4. Train.
5. Tap **Stop** when finished. The page pre-fills the duration field with the elapsed time.
6. Confirm or adjust the duration, add notes, tap **Save Workout Session**.

The page shows total elapsed in HH:MM:SS format during the session.

## Log-only workflow

1. Open the page.
2. Type the duration in minutes.
3. Add notes (workout type, intensity).
4. Save.

Faster if you've already done the workout — common for users who use the gym's wall clock or their watch.

## Page header stats

The page shows two summary tiles:

- **This week** — count of workout sessions logged in the last 7 days.
- **Total time** — cumulative minutes across all sessions.

A more detailed weekly / monthly view lives in the [activity dashboard](/docs/health/exercise-and-workouts).

## Workout types

The notes field is free text — there is no enforced taxonomy. Common values you'd type:

- **Strength** — weightlifting, machines, bodyweight.
- **Cardio** — running, cycling, rowing, swimming.
- **HIIT** — high-intensity intervals.
- **Circuit** — multi-station, mixed strength + cardio.
- **Class** — yoga, Pilates, dance, spinning, group fitness.
- **Mobility** — stretching, foam-rolling, mobility drills.
- **Sport** — basketball, soccer, climbing, tennis.

The activity dashboard's daily / weekly / monthly aggregate rolls everything up regardless of type. Categorisation is for your records, not the math.

## Duration ranges per workout type

For reference (ACSM guidance + sports-medicine consensus):

| Type | Typical range | Note |
| --- | --- | --- |
| Strength (resistance training) | 30–75 min | Including warmup + sets + rest |
| Cardio (steady-state) | 20–60 min | Per session |
| HIIT | 10–30 min | Including warmup; the high-intensity portion is brief |
| Circuit / cross-training | 30–60 min | Mixed-modality |
| Class | 45–90 min | Yoga, Pilates often 60 min; spin 45 min |
| Sport (recreational) | 30–120 min | Highly variable |

Don't fixate on the duration — quality of effort and consistency matter more than minute-counting.

## What this timer is not

- **Not an exercise prescription** — the page records what you did; it doesn't tell you what to do. The [yoga and stretching surfaces](/docs/health/exercise-and-workouts) under `/health/` offer routine libraries.
- **Not a calorie estimator** — duration alone doesn't infer calories burned. Calorie estimation depends on body weight, exercise type, intensity, and metabolic factors well beyond what the timer captures.
- **Not connected to wearables** — the duration is what you logged, not what a heart-rate monitor measured.
- **Not a pace / split tracker** — for running splits, cycling power, or rowing pace, use a dedicated app and log the session duration here.

## Worked example

You did a 45-minute upper-body strength workout: bench press, rows, overhead press, pull-ups, biceps, triceps. Your phone was on the bench; you opened the timer when you started warming up.

Live mode:

- Tap Start at 17:30.
- 45 minutes pass.
- Tap Stop at 18:15.
- Duration auto-fills 45.
- Notes: "Strength — chest/back/shoulders/arms. Bench 4x8 at 80, OHP 4x6 at 50, BB row 4x8 at 70, weighted pull-ups 3x6, BB curls 3x10, tricep pushdowns 3x12."
- Save.

The session adds 45 minutes to today's active-minute total.

## Frequently asked

**Will the timer keep running if I lock my phone?**
On mobile: in the Android app the timer runs via a foreground service even when the screen is locked; iOS support is in progress. In a mobile browser tab: browsers throttle background JavaScript so the timer may lose time. For the web app, keep the tab foreground.

**What if I forgot to log a workout?**
Use log-only mode — just type the duration and a note. The timestamp defaults to "now" but you can back-date it.

**Does the duration feed the wellness score?**
Yes — total active minutes per day are a wellness-score input. See [Wellness scoring](/docs/concepts/wellness-scoring).

**Can I share my workout history with my trainer?**
Yes — export-to-PDF from the activity dashboard, or grant your trainer partner-sharing access (read-only) under [Data sharing](/docs/profile-and-settings/data-sharing).

**Can I save a recurring workout (e.g. "Monday upper body") as a template?**
Not yet. Workout templates are a planned feature. For now, the notes field captures the routine; copy and paste for future sessions.

## Where to read next

- [Interval timer](./interval-timer) — pure work/rest cycle timer (no session log).
- [Exercise and workouts](/docs/health/exercise-and-workouts) — broader exercise context + yoga/stretching libraries.
- [Kegel trainer](./kegel-trainer) — specialised pelvic-floor timer.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how workout minutes feed the score.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
