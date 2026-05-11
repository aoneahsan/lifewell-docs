---
title: Reminders — 12 categories, 5 schedule types, quiet hours
description: LifeWell reminders cover 12 categories (wellness, vitals, sleep, exercise, baby, more) with 5 schedule types (interval, daily, weekly, calendar, custom).
keywords: [lifewell reminders, push notifications, daily reminder, water reminder, medication reminder, quiet hours, ahsan mahmood]
sidebar_position: 9
---

# Reminders

**Reminders** in LifeWell are scheduled notifications across 12 categories — wellness, vitals, sleep, exercise, nutrition, mental health, period and fertility, baby, people, appointments, summaries, memories. Each reminder has a schedule (interval, daily-at-time, weekly, calendar-event, or custom), quiet hours, snooze defaults, and a delivery surface (push on mobile, browser notification on web).

The reminder system is one of the most-used parts of LifeWell because most features integrate with it — water logging has a built-in water reminder, medications have per-medication dose reminders, period tracking has cycle-prediction reminders. The reminders page is the central place to see and tune all of them.

## Categories (12)

| Category | Examples |
| --- | --- |
| `wellness` | Water, posture, eyes-off-screen, stretch breaks |
| `vitals` | Blood pressure check, blood sugar check, weight, BMI |
| `sleep` | Bedtime, morning sleep log |
| `exercise` | Workout reminder, active-minutes target, walk break |
| `nutrition` | Meal logging, hydration, meal-plan adherence |
| `mental_health` | Mood check-in, breathing break, gratitude |
| `period_fertility` | Period prediction, fertile window, OPK test |
| `baby` | Feeding, diaper, sleep, milestone check |
| `people` | "Reach out to X", relationship maintenance |
| `appointments` | Calendar event upcoming, today's events |
| `summaries` | Daily / weekly summary digest |
| `memories` | "Remember this day from N years ago", journaling prompts |

Each category has built-in reminder templates; you can create custom reminders that don't fit a template too.

## Schedule types (5)

| Type | When fires |
| --- | --- |
| `interval` | Every N minutes during an active window (e.g. every 60 min from 07:00 to 21:00) |
| `daily_time` | At specific times each day (e.g. 08:00, 13:00, 19:00) |
| `weekly` | At specific days + times each week (e.g. Monday + Wednesday + Friday at 18:00) |
| `calendar_event` | Triggered by calendar events (e.g. 30 min before an appointment) |
| `custom` | Anything that doesn't fit the above; user-defined logic |

## Per-reminder settings

Each reminder has:

| Setting | Notes |
| --- | --- |
| **Enabled** | On / off toggle |
| **Schedule** | Type + parameters (see above) |
| **Active window** | Start / end times within a day when the reminder may fire |
| **Quiet hours** | Hours when notifications should NOT fire even if scheduled (default 22:00–07:00) |
| **Snooze duration** | How long to defer when you tap snooze (default 15 min) |
| **Delivery surface** | Push (mobile) / browser notification (web) / in-app banner |
| **Channel** | Per-Android-channel grouping (for Android notification channel management) |
| **Linked deep-link** | What page opens when you tap the reminder |

## Quiet hours

The default quiet hours are **22:00 – 07:00 in your selected time zone**. During these hours:

- **Reminder-system notifications** are suppressed entirely.
- **Critical reminders** (medication doses you set as critical) can override quiet hours.
- **Cross-midnight** scenarios (e.g. nightshift workers) are handled by adjusting quiet hours through Preferences.

Per-reminder, you can opt out of quiet hours for that one ("Wake me for my morning workout alarm even at 05:30").

## Snooze

When a reminder fires:

- **Mark done** — log the action and dismiss.
- **Snooze** — defers by the configured duration (default 15 min).
- **Dismiss** — closes the notification without acting; doesn't re-fire today.

Snooze stacks — you can snooze multiple times in a row, though the platform shows a "snoozing repeatedly?" prompt after the third snooze.

## Delivery surfaces

| Surface | When used |
| --- | --- |
| **Push notification (mobile)** | OneSignal-delivered, fires even when the app is closed |
| **Browser notification (web)** | Native browser notification (requires permission) |
| **In-app banner** | Shown when the app is open in the foreground |

For mobile users with the LifeWell Android app, push notifications are the most reliable surface. Web-only users get browser notifications if they've granted permission; otherwise reminders only show when the tab is open.

## Reminder definitions registry

LifeWell ships with a static registry of reminder definitions (`src/config/reminder-definitions.ts`). Each definition specifies:

- Default schedule (e.g. water = interval, 60 min, 07:00–21:00).
- Default category.
- Default deep-link target page.
- Default notification text.
- Localised strings for all 10 languages.

Users override the defaults per-reminder. The registry is the starting point.

## Smart notifications

A few reminder types use additional logic ("smart notifications") beyond fixed scheduling:

- **Water reminder** — skips if you've already hit your daily goal.
- **Medication reminder** — fires when the dose is due; skips already-logged doses.
- **Appointment reminder** — fires before the calendar event time.
- **Period prediction** — fires based on the model's predicted next-period date (not a fixed cycle).

Smart logic is read-only — the user can't currently edit the "skip if already logged" rules, but can opt out of the reminder.

## Notification channels (Android)

On Android, each LifeWell notification belongs to a channel for OS-level grouping and user customisation:

- General reminders.
- Health & medication.
- Mental health.
- Calendar events.
- Marketing (off by default).
- System (account, security).

Users can adjust per-channel sound, vibration, importance via Android's notification settings.

## Permission flow

On first use, the OS prompts for notification permission:

- **Granted** → reminders fire normally.
- **Denied** → reminders show only as in-app banners (no push).
- **Not yet asked** → LifeWell prompts when you first set up a reminder.

You can revoke permission later via OS settings; LifeWell continues to track reminder schedules in the background, ready to resume when permission is restored.

## Bulk controls

The reminders page offers bulk actions:

- **Pause all reminders** (for a vacation, illness, or just a quiet period).
- **Restore all** to defaults.
- **Disable a whole category** (e.g. "I don't want any baby reminders today").

## Privacy

- Reminder schedules and history are private to your account.
- Notification payloads don't include your full data — they're "Time to log water" not "Your blood pressure was X yesterday".
- Push tokens for OneSignal are scoped per-device.

## What reminders are not

- **Not always-on alarms.** Reminders are heavy on phone resources if abused; LifeWell rate-limits to prevent runaway loops.
- **Not connected to Google Calendar / Outlook automatically.** Calendar-event reminders use LifeWell's calendar; full external-calendar sync is a future feature.
- **Not AI-personalised.** The schedules you set are exactly what fires.
- **Not subject to A/B engagement optimisation.** No engagement-test reminders ("most users find X timing works best!").

## Frequently asked

**Why didn't my reminder fire?**
Common causes: notification permission denied, quiet hours active, you'd already logged the action (smart-skip), device battery-saver killed the OneSignal service, or app was force-stopped. Check each.

**Can I have a reminder fire on multiple devices at once?**
Yes — reminders fire on every registered device with the LifeWell app installed and signed in to your account. Each device gets its own push.

**Can I customise the notification text?**
Per-reminder custom text is supported. Open the reminder → edit → notification text field.

**How do I temporarily disable everything (vacation mode)?**
Reminders page → **Pause all**. They resume when you turn it off.

**Can I export my reminder history?**
Yes — JSON export of past notifications (when each fired, whether you acted) from the reminders page.

## Where to read next

- [Preferences](./preferences) — global time zone + default schedules.
- [Push notifications](/docs/mobile/push-notifications) — how mobile pushes work.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how reminders affect the score (or not).
- [Security](./security) — account security settings.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
