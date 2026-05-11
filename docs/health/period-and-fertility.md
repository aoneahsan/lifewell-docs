---
title: Period and fertility — cycle log, ovulation, BBT, OPK
description: LifeWell period and fertility tracking covers cycle history, flow, symptoms, ovulation, basal body temperature, cervical mucus, OPK, and next-cycle predictions.
keywords: [lifewell period tracker, cycle log, ovulation tracker, basal body temperature, cervical mucus, fertility awareness, opk tracker, ahsan mahmood]
sidebar_position: 8
---

# Period and fertility

**Period and fertility tracking** in LifeWell is a per-cycle log of menstrual periods plus an optional fertility-awareness layer that records basal body temperature, cervical mucus, ovulation-predictor-kit (OPK) results, and intercourse timing. The cycle history feeds a prediction model that estimates your next period, the fertile window, and the most likely ovulation day — with explicit confidence and "regularity" labels so you know how much to trust the prediction.

This surface is opt-in. Accounts marked male have it hidden by default; everyone can toggle it on or off under [Preferences → Feature visibility](/docs/profile-and-settings/preferences#feature-visibility).

## What you can log

| Layer | Fields | When to use |
| --- | --- | --- |
| Period entry | Start date, end date, daily flow intensity, symptoms, daily mood, notes | Every cycle |
| Cycle data | Auto-built from period entries — cycle number, length, period length, regularity | Read-only summary |
| Fertility data | Date, basal body temperature (BBT), cervical mucus type, cervical position, OPK result, ferning test, intercourse log, optional fertility score | Daily, if you're using fertility-awareness or trying to conceive |
| Cycle prediction | Next period, fertile window, next ovulation, confidence, regularity | Auto-computed |

You can use just the period log and never touch fertility — most users do. The fertility layer is for people actively tracking conception, contraception via fertility awareness, or investigating cycle irregularity.

## Flow intensity scale

Daily flow uses a five-step scale matching standard menstrual diaries:

- `spotting` — light enough that a panty liner suffices.
- `light` — regular flow needing one pad / tampon per several hours.
- `medium` — typical flow.
- `heavy` — needing to change every 2–3 hours.
- `very_heavy` — saturating products in under 2 hours.

You can log multiple intensities per day if it changed (e.g. heavy in the morning, medium by evening).

## Symptoms and mood

Symptoms are categorised so you can spot patterns across cycles:

- **Physical** — cramps, headache, back pain, breast tenderness.
- **Emotional** — anxiety, irritability, low mood, weepiness.
- **Digestive** — bloating, constipation, diarrhoea, nausea.
- **Skin** — acne, dryness, oiliness.
- **Energy** — fatigue, restlessness, insomnia.
- **Sexual** — increased / decreased libido, discomfort.

Each symptom is rated 1–10 for severity and tied to a timestamp so you can map "when in my cycle does this hit?".

Daily mood is logged on a 1–5 level with optional emotion tags (e.g. anxious, joyful, irritable). The mood timeline overlays on the cycle chart so cycle-phase mood patterns are visible.

## Fertility-awareness data

The fertility data layer records, per day:

| Field | What it captures |
| --- | --- |
| `bbt` | Basal body temperature in °C or °F (your selected unit) |
| `cervicalMucus` | `dry`, `sticky`, `creamy`, `watery`, `egg_white`, `unusual` |
| `cervicalPosition` | Height (low/medium/high), firmness (soft/medium/firm), opening (closed/slightly_open/open) |
| `opkResult` | `negative`, `positive`, `peak` |
| `ferningTest` | `negative`, `partial`, `full` (saliva microscope tests) |
| `sexualActivity` | Boolean + protected flag + optional timestamp + notes |
| `fertilityScore` | Optional 0–100 score the page computes from the inputs |

The standard fertility-awareness model (symptothermal method) combines BBT + cervical mucus + cervical position to identify the fertile window. The page does not replace a certified fertility-awareness teacher; it captures the inputs that any FAM approach uses.

## Predictions

After two complete cycles are logged, the prediction model produces:

| Output | Meaning |
| --- | --- |
| `nextPeriodStart` / `nextPeriodEnd` | Most likely start/end dates for the next period |
| `nextOvulation` | Most likely ovulation date |
| `nextFertileStart` / `nextFertileEnd` | The window from 5 days before ovulation through 1 day after — the conventional fertile window |
| `confidence` | 0–100 — drops as cycle variation grows |
| `isRegular` | True when standard-deviation of cycle length is < 7 days |
| `averageCycleLength` / `averagePeriodLength` | Means over your logged history |
| `cycleVariation` | The standard deviation in days |

Predictions are statistical — they reflect your past pattern, not biological inevitability. Stress, illness, travel, perimenopause, polycystic ovary syndrome (PCOS), thyroid issues, and many other factors can shift a cycle.

## Cycle statistics

The statistics panel shows:

- Total cycles logged.
- Average / shortest / longest cycle length.
- Average period length.
- Cycle regularity label (regular / irregular / very irregular).
- Most-common symptoms.
- Average symptom severity.

The American College of Obstetricians and Gynecologists (ACOG) describes a normal cycle as 21–35 days, with a period lasting 2–7 days; consistent deviation from those ranges is one signal worth discussing with a clinician.

## Reminders

You can set reminders for:

- **Next period prediction** — a heads-up 1–2 days before the expected start.
- **Fertile window opening** — a notification at the start of the predicted fertile window.
- **Daily BBT** — best taken right after waking, before getting out of bed.
- **Daily OPK** — best taken at the same time daily.

Defaults are off — turn them on under [Reminders](/docs/profile-and-settings/reminders).

## Honest framing

Period and fertility tracking in LifeWell:

- Is **not contraception**. Fertility-awareness methods, when taught and practised correctly by a certified instructor, have published efficacy rates; an app's prediction alone is not the same as following a method. If you're using FAM for contraception, work with a teacher.
- Is **not a clinical diagnostic tool**. The "irregular" label is a description of variability, not a PCOS / thyroid / perimenopause diagnosis.
- Does **not detect pregnancy**. A late period doesn't trigger a prediction confirming or denying conception. Use a pregnancy test.
- Does **not handle gender-affirming-care needs** specifically. Cycle tracking can be relevant for trans-men, non-binary, and intersex users; the app's defaults are not tailored, and we won't pretend otherwise. We welcome feedback on making the surface more inclusive.

If you have heavy bleeding, severe cramps that disrupt daily life, very short or very long cycles, or other symptoms causing concern, see a clinician. ACOG and Mayo Clinic both publish patient-facing guidance on when to seek care.

## Frequently asked

**My cycle is irregular — is the prediction useless?**
Not useless, but lower confidence. The `confidence` score reflects how predictable your cycles are. With high variation, treat predictions as rough estimates and rely more on real-time signals (OPK, cervical mucus, BBT shift).

**Why does the BBT need to be taken first thing in the morning?**
BBT measures your resting temperature, which shifts ~0.2–0.5 °C after ovulation. Movement, eating, drinking, or getting out of bed warms you up enough to obscure the signal. Most FAM teachers recommend a digital BBT thermometer left bedside, used before opening your eyes.

**Can I export my cycle history?**
Yes — the page has a PDF export with cycle history, statistics, and symptom timeline. Helpful for clinical visits.

**My data on this page is sensitive — who can see it?**
Only you. Firestore rules deny reads for any other user. The data isn't sold or shared. See [Privacy and security](/docs/concepts/privacy-and-security).

**I logged a period but the prediction didn't update — why?**
Predictions require at least two complete cycles. Until your second period is logged, the page shows symptoms and mood without a prediction.

## Where to read next

- [Pregnancy](./pregnancy) — wellness-profile pregnancy tracking.
- [Mental health](./mental-health) — mood journal alongside cycle phase.
- [Privacy and security](/docs/concepts/privacy-and-security) — how this data is protected.
- [Preferences](/docs/profile-and-settings/preferences#feature-visibility) — toggle this surface on/off.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
