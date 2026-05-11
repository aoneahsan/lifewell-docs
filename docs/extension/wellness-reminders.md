---
title: Wellness reminders — water, posture, breathing, eyes, stretch
description: The LifeWell extension fires browser-tab wellness reminders for water, posture, breathing, eye-rest, and stretches on your schedule, with quiet hours and snooze.
keywords: [wellness reminders, water reminder, eye rest, posture reminder, breathing break, stretch reminder, ahsan mahmood]
sidebar_position: 3
---

# Wellness reminders (extension)

The browser extension's primary purpose is **wellness reminders** — periodic prompts during your work day to drink water, adjust posture, breathe deeply, rest your eyes, and move. Each reminder type runs on its own schedule, fires via the browser's notification API, and ties into your LifeWell account so logged actions count toward your daily goals.

## Reminder types

| Type | Default cadence | Why it matters |
| --- | --- | --- |
| **Water** | Every 60 min | Hydration; counts toward daily water goal |
| **Posture** | Every 45 min | Sitting posture awareness; reduces back / neck strain |
| **Breathing** | Every 90 min | 1-minute breathing break to reset stress |
| **Eye-rest** | Every 20 min | 20-20-20 rule for screen-eye health |
| **Stretch** | Every 60 min | Movement break to combat sedentary work |

Each is on/off independently. Most users keep water + eye-rest on, others on demand.

## Eye-rest: the 20-20-20 rule

The 20-20-20 rule (American Optometric Association) — every 20 minutes, look at something 20 feet away for at least 20 seconds — is a widely-recommended computer-eye-strain prevention practice. The extension fires every 20 minutes during active hours; tap the notification to log a 20-second pause and dismiss.

## Configuring each reminder

From the extension popup → **Settings → Reminders**:

| Setting | Per-reminder |
| --- | --- |
| Enabled | On / off toggle |
| Cadence | Every N minutes |
| Active window | Start–end time (default 09:00–18:00) |
| Quiet hours | Default 22:00–07:00 |
| Sound | On / off |
| Snooze duration | Default 15 minutes |
| Action button | "Log it" / "Snooze" / "Dismiss" on the notification |

The active window is independent of LifeWell-wide quiet hours — you can keep eye-rest reminders during work hours only while letting water reminders run from morning to evening.

## How the schedule fires

Under the hood:

1. The extension's service worker schedules reminders via `chrome.alarms`.
2. When an alarm fires, the service worker checks: still in active window? Not past quiet hours? Not snoozed?
3. If checks pass, fire a browser notification via `chrome.notifications`.
4. The notification has action buttons; tap action → service worker handles (log to Firestore, schedule next, snooze).

The service worker may be suspended by Chrome when idle. Alarms re-wake it; this is the standard Manifest V3 pattern and works reliably for periodic reminders.

## Action buttons

Reminders carry quick-action buttons:

| Reminder | Primary action | Secondary |
| --- | --- | --- |
| Water | Log 250 ml | Snooze / Dismiss |
| Posture | "Adjusted" — log it | Snooze / Dismiss |
| Breathing | "Done a minute" — log it | Open guided breathing |
| Eye-rest | "20 seconds done" — log it | Snooze / Dismiss |
| Stretch | "Stretched" — log it | Open stretch guide / Snooze |

Action buttons take 1 click. No flow into the full app required.

## What "log it" actually does

Tapping the primary action button:

1. Updates the local Zustand store with the action.
2. Posts to Firestore (with your auth token).
3. Reschedules the next reminder.
4. Shows a brief "Logged!" toast in the corner of the active tab (subtle).

Failed Firestore posts queue in local storage for retry; no log gets lost to a transient network blip.

## Snooze

Tapping snooze on a reminder defers it by the configured duration (default 15 min). Snoozed reminders re-fire once at the snooze time; if you snooze again, the next defer is the same duration.

After three consecutive snoozes on the same reminder, the extension shows a "Want to disable this reminder?" prompt — friendly nudge to opt out if it's not useful.

## Wellness widget

The extension popup includes a **status widget** showing:

- Today's water progress (X / Y ml).
- Today's break count.
- Time until the next scheduled reminder.

This is the at-a-glance "how am I doing" view for users who don't want to open the full web app.

## Education widget

Between reminders, the popup rotates through curated wellness tips (hydration tips, posture facts, eye-care insights). These are static educational content bundled with the extension — no remote fetching, no tracking.

## Privacy posture

- Reminders schedule and fire entirely client-side; the service worker is local.
- Logged actions sync to your Firestore (via OAuth token).
- No analytics tracking of which reminders you dismiss / snooze.
- No external scripts loaded; Manifest V3 strict CSP.

## What this is not

- **Not a productivity reminder.** No task / meeting / Pomodoro reminders here; use a dedicated tool.
- **Not a clinical screening.** Reminders are general wellness prompts, not personalised medical advice.
- **Not always-on.** Reminders respect your quiet hours and active window. They won't fire at 3 AM.
- **Not cross-device.** The extension reminds within the browser; mobile app reminders are separate. They cooperate by sharing the underlying log — water logged in either place counts toward the same daily total — but the firing surfaces are independent.

## Common reminder protocols (cited)

A few protocols the defaults reference:

- **20-20-20 rule** (American Optometric Association) for eye strain.
- **Pomodoro-adjacent breathing** (Andrew Weil's 4-7-8 protocol) for stress reset.
- **NIOSH (US occupational-health) ergonomic guidance** for posture / movement breaks every 30–60 min.
- **Institute of Medicine** hydration adequacy reference for water reminder cadence calibration.

Defaults aren't medical advice; they're starting points calibrated from public-health guidance.

## Frequently asked

**Reminders aren't firing.**
Check: notification permission granted? Browser allowed to run in background? Service worker not killed (visit `chrome://extensions/` → check LifeWell hasn't errored).

**Can I customise the reminder text?**
Per-reminder custom text is supported in Settings → Reminders → [type] → Notification text.

**Will reminders fire on macOS Do Not Disturb mode?**
macOS DND respects the notification level; if DND is fully on, reminders are suppressed. They re-fire on next interval after DND ends.

**Why do reminders sometimes fire late?**
Chrome's service worker is suspended when idle; alarms wake it but with up to ~30 seconds of delay. For non-clinical reminders, the variance is acceptable; for time-critical medication, use the mobile app instead.

**Can I sync reminder schedules between web extension and mobile app?**
Reminder definitions live in your Firestore account, so settings sync. Each device's notification surface fires independently — i.e. setting a water reminder via the extension also enables it on mobile if you haven't manually disabled it there.

## Where to read next

- [Quick tracking](./quick-tracking) — popup-based quick-log.
- [Install the extension](./install) — set up first.
- [Reminders (main module)](/docs/profile-and-settings/reminders) — full reminder system.
- [Wellness scoring](/docs/concepts/wellness-scoring) — how reminders affect the score.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
