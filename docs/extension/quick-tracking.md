---
title: Quick tracking — extension popup quick-log buttons
description: The LifeWell extension popup offers single-tap quick-log buttons for water, mood, blood pressure, weight, and a quick-note — fast logging without leaving your tab.
keywords: [extension quick log, popup tracking, one tap log, water log, mood log, vitals log, ahsan mahmood]
sidebar_position: 4
---

# Quick tracking (extension)

The LifeWell extension's popup is a **quick-log surface** — single-tap buttons that log common health entries to your account without opening the full web app. Open the popup, tap a button, get back to what you were doing. The flow's designed for "I just realised I haven't drunk water in 2 hours" rather than for any deep interaction.

## Quick-log entries

| Entry | Inputs | Action |
| --- | --- | --- |
| **Water** | Volume preset (250 / 500 / 750 ml) or custom | One tap logs the amount |
| **Mood** | 5 emoji buttons (very poor → excellent) | One tap |
| **Blood pressure** | Two numeric inputs (systolic / diastolic) | Submit |
| **Weight** | One numeric input | Submit |
| **Quick note** | Text field | Saves as a text note in your account |
| **Quick mood-tag** | Optional emoji + free text | Saves as a tagged mental-health entry |

The default popup shows water + mood; the rest are one row down via "More quick entries".

## Water quick-log

The most-used surface:

- Three preset buttons: **250 ml**, **500 ml**, **750 ml**.
- Long-press / right-click any preset to override (e.g. set the 500-ml preset to 480 to match your actual glass).
- **Custom** opens a number input.
- A small "today's total" counter shows progress toward your daily goal.

Tapping a preset:

1. Adds the amount to today's water log in your Firestore.
2. Updates the local counter immediately.
3. Updates the progress ring in the popup.
4. (If you opt in) brief in-page confirmation toast.

## Mood quick-log

A 5-emoji row: 😫 😔 😐 🙂 😊.

- Tap one → logs a mood entry with that value.
- The entry appears in your [mood journal](/docs/health/mental-health) on the next open of the web app.
- No extra fields required; this is "quick" by design.
- For a deeper mood entry (activities, factors, notes), open the full mood-journal page.

## Vital signs quick-log

Two surfaces — BP and weight — open as small forms in the popup:

- **Blood pressure**: systolic + diastolic numeric inputs, optional "medication taken" checkbox, submit. The category label (Normal / Elevated / Stage 1 etc., per ACC/AHA cutoffs) appears after submit.
- **Weight**: one numeric input, optional unit toggle (kg / lb), submit.

Both write to the same Firestore documents the [vitals](/docs/health/vitals) page reads, so the entry is visible in the web-app chart immediately.

## Quick note

A textarea + save button. The note:

- Defaults to type `text`.
- Has no title (LifeWell generates one from the first line on save).
- Doesn't open the rich-text editor — keep this surface fast.
- Lands in your default notes folder (or root if no default set).

For real note-taking (folders, tags, media), open the [notes](/docs/memories-and-notes/notes) page in the web app.

## How fast is it?

Typical timings on a modern laptop:

- Open popup (Alt+L) → ~100ms.
- Tap "Log 250 ml" → ~50ms local write.
- Background Firestore sync → ~300–600ms.

So a full water-log cycle is under 200ms perceived latency. The Firestore sync happens after the popup closes.

## What gets stored where

| Action | Local cache | Firestore |
| --- | --- | --- |
| Water log | Today's entries cached for offline | Authoritative `lifewell_water` collection |
| Mood log | Cached | `lifewell_mood_journal` |
| BP log | Cached | `lifewell_vitals_bp` |
| Weight log | Cached | `lifewell_weight` |
| Quick note | Cached | `lifewell_notes` |

The cache is for offline support and instant UI feedback. Firestore is the source of truth.

## Offline support

If you're offline when you tap a quick-log button:

1. The entry writes to local storage with a `pending` sync flag.
2. The popup shows a small "offline — will sync" indicator.
3. When the browser reconnects, the service worker drains the queue.

The web app and mobile app share this offline-queue mechanism via the underlying Firestore SDK + Capacitor Preferences.

## Why quick-log is a separate UX from the full app

Quick-log optimises for **speed and habit-formation**:

- No navigation required (popup is one click).
- Defaults assume the common case; deeper detail goes to the full app.
- Minimal cognitive load — buttons + presets, no forms.
- Zero context switching from your current browser tab.

The full web app handles the deeper use cases: history, trends, charts, complex multi-field entries (logging a workout with notes, tagging a memory with 5 photos, building a meal plan). Each surface optimises for its purpose.

## What this surface is not

- **Not a replacement for the full app.** Complex entries (meals with macros, memories with photos, period logs) belong in the web app.
- **Not analytics.** You see today's totals; trends and weekly charts are in the web app.
- **Not where to add new contacts / family records / community posts.** Those don't fit the quick-log pattern.

## Frequently asked

**My water log isn't appearing in the web app.**
Check the popup for a "pending sync" indicator. If you've been offline, syncing happens on reconnection. If syncing fails repeatedly, sign out and back in to refresh the OAuth token.

**Can I customise which quick-log buttons appear?**
Yes — Settings → **Quick-tracking layout** → drag to reorder, toggle to hide. Most users keep water + mood visible.

**Can I quick-log medication doses?**
Not yet from the extension popup — medications go through the [medications](/docs/health/medications) page because of dose / schedule / adherence complexity. Future quick-log support is planned for the most common case (mark scheduled dose as taken).

**Why are presets in ml not oz?**
The preset units follow your global [unit preference](/docs/profile-and-settings/preferences#units). Set to imperial and presets render as oz.

**Does the extension cache previous days' data?**
No — only today's entries are cached. The web app holds your full history.

## Where to read next

- [Wellness reminders](./wellness-reminders) — the reminder side.
- [Install the extension](./install) — set up.
- [Overview](./overview) — extension architecture.
- [Water tracking (full)](/docs/health/water-tracking) — the web-app surface.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
