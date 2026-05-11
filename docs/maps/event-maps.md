---
title: Event map — D3 graph of events, attendees, notes, memories
description: LifeWell event map renders calendar events and their connections — attendees, linked notes, linked memories — as a D3.js force-directed graph.
keywords: [event map, calendar visualisation, event attendees graph, meeting notes, life events, ahsan mahmood]
sidebar_position: 5
---

# Event map

The **event map** visualises calendar events from LifeWell's [calendar](/docs/profile-and-settings/reminders) and how each event connects to people, notes, and memories. It's particularly useful for retrospective reflection — looking back at a season and seeing who you spent time with, what notes came out of which meetings, and which events became memories worth keeping.

Same D3.js force-directed model as the other [maps](./overview); same pan / zoom / click interactions.

## What the graph contains

| Node | Source |
| --- | --- |
| Event | One per calendar event |
| Person | Attendees / participants from your records |
| Note | Notes linked to an event |
| Memory | Memories that referenced an event |
| Tag | Event tags |
| Location | Recurring event locations |

Edges:

- **Event–person** (participant).
- **Event–note** (linked note from the event).
- **Event–memory** (the event became a memory).
- **Event–tag** (tagged in calendar).
- **Event–location** (where it happened).

## Why graph events

A calendar tells you when. The event map tells you *what came of it*:

- Which events generated memories? (Important events → linked memory.)
- Which events generated action-item notes? (Productive events.)
- Who do you regularly see? (Attendee frequency.)
- Which events recur but don't seem to produce anything? (Possibly candidates for skipping.)

## Filters

| Filter | Use |
| --- | --- |
| Date range | Default = last 12 months |
| Event type | Meetings, social, personal, deadline |
| Attendee | "Show me events I attended with X" |
| Has linked note | "Show only events with notes" |
| Has linked memory | "Show only memories" |
| Tag | Filter by event tag |

## Date-range default

The default filter is **last 12 months** — beyond that, calendar data tends to be stale and the graph becomes a hairball. You can expand to all-time, or narrow to a specific quarter / month.

## Attendee clustering

Turn on **cluster by attendee** — same-attendee events attract toward each other. Useful for:

- "What did I do with X this year?" cluster around their node.
- Identifying "regulars" — people who appear at many events.

## Worked example

You log calendar events for the last 12 months — 80 events.

- 30 work meetings.
- 12 personal appointments (doctor, dentist, haircut).
- 15 social gatherings.
- 8 trips / travel days.
- 15 milestones / birthdays / anniversaries.

Open the event map filtered to the last 12 months. Cluster by attendee:

- Tightest cluster: your work team — 18 events all with the same 4 people.
- Mid cluster: your weekly running group — 12 events with 3 friends.
- A handful of one-offs scattered.

Insights:

- The team-event cluster has only 2 notes attached — opportunity to start linking meeting-notes consistently.
- The running-group cluster has 1 memory linked (a finish-line photo); the rest are routine.
- A "tax appointment" event sits isolated — appropriate; no further linking needed.

## Recurring events

Recurring events (e.g. weekly meetings) render as one node by default, with attendee and linked-note edges aggregated. A toggle lets you expand to one node per occurrence — useful for "how did this weekly meeting evolve" but produces denser graphs.

## Interactivity

Standard map controls plus:

- **Click event node** → open the event in the calendar.
- **Click attendee** → see all events with that person.
- **Click linked note** → open the note.
- **Click linked memory** → open the memory.

## Path-from-event

Right-click any event and "Find connected memories / notes" highlights the network of associations radiating from that event. Useful when an event ended up being more significant than you realised.

## What the event map is not

- **Not your calendar.** For day-planning, use the [calendar](/docs/profile-and-settings/reminders). The map is a retrospective lens.
- **Not auto-extracted attendees from invites.** Attendees come from your person records explicitly tagged in the event, not auto-imported from Google Calendar.
- **Not a meeting-frequency optimiser.** No recommendations like "you meet too often with X" or "schedule fewer events".
- **Not multi-user.** Single-user.

## Privacy

Same posture as every map:

- Per-account, private.
- Other users (even connections) don't see your event map.
- Exports are local.

## Performance

- Up to 200 events smooth.
- 200–500 usable with attendee filtering.
- 500+ filter aggressively.

The default 12-month filter keeps most users well under 200.

## Frequently asked

**Why don't my Google Calendar events show up?**
LifeWell calendar is separate from Google Calendar; events have to be created in LifeWell to appear here. Sync from Google Calendar is on the roadmap (one-way read, given OAuth complexity).

**Can I see events in a date range past 1 year?**
Yes — open the date-range filter and pick "All time" or a custom range. The 12-month default just keeps the initial render clean.

**An event has 5 attendees but only 2 person nodes appear.**
The map renders attendees from your person records. Attendees in the event who don't have a person record in your account don't get a node. Create person records for them to include them.

**Can I export the event map?**
PNG / SVG / JSON, same as other maps.

## Where to read next

- [Reminders](/docs/profile-and-settings/reminders) — schedule events that this map visualises.
- [People maps](./people-maps) — person-centred lens.
- [Memory maps](./memory-maps) — memory-centred lens.
- [Maps overview](./overview) — all map types.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
