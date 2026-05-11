---
title: Pregnancy — week tracker, phase-aware safety, hydration boost
description: LifeWell pregnancy mode flips on trimester-aware filters across exercise, water tracking, and reminders. Tracking lives in your wellness profile.
keywords: [lifewell pregnancy, pregnancy tracker, trimester safety, prenatal water, pregnancy exercise, wellness profile, ahsan mahmood]
sidebar_position: 9
---

# Pregnancy

**Pregnancy** in LifeWell is not a single feature page — it's a mode you turn on in your wellness profile that quietly adapts the rest of the app: exercise filters to trimester-safe routines, the water-tracking auto-calc adds a hydration bonus, and the dashboard surfaces a week-by-week summary. The intent is to put pregnancy-aware behaviour into the surfaces you already use, rather than make you visit a separate pregnancy module.

This page covers what turns on, where to find each piece, and the important caveats.

## How to enable pregnancy mode

In **Profile → Wellness profile** (`/profile/wellness`):

1. Toggle **Pregnancy** on.
2. Enter your last menstrual period (LMP) date or due date — the app computes the missing one using the standard Naegele's rule (LMP + 280 days for due date; due date − 280 days for LMP).
3. Optionally enter clinician-recorded info: high-risk flag, conditions, restrictions.

The toggle is opt-in. The wellness profile is the single source of truth for pregnancy state — turning it on here flips the relevant behaviour in other surfaces.

## What changes when pregnancy mode is on

| Surface | Behaviour |
| --- | --- |
| Dashboard | Surfaces a "Week N of 40" indicator and the current trimester |
| Exercise | Hides exercises whose `phaseSafe` tuple doesn't include your current trimester; shows "caution" badges on routines tagged for the current pregnancy week (e.g. weeks where extra care is recommended) |
| Workout / interval timer | High-intensity presets disabled by default; can be re-enabled with explicit confirmation |
| Water tracking | Auto-calc formula adds 300 ml ("active phase") or 700 ml ("breastfeeding" if also on) on top of the weight-and-activity baseline |
| Mental health | Surfaces are unchanged; the breathing tool may be useful for labour preparation |
| Reminders | Default schedules unchanged; you can add prenatal-appointment reminders |
| Community | The pregnancy community group (if any in your locale) appears in the suggested-communities surface |

## Tracking what's stored

The pregnancy state lives in the wellness profile document under your user record. Fields:

| Field | Meaning |
| --- | --- |
| `pregnancyEnabled` | The on/off toggle |
| `lmpDate` | Last menstrual period date |
| `dueDate` | Estimated due date (computed or entered) |
| `currentWeek` | Computed from today minus LMP |
| `trimester` | 1 (weeks 1–13), 2 (weeks 14–27), 3 (weeks 28–40+) |
| `isHighRisk` | Self-flagged or clinician-flagged |
| `conditions` | Free-text list of conditions requiring exercise modifications |
| `restrictions` | Free-text list of doctor's restrictions |

The current week and trimester refresh daily so the rest of the app picks up phase changes without you having to do anything.

## Exercise phase-safety

Every exercise in the LifeWell library is tagged with a `phaseSafe` tuple `[firstTrimester, secondTrimester, thirdTrimester]`. With pregnancy mode on, the exercise library:

- Hides routines where the tuple doesn't include your trimester.
- Shows a "second-trimester-only" or "third-trimester-only" badge on routines that aren't first-trimester-safe but become safe later.
- Surfaces a "caution" badge on routines flagged with your current pregnancy week.
- Disables high-intensity workout-timer presets by default; you can override with a confirmation.

These tags follow general public-health guidance (e.g. ACOG, the Royal College of Obstetricians and Gynaecologists, the American Pregnancy Association) — they are not personalised clinical guidance.

## Water bonus

The water-tracking auto-calculation adds:

- **+300 ml** when "active phase" (pregnancy) is on, baseline + activity + climate multipliers still apply.
- **+700 ml** when "breastfeeding" is on (additive — you can be in both states simultaneously, e.g. tandem pregnancy and breastfeeding).

A 70-kg moderately-active pregnant person in a temperate climate gets `70 × 30 × 1.20 + 300 = 2820` → rounded to **2800 ml**. The same person breastfeeding adds another 700 → **3500 ml**.

These bumps approximate the Institute of Medicine's adequate-intake increase for pregnancy and lactation; individual needs vary, and your obstetrician's recommendation supersedes the formula.

## Symptom tracking during pregnancy

The general [symptoms](./conditions) page works the same in pregnancy — log any symptom by category and severity, with notes. Some symptoms have explicit "see your clinician" framing in their description (severe bleeding, persistent severe headache, vision changes, sharp abdominal pain, reduced foetal movement after 28 weeks). The framing is text on the page; the app does not auto-notify a clinician or emergency services.

## What pregnancy mode does not do

LifeWell pregnancy mode is a lightweight adapter, not a comprehensive prenatal app. It does **not**:

- **Schedule prenatal-care visits.** Add appointment reminders manually via [Reminders](/docs/profile-and-settings/reminders).
- **Track foetal kick counts** as a structured tool. You can use notes on a symptom entry; a dedicated kick counter is on the roadmap.
- **Provide week-by-week development content** (e.g. "your baby is the size of a lime"). For that, refer to a trusted source like ACOG's patient pages, the NHS Pregnancy Guide, or the Mayo Clinic Pregnancy Week-by-Week.
- **Replace the clinician-issued maternity care plan.** Treat LifeWell as a personal log alongside professional care.
- **Estimate due dates with ultrasound-based revisions.** The app uses Naegele's rule from LMP. If your clinician issued a revised EDD from an early ultrasound, enter that date in the due-date field directly.

If you're managing a high-risk pregnancy, want a kick-counter, or need integration with a clinician portal, LifeWell is a complement to — not a substitute for — your maternity-care team.

## Postpartum

When you mark the pregnancy ended (whether birth, miscarriage, or termination), pregnancy mode flips off. The app does not automatically toggle on breastfeeding mode — that is a separate opt-in, since not everyone breastfeeds and toggling without consent would be presumptuous.

The pregnancy history is preserved in your record (so future cycles or pregnancies can reference past data), and you can export it. Mental-health resources, the [breastfeeding tracker](./breastfeeding), and the [baby module](/docs/baby/overview) are the relevant next surfaces.

## Frequently asked

**I don't know my LMP exactly.**
Enter your best estimate; you can adjust as more information emerges. Many clinicians revise the estimated due date after the dating ultrasound — type the revised date directly into the due-date field and let the app recompute LMP backward.

**Are the exercise phase-safety tags reliable for me?**
They're general public-health guidance. If your obstetrician has cleared you for activities outside the defaults, override them. If you've been told to restrict activity, follow that direction over what the app shows.

**Why doesn't pregnancy mode lower my calorie target automatically?**
Calorie targets in pregnancy depend on pre-pregnancy BMI, weight gain trajectory, multiple-pregnancy status, and your clinician's recommendation. There's no safe one-size formula, so we don't auto-set one. The Institute of Medicine publishes BMI-stratified weight-gain ranges; use those + your clinician's input to set your target manually.

**My pregnancy mode says "Week 27" but I'm actually 28 weeks per my doctor.**
The app counts from LMP using Naegele's rule. Clinicians may use a slightly different anchor (LMP, ultrasound dating, conception date). Update your LMP/EDD to match what your clinician uses and the count will align.

**Can I share my pregnancy log with my partner?**
Yes — via the partner-sharing feature under [Profile → Data sharing](/docs/profile-and-settings/data-sharing). Granular per-surface; you can share pregnancy-related data without sharing your full profile.

## Where to read next

- [Wellness profile](/docs/profile-and-settings/profile-overview) — where the pregnancy state lives.
- [Exercise and workouts](./exercise-and-workouts) — how the phase-safety tagging works.
- [Water tracking](./water-tracking) — the hydration auto-calc with pregnancy bonus.
- [Baby module](/docs/baby/overview) — for after birth.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
