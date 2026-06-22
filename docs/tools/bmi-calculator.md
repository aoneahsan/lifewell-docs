---
title: BMI calculator — weight ÷ height² with WHO categories
description: LifeWell's BMI calculator computes Body Mass Index from weight and height, then labels the result using WHO categories (underweight, normal, overweight, obese).
keywords: [bmi calculator, body mass index, who bmi categories, healthy weight calculator, metric imperial bmi, ahsan mahmood]
sidebar_position: 2
---

# BMI calculator

The **BMI calculator** computes your Body Mass Index — your weight divided by your height squared, expressed in kg/m². Type your weight and height in either metric or imperial units, and the page returns a single number plus the WHO category label (underweight, normal, overweight, obese). BMI is a population-level screening metric, useful as a starting reference and not as a personal health verdict.

## Formula

```
BMI = weight (kg) / height (m)²
```

Imperial inputs are converted before computing:

- 1 lb = 0.453592 kg
- 1 in = 2.54 cm = 0.0254 m

So the imperial-equivalent formula is `BMI = (lb × 0.453592) / (in × 0.0254)²` or, more commonly written, `BMI = (lb × 703) / in²`.

## Categories (WHO)

| Category | BMI range |
| --- | --- |
| Underweight | < 18.5 |
| Normal weight | 18.5 – 24.9 |
| Overweight | 25.0 – 29.9 |
| Obesity class I | 30.0 – 34.9 |
| Obesity class II | 35.0 – 39.9 |
| Obesity class III | ≥ 40 |

Source: World Health Organization, "BMI Classification" — the same cutoffs used worldwide for general public-health screening.

## Inputs

| Field | Range | Notes |
| --- | --- | --- |
| Weight | 20–500 kg (or 44–1100 lb) | Validation rejects values outside the range |
| Height | 100–250 cm (or 39–98 in) | Same |
| Units | Metric / imperial toggle | Per-tool setting, not global |

## Worked example

A 70-kg, 175-cm adult:

```
height_m = 175 / 100 = 1.75
BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ 22.86
```

22.86 falls in the **Normal** range (18.5–24.9).

In imperial: a 154 lb (≈ 70 kg), 5'9" (69 in) person:

```
BMI = (154 × 703) / (69 × 69) = 108,262 / 4761 ≈ 22.74
```

A small rounding difference comes from the conversion factors. Both land in **Normal**.

## What BMI tells you

- **Population-scale**: BMI is well-correlated with average body-fat percentage across large groups.
- **Trend at the individual level**: Your own BMI tracked over time can be a useful proxy for weight trajectory if your height isn't changing.
- **Quick risk screen**: At population scale, sustained BMI > 30 is associated with higher cardiometabolic risk, per multiple large cohort studies (CDC, WHO, NHANES).

## What BMI does **not** tell you

The CDC explicitly lists BMI's limitations on its own patient pages:

- **Doesn't distinguish muscle from fat.** Athletes with high muscle mass routinely register as "overweight" or "obese" by BMI.
- **Doesn't reflect fat distribution.** Visceral (belly) fat carries different risk than subcutaneous fat; BMI ignores that.
- **Less accurate at extremes of height** and for older adults (where muscle loss skews the relationship to body fat).
- **Doesn't account for ethnicity-specific risk thresholds.** Some health bodies (NICE in the UK, several Asia-Pacific authorities) recommend lower BMI cutoffs for South Asian and East Asian populations because cardiometabolic risk rises at lower BMIs in those groups.
- **Doesn't capture body composition changes** that matter for someone training — fat loss + muscle gain can leave BMI unchanged while body composition improves significantly.

Use BMI as one input among several, not as the metric.

## Related tools

- [Calorie calculator](./calorie-calculator) — uses BMR + activity + goal.
- [BMR calculator](./bmr-calculator) — basal metabolic rate at rest.
- [TDEE calculator](./tdee-calculator) — daily energy expenditure for nutrition planning.

The `/health/bmi` page in the health module also logs your BMI over time if you want to track the trend — same formula, with persistence.

## Frequently asked

**Why does BMI ignore body composition?**
BMI is intentionally a two-input metric (weight + height) because it was designed for large-population screening. More accurate body-composition assessment requires DEXA scans, hydrostatic weighing, or air-displacement plethysmography — none of which fit in a free web calculator.

**Is BMI useful for pregnancy?**
Not in the standard form. Pregnancy weight gain is expected and healthy; pre-pregnancy BMI is what informs the Institute of Medicine's gestational-weight-gain ranges. Track [pregnancy weight](/docs/health/pregnancy) directly during pregnancy, not BMI.

**What about children?**
Pediatric BMI uses age-and-sex percentile charts (CDC growth charts), not the adult cutoffs. LifeWell does not provide pediatric BMI here. The [child growth](/docs/baby/growth) page in the baby module handles infant/toddler growth via WHO charts.

**Does LifeWell save my BMI when I use this calculator?**
No. The calculator is stateless — close the page, the inputs and result are gone. To log BMI over time, use `/health/bmi` (the health-module surface) instead.

**The result says "Overweight" but I'm an athlete.**
The "Overweight" label reflects BMI alone. If you carry significant muscle, BMI overestimates your fat mass. Body-fat percentage (DEXA, skinfolds, bioimpedance) is the better signal in that case.

## Where to read next

- [Vitals → BMI tracking](/docs/health/vitals) — log BMI over time with charts.
- [BMR calculator](./bmr-calculator) — calorie burn at rest.
- [TDEE calculator](./tdee-calculator) — total daily energy expenditure.
- [Calorie calculator](./calorie-calculator) — adjust intake for goal.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
