---
title: Baby growth — weight, length, head circumference, percentiles
description: LifeWell baby growth tracker logs weight (g), length (cm), and head circumference (cm) with optional percentiles plotted against WHO growth charts.
keywords: [baby growth chart, weight percentile, length percentile, head circumference, who growth standards, infant measurement log, ahsan mahmood]
sidebar_position: 5
---

# Baby growth

The **baby growth tracker** logs weight, length (height), and head circumference at each measurement, with an optional percentile field for plotting against standardised growth charts. Most entries come from pediatrician visits — well-baby visits at 1 week, 2 weeks, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, and 24 months under the AAP's "Bright Futures" recommended schedule.

You can also log home-measured weight if you have an accurate scale (the bathroom-scale method of "weigh yourself, then weigh holding baby, subtract" works within reason).

## What a growth record stores

| Field | Type | Notes |
| --- | --- | --- |
| `date` | timestamp | When the measurement was taken |
| `ageInDays` | number (computed) | Auto-derived from baby's DOB |
| `weight` | number (grams) | Optional |
| `length` | number (cm) | Optional |
| `headCircumference` | number (cm) | Optional |
| `weightPercentile` | number (0–100) | Optional, typically from your pediatrician's printout |
| `lengthPercentile` | number (0–100) | Optional |
| `headCircumferencePercentile` | number (0–100) | Optional |
| `notes` | string | Free text |
| `measuredBy` | string | "Pediatrician at Riverview", "Self at home", etc. |

You don't need to fill all three measurements at every entry — partial entries (just weight, for example, for a weekly home weigh-in) are fine.

## Units

| Measurement | Unit |
| --- | --- |
| Weight | Grams (the database canonical unit) |
| Length | Centimetres |
| Head circumference | Centimetres |

The form accepts imperial input (pounds-ounces, inches) and converts to the canonical metric unit on save:

- 1 lb = 453.592 g
- 1 oz = 28.3495 g
- 1 in = 2.54 cm

## Percentiles and growth charts

Percentiles answer "compared to other babies the same age and sex, where does this baby fall?" A weight at the 50th percentile means half of comparable babies weigh less, half weigh more. The 5th percentile is small for age; the 95th is large.

LifeWell stores percentiles as a number 0–100. The app does **not** compute percentiles from raw measurements automatically — that requires the WHO Child Growth Standards (0–24 months) or CDC growth charts (2+ years) lookup tables, which the app currently does not embed. Get the percentile from your pediatrician's printout or use the WHO's online growth-percentile calculator (`who.int/childgrowth`), then enter the number in LifeWell.

WHO growth standards are the international reference for breastfed infants 0–24 months; CDC charts are used in the US for older children. The AAP recommends WHO charts for ages 0–24 months and CDC charts for 2+ years.

## What growth charts tell you

| Pattern | What it suggests |
| --- | --- |
| Tracking along the same percentile over time | Normal — the baby is growing at the expected rate for their size |
| Crossing percentiles upward in early infancy | Catch-up growth after slow start, or normal post-newborn weight regain |
| Crossing percentiles downward sustained | Worth discussing with pediatrician — possible feeding adequacy issue, illness, or normal variation |
| Below 3rd percentile or above 97th sustained | Always worth discussing — most healthy babies fall within these bounds |
| Weight-for-length percentile diverging significantly from weight-for-age | Indicator of nutritional status |

Percentile *position* matters less than *trajectory*. A baby consistently at the 15th percentile is fine if she's growing along that line; a baby who drops from the 50th to the 10th over two visits warrants a conversation.

## Visualisation

The page shows three charts (weight, length, head circumference) over time — your baby's plotted values across all measurements. If percentiles are entered, the chart highlights the percentile next to each point.

A planned future improvement: overlay the WHO percentile bands (5th, 25th, 50th, 75th, 95th lines) so you can see at a glance where the baby's growth sits. Currently the chart shows your data points only; bring your pediatrician's printout to compare.

## Worked example

Your 4-month well-baby visit. The pediatrician records:

- Weight: 6.5 kg → enter 6500 g
- Length: 62 cm
- Head circumference: 41.5 cm
- Pediatrician hands you a printout showing 50th / 70th / 60th percentile respectively.

Add a growth record dated today: weight 6500, length 62, head 41.5, percentiles 50 / 70 / 60. Notes: "4-month well-baby visit, Dr Khan, all developmental screens normal."

At the next visit (6 months), add another entry and the chart shows the trajectory.

## What this log is not

- **Not a percentile calculator.** Enter the percentile from your pediatrician's printout.
- **Not a growth-failure screen.** Trajectory matters; the app does not flag crossing percentiles downward. Your pediatrician's plot of multiple visits is the right tool.
- **Not connected to smart scales** (Wi-Fi baby scales like Hatch Rest or Withings Baby). Manual entry only.
- **Not a substitute for in-person measurement.** Length is hard to measure at home; head circumference requires technique. Take pediatrician measurements as the ground truth.

## Home weighing — accuracy notes

If you weigh at home between visits, a few practical notes:

- **Use a digital scale with 100-g resolution.** Bathroom scales (1-kg resolution) are too coarse for infants.
- **Weigh nude (or in a consistent outfit)** for consistency.
- **Same time of day** (after a similar amount of time since last feed) for cleaner trend.
- **Don't obsess over daily fluctuation** — a few hundred grams variation day to day is normal and reflects feed/poop/wet/clothing differences more than real growth.

Weekly trend matters; daily fluctuation doesn't.

## Frequently asked

**My pediatrician didn't give me a percentile — what do I do?**
Ask. Or use the WHO online percentile calculator (search "WHO child growth standards calculator"). Or skip the percentile field — the raw weight/length over time still gives you a trajectory.

**Should I worry about a low percentile?**
Position alone is rarely concerning — small babies are often perfectly healthy. Trajectory matters: crossing percentiles downward over two or more visits is the pediatric flag. A consistently 10th-percentile baby growing along the 10th line is fine.

**What about premature babies?**
Use **corrected age** (chronological age minus weeks born early) for the first 2–3 years. The pediatrician's chart will use corrected age; LifeWell's age computation uses chronological age. Note the correction in your record notes.

**Can I export growth data for a specialist?**
Yes — PDF export from the page. Includes all measurements with percentiles and notes.

**Why grams not kilograms?**
Internal storage is grams to avoid floating-point conversion issues. The form accepts kg input (e.g. type 6.5 → stored as 6500 g) and displays in your selected unit on output.

## Where to read next

- [Feeding](./feeding) — feeding adequacy is the most common growth driver.
- [Milestones](./milestones) — growth and developmental milestones together.
- [Diapers](./diapers) — wet-diaper counts as adequate-hydration proxy.
- [Overview](./overview) — baby module map.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
