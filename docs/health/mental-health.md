---
title: Mental health — mood, breathing, gratitude, panic-attack tools
description: LifeWell mental health includes a mood journal, breathing timer, gratitude log, affirmations, meditation, stress assessment, and panic-attack grounding tool.
keywords: [lifewell mental health, mood journal, breathing exercise, gratitude journal, affirmations, meditation timer, panic attack tool, ahsan mahmood]
sidebar_position: 11
---

# Mental health

The **mental health** surface in LifeWell groups seven daily-use tools: a structured mood journal, a guided breathing timer, a gratitude log, a daily-affirmations carousel, a meditation timer, a stress-assessment quiz, and a panic-attack grounding tool. Together they cover the everyday practices most people benefit from (logging, reflecting, breathing, pausing) and one in-the-moment crisis aid (the panic-attack tool).

The tools here are **self-management aids**, not clinical interventions. They sit alongside professional support, not in place of it. Specific framing on what each does and does not do is in each tool's description below.

## Tools at a glance

| Tool | What it does | Frequency |
| --- | --- | --- |
| Mood journal | Log mood (1–5 with emoji), activities, factors, free-text note | Daily |
| Breathing | Guided box-breathing / 4-7-8 / extended-exhale timer | Anytime |
| Gratitude | Free-text "three things" gratitude entry | Daily |
| Affirmations | Carousel of curated affirmations with optional custom additions | Anytime |
| Meditation | Configurable silent or chime-cued timer | Anytime |
| Stress assessment | A short questionnaire returning a stress-level summary | Weekly or as needed |
| Panic-attack tool | A guided 5-4-3-2-1 grounding sequence + paced breathing | When you need it |

## Mood journal

The mood journal is a daily check-in. Each entry stores:

- **Mood** — one of five options on the curated list (each with an emoji, label, value 1–5, and one-line description). The exact list lives in `src/data/health/mood-options.json` and is consistent across the app.
- **Activities** — multi-select tags (work, exercise, family, friends, hobbies, rest, etc.) for what you were doing.
- **Factors** — multi-select tags (sleep, weather, social, food, screens, hormones, news, etc.) for what may have shaped your mood.
- **Notes** — free text for anything you want to remember about today.

The page shows a trend chart of mood values over time, day-over-day deltas (with up/down/neutral indicators), and most-frequent activities and factors. After two weeks of daily logging, the pattern view shows correlations like "your mood is higher on days you log exercise."

Note: correlations are descriptive, not causal. "Mood is higher on exercise days" can mean exercise lifts mood, or that you exercise on days you'd already feel better, or both. The page does not claim causation.

## Breathing

The breathing tool is a paced-breathing timer with three preset patterns:

| Pattern | In | Hold | Out | Hold | Use |
| --- | --- | --- | --- | --- | --- |
| Box breathing | 4 s | 4 s | 4 s | 4 s | General calming |
| 4-7-8 | 4 s | 7 s | 8 s | 0 s | Wind-down, pre-sleep |
| Extended exhale | 4 s | 0 s | 6 s | 0 s | Stress response interruption |

The screen pulses an expanding/contracting circle in time with the breath, with optional audio cues. A custom pattern lets you set your own seconds.

Research on slow-paced breathing (controlled-breathing protocols at ~6 breaths/min) has shown short-term reductions in self-reported stress and blood pressure in published studies (search PubMed for "slow paced breathing"). The 4-7-8 protocol popularised by Dr Andrew Weil is a specific variant of paced breathing. LifeWell provides the timer; the practice and benefits are yours.

## Gratitude

The gratitude tool prompts a "three things you're grateful for today" entry, with optional context for each item. Entries are date-indexed, searchable within the gratitude page, and not surfaced anywhere else in the app unless you choose to share them.

Studies on regular gratitude practice (notably Emmons & McCullough's work in the *Journal of Personality and Social Psychology* 2003) report associations with improved subjective wellbeing. The app does not measure your wellbeing — it captures the practice and leaves the result to you.

## Affirmations

The affirmations page is a carousel of curated affirmations. You can:

- Browse the curated set.
- Favourite affirmations.
- Add your own custom affirmations to the rotation.
- Share an affirmation as an image (export-to-image).

This is a content surface, not a tracking surface — there is no "how many affirmations did you read today" counter. The tool exists to make a small daily practice frictionless.

## Meditation

A configurable meditation timer with:

- **Duration** — 1 to 60 minutes.
- **Start chime** — bell, bowl, or none.
- **Interval chimes** — every N minutes, optional.
- **End chime** — bell, bowl, or fade.
- **Background sound** — optional integration with the [sleep sounds](./sleep) mixer.

Sessions log start time, duration, and an optional note. The page shows a per-week minutes-meditated total and a streak counter.

This is a meditation **timer**, not a guided-meditation library. There is no audio-guided programme. If you want guided meditations, an app like Insight Timer or Calm is better suited; LifeWell is the timer + log.

## Stress assessment

A short multi-item self-assessment questionnaire (based on validated public-health stress-perception questions). You answer ~10 items on a 1–5 scale; the page returns a stress-level summary (low / moderate / elevated / high) and saves the result so you can see trends across runs.

The instrument is a self-screening aid, not a clinical diagnosis. Elevated or high scores are a prompt to consider professional support — talk therapy, GP visit, or whichever entry point makes sense in your context.

## Panic-attack tool

A guided in-the-moment tool combining:

- **5-4-3-2-1 grounding** — name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. The page advances you through each step with a calm interface.
- **Paced breathing** — alongside the grounding, a slow-paced breathing rhythm runs in the background.
- **A safety reminder** at the start: "If you're in crisis, contact local emergency services or a crisis hotline."

The 5-4-3-2-1 technique is a widely-taught coping method (see the National Alliance on Mental Illness and similar mental-health-charity resources). The tool is a delivery mechanism for the technique — it does not replace professional support and is not a substitute for emergency services.

## What this surface does not do

LifeWell mental-health tools are **not**:

- **Therapy.** The tools complement, but do not replace, talk therapy, CBT, or any professional intervention.
- **A diagnostic instrument.** Mood, stress, and gratitude entries are personal logs; they do not produce a clinical depression / anxiety / PTSD diagnosis.
- **Crisis intervention.** If you are in crisis, contact local emergency services or a crisis hotline. The app links to a regional crisis-resource list under [About](/docs/about/about-the-developer) but cannot route help to you.
- **Medication tracking** — log psychiatric medications under [Medications](./medications), not here.

## Privacy

Mental-health entries are highly personal. They are stored under your `userId` in Firestore, protected by per-user rules, and never sold, mined for AI training, or aggregated for community benchmarks. The notes you write in the mood journal or gratitude log are visible only to you (and anyone you explicitly grant access via [Data sharing](/docs/profile-and-settings/data-sharing)).

## Frequently asked

**Can I share my mood journal with my therapist?**
Yes — export the journal as a PDF from the page header. Or use partner-sharing to grant a clinician temporary read access (though most clinicians prefer a PDF over an account login).

**The mood options don't match how I'm feeling.**
The curated list covers the common ground. Use the notes field for nuance, or use multi-select on activities and factors to add detail.

**Is the stress assessment scientifically validated?**
The items are drawn from public-health perceived-stress instruments; the LifeWell scoring is informational, not a clinical diagnosis. For a clinical screen, see a clinician — they have access to validated, calibrated instruments and the training to interpret them.

**Does the panic-attack tool work offline?**
Yes. The 5-4-3-2-1 sequence and breathing rhythm run entirely on-device; the session log syncs to Firestore when connectivity returns. See [Offline-first design](/docs/concepts/offline-first-design).

**Can I disable the mental-health surface entirely?**
Yes — under [Preferences → Feature visibility](/docs/profile-and-settings/preferences#feature-visibility).

## Where to read next

- [Sleep](./sleep) — sleep and mental health are tightly coupled.
- [Conditions](./conditions) — log conditions that affect mental health (chronic pain, hormonal cycles, etc.).
- [Reminders](/docs/profile-and-settings/reminders) — daily-check-in reminders.
- [Privacy and security](/docs/concepts/privacy-and-security) — how this data is protected.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
