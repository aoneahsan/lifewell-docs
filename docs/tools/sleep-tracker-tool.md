---
title: Sleep tracker (tool) — quick duration and quality log
description: LifeWell's sleep-tracker tool provides a quick way to log a single night's sleep duration and quality without navigating to the full health/sleep surface.
keywords: [sleep tracker, sleep log tool, quick sleep log, sleep duration, sleep quality, ahsan mahmood]
sidebar_position: 9
---

# Sleep tracker (tool)

The **sleep tracker** under `/tools` is a quick-access version of the full [sleep page](/docs/health/sleep) under `/health`. It accepts the same two inputs — duration in hours and quality on a 1–5 scale — and writes the entry to the same Firestore collection. The difference is presentation: a single-screen form for a "I just woke up, log it, close" workflow, no trend chart, no historical list.

Use this when you want to log fast. Use the [full sleep page](/docs/health/sleep) when you want to see your trends.

## Inputs

| Field | Range | Notes |
| --- | --- | --- |
| Duration | 0–24 hours | Decimals OK (7.5 = 7 h 30 min) |
| Quality | 1–5 | Very poor / poor / fair / good / excellent (same scale as the full sleep page) |
| Notes | Optional | Free text — alarm time, interruptions, dreams |

## Output

A confirmation that the entry saved. The dashboard widget and the `/health/sleep` page pick up the entry on next render.

## Why a separate tool page exists

Most LifeWell features have a single canonical surface. Sleep gets a tool-page shortcut because:

- **High-frequency, low-effort use case.** People log sleep first thing in the morning, often in a half-awake state. A faster form reduces friction.
- **Tool-page architecture is consistent.** A tool URL works whether you're signed in or signed out (signed-out users see a sign-in prompt). The `/health/sleep` page assumes you're authenticated and shows the chart.
- **Linkable from elsewhere.** The dashboard, the morning-reminder push notification, and the wellness summary all link to the tool-page version for the fast log.

## Same data, same place

Entries from the tool page and the full sleep page write to the same Firestore document. There is no separate "tool" data store. Edit either page, both update; delete an entry, it's gone from both.

## Limits

This is a quick-log tool, not a sleep-staging tool. LifeWell does not:

- Measure sleep stages (REM, light, deep) — requires a wearable.
- Detect when you fell asleep — you type the duration in.
- Score your sleep — the 1–5 quality scale is your own subjective judgment, not a computed score.
- Correlate with HRV, body temperature, or other wearable signals — no integration.

For sensor-based sleep tracking, pair a dedicated wearable (Oura, Whoop, Apple Watch, etc.) and use LifeWell's tool for the subjective overlay.

## Worked example

You wake up Tuesday morning at 06:30. You went to bed at 22:30 and read for ~30 minutes before falling asleep. You estimate ~6.5 hours of actual sleep, and it felt about average.

Open the tool, type **6.5** for duration, tap **3 / Fair** for quality, add the note "read 30 min before sleep, woke 2x", **Save**. Done in under 15 seconds.

The entry appears in the full [sleep](/docs/health/sleep) page's trend chart and the 7-day averages.

## Frequently asked

**Will the tool page work offline?**
Yes. Capacitor Preferences caches the entry locally and Firestore syncs when connectivity returns. See [Offline-first design](/docs/concepts/offline-first-design).

**Why are there two sleep pages?**
The full sleep page has the chart, averages, naps subview, and the trend graph. The tool page is the quick-log shortcut. They share data.

**Can I edit a sleep entry from this page?**
No — the tool page is write-only. Open the [full sleep page](/docs/health/sleep) to edit or delete an entry.

**The morning reminder links here — can I change that?**
Reminder destination is configurable per reminder. Open [Reminders](/docs/profile-and-settings/reminders) → Sleep reminder → change "Open page on tap" to the full sleep page.

**What about logging naps?**
Naps go on the separate [nap surface](/docs/health/sleep#naps) under `/health/nap` — not this tool. The tool is for overnight sleep only.

## Where to read next

- [Sleep (full page)](/docs/health/sleep) — overnight log + nap subview + trend chart.
- [Mental health](/docs/health/mental-health) — mood-journal alongside sleep patterns.
- [Reminders](/docs/profile-and-settings/reminders) — set the morning sleep-log reminder.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how sleep duration feeds the score.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
