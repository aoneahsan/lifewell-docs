---
title: Nutrition and diet — calories, meal planner, recipes, fasting
description: LifeWell nutrition tracks calories per meal, a meal planner, portion guides, a recipe library, a nutrition analyzer, and a fasting timer. Manual entry.
keywords: [lifewell nutrition, calorie tracker, meal planner, fasting tracker, portion guide, recipe library, manual food log, ahsan mahmood]
sidebar_position: 7
---

# Nutrition and diet

The **nutrition** surface in LifeWell is a manual food log paired with planning tools: log a calorie estimate per meal, plan tomorrow's meals, eyeball portion sizes against a reference, browse a curated recipe library, run a quick nutrition lookup, or track a fasting window. There's no barcode scan and no auto-recognition photo log — every entry is a number you typed in, by design.

This page covers the calorie log, the meal planner, portions, recipes, the nutrition analyzer, and the fasting tracker, plus the limits to know before you rely on the totals.

## What you can log

| Tool | What it does |
| --- | --- |
| Calories | Per-meal calorie entry (breakfast / lunch / dinner / snack) |
| Meal planner | Plan tomorrow's (or next week's) meals on a calendar grid |
| Portions | Visual reference for serving sizes |
| Recipes | Curated recipe library with prep / cook time |
| Nutrition analyzer | Look up calories + macros for a typed food name |
| Fasting | Intermittent-fasting window timer |

## Calorie log

Each calorie entry stores:

| Field | Type | Notes |
| --- | --- | --- |
| `calories` | number (1–5000) | The total calories of the meal you ate |
| `meal` | enum | `breakfast`, `lunch`, `dinner`, `snack` |
| `notes` | string (optional) | What you ate, in case you want to remember |
| `loggedAt` | timestamp | Defaults to "now" |

You don't track grams or macros per entry — you track one total per meal. Macro breakdown is available on the nutrition analyzer for specific foods, and an optional sidebar on the meal planner.

The page shows:

- A **progress ring** of today's total against your daily target.
- A **trend chart** of the last 30 days.
- A list of today's meals so you can edit or delete.

### Daily target

The default target is **2000 kcal**, configurable from 1000–5000 under [Preferences → Daily targets](/docs/profile-and-settings/preferences#daily-targets). The target is a planning aid, not a clinical recommendation — use it as a yardstick to spot weeks where you're consistently over or under, not as a rule to obsess over.

A genuine personalised target depends on basal metabolic rate, activity level, body composition goals, and clinical conditions. The calculators under [Tools](/docs/tools/overview) (BMR, TDEE, calorie, macro, protein) can help you arrive at a number; LifeWell does not pick one for you.

## Meal planner

The **meal planner** is a calendar grid (week or two-week view) with slots for breakfast / lunch / dinner / snack each day. You drag recipes from the library, or type free-text meal names, into the slots.

The planner is for **planning**, not logging — adding a meal to Wednesday's lunch slot does not create a calorie entry for Wednesday. When the day arrives, tap the slot to log what you actually ate (the calorie field pre-fills if the recipe has a calorie count).

This separation matters: most users plan more than they execute, and conflating planned-with-logged makes both numbers wrong.

## Portions

The **portions** page is a visual reference: a deck of card-style images and one-liners ("1 cup of cooked rice ≈ a tight fist", "3 oz of cooked meat ≈ a deck of cards", "1 tbsp peanut butter ≈ a thumb tip"). No tracking, no logging — just a quick-lookup when you're estimating a meal's size for the calorie log.

## Recipes

The **recipes** library is a curated set of recipes with:

- Title, photo, prep time, cook time, total time, servings.
- Ingredient list with measurements.
- Step-by-step instructions.
- Calorie + macro counts per serving (when provided).
- Tags (vegetarian, vegan, gluten-free, dairy-free, low-carb, high-protein, kid-friendly, etc.).

You can favourite a recipe, drag it into the meal planner, and convert a serving directly into a calorie-log entry. There is no user-generated-content (UGC) layer here — recipes are curated, not crowdsourced.

## Nutrition analyzer

The **nutrition analyzer** is a typed-name lookup: type a food ("banana", "scrambled eggs", "chicken breast 100g") and the page shows a calorie + macro breakdown from a curated reference table. It is **not** an AI / vision food-recognition tool — there is no photo input.

The reference table covers common foods at common portion sizes. Specialty foods (regional cuisines, brand-name products) may not be in the table; for those, look up the label and type the totals into the calorie log directly.

## Fasting tracker

The **fasting tracker** is an interval timer for intermittent-fasting windows. Pick a protocol:

| Protocol | Fast | Eat |
| --- | --- | --- |
| 12:12 | 12 hours | 12 hours |
| 14:10 | 14 hours | 10 hours |
| 16:8 | 16 hours | 8 hours |
| 18:6 | 18 hours | 6 hours |
| 20:4 | 20 hours | 4 hours |
| 24h | 24 hours | One-meal-a-day reference |
| Custom | Any | Any |

Tap **Start fast** when you finish your last meal of the day; the timer counts up. The page shows time elapsed, time remaining, and a progress ring. When the window closes, the session logs (start, end, protocol, duration, completion %).

Fasting protocols beyond ~16 hours have non-trivial clinical implications. The page does not recommend any protocol — it provides a timer. If you have diabetes, pregnancy, an eating-disorder history, or any condition affected by fasting, check with a clinician before using these protocols.

## Diet plan service

A higher-tier **diet plan** service exists in the codebase that supports per-user multi-day plans with macro targets, weekly grocery lists, and reminder-driven adherence. The user-facing UI for the full plan service is staged for the next release — for now, treat the meal planner + recipes + calorie log as the manual equivalent.

## Honest framing

Nutrition tracking in LifeWell:

- **Is not a clinical food-log app.** No verified-by-USDA database, no barcode scan, no photo recognition. Calorie totals come from your estimates plus the analyzer's reference table.
- **Does not track macros per meal in the calorie log.** If you need protein / carbs / fat per meal, write them into the notes field and aggregate manually.
- **Does not connect to grocery delivery or recipe websites.** You can't import recipes from Cookpad / NYT Cooking / etc.
- **Does not recommend a diet.** "What should I eat?" is a clinical question for a registered dietitian. The portion reference and recipes here are starting points.

If you have a specific clinical need (renal diet, low FODMAP, ADA-aligned diabetes plan, allergen avoidance), work with a dietitian and use LifeWell as a logging tool above their recommendations — not as the source of recommendations.

## Frequently asked

**Why no barcode scanner or photo recognition?**
Both options require costly third-party APIs (USDA + barcode-database licences, food-recognition AI models) that would either need a paid tier or remote scripts. LifeWell ships with neither today. Manual entry stays free, private, and offline-capable.

**Can I import a recipe from a URL?**
Not yet. Recipe scraping from arbitrary URLs is a future roadmap item.

**My fasting protocol isn't on the list.**
Pick **Custom** and set your own hours. The timer doesn't care which protocol you picked — it counts seconds.

**Does the fasting timer fire a notification at the window end?**
Yes, if you've enabled notifications under [Reminders](/docs/profile-and-settings/reminders). On mobile, the notification fires via local notifications even when the app is closed. On web, the tab must be open or notification permission granted.

**Can I track water on the calorie page?**
No — water has its own page ([Water tracking](./water-tracking)) so its quick-add buttons don't clutter the meal log. The dashboard shows both totals side by side.

## Where to read next

- [Tools — calculators](/docs/tools/overview) — BMR, TDEE, calorie, macro, protein calculators for setting a target.
- [Water tracking](./water-tracking) — hydration logging.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how nutrition feeds the score.
- [Conditions](./conditions) — track conditions that affect what you should eat.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
