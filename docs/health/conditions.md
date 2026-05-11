---
title: Conditions — allergies, asthma, arthritis, migraine, PCOS, menopause
description: LifeWell condition tracking logs severity (1–10) and notes per episode for allergies, asthma, arthritis, migraine, PCOS, menopause, and general symptoms.
keywords: [lifewell conditions, allergy tracker, asthma log, arthritis pain, migraine diary, pcos symptoms, menopause tracker, symptom log, ahsan mahmood]
sidebar_position: 12
---

# Conditions

**Conditions** in LifeWell is a per-condition severity log. Each surface (allergies, asthma, arthritis, migraine, PCOS, menopause, plus a generic symptoms page) shares the same shape: pick the condition, log an episode with severity on a 1–10 scale, and optionally add a note describing what happened. Over time the page shows a trend chart of severity per episode, so you can see whether things are improving, worsening, or seasonally cyclical.

The conditions surface is designed for the people who actually live with these conditions and want a simple log to bring to a clinician. It is not a diagnostic tool, a triage tool, or a substitute for clinical care.

## Conditions covered

| Condition | What you log | Cited reference |
| --- | --- | --- |
| [Allergies](./conditions) | Episode severity (1–10) + notes (trigger, location, duration) | Mayo Clinic "Allergy" patient page |
| [Asthma](./conditions) | Episode severity + notes (trigger, peak-flow reading, rescue inhaler use) | NHLBI "Asthma" guidelines |
| [Arthritis](./conditions) | Pain severity + notes (joint, time of day, activity correlation) | Arthritis Foundation patient resources |
| [Migraine](./conditions) | Severity + notes (aura, duration, triggers, medication taken) | American Migraine Foundation guide |
| [PCOS](./conditions) | Symptom severity + notes (irregular cycles, acne, weight, mood) | ACOG PCOS patient page |
| [Menopause](./conditions) | Symptom severity + notes (hot flashes, sleep, mood) | NHS / Mayo Clinic menopause guidance |
| Generic symptoms | Any symptom — pick a category and severity | — |

Every surface uses the same form because the patterns most people need (severity over time, trigger notes, when you took rescue medication) are the same across conditions. Specialised tools (peak-flow logs for asthma, joint-specific arthritis trackers, PCOS-specific lab panels) are not the priority — a good general log that's frictionless to use beats a perfect specialised log you stop using after a week.

## Severity scale (1–10)

The severity scale is shared across every condition surface so that the chart is comparable:

| Score | What it means |
| --- | --- |
| 1–2 | Barely noticeable, no functional impact |
| 3–4 | Noticeable, mild discomfort, full function |
| 5–6 | Moderate — affects concentration or some activities |
| 7–8 | Severe — disrupts most activities |
| 9–10 | Disabling — unable to function until episode passes |

The descriptions are reference points, not strict rules. Pick the closest one — the value of this number is the trend across episodes, not the precision of any single rating.

## What the page shows

For each condition:

- An **add-episode form** (severity + notes).
- A **trend chart** of severity per episode over time.
- An **average severity** across the last 10 entries.
- A **scrollable log** of past episodes with timestamps.

You can edit or delete individual episodes; both update locally and sync to Firestore.

## How to use the notes field well

The severity score alone is information; the notes field is where the pattern hides. Useful things to write down:

- **Trigger** — what you ate, where you were, what was happening (stress, weather, hormones, sleep).
- **Time of onset** — important for migraine (aura → headache delay) and asthma (early-morning, post-exercise).
- **Medication taken** — rescue inhaler, NSAID, triptan, antihistamine, beta-blocker, etc., with dose.
- **What helped / didn't** — moved to a dark room, ice pack, lying down, walking.
- **Duration** — minutes, hours, or days.

After 20–30 episodes the notes field becomes the most useful part of the page — a pattern in your handwriting (well, typing) that no aggregate statistic can capture.

## Privacy and data export

Like every health surface, conditions data is per-account, Firestore-rule-protected, never sold, never mined for AI training. The notes field is highly personal text and lives only in your account.

You can export the full condition log as a PDF from each page's header — useful for specialist appointments where the question is "how often does this happen, what does it feel like, what makes it better or worse?". The PDF includes the severity chart, every episode entry with its note, and the average severity.

## What conditions tracking is not

Condition logs in LifeWell are:

- **Not a diagnosis.** Logging "Migraine" episodes does not mean you have migraine as a clinical condition. Diagnosis is a clinician's job and requires a clinical history and ruling out other causes.
- **Not a substitute for specialist follow-up.** Severe or persistent symptoms warrant clinical attention.
- **Not a triage tool.** The app does not flag a high severity as "you need to go to the ER." If you're in distress, get help.
- **Not pharmacy-integrated.** Rescue inhaler use, NSAID dose, etc. are notes — the app does not check interactions or refill stock for these. Use [Medications](./medications) for medication-level tracking.
- **Not connected to wearables.** Peak flow, joint swelling, skin reaction extent — all manual entry. No sensor integration.

## Specific notes per condition

### Migraine

Migraine attacks have variable presentation. The notes field is especially useful here — record aura (visual, sensory, dysphasic), prodrome symptoms (mood, food cravings, neck stiffness in the hours before), trigger candidates, the medication you took, and the time-to-relief. Over many entries this builds the kind of diary a neurologist can use.

The American Migraine Foundation publishes a free migraine diary template; the LifeWell migraine page captures the same essentials.

### Asthma

For asthma, the most clinically useful note is **rescue inhaler use**. The NHLBI guidelines describe escalating rescue-inhaler frequency as a sign of poor control. Logging "Used albuterol 2 puffs at 14:30 after climbing stairs" is exactly the data your pulmonologist wants.

A peak-flow integration is on the roadmap. For now, type your peak-flow reading into the notes field.

### PCOS

PCOS symptom tracking benefits from being paired with the [period-and-fertility](./period-and-fertility) surface — irregular cycles are a core PCOS symptom. The conditions PCOS page captures the rest: skin (acne, hirsutism), mood, weight trend, energy.

The ACOG patient page on PCOS is a good reference for context.

### Menopause

Menopause symptom tracking covers hot flashes, sleep disruption, mood shifts, irregular cycles in perimenopause. The NHS and Mayo Clinic both publish patient-facing menopause guides; LifeWell logs your symptoms but does not advise on hormone-replacement therapy decisions — those are clinician conversations.

## Frequently asked

**There's no surface for my condition.**
Use the generic [symptoms](./conditions) page. It logs any symptom by category and severity. If your condition is common enough that a dedicated surface would help others, ping [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

**Can I tag an episode with multiple conditions?**
Not yet — each entry lives on one surface. If your migraine episode was triggered by an asthma flare, log on both surfaces with a cross-reference in the notes.

**How do I share the log with my doctor?**
PDF export from the page header. Most specialists prefer this to an account login.

**Can I disable the conditions surface entirely?**
Yes — hide it under [Preferences → Feature visibility](/docs/profile-and-settings/preferences#feature-visibility). Hiding doesn't delete the data; re-enabling restores the surface with everything intact.

**My severity ratings drift higher over time — is the app encouraging it?**
No, the form doesn't push toward any value. People's reference points shift with experience — your first migraine at "5" might feel like a "3" after the tenth. This is normal. The notes field captures the qualitative reality that the number alone can't.

## Where to read next

- [Medications](./medications) — log the medications you take for these conditions.
- [Medical records](./medical-records) — labs, vaccines, history.
- [Period and fertility](./period-and-fertility) — useful for hormonal conditions.
- [Mental health](./mental-health) — chronic-condition impact on mood.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
