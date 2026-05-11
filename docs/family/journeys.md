---
title: Journeys — trip records with location snapshots and photos
description: LifeWell journeys are trip records that combine location snapshots and photos into a timeline. Create manually or auto-detect from background location data.
keywords: [travel journal, journey tracker, trip log, location snapshots, travel timeline, ahsan mahmood]
sidebar_position: 5
---

# Journeys

**Journeys** in LifeWell are trip records — a defined period (weekend, week, longer trip) with a name, status (ongoing or completed), location snapshots taken during the period, photos attached to the trip, and travel statistics computed from the underlying data. Each journey lives under your account and can be created manually ("My Lisbon weekend, May 14–17") or auto-detected from the [location-tracking](./location-tracking) snapshots if you've opted into background tracking.

This is the travel-journal layer of LifeWell — looser than a logged journal, more structured than just photos in a phone gallery.

## What a journey record stores

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | "Lisbon weekend", "Wedding trip to Marrakech" |
| `description` | string (optional) | Free text — what the trip was about |
| `status` | enum | `ongoing` or `completed` |
| `startDate` | date | When the trip began |
| `endDate` | date (optional) | When the trip ended; absent while ongoing |
| `locations` | array | Location snapshots tied to this journey |
| `photos` | array | Photos attached (via FilesHub) |
| `stats` | computed | Distance travelled, places visited, days |
| `privacy` | enum | Private (default), shared with connections, or shared via link |

You don't need to fill every field — a name + start date is enough to create a journey; photos and locations can accrete over the trip.

## How journeys integrate with location tracking

Two modes:

- **Manual**: you create a journey with name + dates. Location snapshots and photos are added as you tap "Add to journey" during the trip or after.
- **Auto-detect**: with background location tracking enabled (off by default), the app can suggest "It looks like you spent the weekend in Lisbon — create a journey?" based on the snapshot pattern. You accept (or decline) the suggestion.

Auto-detect requires explicit location-tracking opt-in. By default LifeWell does not record your location.

## Photos and journeys

Photos uploaded into a journey:

- **Display in chronological order** along the trip's timeline.
- **Show on a map** if they have GPS metadata.
- **Are stored in FilesHub** with the same privacy posture as all your other media.
- **Can be tagged with people** from your connections — useful for joint-trip records.

The photo upload supports common formats (JPEG, PNG, HEIC, WebP) and is capped at FilesHub's per-file limits.

## Travel stats

For a completed journey with location data, the page computes:

- **Total distance travelled** (approximate, based on snapshot-to-snapshot great-circle distance).
- **Number of places visited** (clusters of nearby snapshots).
- **Country count** (if snapshots crossed international boundaries).
- **Day count** (end - start).
- **Photos taken** (count, plus the densest photo day).

These are descriptive — there's no gamification ("most countries visited", "longest trip badge") in the journeys page.

## Journey timeline view

Opening a journey shows:

- **Map** with location snapshots and photo pins.
- **Day-by-day breakdown** with the photos and locations from that day.
- **Photo gallery** view (chronological).
- **Edit / share / delete** controls.

The map is the centrepiece for most users — it's the visual summary of where you went.

## Sharing a journey

Three privacy levels:

| Privacy | What it does |
| --- | --- |
| Private | Default — only you see it |
| Shared with connections | Visible to a specific subset of your connections (you pick) |
| Shared via link | Generates a public read-only link you can send to anyone |

Public links are unique random URLs; they expire after a configurable period (default 30 days). Anyone with the link sees the trip's name, locations, and photos — no other data from your account leaks.

## Editing a journey

You can edit:

- Name, description, dates.
- Status (mark ongoing → completed).
- Add or remove location snapshots from the journey.
- Add or remove photos.
- Change privacy.

Deleting a journey removes the journey record but leaves the underlying location snapshots and photos in your other surfaces (location-tracking history, photo library) unless you delete them separately.

## Use cases

A few common ways people use journeys:

- **Weekend trips** — quickly snap photos and end the journey on Sunday.
- **Multi-week travel** — ongoing journey while abroad, photo and snapshot capture as you go.
- **Wedding / event trips** — short trip with people-tagged photos.
- **Significant life moves** — "moved from London to Lisbon" as a journey of its own.
- **Pilgrimage / spiritual travel** — a way to keep a private record without a public Instagram presence.

## Privacy posture

Journeys touch some of LifeWell's most sensitive data (where you've been, with whom, when):

- **Per-account Firestore documents**, rule-protected — only you read by default.
- **Location snapshots are never silently uploaded** — they're added only via location-tracking (which is opt-in) or by manual creation.
- **Photo storage** in FilesHub, scoped to your account.
- **Public share links** are read-only and revocable.
- **Account deletion** purges all journeys with the 30-day grace window.

## What this is not

- **Not a real-time location-sharing app.** Connections don't see your live location through journeys.
- **Not a social travel feed.** No followers, no public profiles, no feed.
- **Not a check-in-style app.** No "I'm at this restaurant" public posts.
- **Not a travel-booking integration.** No flight / hotel / Airbnb tie-in.

## Worked example

You spent four days in Lisbon, May 14–17.

Manual journey creation:

1. Open Journeys → Create.
2. Name: "Lisbon weekend".
3. Dates: 2026-05-14 to 2026-05-17.
4. Privacy: Shared with connections — pick spouse + best friend.
5. Save.

During the trip:

- Open the journey on the map, tap "Add location snapshot" at each notable place (Belém, Sintra, Alfama, the seafood restaurant).
- Upload photos from the day's gallery; they auto-attach by date.

On May 17, tap "Mark complete" — the journey closes and stats compute (242 km travelled, 8 places, 4 days, 67 photos).

You share the URL with your spouse and best friend; they see the journey, no one else does.

## Frequently asked

**Can I import past trips from Google Photos?**
Not yet — Google Photos integration is on the long-term roadmap. For now, manually upload photos and the journey constructs around them.

**Do journeys count toward the wellness score?**
No — they're not a tracked behaviour. They're memory keeping.

**Can my spouse contribute photos to a shared journey?**
Currently, the journey owner manages photos; shared connections see read-only. Multi-contributor journeys (where both spouses add photos to the same trip record) are on the roadmap.

**What's the difference between a journey and a memory?**
A [memory](/docs/memories-and-notes/memories) is a single point in time (a specific moment). A journey is a span (a trip). Memories from a trip can be linked to its journey for context.

**Can I download a journey as a PDF?**
Yes — PDF export bundles the timeline, map, and photos into a printable document.

## Where to read next

- [Location tracking](./location-tracking) — auto-snapshots that feed journeys.
- [Memories](/docs/memories-and-notes/memories) — point-in-time records.
- [Maps overview](/docs/maps/overview) — broader map-based surfaces.
- [Privacy and security](/docs/concepts/privacy-and-security) — overall data posture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
