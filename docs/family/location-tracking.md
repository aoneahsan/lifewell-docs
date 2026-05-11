---
title: Location tracking — opt-in, configurable, private snapshots
description: LifeWell location tracking captures opt-in location snapshots that feed journeys and people-location surfaces. Default off; full control over what's captured.
keywords: [location tracking, location snapshots, opt-in privacy, gps tracker, location history, ahsan mahmood]
sidebar_position: 7
---

# Location tracking

**Location tracking** in LifeWell is an opt-in feature that captures periodic location snapshots from your device. The captured snapshots feed the [journeys](./journeys) timeline (so a trip can auto-build from data instead of manual entry) and the people-location surfaces (so you can remember where you met someone). By default, location tracking is **off** — LifeWell does not capture your location unless you explicitly enable it.

This page covers the configuration, the privacy posture, and what is and isn't possible.

## Default state

- **Off.** No location is captured.
- **Enabling requires explicit user action** on a settings page.
- **Granting the OS permission** is a separate prompt that the device handles — declining keeps tracking off.
- **Revoking permission later** turns tracking off immediately.

## How to enable

1. Open `/people/location-tracking`.
2. Toggle **Enable location tracking** on.
3. The OS prompts for location permission ("Always" vs "While using" vs "Deny").
4. Choose the capture cadence (see below).
5. Save settings.

You can disable at any time from the same page. Disabling stops new captures; existing snapshots remain unless you also delete them.

## Capture modes

| Mode | When snapshots are captured |
| --- | --- |
| **Manual only** | Snapshots are captured only when you tap "Capture now" on the page. No automatic capture. |
| **Periodic** | The app captures every N minutes while the app is running (e.g. every 30 minutes). |
| **Background** (Android only, opt-in) | The app captures via a background service even when the app is closed. Requires explicit Android background-location permission. |

Most users find **manual only** or **periodic** sufficient. **Background** is a heavier permission, drains more battery, and is only needed for users who want comprehensive trip auto-detection without remembering to open the app.

## Snapshot data

Each snapshot stores:

| Field | Notes |
| --- | --- |
| `timestamp` | When captured |
| `coordinates` | Latitude / longitude / accuracy in metres |
| `altitude` | If the device provides it |
| `speed` | If the device provides it (e.g. when in motion) |
| `source` | `gps`, `network`, `manual` — how the location was resolved |
| `reverseGeocodeLabel` | Optional human-readable place label (e.g. "Belém, Lisbon, Portugal") if reverse geocoding ran |

Reverse geocoding (turning coordinates into a place name) uses a third-party API that's only called for snapshots you explicitly mark "label this". Bulk reverse geocoding is not done automatically to avoid sending all your coordinates to a third-party service.

## Cadence and battery

The trade-off chart for cadence:

| Cadence | Battery impact | Coverage |
| --- | --- | --- |
| Every 5 min | High | Very fine-grained — overkill for most |
| Every 15 min | Moderate | Good city-level tracking |
| Every 30 min | Low–moderate | Reasonable default |
| Every 60 min | Low | Coarse — misses short visits |
| Manual only | None | Just when you tap |

For most users tracking long trips, 30 minutes hits the right balance.

## Where snapshots live

- Stored in your account's Firestore document, scoped per-user.
- Never sent to any third-party service.
- Not shared with anyone unless you explicitly grant access (see [Data sharing](./data-sharing)).
- Deletable individually or in bulk from the location-tracking page.

## What location data feeds

Once you've enabled tracking, snapshots flow into:

- **Journeys** — auto-detect can suggest journeys from clusters of nearby snapshots over a date range.
- **People records** — when you create a "met them here" annotation on a person, the page can auto-fill location from the nearest snapshot.
- **Memories** — when you create a memory, the page can suggest location from the nearest snapshot.
- **Location-history page** — a private timeline of your location captures (you only).

None of these auto-share. All sharing requires explicit user action.

## Visibility on this page

The location-tracking settings page shows:

- **Current capture status** (on / off, mode, cadence).
- **Recent snapshots** — the last 10–20 captures with timestamps and labels.
- **Manual capture button** — instant capture from your current location.
- **Bulk delete** — remove snapshots older than N days, or delete everything.

## Privacy posture

This is one of the most privacy-sensitive features in LifeWell, so the posture is conservative:

- **Off by default.**
- **Opt-in per device** — enabling on your phone doesn't enable on your laptop.
- **Foreground-only by default** (background is a separate opt-in).
- **No reverse geocoding without explicit per-snapshot action** — coordinates stay raw unless you ask for a label.
- **Never sold, never aggregated, never used for AI training.**
- **Account deletion** purges all snapshots after the 30-day grace.
- **Visible only to you** unless you explicitly share a snapshot via a journey or memory.

The default-off, opt-in cascade is intentional: many users want some of LifeWell's other features without location tracking. They get them; nothing is auto-enabled.

## What this is not

- **Not real-time location sharing.** No "share my live location with my spouse" feature here. Use the device's native sharing for that.
- **Not a fitness tracker.** No step counting, no calorie estimates from movement.
- **Not a stalking aid.** You can only see your own snapshots. There is no way to view another LifeWell user's location without an explicit shared journey.
- **Not a navigation app.** No directions, no route planning.

## Battery and the Android background service

On Android, background location tracking uses Capacitor's Geolocation plugin with a foreground service to keep the OS from killing the capture process. A persistent notification ("LifeWell is tracking your location") is required by Android policy — this is OS-mandated, not LifeWell choosing to be annoying.

If you don't want the persistent notification, use **Manual only** or **Periodic** modes instead of **Background**.

iOS background location is a separate engineering project pending. For now, on iOS the modes available are Manual and Periodic (foreground).

## What you should know before enabling

- **Battery impact** scales with cadence. Test on your device before committing to "every 5 minutes everywhere".
- **Coverage gaps** are normal — indoors, with weak GPS, on aeroplane mode, the device may not get a fix.
- **Accuracy varies** — urban canyons drop GPS to network-based location (city-block accuracy). The `accuracy` field in each snapshot tells you the metres of uncertainty.
- **You can delete any snapshot at any time.** If something captured looks wrong, sensitive, or surprising, delete it.

## Frequently asked

**Can my partner see my live location?**
Not through this feature. LifeWell location tracking is private snapshots; live sharing isn't implemented here. Use Apple Find My / Google Find My Device / WhatsApp Live Location / etc. for live sharing.

**What if I forget I enabled tracking?**
The location-tracking page is always visible in the people-section nav, and the OS shows ongoing location-permission indicators (the green dot in iOS, the location notification in Android). Hard to forget for long.

**Does tracking work on the web app?**
Browser geolocation requires explicit permission per-tab and only captures when the tab is open. Mobile is the better tracking surface; web tracking is fine for occasional manual captures.

**Can I export my location history?**
Yes — JSON export of all snapshots. Useful for migrating to another app or for personal archival.

**What about privacy laws (GDPR / CCPA)?**
LifeWell processes location data as a consumer self-tracker. You're the controller of your data; LifeWell is a processor. Deletion request = account deletion. We don't sell your data to anyone; the data isn't shared without your explicit consent.

## Where to read next

- [Journeys](./journeys) — what tracking-data feeds.
- [Data sharing](./data-sharing) — what's shared at each group level.
- [Privacy and security](/docs/concepts/privacy-and-security) — overall posture.
- [Memories](/docs/memories-and-notes/memories) — point-in-time records with location.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
