---
title: TDEE calculator — BMR × activity multiplier
description: LifeWell TDEE calculator multiplies your Mifflin-St Jeor BMR by an activity multiplier (1.2 to 1.9) to estimate Total Daily Energy Expenditure in kcal/day.
keywords: [tdee calculator, total daily energy expenditure, maintenance calories, activity multiplier, mifflin st jeor, ahsan mahmood]
sidebar_position: 5
---

# TDEE calculator

The **TDEE calculator** estimates your Total Daily Energy Expenditure — the total calories your body burns in 24 hours, including everything from breathing to walking to training. It computes BMR via Mifflin-St Jeor and multiplies by an activity multiplier from 1.2 (sedentary) to 1.9 (extremely active). The result is your daily maintenance calorie level: the intake at which your body weight is expected to stay roughly stable.

## Formula

```
BMR  = Mifflin-St Jeor (sex-specific — see /docs/tools/bmr-calculator)
TDEE = BMR × activity_multiplier
```

For reference, the Mifflin-St Jeor BMR formulas:

```
Male:   BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) + 5
Female: BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) − 161
```

Source: Mifflin et al. 1990; activity multipliers are standard fitness-industry values used across the Academy of Nutrition and Dietetics, ACE, ACSM, and most commercial calculators.

## Activity multipliers

| Activity level | Multiplier | Description |
| --- | --- | --- |
| Sedentary | 1.2 | Desk job, no structured exercise |
| Lightly active | 1.375 | Light exercise 1–3 days/week or active job with mostly desk work |
| Moderately active | 1.55 | Moderate exercise 3–5 days/week |
| Very active | 1.725 | Hard exercise 6–7 days/week |
| Extremely active | 1.9 | Hard daily training + physical job, or training twice daily |

The multipliers cover the broad spectrum of human activity. Most people overestimate by one tier — go with "moderate" if you're a desk worker who trains 3–5 times a week, not "very active".

## Inputs

| Field | Notes |
| --- | --- |
| Sex (male / female) | Required for BMR formula |
| Weight | kg or lb |
| Height | cm or ft/in |
| Age | Years (13–100) |
| Activity level | One of the 5 tiers |

## Output

The page returns:

- **BMR** in kcal/day (informational).
- **TDEE** in kcal/day (the main result).
- **Macro suggestion** — a balanced 30/40/30 split (protein/carbs/fat) of your TDEE, with grams per macro (using 4 kcal/g for protein and carbs, 9 kcal/g for fat).

The macro suggestion is a starting reference. For deeper macro tuning, use the [macro calculator](./macro-calculator) where you can pick a preset (balanced / high-protein / Mediterranean / low-carb / keto / custom) or set your own percentages.

## Worked example

A 30-year-old, 70-kg, 175-cm male, moderately active:

```
BMR  = (10 × 70) + (6.25 × 175) − (5 × 30) + 5  = 1648.75 kcal
TDEE = 1648.75 × 1.55                           ≈ 2555.56 kcal/day
```

So **maintenance ≈ 2556 kcal/day**.

Balanced macros at maintenance:

```
Protein: 2556 × 0.30 = 766.8 kcal → 192 g (at 4 kcal/g)
Carbs:   2556 × 0.40 = 1022.4 kcal → 256 g (at 4 kcal/g)
Fat:     2556 × 0.30 = 766.8 kcal → 85 g  (at 9 kcal/g)
```

## How accurate is the estimate?

Modern reviews of predictive equations (e.g. Frankenfield et al., *Journal of the American Dietetic Association*, 2005) found Mifflin-St Jeor accurate within ±10% of indirect calorimetry in about 70% of healthy adults, with the activity multiplier introducing another ±10% of variance in real-world TDEE.

That means: take the TDEE number, eat at it for 2–3 weeks, and let the scale tell you whether your real maintenance is above or below. Adjust ±100–200 kcal and re-test.

## What TDEE doesn't capture

- **NEAT** (non-exercise activity thermogenesis) is the wild card. Studies (notably Levine, *Science*, 1999) show NEAT can vary by 2000+ kcal/day between people of similar size and exercise habits.
- **Thermic effect of food** is approximated (proteins burn ~25% of their calories in digestion, carbs ~10%, fats ~3%) but lumped into the multiplier rather than separated.
- **Adaptive thermogenesis** — extended caloric restriction lowers TDEE below the formula prediction; resuming higher intake takes weeks to restore.
- **Hormonal status** — thyroid disorders, perimenopause / menopause, insulin resistance, all of which affect TDEE meaningfully.

## When to use TDEE vs the calorie calculator

- **TDEE calculator** = maintenance. Use when you want to maintain weight or when you want the raw number to feed into your own custom planning.
- **[Calorie calculator](./calorie-calculator)** = TDEE + goal adjustment (deficit or surplus). Use when you have a specific fat-loss or muscle-gain target.

## Frequently asked

**Why is my TDEE different from what my smartwatch shows?**
Smartwatches estimate calories via accelerometer + heart rate; they have their own error bars (typically ±20–30% of true expenditure). The TDEE formula is a separate estimate. Neither is "right" — use both as cross-references.

**My multiplier should be higher because I train hard.**
Possibly. The published activity multipliers were calibrated against doubly-labelled-water studies in mixed populations. Athletes often track higher; chronic dieters often track lower because of adaptive thermogenesis. Eat at the formula's TDEE for a few weeks and let the scale arbitrate.

**Can I see my TDEE over time?**
Not in this calculator — it's stateless. The [activity dashboard](/docs/health/exercise-and-workouts) tracks active minutes; combine that with regular weigh-ins to estimate real maintenance over weeks.

**Should I include the calories I burn during exercise?**
The activity multiplier already includes them. "Moderately active" already factors in 3–5 sessions per week. Don't double-count by adding workout-calorie estimates on top of TDEE.

**Why are female multipliers the same as male?**
The multipliers represent activity overhead, which is roughly proportional regardless of sex. The sex difference lives in BMR (the -161 vs +5 in Mifflin-St Jeor), which propagates into the TDEE through multiplication.

## Where to read next

- [BMR calculator](./bmr-calculator) — the basal piece that drives TDEE.
- [Calorie calculator](./calorie-calculator) — TDEE adjusted for goal.
- [Macro calculator](./macro-calculator) — split TDEE into macronutrients.
- [Protein calculator](./protein-calculator) — protein-specific target.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
