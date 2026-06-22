---
title: Macro calculator — protein, carbs, fat split from calorie target
description: LifeWell macro calculator splits a daily calorie target into protein, carbs, and fat grams using diet presets (balanced, high-protein, low-carb, keto) or custom percentages.
keywords: [macro calculator, macronutrient split, protein carbs fat, keto macros, low carb, high protein, mediterranean, ahsan mahmood]
sidebar_position: 6
---

# Macro calculator

The **macro calculator** splits a daily calorie target into grams of protein, carbohydrate, and fat. Pick a preset (balanced, high-protein, low-carb, keto, Mediterranean) or set custom percentages, and the page converts the calorie split into grams using the standard 4-4-9 conversion (4 kcal per gram of protein and carbs, 9 kcal per gram of fat). Output also includes a per-meal breakdown if you tell it how many meals you eat per day.

## Formula

```
protein_calories = total_calories × protein_pct / 100
carb_calories    = total_calories × carb_pct / 100
fat_calories     = total_calories × fat_pct / 100

protein_grams = protein_calories / 4
carb_grams    = carb_calories / 4
fat_grams     = fat_calories / 9
```

The 4-4-9 calorie-per-gram conversion is from Atwater's general factors, the convention every nutrition label and dietitian uses. Alcohol is 7 kcal/g but is rarely tracked as a macro and is not modelled here.

## Diet presets

| Preset | Protein | Carbs | Fat | Use |
| --- | --- | --- | --- | --- |
| **Balanced** | 30% | 40% | 30% | General maintenance, no specific protocol |
| **High-protein** | 40% | 30% | 30% | Resistance training, body recomposition, satiety |
| **Mediterranean** | 25% | 45% | 30% | Heart-health-aligned; emphasises olive oil, fish, whole grains |
| **Low-carb** | 30% | 25% | 45% | Carbohydrate-sensitive, type-2-diabetes adjunct (with clinician) |
| **Keto** | 25% | 5% | 70% | Therapeutic ketosis (epilepsy management, some metabolic conditions) |
| **Custom** | Your choice | Your choice | Your choice | Any 3 percentages that sum to 100 |

Presets are reference splits from common diet protocols. None is universally "best" — different splits work for different people, training contexts, and clinical situations.

## Inputs

| Field | Notes |
| --- | --- |
| Daily calorie target | From the [calorie calculator](./calorie-calculator), the [TDEE calculator](./tdee-calculator), or your own number |
| Diet preset | One of the 6 presets above |
| Custom percentages | Required if "Custom" preset is selected; must sum to 100 |
| Meals per day | Optional; if provided, the page divides each macro by meal count |

## Output

The page returns:

- **Total calories** (the input echoed back).
- **Protein** — grams + calories + percentage.
- **Carbs** — grams + calories + percentage.
- **Fat** — grams + calories + percentage.
- **Per-meal** breakdown if meals/day was provided.
- A stacked-bar visualisation of the split.

## Worked example

A 2050 kcal/day target (from the calorie calculator's "lose 0.5 kg/week" example) on a **high-protein** preset (40/30/30) split across 4 meals:

```
Protein: 2050 × 0.40 = 820 kcal / 4 kcal/g = 205 g/day → 51 g/meal
Carbs:   2050 × 0.30 = 615 kcal / 4 kcal/g = 154 g/day → 38 g/meal
Fat:     2050 × 0.30 = 615 kcal / 9 kcal/g = 68 g/day  → 17 g/meal
```

205 g protein / 154 g carbs / 68 g fat per day, roughly 51 / 38 / 17 g per meal.

## How to pick a preset

A few rules of thumb (general — not clinical advice):

| Situation | Often-recommended starting preset |
| --- | --- |
| Body recomposition / resistance training | High-protein (40/30/30) |
| Endurance training (running, cycling) | Mediterranean or balanced |
| Sedentary maintenance | Balanced |
| Type-2 diabetes adjunct (with clinician) | Low-carb |
| Therapeutic ketosis (clinician-directed) | Keto |
| Heart-health-aligned | Mediterranean |

For most people the preset doesn't matter as much as **total calories + adequate protein + decent food quality**. The macro split is a fine-tuning lever, not the primary one.

## Limits

- **Per-gram values are approximate.** Atwater's general factors are an average; specific foods deviate (e.g. fibre carbs yield less than 4 kcal/g effective energy).
- **Total intake matters more than precise split.** Studies (e.g. Hall & Guo, *Gastroenterology*, 2017) repeatedly show that, at matched protein and calorie intake, the carb/fat ratio has small effects on weight outcomes for most people.
- **Therapeutic protocols** like keto for epilepsy or low-carb for diabetes are clinical questions — work with a dietitian or physician, not a free calculator.
- **Per-meal split is even split** — the calculator divides evenly. Real-world meal sizes vary (e.g. larger dinner, smaller breakfast); use the daily total and divide as you actually eat.

## When percentage splits don't fit your situation

Some experts (e.g. coaches, registered dietitians working with athletes) prefer absolute-gram targets rather than percentages:

- **Protein**: set in g/kg of body weight (see [protein calculator](./protein-calculator)).
- **Fat**: floor at 0.8 g/kg of body weight for hormone health.
- **Carbs**: fill the remaining calorie budget.

The macro calculator doesn't model this approach directly — for that workflow, use the [protein calculator](./protein-calculator) to fix protein, manually pick a fat target, and infer carbs from remaining calories.

## Frequently asked

**Does the order of meals matter?**
For most people, no. Studies on meal timing for weight loss show roughly equivalent outcomes whether protein is front-loaded, back-loaded, or evenly distributed. Athletes peri-workout may benefit from timing protein near training, but daily total is the bigger lever.

**Is keto safe?**
Keto is safe for most healthy adults short-term and is a long-established therapy for paediatric epilepsy. Adverse effects (keto flu, constipation, electrolyte imbalance) and contraindications (type 1 diabetes, certain metabolic disorders) make it a clinician-supervised choice for some people. The calculator does not give medical advice.

**Why is fat 9 kcal/g but protein and carbs only 4?**
Atwater empirically measured the heat of combustion of each macronutrient minus what's not absorbed. Fat is more energy-dense by mass; protein and carbs are similar. Alcohol is 7 kcal/g.

**Can I save my macro plan?**
The calculator is stateless — close the page, the result is gone. Take a screenshot, or use the meal-planner (see [Nutrition and diet](/docs/health/nutrition-and-diet)) to plan around the macros.

**My fitness app gives different macro grams.**
Different apps use slightly different presets and rounding. Discrepancies of 5–10 g per macro are normal between calculators.

## Where to read next

- [Calorie calculator](./calorie-calculator) — generate the calorie target this calculator splits.
- [Protein calculator](./protein-calculator) — protein-specific target in g/kg.
- [Nutrition and diet](/docs/health/nutrition-and-diet) — log meals against your macros.
- [TDEE calculator](./tdee-calculator) — maintenance starting point.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
