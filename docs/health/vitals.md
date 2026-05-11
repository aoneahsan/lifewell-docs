---
title: Vitals — blood pressure, sugar, heart rate, BMI, weight
description: LifeWell vitals log blood pressure, blood sugar, heart rate, BMI, weight, and height. Manual entry only — categories follow standard public-health cutoffs.
keywords: [lifewell vitals, blood pressure log, blood sugar log, heart rate tracker, bmi calculator, weight tracker, manual entry, ahsan mahmood]
sidebar_position: 2
---

# Vitals

**Vitals** in LifeWell is the surface where you log the everyday measurements a clinician or fitness coach would ask you to track — blood pressure, blood sugar, heart rate, body mass index, weight, and height. Every entry is a manual input you type in (LifeWell does not pair with cuffs, glucometers, smartwatches, or scales), and every entry is timestamped, stored under your `userId`, and graphed alongside its trend.

Each vital is its own page so you only see the inputs that apply, and each page surfaces the standard reference cutoffs (ACC/AHA categories for blood pressure, ADA cutoffs for blood sugar, etc.) so a reading isn't just a number floating in the void.

## What you can log

| Vital | Inputs | Unit | Notes |
| --- | --- | --- | --- |
| Blood pressure | Systolic, diastolic, optional pulse, optional "medication taken" flag | mmHg | Validation range: systolic 50–250, diastolic 30–150 |
| Blood sugar | Glucose, optional insulin dose, meal-type context | mg/dl or mmol/L | Validation range: 20–600 mg/dl |
| Heart rate | BPM + activity context (resting, walking, exercising, etc.) | bpm | Tagged "Bradycardia" / "Normal" / "Tachycardia" when activity is "resting" |
| BMI | Weight + height (metric or imperial input, normalised to kg/cm) | kg/m² (computed) | Auto-calculates BMI and category from the inputs |
| Weight | Weight only | kg or lb | Tracked separately from BMI for users who don't want height each time |
| Height | Height only | cm or ft-in | One-time per growth-stage reading |

You can switch metric ↔ imperial per-vital under [Preferences → Units](/docs/profile-and-settings/preferences#units) — defaults are metric, but the BMI form has its own toggle for users who only think in pounds and inches.

## Blood pressure categories

LifeWell labels each reading using the ACC/AHA 2017 categories — the same cutoffs every modern home BP monitor uses:

| Category | Systolic (mmHg) | Diastolic (mmHg) |
| --- | --- | --- |
| Normal | < 120 | and < 80 |
| Elevated | 120–129 | and < 80 |
| Hypertension Stage 1 | 130–139 | or 80–89 |
| Hypertension Stage 2 | ≥ 140 | or ≥ 90 |
| Hypertensive Crisis | ≥ 180 | or ≥ 120 |

A "Hypertensive Crisis" reading triggers prominent on-screen text recommending you seek medical attention. That is informational, not a clinical assessment.

For "medication taken" tracking, the form has a checkbox you tick when you log a reading right after taking a prescribed BP medication — the trend chart shades those entries differently so you can see whether your control is improving on the regimen.

## Blood sugar context tags

A glucose reading without context (fasting? after lunch? bedtime?) is hard to interpret. The blood-sugar form requires a meal-type tag, chosen from:

- Fasting
- Before breakfast / After breakfast (2 hours)
- Before lunch / After lunch (2 hours)
- Before dinner / After dinner (2 hours)
- Bedtime

This lets the trend chart group readings by context so you can see "are my fasting numbers trending up?" instead of one flat noisy line. Insulin dose is optional — type it in when relevant and skip it when not.

## Heart rate zones

For "resting" activity, the heart-rate page labels readings:

- **Bradycardia** when BPM < 60 (note: well-trained athletes routinely sit below 60 — this is a flag, not a diagnosis)
- **Normal** when BPM is 60–100
- **Tachycardia** when BPM > 100

For non-resting activity (walking, exercising), no label is applied — the elevated reading is expected.

## BMI calculation

BMI is computed locally from your inputs using `BMI = weight_kg / (height_m)²`. Imperial inputs are converted to metric before the calculation:

- 1 lb = 0.453592 kg
- 1 in = 2.54 cm

The standard WHO categories label the result:

| Category | BMI |
| --- | --- |
| Underweight | < 18.5 |
| Normal | 18.5 – 24.9 |
| Overweight | 25 – 29.9 |
| Obese | ≥ 30 |

BMI is a population-level screening signal — it doesn't distinguish muscle from fat, and it's a poor indicator for very athletic builds. Use it as one input among many, not as the metric.

## Weight tracking

The weight surface is separate from BMI because most users want to log weight frequently (daily, weekly) but only re-input height when there's actually a change. Weight entries graph as a line chart; you can switch the chart to weekly or monthly aggregates from the page header.

Reminders for weight default to a **weekly** ping — daily weighing creates more noise than signal for most people.

## Reminders for vitals

Each vital can have its own reminder schedule under [Reminders](/docs/profile-and-settings/reminders):

| Vital | Suggested cadence |
| --- | --- |
| Blood pressure | Daily — usually morning + evening per clinician guidance |
| Blood sugar | Per meal — fasting + 2 hours after each meal if your provider asks |
| Heart rate | Weekly (resting); per workout otherwise |
| BMI | Quarterly |
| Weight | Weekly |
| Height | Annually (or never, for adults) |

You override these per-reminder. The defaults are starting points.

## Trend charts

Every vital page shows a per-vital trend chart powered by D3.js — entries on the X axis, value on the Y axis. The chart range defaults to **7 days** for blood pressure / blood sugar / heart rate (where day-to-day noise matters) and **30 days** for weight / BMI (where you want to see the longer slope). You can swap the range from the chart header.

## Honest framing

Vitals tracking in LifeWell does not:

- **Diagnose conditions.** A "Hypertension Stage 2" label means your reading sits in that bracket — it does not mean you have hypertension as a clinical condition. That requires multiple readings under controlled conditions and a clinician's assessment.
- **Replace your clinician's records.** LifeWell entries are self-reported. Your clinician's records remain the formal medical record.
- **Detect trends automatically.** The chart shows what you logged; we do not run statistical change-point detection on your data.
- **Auto-fill missing days.** A gap is a gap.

## Frequently asked

**Can LifeWell read my Bluetooth BP cuff or glucometer?**
No. Every entry is typed in manually. Pairing with medical devices is a feature on the long-term roadmap — see [Reference → Third-party integrations](/docs/reference/third-party-integrations).

**Why does my BMI page say "Normal" while my doctor said I should lose weight?**
BMI is a screening number; clinical assessment looks at body composition, family history, and many other inputs. The label here is the WHO category for your inputs and nothing more.

**Can I export my vitals as a PDF for my doctor?**
Yes — each vital page has a PDF export from the page header. The export includes the last 30 / 90 / 365 days based on your selection.

**What if I want to delete a wrong entry?**
Tap the entry in the log list, then **Delete**. The entry is removed from the local store immediately and from Firestore within the next sync (usually seconds).

**My pulse on the BP form is optional — is it just decorative?**
Pulse is captured alongside BP because most home cuffs display it. It's not used in the category labels, but it's stored and graphed on the heart-rate trend chart.

## Where to read next

- [Water tracking](./water-tracking) — quick-log hydration.
- [Medications](./medications) — schedules and adherence.
- [Medical records](./medical-records) — lab results, vaccinations, history.
- [Reminders](/docs/profile-and-settings/reminders) — set per-vital reminder schedules.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
