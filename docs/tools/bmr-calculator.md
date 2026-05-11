---
title: BMR calculator — Mifflin-St Jeor and Harris-Benedict
description: LifeWell BMR calculator estimates Basal Metabolic Rate using Mifflin-St Jeor (default) or Harris-Benedict — calories your body burns at complete rest.
keywords: [bmr calculator, basal metabolic rate, mifflin st jeor, harris benedict, resting metabolism, calories at rest, ahsan mahmood]
sidebar_position: 3
---

# BMR calculator

The **BMR calculator** estimates your Basal Metabolic Rate — the calories your body burns at complete rest in a 24-hour period to keep organs working, body temperature regulated, and cells alive. BMR is the floor of your daily calorie expenditure; everything you do beyond lying still adds to it. The result is the input most calorie-target and macro-target calculators (TDEE, calorie, macro) build from.

LifeWell offers two formulas: **Mifflin-St Jeor** (the default, considered more accurate for most people in modern populations) and **Harris-Benedict** (the original 1919 formula, revised in 1984, still widely cited).

## Formulas

### Mifflin-St Jeor (1990) — default

```
Male:   BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) + 5
Female: BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) − 161
```

Source: Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO. *A new predictive equation for resting energy expenditure in healthy individuals*. American Journal of Clinical Nutrition, 1990 Feb;51(2):241-7.

### Harris-Benedict (revised by Roza & Shizgal, 1984)

```
Male:   BMR = 88.362 + (13.397 × weight_kg) + (4.799 × height_cm) − (5.677 × age)
Female: BMR = 447.593 + (9.247 × weight_kg) + (3.098 × height_cm) − (4.330 × age)
```

Source: Roza AM, Shizgal HM. *The Harris Benedict equation reevaluated: resting energy requirements and the body cell mass*. American Journal of Clinical Nutrition, 1984.

The original 1919 Harris-Benedict equations had slightly different coefficients; the 1984 revision is the version implemented here.

## Which formula to use

| Formula | When to prefer | Notes |
| --- | --- | --- |
| **Mifflin-St Jeor** | General population, modern body compositions | Validated against indirect calorimetry in more recent populations; tends to predict more accurately for overweight adults |
| **Harris-Benedict (revised)** | Historical comparisons; legacy systems | Slightly overestimates BMR for many modern adults |

The Academy of Nutrition and Dietetics has recommended Mifflin-St Jeor as the preferred predictive equation for healthy non-obese and obese adults since 2005.

## Inputs

| Field | Required | Notes |
| --- | --- | --- |
| Sex (male / female) | Yes | The formula has separate coefficients per sex; this is biological convention, not gender identity |
| Weight | Yes | kg or lb (imperial converted to kg) |
| Height | Yes | cm or ft/in (imperial converted to cm) |
| Age | Yes | Years |

The formulas don't accommodate non-binary or intersex users with separate coefficients — the published equations are sex-binary. Picking the option closest to your hormonal physiology is the standard practical compromise.

## Worked example

A 30-year-old, 70-kg, 175-cm male using Mifflin-St Jeor:

```
BMR = (10 × 70) + (6.25 × 175) − (5 × 30) + 5
    = 700 + 1093.75 − 150 + 5
    = 1648.75 kcal/day
```

≈ **1649 kcal/day** at complete rest.

The same person using Harris-Benedict:

```
BMR = 88.362 + (13.397 × 70) + (4.799 × 175) − (5.677 × 30)
    = 88.362 + 937.79 + 839.825 − 170.31
    ≈ 1695.67 kcal/day
```

≈ **1696 kcal/day** — a ~47 kcal difference, illustrating typical formula-to-formula variation.

## What BMR is and isn't

BMR is:

- A theoretical estimate of resting metabolism.
- The starting point for TDEE (BMR × activity multiplier).
- Useful as a reference for setting calorie targets, not a precise measurement.

BMR is **not**:

- A measured quantity — it's an estimate. Indirect calorimetry (a clinical test) measures resting energy expenditure (REE) directly and typically lands within ±10–15% of the formula estimate.
- Constant — it shifts with body composition, age, illness, thyroid status, and energy intake history (extended caloric restriction lowers BMR via metabolic adaptation).
- A guarantee of weight outcome — actual calories burned vary day to day; nutrition science is dose-response, not deterministic.

## Limitations

- **Body composition** isn't an input. Two people of the same weight, height, age, and sex but with different muscle masses will have different real BMR; the formula returns the same number for both.
- **Medication effects** (beta-blockers, antipsychotics, stimulants, etc.) can shift real BMR meaningfully — not captured.
- **Thyroid status** drives a large fraction of BMR variance — also not captured.
- **Adaptive thermogenesis** (the metabolic slow-down that follows extended calorie restriction) means a previously-lean person who has been dieting may have a BMR 5–15% below the formula prediction.

## Frequently asked

**Which formula should I pick?**
Default to Mifflin-St Jeor. The Academy of Nutrition and Dietetics recommendation makes it the modern default for both healthy-weight and obese adults.

**Can I trust this number for setting my calorie target?**
As a starting reference, yes — but plan to adjust. If you eat at your calculated TDEE for two to four weeks and your weight isn't behaving as predicted, your real maintenance is different from the formula's estimate; adjust by 100–200 kcal and re-test.

**What about Katch-McArdle?**
The Katch-McArdle equation uses lean body mass instead of weight + height, and is more accurate for very lean or very muscular people — *if* you have an accurate lean-mass measurement. LifeWell doesn't offer it because most users don't have a recent DEXA / hydrostatic measurement. If you do, the calculation is `BMR = 370 + (21.6 × LBM_kg)`.

**Does LifeWell save my BMR result?**
No — the calculator is stateless. To save: write down or screenshot. Or recompute next time.

**My BMR seems low / high — should I worry?**
Formula BMR can mislead in either direction. The signal that matters is whether your eat-and-weigh outcomes match predictions. They often don't on the first iteration; that's normal.

## Where to read next

- [TDEE calculator](./tdee-calculator) — multiplies BMR by activity for the daily-burn estimate.
- [Calorie calculator](./calorie-calculator) — adjusts TDEE for weight-change goal.
- [Macro calculator](./macro-calculator) — splits TDEE into protein/carbs/fat.
- [Protein calculator](./protein-calculator) — daily protein-only target.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
