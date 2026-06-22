---
title: Protein calculator — daily protein in g/kg of body weight
description: LifeWell protein calculator returns a daily protein target in grams from your weight, activity level, and goal (lose, maintain, build). Uses g/kg ranges from sports-nutrition consensus.
keywords: [protein calculator, daily protein, protein per kg, muscle building protein, weight loss protein, sports nutrition, ahsan mahmood]
sidebar_position: 7
---

# Protein calculator

The **protein calculator** returns a daily protein target in grams based on your body weight, activity level, and goal (lose fat, maintain, build muscle). Protein needs scale with body mass and physical demands; the formula uses grams-per-kilogram-of-body-weight ranges drawn from sports-nutrition consensus (ISSN, ACSM, Mayo Clinic).

## Formula

```
target_g = body_weight_kg × protein_per_kg
```

Where `protein_per_kg` comes from this lookup:

| Activity level | Lose fat | Maintain | Build muscle |
| --- | --- | --- | --- |
| Sedentary | 1.2 g/kg | 0.8 g/kg | 1.2 g/kg |
| Moderate | 1.6 g/kg | 1.2 g/kg | 1.6 g/kg |
| Athlete | 2.0 g/kg | 1.6 g/kg | 2.2 g/kg |

The 0.8 g/kg maintenance floor for sedentary adults is the WHO / US RDA (Recommended Dietary Allowance) — the minimum to prevent deficiency, not an optimum. Athletes and people in caloric deficit need more.

Sources for the higher ranges:

- **Helms et al., *International Journal of Sport Nutrition and Exercise Metabolism*, 2014** — recommends 2.3–3.1 g/kg of fat-free mass during cuts for lean athletes.
- **Phillips et al., *Journal of Sports Sciences*, 2011** — 1.6–2.2 g/kg for muscle protein synthesis maximisation during resistance training.
- **ISSN Position Stand on Protein and Exercise (2017)** — 1.4–2.0 g/kg/day for general resistance training, with higher (up to 2.4 g/kg) for athletes in energy deficit.
- **Bauer et al., PROT-AGE Study Group (2013)** — recommends 1.0–1.2 g/kg for older adults to preserve muscle mass.

## Inputs

| Field | Notes |
| --- | --- |
| Body weight | kg or lb |
| Activity level | Sedentary / moderate / athlete |
| Goal | Lose fat / maintain / build muscle |

## Output

The page returns:

- **Daily protein target** in grams.
- **g/kg used** (the multiplier from the table).
- **Approximate calories from protein** (g × 4 kcal/g).
- **Per-meal target** if you specify a meal count.

## Worked example

A 70-kg person, moderately active, trying to lose fat:

```
target = 70 × 1.6 = 112 g/day
calories from protein = 112 × 4 = 448 kcal
```

So **112 g protein / day**, contributing ~448 kcal toward the daily total.

For the same person trying to build muscle as an athlete:

```
target = 70 × 2.2 = 154 g/day → 616 kcal
```

154 g protein / day. Split across 4 meals: ~39 g per meal.

## Why protein matters

- **Muscle protein synthesis** — strength training stimulates protein synthesis; adequate dietary protein supports the response. The Phillips/Helms work cited above shows higher protein intakes (1.6–2.2 g/kg) maximize the response compared to the RDA floor.
- **Satiety** — protein has the highest thermic effect of food (~25% of intake is burned in digestion) and increases satiety per calorie. Higher-protein diets show better adherence during caloric deficits in published trials.
- **Muscle preservation in a deficit** — when you're cutting calories, higher protein intake reduces the proportion of weight lost from muscle vs fat.
- **Aging** — sarcopenia (age-related muscle loss) is mitigated by protein intakes above the RDA (PROT-AGE recommends 1.0–1.2 g/kg minimum for adults over 65).

## Considerations

- **Lean-body-mass based targets** are arguably more accurate. If you know your LBM (from DEXA or similar), 1.8–2.7 g/kg of LBM is a common range across training contexts. LifeWell's calculator uses total body weight because most users don't have LBM data.
- **Very obese individuals** may overshoot protein needs using total body weight; targeting goal weight (or LBM) rather than current weight is a common adjustment.
- **Plant-based diets** can hit these targets but require more attention to protein-rich foods (legumes, tofu, tempeh, seitan, protein powders). Animal-based diets typically reach targets with less planning.
- **Per-meal distribution** of 0.4 g/kg per meal across 3–5 meals is suggested by the leucine-threshold literature (Schoenfeld & Aragon, *JISSN*, 2018) for maximising synthesis.

## Renal-function caveat

For most healthy people with normal kidney function, protein intakes up to 2.0–2.5 g/kg show no adverse effect on renal markers in published studies (Devries et al., *Journal of Nutrition*, 2018). The "high-protein is hard on kidneys" myth comes from extrapolating findings in chronic kidney disease (where protein restriction *is* prescribed) to healthy individuals (where it's not warranted).

If you have CKD, diabetic nephropathy, or other clinical kidney concerns, follow your clinician's protein guidance — not this calculator's.

## Limits

- **No body composition input.** Two people of the same weight can have very different lean mass and very different real protein needs.
- **Doesn't distinguish protein quality.** 100 g of chicken breast protein is not exactly equivalent to 100 g of gelatin protein. The targets assume normal-diet protein quality.
- **Doesn't model age × hormonal state.** Postmenopausal women and older men have different anabolic responses to protein than young trainees; the table simplifies.

## Frequently asked

**Is 2 g/kg too much?**
For healthy adults with normal kidney function, no — the literature consistently shows safety up to 2.5–3 g/kg in trained populations. For most people the issue is reaching the target, not avoiding overshoot.

**Does timing of protein matter?**
Distribution across the day matters more than precise timing around workouts. Aim for 3–5 protein-rich meals/snacks with ~0.4 g/kg per meal. The "post-workout protein window" turns out to be much wider than the old 30-minute rule.

**What counts as "athlete"?**
The "athlete" tier is for people training resistance and/or endurance most days of the week at meaningful intensity — competitive athletes, dedicated lifters, or training-focused recreational athletes. If you train 2–4 times a week at moderate intensity, "moderate" is the right tier.

**Can I save this target?**
The calculator is stateless. Take a screenshot. The [Nutrition and diet](/docs/health/nutrition-and-diet) module can log daily protein in the meal-notes field.

**My doctor told me to limit protein.**
Follow your doctor. Protein-restriction is prescribed for CKD and a few rarer conditions. The calculator's recommendations are for healthy adults.

## Where to read next

- [Macro calculator](./macro-calculator) — full macro split.
- [Calorie calculator](./calorie-calculator) — daily calorie target for goal.
- [TDEE calculator](./tdee-calculator) — maintenance base.
- [Exercise and workouts](/docs/health/exercise-and-workouts) — training context for protein need.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
