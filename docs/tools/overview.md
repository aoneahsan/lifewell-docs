---
title: Tools — calculators and timers index
description: LifeWell tools include BMI, BMR, TDEE, macro, protein, calorie, age calculators, plus interval, workout, sleep, step, and kegel timers. All client-side.
keywords: [lifewell tools, health calculators, fitness timers, bmi calculator, bmr tdee, macro calculator, kegel trainer, interval timer, ahsan mahmood]
sidebar_position: 1
---

# Tools

The LifeWell **tools** module is a set of stateless calculators and timers that run entirely in the browser (or app, on mobile). Type your inputs, get a result. Nothing is saved to your profile unless you explicitly tap "Save" — these are reference utilities, not tracking surfaces. The result is the result; come back tomorrow with new inputs and the calculator runs again.

This page is the index. Each entry below links to a dedicated page that covers the formula, the cited source, the inputs and outputs, a worked example, and the limits of what the tool can claim.

## Calculators

| Tool | What it computes | Cited source |
| --- | --- | --- |
| [BMI calculator](./bmi-calculator) | Body Mass Index from weight + height | WHO BMI classification |
| [BMR calculator](./bmr-calculator) | Basal Metabolic Rate (kcal/day at rest) | Mifflin-St Jeor (1990); Harris-Benedict (1919, revised 1984) |
| [Calorie calculator](./calorie-calculator) | Daily calorie target adjusted for goal | Mifflin-St Jeor + activity multiplier + deficit/surplus |
| [TDEE calculator](./tdee-calculator) | Total Daily Energy Expenditure | BMR × activity multiplier |
| [Macro calculator](./macro-calculator) | Protein / carbs / fat grams per day | Diet-preset percentages + 4/4/9 cal/g |
| [Protein calculator](./protein-calculator) | Daily protein target in grams | Goal × activity × body weight (g/kg) |
| [Age calculator](./age-calculator) | Exact age in years/months/days + extras | Calendar arithmetic |

## Timers

| Tool | What it does | Range |
| --- | --- | --- |
| [Sleep tracker](./sleep-tracker-tool) | Log nightly duration + quality (separate from `/health/sleep`) | 0–24 hours |
| [Step counter](./step-counter) | Manual step-count log (no pedometer integration) | 1–100,000 steps |
| [Interval timer](./interval-timer) | Configurable work/rest interval timer | Custom seconds |
| [Workout timer](./workout-timer) | Multi-round configurable workout timer | 5–300 min sessions |
| [Kegel trainer](./kegel-trainer) | Pelvic-floor squeeze/release timer | 1–100 reps per session |

## What they share

Every tool follows the same conventions:

- **Inputs validated** — out-of-range values get rejected at the form.
- **Result inline** — no navigation between input and output.
- **Citation visible** — the formula's named source is on the page.
- **No persistence by default** — using a calculator does not write anything to your profile unless you tap "Save".
- **Honest framing** — every page lists what the result is and isn't.

## How they differ from health-module tracking

The `/health/*` surfaces (vitals, water, medications, sleep, etc.) are **logs** — every interaction is persisted, charted, and aggregated. The `/tools/*` surfaces are **calculators and timers** — typically one-off uses that don't need a history.

A few of the timers (workout-timer, kegel-trainer) do save a session entry to a Zustand-backed store when you complete one — that's the only crossover. The calculators are stateless.

## When to use which

- "What's my BMI?" → [BMI calculator](./bmi-calculator)
- "How many calories should I eat to lose weight?" → [Calorie calculator](./calorie-calculator) (sets a deficit on TDEE)
- "How much protein should I eat?" → [Protein calculator](./protein-calculator)
- "What macros for keto?" → [Macro calculator](./macro-calculator) with the keto preset
- "How many calories do I burn just by being alive?" → [BMR calculator](./bmr-calculator)
- "How many calories do I burn with my activity level?" → [TDEE calculator](./tdee-calculator)
- "Set up a Tabata-style timer" → [Interval timer](./interval-timer)
- "Time a 45-minute strength workout" → [Workout timer](./workout-timer)
- "Walk through a kegel session" → [Kegel trainer](./kegel-trainer)
- "Calculate exact age from a birthday" → [Age calculator](./age-calculator)

## Frequently asked

**Do these calculators store my inputs?**
No. Inputs and outputs are session-local and disappear when you close the page. The timer surfaces save a session record when you complete one (so the dashboard active-minutes total is accurate), but the calculator surfaces are stateless.

**Are the formulas medical-grade?**
They're the standard formulas published by the cited sources — accurate as a general reference. Individual variation can be significant (5–15% on BMR, more on calorie target). For clinical work, a registered dietitian or physician using indirect calorimetry will give you a tighter number.

**Can I use the timers without logging?**
Yes — the workout and kegel timers can run without saving a session at the end (skip the "Save" tap and close the page). The interval timer is purely a timer with no log.

**Are these tools available offline?**
Yes. The calculators run client-side, the timers run client-side. The only network call is when you save a session record (which queues for offline sync — see [Offline-first design](/docs/concepts/offline-first-design)).

## Where to read next

- [BMI calculator](./bmi-calculator) — the most-used tool, starting point.
- [TDEE calculator](./tdee-calculator) — the basis for the calorie and macro calculators.
- [Health module](/docs/health/overview) — for logging, not calculating.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
