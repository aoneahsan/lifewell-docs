---
title: Wellness admin — tune scoring weights, default reminders, content
description: The LifeWell admin Wellness page tunes wellness-score weights, default reminder cadences, and rotates educational content surfaced in the extension and app.
keywords: [wellness admin, score weights, default reminders, content rotation, ahsan mahmood]
sidebar_position: 8
---

# Wellness admin

The **admin Wellness** page is where platform admins tune the platform-wide wellness defaults — wellness-score input weights, default reminder cadences, the rotation of educational tips surfaced in the extension and dashboard, and the curated affirmations / meditation library. These are platform-level settings; individual users override via their own preferences.

## What admins tune

| Setting | Effect |
| --- | --- |
| **Wellness-score input weights** | How much each tracked behaviour (water, sleep, exercise, mood) contributes to the score |
| **Default reminder cadences** | Starting cadence for water / sleep / etc. for new users |
| **Default daily targets** | Starting goals (water 2000 ml, steps 8000, sleep 8h) |
| **Educational content rotation** | Tips shown in the extension widget, meditation library entries |
| **Affirmations library** | Curated affirmations rotation |
| **Recipe library** | Curated recipes (with nutritional metadata) |
| **Symptom catalogues** | Predefined symptoms for the various health surfaces |

These tunings shape the new-user experience and (for content libraries) the daily browse experience.

## Wellness-score weights

The wellness-score (see [Wellness scoring](/docs/concepts/wellness-scoring)) is a 0-100 composite of several daily tracked behaviours. The weights determine how much each contributes:

| Input | Default weight |
| --- | --- |
| Water (% of daily goal) | 20% |
| Sleep (hit target) | 25% |
| Active minutes (% of target) | 20% |
| Mood (3+ on the 1-5 scale) | 15% |
| Medication adherence | 10% |
| Step count (% of target) | 10% |

Weights sum to 100. Tuning shifts emphasis — e.g. raising sleep to 35% if research suggests sleep matters more.

Changes apply going forward. Existing users' historical scores aren't retroactively recalculated.

## Default reminder cadences

For new users, reminder cadences default to:

| Reminder | Default |
| --- | --- |
| Water | Every 60 min (07:00-21:00) |
| Eye-rest | Every 20 min (active hours only) |
| Stretch | Every 60 min |
| Sleep reminder | Daily at 21:30 |
| Morning log | Daily at 09:00 |
| Weekly summary | Sundays at 09:00 |

Users adjust per-reminder; admins adjust the new-user defaults here.

## Daily target defaults

| Metric | Default | Range |
| --- | --- | --- |
| Water (ml) | 2000 | 500-5000 |
| Step count | 8000 | 1000-30000 |
| Sleep (hours) | 8 | 4-12 |
| Active minutes | 30 | 5-180 |
| Mindfulness sessions | 1/day | 0-10 |

Defaults reflect public-health guidance balanced against attainability. Admins shouldn't tune these often — major changes need to align with cited public-health evidence.

## Content libraries

### Tips rotation

Educational tips shown in the extension widget and the dashboard's "Did you know?" card. Each tip:

- 1-2 sentences.
- Cited source (link to the relevant authority).
- Topic tag (hydration, sleep, posture, etc.).

Admins add / edit / archive tips. The rotation algorithm picks tips matching the user's recently-tracked surfaces (e.g. if you've been logging water, you see hydration tips).

### Affirmations

The [affirmations](/docs/health/mental-health) carousel pulls from a curated platform library plus user-added custom affirmations. Admins curate the platform library — adding inclusive, evidence-aligned affirmations and removing anything outdated or culturally insensitive.

### Recipes

The [recipes](/docs/health/nutrition-and-diet) library is curated by admins (or by approved recipe-contributor accounts). Each recipe entry:

- Title, photo, prep / cook time, servings.
- Ingredient list.
- Step-by-step instructions.
- Per-serving calorie + macro estimates.
- Tags (vegetarian / vegan / gluten-free / etc.).
- Source attribution (cookbook / blog / chef / public domain).

## Symptom catalogues

The condition pages ([conditions](/docs/health/conditions)) reference predefined symptom catalogues. Admins curate:

- Symptom name + category.
- Description.
- Typical association (which condition pages list it as relevant).

Updates pulled from sources like Mayo Clinic and NHS patient pages.

## Change-management discipline

Wellness-admin changes affect every user, so:

- **All changes audit-logged** with admin + timestamp + before/after state.
- **Weight changes > 5 percentage points** require dual-admin approval.
- **Tip and recipe additions** spot-checked by a second admin before going live.
- **Default-target changes** linked to a justification document (cited public-health source).

## What this page is NOT

- **Not a user-data viewer.** No personal logs visible.
- **Not for individual user tuning** — that's the user's own Preferences.
- **Not for A/B testing.** No experiment-rollout system.

## Where to read next

- [Wellness scoring](/docs/concepts/wellness-scoring) — the user-side score.
- [Reminders](/docs/profile-and-settings/reminders) — user-side reminders.
- [Nutrition and diet](/docs/health/nutrition-and-diet) — recipes surface.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
