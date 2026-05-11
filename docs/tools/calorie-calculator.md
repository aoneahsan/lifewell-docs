---
title: Calorie calculator — TDEE adjusted for weight goal
description: LifeWell's calorie calculator takes your TDEE and applies a deficit, surplus, or maintenance adjustment, returning a daily calorie target for losing, maintaining, or gaining weight.
keywords: [calorie calculator, daily calorie target, calorie deficit, weight loss calories, maintenance calories, weight gain calories, ahsan mahmood]
sidebar_position: 4
---

# Calorie calculator

The **calorie calculator** returns a daily calorie target based on your TDEE and your weight-change goal. It computes BMR via Mifflin-St Jeor, multiplies by an activity multiplier to get TDEE, then subtracts (for fat loss) or adds (for muscle gain) calories to land on a target that supports the chosen rate of change. This is the standard textbook approach to setting a calorie target — it doesn't guarantee outcomes, but it gives you a defensible starting number.

## Formula

```
BMR  = Mifflin-St Jeor (see /docs/tools/bmr-calculator)
TDEE = BMR × activity_multiplier
Target = TDEE + goal_adjustment
```

Where `goal_adjustment` is a daily kilocalorie offset:

| Goal | Daily adjustment | Approx weekly weight change |
| --- | --- | --- |
| Lose 1 kg / week | −1100 kcal | −1 kg/week |
| Lose 0.5 kg / week | −500 kcal | −0.5 kg/week (the "moderate cut" baseline) |
| Lose 0.25 kg / week | −250 kcal | −0.25 kg/week |
| Maintain | 0 | 0 |
| Gain 0.25 kg / week | +250 kcal | +0.25 kg/week |
| Gain 0.5 kg / week | +500 kcal | +0.5 kg/week |

The 500 kcal/day → 0.5 kg/week relationship comes from the historical "3500 kcal per pound of fat" approximation. That number is a rough average, not a physical constant — see [Limits below](#limits).

## Activity multipliers

| Activity level | Multiplier | Example |
| --- | --- | --- |
| Sedentary | 1.2 | Office job, little to no exercise |
| Lightly active | 1.375 | Light exercise 1–3 days/week |
| Moderately active | 1.55 | Moderate exercise 3–5 days/week |
| Very active | 1.725 | Hard exercise 6–7 days/week |
| Extremely active | 1.9 | Physical job + training, 2× daily |

Pick the closest description. Most people overestimate their activity level by one tier; "moderate" is the realistic default for most adults with desk jobs who train a few times a week.

## Inputs

| Field | Range | Notes |
| --- | --- | --- |
| Sex (male / female) | Required | BMR formula has separate coefficients |
| Weight | 20–500 kg | Metric or imperial |
| Height | 100–250 cm | Metric or imperial |
| Age | 13–100 years | |
| Activity level | One of 5 tiers | |
| Goal | One of 6 options | Maintain / lose 0.25, 0.5, 1 kg/wk / gain 0.25, 0.5 kg/wk |

## Worked example

A 30-year-old, 70-kg, 175-cm male, moderately active, wanting to lose 0.5 kg/week:

```
BMR  = (10 × 70) + (6.25 × 175) − (5 × 30) + 5  = 1648.75 kcal
TDEE = 1648.75 × 1.55                           ≈ 2555.56 kcal
Target = 2555.56 − 500                          ≈ 2055.56 kcal/day
```

Round to a clean number: **~2050 kcal/day**.

If the same person wants to gain muscle slowly:

```
Target = 2555.56 + 250 ≈ 2805.56 kcal/day → ~2800 kcal/day
```

## Sustainable deficits and surpluses

- **0.5 kg/week loss** (~500 kcal/day deficit) is widely cited by the CDC, NHS, and the Academy of Nutrition and Dietetics as a sustainable rate for most adults. Faster loss tends to compromise muscle retention and adherence.
- **1 kg/week loss** is aggressive — fine in the very-overweight starting range, often too aggressive for the last 5–10 kg.
- **0.25 kg/week gain** for muscle building minimises fat gain in a surplus; faster lean-gain is rare except in genuine beginners.

## Limits

This calculator returns a starting estimate. Actual weight change depends on:

- **BMR variance** — formula vs. real REE can differ ±10–15%.
- **NEAT** (non-exercise activity thermogenesis) — how much you fidget, walk around, stand. Varies more between people than most other factors and is not captured by the activity multiplier.
- **Adaptive thermogenesis** — your body adjusts to caloric deficits by reducing NEAT and thyroid activity, making continued loss require a deeper deficit over weeks.
- **Sodium and glycogen fluctuations** can shift body weight by 1–3 kg week-to-week without any change in fat mass.
- **Tracking accuracy** — most people under-report food intake by 20–30% according to published doubly-labelled-water studies.

The "3500 kcal per pound of fat" rule is a historical heuristic, not an exact thermodynamic constant. Treat the target as a starting point; adjust based on what your scale actually does over 2–4 weeks.

## What this calculator doesn't account for

- **Body composition.** Two people with the same inputs but different muscle masses have different real TDEE.
- **Medical conditions.** Thyroid disorders, PCOS, Cushing's syndrome, insulin resistance, and many other conditions affect calorie balance — work with a clinician.
- **Pregnancy / breastfeeding.** The Institute of Medicine publishes specific calorie additions for each (≈340 kcal in trimester 2, ≈452 in trimester 3, ≈330–400 for lactation depending on stage). LifeWell does not auto-apply these in this calculator — set the goal to maintenance and manually add the calories from the IoM guidance.
- **Athletes / very lean populations** with significant muscle mass. Katch-McArdle (lean-mass-based) tends to be more accurate when LBM is known.

## Frequently asked

**Why does the calculator say 2050 kcal but I'm not losing weight?**
Try eating ~1800 for 2 weeks (a sharper deficit) while accurately tracking. If you still don't lose, your real TDEE is below the formula estimate; either drop another ~150 kcal or increase NEAT. Don't go below ~1500 (women) or ~1800 (men) for sustained periods without clinical supervision.

**How do I track calories accurately?**
Weigh foods rather than eyeballing. Use food labels and a database like USDA FoodData Central. Track for 2 weeks, then audit — most people find they were under-counting by 200–500 kcal/day.

**Can I just eat at maintenance and lose fat through exercise?**
Theoretically yes; practically harder. Most weight loss happens via the diet side because it's easier to skip a 600-kcal snack than to burn 600 kcal in the gym. A combination of moderate deficit + regular resistance training is the typical recommendation.

**What about cheat days?**
A "cheat" day at +1000 kcal eats most of a week's deficit. Better: aim for weekly average rather than perfect daily compliance, and don't binge to "make up" for a clean week.

**Does the calculator account for menstrual cycle weight fluctuations?**
No. Female users may see 1–3 kg weight fluctuation across a cycle from water retention — not fat. Weigh at the same point each cycle for cleaner comparisons.

## Where to read next

- [BMR calculator](./bmr-calculator) — the basal-metabolic-rate starting point.
- [TDEE calculator](./tdee-calculator) — total daily energy without goal adjustment.
- [Macro calculator](./macro-calculator) — split the calorie target into protein/carbs/fat.
- [Protein calculator](./protein-calculator) — daily protein target for the goal.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
