---
title: Interval timer — configurable work/rest cycles
description: LifeWell interval timer is a stateless work/rest timer for HIIT, Tabata, intervals, and any structured timed workout. Audio cues, large display, no log.
keywords: [interval timer, hiit timer, tabata timer, work rest cycle, run intervals, online interval timer, ahsan mahmood]
sidebar_position: 11
---

# Interval timer

The **interval timer** is a stateless work/rest cycle timer. Set a work duration, a rest duration, and a number of rounds; tap **Start** and the timer counts down with audible cues. Useful for HIIT sessions, Tabata, running intervals, sprint cycles, or any structured workout where you alternate between effort and recovery on a clock.

Unlike the [workout timer](./workout-timer), this surface does not save a session record by default — it's a pure timer. Use this when you want the audible structure without the bookkeeping.

## Inputs

| Field | Default | Range | Notes |
| --- | --- | --- | --- |
| Work duration | 30 s | 5 s – 30 min | Per-interval work |
| Rest duration | 15 s | 0 s – 30 min | Per-interval recovery |
| Rounds | 8 | 1 – 100 | Number of work/rest cycles |
| Warmup | 10 s | 0 s – 5 min | Optional pre-timer countdown |
| Cooldown | 0 s | 0 s – 5 min | Optional post-timer countdown |
| Sound | On | On / off | Audible cues at transitions |

## What it shows

- **Large countdown** number, full-screen.
- **Phase label** (Warmup / Work / Rest / Cooldown).
- **Round counter** (e.g. "Round 3 of 8").
- **Total elapsed** time at the bottom.
- **Pause** / **Resume** / **Reset** controls.

The display is high-contrast for visibility from across a gym.

## Common presets

A few standard interval protocols you can configure:

| Protocol | Work | Rest | Rounds | Notes |
| --- | --- | --- | --- | --- |
| Tabata | 20 s | 10 s | 8 | 4 min total — classic Izumi Tabata (Tabata et al., 1996) |
| EMOM | 60 s | 0 s | 10–20 | Every-minute-on-the-minute |
| 30/30 | 30 s | 30 s | 10 | Equal work and rest |
| 1-min sprint | 60 s | 90 s | 6–8 | Run sprints with recovery |
| 5x800m | depends | 60–90 s | 5 | Track repeats |
| Stair-climber HIIT | 30 s | 30 s | 12 | Stairmaster sprints + recovery |

Custom is always available — pick whatever fits your workout.

## Audio cues

The timer plays:

- A **start beep** at the beginning of each work phase.
- A **rest beep** at the beginning of each rest phase.
- A **countdown** (last 3 seconds) before each transition.
- A **final chime** when the session completes.

You can mute audio entirely if you're listening to music; visual cues still drive the timer.

## Worked example: Tabata

The classic Tabata protocol (Izumi Tabata, 1996) is 20 seconds maximum-effort work followed by 10 seconds rest, repeated 8 times — exactly 4 minutes of intense intermittent training. Configure:

- Work: 20 s
- Rest: 10 s
- Rounds: 8
- Warmup: 10 s (a brief steady-state warmup before the explosive intervals)

Tap Start. The timer counts the 10-second warmup, then alternates 20 s work / 10 s rest for 8 rounds = 4 minutes of work + rest = 4:20 total.

## What this timer does not do

- **No session log by default.** Use the [workout timer](./workout-timer) if you want the session minutes saved.
- **No heart-rate integration.** No wearable pairing — the timer is purely time-based, not effort-based.
- **No exercise prescription.** You pick the work and rest; the timer doesn't tell you what to do during work intervals.
- **No background-tab support** in some browsers. Browsers throttle JavaScript timers in background tabs. If you tab away, the timer may pause. Pin the tab foreground or use the Android app where the timer runs in a foreground service.

## Battery & lock-screen behavior

On mobile, browser-tab timers stop when the screen locks. The mobile app (Capacitor wrapper) keeps the timer running via a foreground service on Android (iOS support coming). For phone-only browser use, keep the screen unlocked — or pin the LifeWell app as a foreground service.

## Frequently asked

**Why is Tabata 8 rounds of 20/10?**
The Tabata protocol was developed by Dr Izumi Tabata and colleagues at the National Institute of Fitness and Sports in Tokyo, originally for speed skaters. The 1996 study used 20-second high-intensity bouts at 170% VO2max followed by 10 seconds rest, 7–8 rounds. The protocol's reputation comes from that very specific original study.

**Can I run intervals without rest (continuous EMOM)?**
Yes — set rest to 0 seconds and the timer treats each round as a continuous block of work, ringing a beep only at the round boundary.

**Does the timer count down or up?**
The current phase counts down (you see "12s remaining"); the total elapsed at the bottom counts up.

**Will the timer keep going if I switch tabs?**
Browser behaviour varies. Modern browsers throttle background-tab JavaScript heavily — your timer may lose seconds. Use the mobile app or pin the tab as foreground for accurate timing.

**Can I save the protocol I just configured?**
Not yet. Preset save/load is a planned feature. For now, screenshot or remember.

## Where to read next

- [Workout timer](./workout-timer) — same idea + saves session minutes.
- [Kegel trainer](./kegel-trainer) — specialised squeeze/release timer.
- [Exercise and workouts](/docs/health/exercise-and-workouts) — broader exercise context.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
