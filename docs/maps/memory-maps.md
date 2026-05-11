---
title: Memory map — D3 graph of memories, people, tags, locations
description: LifeWell's memory map renders every memory and its associations — tagged people, locations, tags, linked notes — as a D3.js force-directed graph.
keywords: [memory map, memory graph, life moments visualisation, memory connections, d3 graph, ahsan mahmood]
sidebar_position: 2
---

# Memory map

The **memory map** visualises every memory in your account and how memories connect — to the people tagged in them, to the places they happened, to common tags, to linked notes. It's a way to see your life-moment record as a graph rather than a chronological list, surfacing clusters (groups of memories that share people, themes, or locations) that the timeline view can miss.

Pan, zoom, click — the underlying interaction model is the same as every other [map](./overview) in the module.

## What the graph contains

| Node type | What it represents |
| --- | --- |
| Memory node | One memory (square with photo background) |
| Person node | A person tagged in at least one memory |
| Tag node | A tag used on multiple memories |
| Location node | A place referenced by multiple memories |
| Note node | A note linked to a memory |

Edges:

- **Memory–person**: the person was tagged in the memory.
- **Memory–tag**: the memory carries the tag.
- **Memory–location**: the memory happened at the place.
- **Memory–note**: a note is associated with the memory.
- **Memory–memory**: same date / nearby / shared people (inferred edges, dashed).

## Why graph it

A chronological timeline tells you "what happened when". A map tells you:

- **Who appears across many memories** — people who matter, the relationships that recur.
- **Which themes cluster** — wedding memories, travel memories, work milestones — visible as natural groupings.
- **Which locations matter most** — the cities, restaurants, family homes that come up.
- **Where the gaps are** — isolated nodes can mean memories not yet tagged with people or tags.

## Filters

The filter panel lets you narrow the graph:

| Filter | Use |
| --- | --- |
| Date range | "Show me memories from 2024 only" |
| Tagged person | "Show me memories with my mother" |
| Tag | "Show me 'travel' memories" |
| Location | "Show me memories at home vs away" |
| Show / hide node types | Toggle people, tags, locations, notes |

Combining filters lets you ask precise questions: "memories tagged 'family' that include my brother, in the last 3 years".

## Tag clustering

A useful mode: turn on **cluster by tag**. The simulation then groups same-tagged memories visually — your wedding memories drift toward one cluster, work milestones toward another. The visualisation immediately shows the themes of your life-record.

## Person clustering

Alternative mode: **cluster by tagged person**. Memories involving the same person attract toward each other. Combined with multi-person tagging, this reveals "group" memories — friends-trip clusters, family-gathering clusters.

## Performance

Memory maps scale well for typical use:

- **Up to 200 memories** renders smoothly.
- **200–500** is fine with date-range filtering.
- **500+** consider filtering by tag or person.

The full life-history map ("everything I've ever logged") becomes a hairball past a few hundred entries — filtering is the cure.

## Worked example

You've logged 95 memories over 3 years. Open the memory map:

- 95 memory nodes.
- 32 person nodes (the people tagged across memories).
- ~70 edges from memories to people.
- 14 tag nodes.

Without filtering, the graph is busy but readable. Turn on **cluster by tag** — clusters emerge:

- A "family" cluster of 28 memories around your immediate family.
- A "travel" cluster of 22 memories.
- A "wedding" cluster of 4 memories (your wedding + 3 you attended).
- A "work" cluster of 8 milestones.
- A scattered set of 33 standalone memories not tagged enough to cluster.

You notice the scattered set — opportunity to tag them better.

## Interactivity per node

Click any node:

- **Memory node** → opens the memory.
- **Person node** → opens that person's profile.
- **Tag node** → filters the graph to that tag.
- **Location node** → filters to that location, optionally opens the map of that location's events / notes / memories.

Right-click any node:

- Hide node from the graph.
- Pin node in place.
- Focus (recentre simulation on this node).

## Multi-graph navigation

From the memory map you can jump to:

- A person's [people map](./people-maps) — "see all this person's connections".
- A note's [note map](./note-maps) — "what else is this note linked to".
- An event's [event map](./event-maps) — "what surrounded this event".

The graphs cross-reference each other.

## Export

PNG, SVG, JSON — same as other maps. SVG is the best for printing a "map of my life" page; JSON is for users who want to process the graph in another tool.

## Privacy

The memory map is yours alone:

- Per-account graph, private.
- Connections to other entities (people, notes) are visible only because *you* tagged them in *your* memories.
- Exports are local; no cloud rendering.

## What this map is not

- **Not a real geographic map.** Locations are nodes, not lat/long pins on a world map. For the geographic view of your memories, the memories timeline has its own map view ("memories by place").
- **Not auto-clustering by content.** The clustering uses your tags and people-tags, not AI inference of theme.
- **Not retroactive.** A new memory you log appears in the graph on next render. The graph doesn't suggest "this memory should connect to that one".

## Frequently asked

**My memory map is empty.**
Add a few memories with at least one tag or one person-tag each. Without associations, the graph is just disconnected dots.

**Why are some memory–memory edges dashed?**
Inferred edges (same date, same location, common people) are dashed to distinguish them from explicit associations you typed in. The inferences are heuristics — useful for discovery, not authoritative.

**Can I share my memory map with a partner?**
Snapshot export (PNG) yes. Interactive sharing isn't a feature — each partner's data-sharing matrix governs what they see of your individual memories; rendering a shared graph would require complex cross-account computation.

**How do I clean up a noisy map?**
Use the filter panel: hide low-importance memories, hide some node types (e.g. hide tag nodes for a person-only view), or filter to a date range.

## Where to read next

- [Memories](/docs/memories-and-notes/memories) — the source data.
- [People maps](./people-maps) — person-centred lens.
- [Maps overview](./overview) — all map types.
- [Note maps](./note-maps) — note-centred lens.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
