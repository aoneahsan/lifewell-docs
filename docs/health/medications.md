---
title: Medications — dose, schedule, adherence, refill alerts
description: LifeWell medications track name, dose, schedule, and adherence rate, with refill stock alerts and per-dose reminders that fire as push notifications.
keywords: [lifewell medications, medication reminder, dose tracking, adherence rate, refill alert, prescription log, ahsan mahmood]
sidebar_position: 4
---

# Medications

**Medications** in LifeWell is a per-prescription record with dose, schedule, and per-dose adherence tracking. You add each medication once (name, dosage, form, frequency, schedule), and from then on the app pings you when each dose is due, logs whether you took it or skipped it, and shows your adherence rate over time. Refill stock can be tracked too — set the per-refill quantity and a threshold, and you'll get a heads-up before the bottle runs out.

This page covers the per-medication record, the schedule and reminder model, the adherence log, refill tracking, and the limitations to understand before you rely on it.

## What a medication record stores

| Field | Type | Example |
| --- | --- | --- |
| `name` | string (required) | "Metformin", "Vitamin D3" |
| `genericName` | string (optional) | "Metformin hydrochloride" |
| `brandName` | string (optional) | "Glucophage" |
| `type` | enum | `prescription`, `over_the_counter`, `vitamin`, `supplement`, `herbal`, `other` |
| `form` | enum | `tablet`, `capsule`, `liquid`, `injection`, `topical`, `inhaler`, `patch`, `drops`, `suppository`, `powder`, `other` |
| `dosageAmount` | number (required) | 500, 1000, 0.5, 25 |
| `dosageUnit` | enum | `mg`, `mcg`, `g`, `ml`, `drops`, `puffs`, `units`, `tablets`, `capsules`, `patches`, `applications` |
| `schedule` | object | See [Schedule frequencies](#schedule-frequencies) below |
| `startDate` | date (required) | When you started taking it |
| `endDate` | date (optional) | When the course ends (omit for ongoing) |
| `prescribedBy` | string (optional) | Clinician name |
| `prescribedFor` | string (optional) | Reason or condition |
| `pharmacy`, `rxNumber` | strings (optional) | Refill bookkeeping |
| `warnings`, `interactions`, `sideEffects` | string arrays | Anything you want to remember |
| `color`, `shape`, `imprint` | strings (optional) | Visual identification helpers |
| `photoUrl` | string (optional) | A snapshot of the pill or bottle |

The optional fields are there for the users who actually use them — most people fill in name, dose, schedule, and call it done.

## Schedule frequencies

Available frequencies (`schedule.frequency`):

| Frequency | What it means |
| --- | --- |
| `once_daily` | One dose per day at a specified time |
| `twice_daily` | Two doses per day |
| `three_times_daily` | Three doses per day |
| `four_times_daily` | Four doses per day |
| `every_other_day` | Alternates on / off |
| `weekly` | Once a week, specified day-of-week |
| `as_needed` | No reminder; you log when you take it |
| `custom` | Custom interval in hours or custom days-of-week list |

For each frequency the form lets you set the **times** (`hour` + `minute` + optional label like "Morning" or "With breakfast"). A `withFood` flag and free-text `specialInstructions` round out the schedule.

## Per-dose log

Every scheduled dose creates a log entry the moment it fires. The entry starts in **pending** state; tapping the reminder action sets the status:

| Status | When |
| --- | --- |
| `taken` | You took the dose. Optional fields: actual time, with-food checkbox, mood (good/okay/bad), effectiveness (very_effective → ineffective), side-effects noted, free-text notes. |
| `skipped` | You consciously skipped (with optional reason). |
| `missed` | The dose's scheduled window passed without action. |
| `late` | You took it, but after the scheduled time. |

You can also tap **Log dose** manually at any time for an `as_needed` medication — the entry stores actual time.

## Adherence rate

Adherence is the percentage of scheduled doses you marked `taken` (on-time or late):

```
adherenceRate = totalTaken / totalScheduled × 100
onTimeRate    = (totalTaken - totalLate) / totalTaken × 100
```

The per-medication summary shows:

- Daily / weekly / monthly / all-time adherence rate.
- Current streak (consecutive days with perfect adherence).
- Longest streak.
- Most-missed time of day (e.g. "Evening").
- Most-missed day of week.

The rate updates in real time as you log doses. If you forget to log doses, the rate drops — that's the design intent, not a bug. If you'd rather not see the adherence statistics, hide them under [Preferences → Wellness score](/docs/profile-and-settings/preferences#wellness-score-toggle) (the adherence rate is a wellness-score input).

## Refill tracking

For prescription medications, you can record:

- `currentStock` — how many pills are in the bottle right now.
- `pillsPerRefill` — how many pills come in a single refill.
- `refillReminder` (boolean) — turn the warning on.
- `refillReminderThreshold` — pill count below which to warn (e.g. 10).

Each `taken` log entry decrements `currentStock` by the dose count. When stock falls below the threshold, the app surfaces a "refill needed" banner on the medication page and on the dashboard. Tapping the banner logs a **refill record** (date, quantity, pharmacy, optional cost, optional insurance-covered flag) and resets the stock.

A history of refill records lives on the per-medication page so you can see how long each fill lasts and whether the schedule matches reality.

## Reminders

Medication reminders use the same scheduler as the rest of the app (see [Reminders](/docs/profile-and-settings/reminders)). For mobile users they fire as **push notifications** through OneSignal; for web-only users they fire as in-app banners (and as browser notifications if you've granted permission).

Snooze duration defaults to 15 minutes. Quiet hours default to 22:00–07:00 in your selected time zone. You can override both per medication.

For controlled-substance-like cases (e.g. doses that must be taken within a strict window), set a tight snooze (5 minutes) and use the `late` status to flag any out-of-window doses for your clinician's review.

## Honest framing

Medications tracking in LifeWell:

- Does not check for drug-drug interactions. The `interactions` field is free-text — you type in what your pharmacist or label warned you about. The app does not consult a drug database.
- Does not verify dose accuracy. If you typed "500 mg" but your pill is 50 mg, the log will reflect 500 mg.
- Does not communicate with your pharmacy. Refill bookkeeping is local; LifeWell will not auto-order refills.
- Is not a substitute for adherence apps designed for clinical trials or pharmacy benefit management. It's a personal tracker.

If you depend on this for life-critical medications (e.g. seizure medication, anticoagulants), keep a backup system — a physical pillbox, your pharmacist's reminder service, or a clinician follow-up.

## Frequently asked

**Will reminders fire when my phone is offline or asleep?**
On Android, reminders are scheduled via Capacitor's local-notifications plugin and fire even when the device is offline (the schedule is stored locally). On the web app, reminders only fire when the tab is open or the browser allows background notifications.

**Can I share a medication list with my doctor?**
Yes — the medications page has a PDF export with all active medications, doses, schedules, and adherence rate over the last 90 days. Bring it to your appointment.

**What happens to the log if I delete a medication?**
The medication record is removed and historical log entries are removed with it. The deletion is local-immediate and Firestore-synced within seconds. If you want to keep history, archive the medication (set `isActive=false` and `endDate=today`) instead of deleting.

**Can I track a controlled substance here?**
The app doesn't block it. The data lives in your account, encrypted in transit and at rest by Firebase. Whether that meets your jurisdiction's record-keeping rules is on you — we make no claim either way.

**My adherence rate is 95% but I know I missed one dose — is it lying?**
No — the rate counts scheduled doses since the medication's `startDate`. With many doses tracked, one miss moves the percentage slightly. Tap "Adherence history" to see the per-dose log.

## Where to read next

- [Vitals](./vitals) — log readings alongside medication adherence.
- [Conditions](./conditions) — record the condition this medication is for.
- [Reminders](/docs/profile-and-settings/reminders) — full reminder schedule reference.
- [Push notifications](/docs/mobile/push-notifications) — how reminders reach mobile devices.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
