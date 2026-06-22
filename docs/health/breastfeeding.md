---
title: Breastfeeding — per-session log, duration, side, notes
description: LifeWell breastfeeding tracking logs duration per session (1–120 minutes) with optional side and notes. Daily session count and 20-session average shown.
keywords: [lifewell breastfeeding, breastfeeding log, feeding tracker, lactation log, nursing schedule, ahsan mahmood]
sidebar_position: 10
---

# Breastfeeding

**Breastfeeding** in LifeWell is a per-session log: each entry records the session duration in minutes, an optional side (left, right, both), and free-text notes for anything you want to remember (latch quality, fussiness, time-of-day patterns). The page shows today's session count, the average across your last 20 sessions, and a trend chart of duration over time.

This is a separate surface from the [baby feeding](/docs/baby/feeding) page, which tracks bottle / pumped milk / solids — they share data with the dashboard but live in different parts of the nav so each captures the inputs that matter for that context.

## What a session captures

| Field | Type | Notes |
| --- | --- | --- |
| `value` (duration) | number (1–120) | Minutes; validation enforces the range |
| `notes` | string (optional) | Free text — side, latch quality, baby's mood, anything |
| `timestamp` | timestamp | Defaults to "now"; you can log a session that just ended |

The form is intentionally minimal. Breastfeeding tracking in the first weeks is high-frequency and time-sensitive (you're tired, the baby is loud, you're not going to fill out a 12-field form). One field for duration, one optional notes field, done.

If you want to track side, put it in the notes field (e.g. "L 15min" or alternate sides per session). A structured side field is on the roadmap; for now, the notes field is your space.

## What the page shows

The page header shows:

- **Today's sessions** — count of entries logged in the current calendar day (your selected time zone).
- **Average duration** — mean of the last 20 entries' duration.
- A **trend chart** of duration per session over the recent log.
- A scrollable **session list** with timestamps and duration.

## Typical session ranges

For reference, La Leche League and the American Academy of Pediatrics describe wide variation in breastfeeding sessions:

- **Newborns (0–2 months)**: 8–12 feedings per 24 hours; per-session 10–45 minutes is common; cluster feeds in the evening are normal.
- **2–6 months**: Sessions often shorten as the baby becomes more efficient (5–20 minutes per side).
- **6+ months**: Sessions vary widely as solids enter the diet.

These ranges are guidance, not targets. Many sessions sit outside these averages, and the only "right" pattern is one that supports the baby's growth and the parent's wellbeing.

## Reminders

You can set a reminder if you're trying to maintain a feeding-frequency schedule (e.g. for milk supply, for a sleep-and-feed routine). Reminder defaults are off — many users find them stressful rather than helpful in the early weeks.

To turn one on:

1. Go to [Reminders](/docs/profile-and-settings/reminders).
2. Add a Breastfeeding reminder.
3. Pick a schedule (every N hours, or specific times).
4. Set quiet hours so it doesn't ping you in the night when you'd be feeding anyway.

## Privacy

Like every health surface, breastfeeding data is per-account, Firestore-rule-protected, never sold, never shared. The notes field lives only in your account. If you delete a session entry, it's gone immediately; if you delete the entire account, the 30-day grace window applies (see [Security](/docs/profile-and-settings/security)).

## What this surface does not do

LifeWell breastfeeding tracking does **not**:

- **Measure milk volume.** There is no way for an app to measure how much milk transferred to the baby. The duration is a proxy at best. If you pump, log pumped milk separately under [Baby feeding](/docs/baby/feeding).
- **Diagnose latch or supply issues.** Pain, low diaper output, low weight gain, or other concerns are clinician questions — a lactation consultant (IBCLC) is the right resource.
- **Recommend a feeding schedule.** Routines vary; what works depends on you and the baby. The page logs what you do; it does not prescribe what you should do.
- **Pair with smart breast pumps.** No Bluetooth / wearable pump integration.
- **Replace the WHO / AAP breastfeeding guidance.** Both publish patient-facing recommendations; refer to those for clinical context.

## Hydration and breastfeeding

The water-tracking auto-calc adds **+700 ml** when breastfeeding mode is on (see [Water tracking](./water-tracking) for the formula). The Institute of Medicine's adequate-intake reference is ~3.8 L/day for lactating women including water from food; the +700 ml bump on top of your baseline approximates the beverage portion. As always, individual needs vary; thirst is a reasonable guide.

## Frequently asked

**Should I log every session?**
Whatever cadence is sustainable for you. Some users log every session in the early weeks (when sleep is broken and you can't keep track in your head), others log only when they notice something worth remembering. Either is fine. The averages still reflect your pattern at the cadence you log.

**Can I track which side I fed on last?**
Use the notes field to record side. A dedicated side selector is on the roadmap — ping [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) if it would help you significantly.

**My duration is showing wrong because I forgot to stop the timer.**
Tap the entry in the session list → **Edit** → fix the duration. The chart and averages update in real time.

**Can I share my breastfeeding log with my partner or my pediatrician?**
Yes — partner sharing via [Data sharing](/docs/profile-and-settings/data-sharing); export-to-PDF for the pediatrician from the page header.

**My baby cluster-feeds in the evening — does that show up as concerning?**
No — the app does not flag patterns. Cluster feeding is normal infant behaviour, especially in growth spurts and the evening "witching hours." If you're worried about supply or growth, an IBCLC or pediatrician is the right next step, not the app's averages.

## Where to read next

- [Baby feeding](/docs/baby/feeding) — bottle and pumped-milk logging.
- [Water tracking](./water-tracking) — hydration with breastfeeding bonus.
- [Sleep](./sleep) — track your own sleep in the broken-sleep early weeks.
- [Mental health](./mental-health) — mood-journal, breathing tools for postpartum mood support.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
