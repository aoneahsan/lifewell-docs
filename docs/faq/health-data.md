---
title: Health data FAQ — accuracy, wearables, medical advice
description: Frequently asked questions about LifeWell health tracking — accuracy of manual entry, wearable integration, whether it's medical advice, what to do with the data.
keywords: [health data faq, manual entry accuracy, wearable integration, not medical advice, ahsan mahmood]
sidebar_position: 2
---

# Health data FAQ

## Is LifeWell medical advice?

**No.** LifeWell is a personal tracker — you log; the app records and graphs. Categories shown (e.g. "Hypertension Stage 1" for BP, "Normal" for BMI) follow standard public-health cutoffs (ACC/AHA, WHO) but **don't constitute a clinical diagnosis or treatment plan**. For medical decisions, see a clinician.

## How accurate is the data?

The accuracy of LifeWell's data depends on **you** — every entry is typed in. There's no auto-capture from wearables (yet). Some entries are objective (a BP cuff reading you transcribe) and accurate to the cuff; others are subjective (mood, sleep quality) and depend on your perception.

For the most clinical use cases (medication adherence, BP trends for your doctor), be consistent (same time, same conditions) and the trends will be meaningful even if absolute values vary.

## Why doesn't LifeWell auto-import from Apple Health / Google Fit?

Wearable integrations require platform-specific OAuth + scope approvals + complex data-model mappings. Each is a meaningful engineering project. We launched without them to ship the core product faster. They're on the roadmap.

For now, you can:

- Use a wearable for continuous tracking.
- Use LifeWell as the lifestyle / memory / family / community layer above the wearable.
- Manually transcribe key readings if you want them in LifeWell's history.

## How do I share my data with my doctor?

Every health surface has a PDF export. The export bundles the relevant entries (e.g. last 90 days of BP readings) into a single document. Bring it to your appointment — most clinicians prefer a printout to an account login.

## Can I trust the BP category labels?

The category labels follow ACC/AHA 2017 cutoffs — the same cutoffs used by clinical-grade home BP monitors. They're general reference, not personalised guidance. If a reading flags as "Hypertensive Crisis", the app shows a banner urging clinical care; if it flags as "Normal" but you have concerns, see your clinician anyway.

## Is the wellness score "real"?

The wellness score is a 0-100 composite of several daily-tracked behaviours (water, sleep, exercise, mood, etc.). It's not validated as a clinical biomarker. It's a daily summary metric for personal use — useful for spotting trends, not for clinical assessment. You can opt out entirely in [Preferences](/docs/profile-and-settings/preferences#wellness-score-toggle).

## What about pregnancy?

Pregnancy mode is opt-in in your wellness profile. It adapts the rest of the app (trimester-aware exercise filter, water-hydration bonus, etc.) but **doesn't replace prenatal care**. See [Pregnancy](/docs/health/pregnancy) for details.

## What about period / fertility tracking?

The period & fertility surface lets you log cycles, symptoms, BBT, cervical mucus, OPK results. It predicts your next period and fertile window based on past cycles. **It's not contraception** — fertility-awareness methods require certified instruction to be reliable for contraception. See [Period and fertility](/docs/health/period-and-fertility).

## Why is my data not appearing on my other device?

Sync should be automatic within seconds. If it's stuck:

1. Pull-to-refresh on the device that's missing data.
2. Check internet connectivity on both devices.
3. Sign out and back in on the second device.

If that doesn't work, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## Why doesn't LifeWell read my Bluetooth scale / cuff?

Direct Bluetooth-device integration requires platform-specific work + per-device-model parsing logic. It's not built. You'd transcribe the reading manually for now.

## Can I delete a specific entry?

Yes — tap any entry in any log → **Delete**. Immediate locally; syncs within seconds.

## What if I made a mistake in my entry?

Tap the entry → **Edit** → fix it → save. Edits propagate same as creates.

## Where do I read next?

- [Health module](/docs/health/overview) — the full health-tracking module.
- [Privacy FAQ](./privacy) — privacy questions.
- [General FAQ](./general).

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
