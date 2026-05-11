---
title: Preferences — units, language, defaults, and toggles
description: LifeWell preferences cover units (metric/imperial), language, time zone, glass size, daily targets, reminder defaults, feature visibility, and the wellness-score toggle.
keywords: [lifewell preferences, metric imperial, language settings, glass size, daily target, feature toggles, ahsan mahmood]
sidebar_position: 2
---

# Preferences

LifeWell preferences are the dials that make the app match how you actually measure, talk, and live. Units (metric vs imperial), language (10 locales), time zone, glass size, daily targets, what reminders default to, which feature surfaces appear on your nav, and whether you see a wellness score at all — all of it lives here.

Preferences apply across every device you sign in on. Change a value on Android, the web app picks it up. Calculator defaults, reminder schedules, and tracking displays all read from this single source.

## Units

LifeWell supports independent unit choices per measurement type, because plenty of users mix systems (e.g. cm for height + lb for weight). The choices and defaults:

| Measurement | Choices | Default |
| --- | --- | --- |
| Weight | kg / lb | kg |
| Height | cm / ft-in | cm |
| Distance | km / mi | km |
| Volume (water, beverages) | ml / fl oz | ml |
| Temperature (body, ambient) | °C / °F | °C |
| Blood sugar | mg/dl / mmol/L | mg/dl |
| Blood pressure | mmHg | mmHg (no choice — clinical standard) |

The default for new accounts is metric across the board, since metric covers the majority of LifeWell's i18n audience. Imperial users flip what they need; mixed users flip per-row.

## Language

LifeWell ships with 10 locales, all toggleable from **Preferences → Language**:

| Locale | Code | RTL? |
| --- | --- | --- |
| English | en | No |
| Arabic | ar | Yes |
| Spanish | es | No |
| French | fr | No |
| German | de | No |
| Portuguese | pt | No |
| Russian | ru | No |
| Turkish | tr | No |
| Urdu | ur | Yes (planned) |
| Chinese (Simplified) | zh | No |

Translation coverage is highest on the most-used screens (auth, dashboard, vitals, calculators, profile, settings) and tapers off in admin / reference areas. Anything not yet translated falls back to English. If you spot an awkward translation, please email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with the screen and the suggested fix.

The language preference also affects right-to-left layout — Arabic flips the entire UI to RTL automatically (every Radix primitive supports `dir="rtl"`).

## Time zone

Auto-detected on first visit. You can override from **Preferences → Time zone** to any IANA zone (`Asia/Karachi`, `America/New_York`, `Europe/London`, etc.). The override matters for:

- **Reminder delivery times** — a reminder set for "08:00 daily" fires at 08:00 in your selected zone, not the device zone.
- **Daily-summary cutoffs** — "today's water" rolls over at midnight in your selected zone.
- **Wellness-score weekly windows** — Sunday-to-Saturday in your selected zone.

If you travel frequently, you can either set a fixed home zone (so reminders stay locked to it) or leave it on auto-detect (so reminders shift when you travel). Most users prefer fixed.

## Daily targets

LifeWell's defaults match standard health-guideline ranges; you can override any of them from **Preferences → Daily targets**:

| Target | Default | Range |
| --- | --- | --- |
| Water | 2000 ml | 500–5000 ml |
| Step count | 8000 | 1000–30000 |
| Sleep | 8 hours | 4–12 hours |
| Active minutes | 30 | 5–180 |
| Mindfulness sessions | 1 per day | 0–10 |

These targets feed three places: the per-feature progress bars (e.g. the water page's vertical fill), the dashboard summary, and the [wellness score](/docs/concepts/wellness-scoring) baseline calculation.

## Glass size and serving defaults

Defaults for the water-tracking quick-log button:

| Setting | Default | Choices |
| --- | --- | --- |
| Default glass | 250 ml | 100, 150, 200, 250, 300, 350, 500 ml, or custom |
| Default beverage | Water | Water / coffee / tea / juice / other (affects label only) |

Tapping the **+ 1 glass** button on the water page adds your default amount. Long-press / right-click to override for one entry.

## Reminder defaults

When you create a new reminder, these defaults pre-fill:

| Field | Default |
| --- | --- |
| Schedule | Daily at 09:00 |
| Quiet hours | 22:00 – 07:00 (your time zone) |
| Snooze duration | 15 minutes |
| Delivery surface | Push (if mobile or extension installed); in-app banner otherwise |

You can override any field per reminder when you create it, or change these defaults from **Preferences → Reminder defaults**.

## Feature visibility

LifeWell ships dozens of feature surfaces, and not everyone needs all of them. Under **Preferences → Feature visibility**, toggle off entire domains to clean up your sidebar:

- Period & fertility (default: off for accounts marked male)
- Pregnancy (default: off until you opt in)
- Breastfeeding (default: off until you opt in)
- Baby tracking
- Family tree
- Memories
- Notes
- Community
- Tools (calculators)
- Admin (off unless your account has admin claims)

Hiding a feature doesn't delete any data — it just removes the surface from your nav. Re-enabling restores the surface with all your prior entries intact.

## Wellness score toggle

Some users find the [wellness score](/docs/concepts/wellness-scoring) adds anxiety more than insight. Under **Preferences → Wellness score**, you can hide it entirely. The score still computes in the background (so re-enabling later doesn't require rebuilding a baseline), but it disappears from the dashboard, summary emails, and achievement criteria tied to score milestones.

## Notification channel routing

If you have multiple LifeWell surfaces installed (Android app + browser extension + web), you can pick which one delivers a given reminder:

| Reminder type | Default route |
| --- | --- |
| Wellness (water, posture, eyes-off-screen) | Browser extension (if installed), else mobile push |
| Medications | Mobile push (most reliable on phones) |
| Appointments | All installed surfaces |
| Period / fertility | Mobile push (private) |

Override per reminder when you set it up. If only one surface is installed, the routing is moot — that surface gets everything.

## Frequently asked

**My preferences didn't sync to my other device.**
Sync is debounced (500ms) and runs through Firestore. Most changes propagate within a few seconds. If a change hasn't reached the second device after a minute, hard-refresh the second device — sometimes the snapshot listener hasn't woken up. Persistent failure to sync is a bug; report to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

**Can I have different units on different devices?**
No — preferences are per-account, not per-device. If you want metric on your phone and imperial on your laptop, you'd need two separate accounts (not recommended).

**The Arabic translation reads awkwardly.**
Likely translator-AI output that I didn't catch. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with the screen and the suggested fix; I'll update the locale file in the next release.

**Why is blood pressure forced to mmHg?**
mmHg is the universal clinical standard. The alternative (kPa) is used in research but not in any consumer device or clinical report you'd encounter. Forcing mmHg keeps your readings comparable across LifeWell, your clinician, and any cuff you own.

**Can I export my preferences?**
Yes — the data export includes the full `lifewell_user_preferences` document. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## Where to read next

- [Profile overview](./profile-overview) — the wider profile area.
- [Theme customizer](./theme-customizer) — appearance options.
- [Reminders](./reminders) — manage all scheduled reminders.
- [Wellness scoring](/docs/concepts/wellness-scoring) — what the score reads from.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
