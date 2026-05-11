---
title: Health module — vitals, water, meds, exercise, sleep
description: The LifeWell health module covers vitals, hydration, medications, exercise, sleep, nutrition, mental health, conditions, and reproductive health. Per-user Firestore data.
keywords: [lifewell health, vitals tracking, water intake, medication reminders, exercise log, sleep tracker, nutrition log, ahsan mahmood]
sidebar_position: 1
---

# Health module overview

The LifeWell **health module** is the collection of feature surfaces that let you log, review, and graph the everyday signals of physical and mental health — vitals, hydration, medications, exercise, sleep, nutrition, mental-health journaling, conditions, reproductive health, and medical records. Every entry is owned by your account, stored under a `userId`-scoped document in Firestore, and synced across the surfaces (web, Android, browser extension) you sign in on.

This page is the map. It tells you which surfaces exist, what each one tracks, where the data lives, and what the module deliberately does **not** do — so you can decide where to start and what to expect.

## Surfaces inside the health module

| Surface | What it tracks | Page |
| --- | --- | --- |
| Vitals | Blood pressure, blood sugar, heart rate, BMI, weight, height | [Vitals](./vitals) |
| Water | Per-glass hydration log with a daily goal | [Water tracking](./water-tracking) |
| Medications | Name, dose, schedule, adherence, refill stock | [Medications](./medications) |
| Exercise & workouts | Walking, yoga, stretching, timers, kegel trainer | [Exercise and workouts](./exercise-and-workouts) |
| Sleep | Duration, quality, naps, sleep sounds, dreams | [Sleep](./sleep) |
| Nutrition & diet | Calories per meal, meal planner, portions, recipes, fasting | [Nutrition and diet](./nutrition-and-diet) |
| Mental health | Affirmations, breathing, gratitude, mood, panic-attack tools | [Mental health](./mental-health) |
| Conditions | Allergies, asthma, arthritis, migraine, PCOS, menopause | [Conditions](./conditions) |
| Period & fertility | Cycle log, ovulation prediction | [Period and fertility](./period-and-fertility) |
| Pregnancy | Week tracker, prenatal checklist | [Pregnancy](./pregnancy) |
| Breastfeeding | Sessions, side, duration | [Breastfeeding](./breastfeeding) |
| Medical records | Lab results, vaccinations, medical history | [Medical records](./medical-records) |

Twelve top-level surfaces, ~45 individual tracking tools underneath them. You don't have to use all of them — you can hide entire surfaces from your nav under [Preferences → Feature visibility](/docs/profile-and-settings/preferences#feature-visibility).

## How health data flows

Every entry follows the same three-stage path:

1. **You log it** in a form (manual entry — LifeWell does not connect to wearables or medical devices).
2. **The store writes it** into a Zustand store backed by Capacitor Preferences for offline-first reading.
3. **The service syncs it** to a Firestore collection scoped to your `userId`. The Firestore rules deny reads and writes for any other user.

That means: every entry is offline-readable the moment you've logged it on a given device, and re-readable across devices once the next snapshot listener fires (usually within a few seconds of internet connectivity returning).

Read more about the underlying [data model](/docs/concepts/data-model) and the [offline-first design](/docs/concepts/offline-first-design).

## What's manual, what's automatic

LifeWell is, by design, a **manual-entry health tracker**. The signals you store are the signals you typed in. Nothing in the app:

- Reads from Apple Health, Google Fit, Samsung Health, or any wearable.
- Connects to a Bluetooth glucometer, BP cuff, or scale.
- Imports lab results via API from a provider portal — you take a photo or type in the value.
- Predicts your future readings or auto-fills missing ones.

What is automatic:

- **Daily, weekly, monthly aggregates** — the dashboard rolls up your logs.
- **Reminders** — water, medications, blood pressure, weight, and so on can ping you on the schedule you set (see [Reminders](/docs/profile-and-settings/reminders)).
- **Achievement progress** — streaks for hitting your hydration or step goal increment automatically.
- **Wellness-score input** — if you keep wellness scoring on, your health-module entries feed it (see [Wellness scoring](/docs/concepts/wellness-scoring)).

The trade-off is privacy: manual entry means your medical sensors never need to be paired with LifeWell.

## Privacy posture

Every page in this module is opt-in. You can hide entire surfaces, you can delete an individual entry from the log, you can bulk-delete a feature's entries from the profile data-controls page, and you can delete the entire account (which schedules a 30-day deferred purge — see [Security](/docs/profile-and-settings/security)).

LifeWell does not:

- Sell or share your health data with advertisers.
- Mine your entries for model training.
- Aggregate your data into a community-benchmark dataset (no "how do I compare to other 40-year-olds?" because we don't build that table).

Detailed posture: [Privacy and security](/docs/concepts/privacy-and-security).

## What this module is **not**

Calling out the limits up front so you can decide if LifeWell fits:

- **Not medical advice.** Tracking your blood pressure here does not replace a clinician. The category labels ("Normal", "Stage 1") follow standard public-health reference ranges, not personalised guidance.
- **Not a diagnostic tool.** The pages flag obviously dangerous values (e.g. a "Hypertensive Crisis" label when systolic ≥ 180 or diastolic ≥ 120) but the surfaced text is a prompt to seek care, not a diagnosis.
- **Not an insurance-grade record.** LifeWell entries are self-reported and unaudited. If you need a formal medical record for a clinician or insurer, ask your provider for one.
- **Not a substitute for emergency services.** If you're in crisis, contact local emergency services or a relevant hotline — LifeWell cannot route help to you.

## Where to start

If you're new, three good entry points:

- **Vitals** — fastest way to see how the log → trend chart loop works.
- **Water tracking** — quick wins, builds the daily-target habit.
- **Sleep** — minimal inputs, immediately useful for spotting patterns.

Then layer in medications, exercise, nutrition, and mental health as you build trust with the app.

## Frequently asked

**Do I have to use all the surfaces?**
No. The defaults try to show only what's relevant — pregnancy and breastfeeding are off until you opt in, period & fertility is off for accounts marked male — and you can hide any surface you don't want under Preferences.

**Can I import old data from another app?**
There is no general health-data import yet. If your old app exports a CSV, you can re-enter the most useful entries by hand. Bulk programmatic import is a future improvement; ping [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) if you need it.

**What happens to my health data if I delete my account?**
Deletion is scheduled with a 30-day grace window. After the window closes, every collection under your `userId` (including all health-module entries, vitals, water, medications, etc.) is removed.

**Where can I see all my health entries at once?**
There is no single "all health entries" export view yet. You can export per-surface PDFs from each surface's page, and a unified export is on the roadmap.

**Is LifeWell HIPAA-compliant?**
LifeWell is a consumer self-tracking app, not a covered entity under HIPAA. Treat it accordingly — useful for personal records and reminders, not as a clinician-bound EHR.

## Where to read next

- [Vitals](./vitals) — blood pressure, blood sugar, heart rate, BMI.
- [Water tracking](./water-tracking) — hydration log with formula-based goals.
- [Medications](./medications) — schedules, adherence, refill alerts.
- [Privacy and security](/docs/concepts/privacy-and-security) — what LifeWell does and doesn't do with your data.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
