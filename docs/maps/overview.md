---
title: Maps — D3.js association graphs for people, memories, more
description: LifeWell maps are D3.js force-directed graphs that visualise associations between people, memories, events, notes, and chats. Five map types plus a full unified view.
keywords: [association maps, d3 force directed graph, knowledge graph, memory connections, people graph, ahsan mahmood]
sidebar_position: 1
---

# Maps overview

The **maps** module in LifeWell renders the relationships *between* your data as D3.js force-directed graphs. Each map type focuses on a different domain (people, memories, events, notes, chats) plus a "full" map that combines all of them. Nodes are entities; edges are associations — and the graph self-organises so closely-linked entities sit close together visually.

Maps are an exploration tool, not a tracking surface. They surface patterns ("which people appear in the most memories?", "which notes are linked to which events?") that flat lists obscure.

## Map types

| Map | Centre | Renders |
| --- | --- | --- |
| [People map](./people-maps) | A person (or yourself) | People + their memories + their notes + their events |
| [Memory map](./memory-maps) | A memory (or all) | Memories + tagged people + linked notes + locations |
| [Event map](./event-maps) | Events | Events + linked notes + attendees + linked memories |
| [Note map](./note-maps) | A note (or all) | Notes + associations to people / memories / events / chats |
| Chats map | Chats | Chats + participants + linked notes |
| Full map | You | Everything connected to you |

Each map is a different lens on the same underlying data — your person records, memories, notes, events, chats.

## Node types

Nodes can represent:

| Type | Visual | Source |
| --- | --- | --- |
| Person | Avatar circle | Person records |
| Memory | Square with photo background | Memory records |
| Event | Triangle / calendar icon | Calendar events |
| Note | Document icon, coloured by note's colour | Note records |
| Chat | Speech-bubble icon | Chat threads |
| Tag | Pill-shape | Tag entities |
| Location | Pin icon | Location snapshots |

Different visual treatments make node type clear at a glance, especially on the full map where every type is mixed.

## Link types

Edges represent typed associations:

| Type | Meaning |
| --- | --- |
| `family` | Person-to-person family relationship |
| `friend` | Person-to-person friend relationship |
| `colleague` | Person-to-person work relationship |
| `mentioned_in` | Person mentioned in a memory or note |
| `tagged_in` | Person tagged in a memory |
| `related_to` | Generic link between any two entity types |
| `participant` | Person participated in an event |
| `created_by` | Note / memory created by a user |
| `associated` | Catch-all association |

Edges are rendered with different line styles (solid for direct, dashed for inferred / weak, dotted for mentions) so the relationship type is readable.

## How a graph is built

For each map:

1. Read the entities relevant to the map type from your account.
2. Build the node set.
3. Compute the edges by walking the association fields on each entity (e.g. `memory.people[].personId` → memory-person edges).
4. Pass to D3's force simulation: forces include link-attraction, node-repulsion, centring, and (for some maps) clustering by tag or year.
5. Render in SVG. Interactive — pan, zoom, click, drag.

The force simulation pauses once the layout settles, so static viewing has no ongoing cost.

## Interactive controls

| Control | What it does |
| --- | --- |
| Pan | Drag the background |
| Zoom | Scroll wheel / pinch |
| Click node | Open that entity's detail page |
| Drag node | Pin to a position (releases force) |
| Right-click | Quick-action menu (filter, hide, focus) |
| Filter panel | Hide node types or link types |
| Search | Find a specific node by name |
| Focus | Recentre the simulation on a chosen node |
| Reset | Re-centre on yourself + 100% zoom |

## Performance

D3 force simulations scale to:

- **~150 nodes** smoothly on most devices.
- **150–400** usable, layout takes a few seconds to settle.
- **400+** start to lag; consider filtering.

The maps page has filter controls so you don't have to render everything at once. For the **full map**, the default filters limit to the last 12 months unless you opt to see everything.

## Visualisation philosophy

The maps aren't optimised for prettiness or social-network-style hairballs — they're optimised for **insight**:

- Heavy clustering means a group that shares many associations.
- An isolated node means someone (or some memory) you haven't linked into much.
- A "bridge" node connecting two clusters is interesting (e.g. a friend who's also a colleague).
- Tag-clustering (when enabled) reveals themes (e.g. all "wedding" memories cluster together).

## Export

| Format | Use |
| --- | --- |
| PNG | Web-shareable raster |
| SVG | Vector, prints well |
| JSON | Raw graph data for external processing |

PDF export with surrounding context (legend, filter state) is on the roadmap.

## Privacy

Maps render from your private data:

- **Per-account, private** — only you see your maps.
- **Sharing**: you can export a snapshot (PNG) and share the image, but the underlying graph is not shareable as an interactive view.
- **Connection visibility**: even connected partners don't see your maps; they see the underlying entities (memories, people, notes) per your [data-sharing](/docs/family/data-sharing) matrix.

## What maps are not

- **Not a social graph.** No follower / following count. The graph is your private associations.
- **Not a knowledge graph in the Notion / Obsidian sense.** LifeWell isn't designed for note-taking-with-backlinks as the primary use case; the maps are an exploration layer on top of the existing surfaces.
- **Not auto-generated** insights. The map shows what you've linked; it doesn't infer new connections.
- **Not real-time collaborative.** Single-user.

## When to use a map

- **Discovery**: "What memories does this person appear in?" → People map → click their node.
- **Reflection**: "Who do I keep coming back to in my notes?" → Note map → tag-clustering reveals patterns.
- **Cleanup**: "Which notes are unconnected to anything?" → Note map → isolated nodes are candidates for archiving.
- **Storytelling**: "Map of my last trip" → Memory map filtered to the trip's date range.

## Worked example

Open the Note map. The graph shows:

- 80 note nodes.
- ~30 person nodes (the people associated to notes).
- ~15 memory nodes (memories that have linked notes).
- ~120 edges.

You notice a tight cluster of 12 notes all linked to one person (your business partner). Clicking the cluster reveals it's the "project Y" notes — useful for spotting they all want to live in one folder.

Another node (your high-school best friend) has 2 isolated notes — they're stale; archive them or attach them to memories.

## Where to read next

- [People maps](./people-maps) — person-centred view.
- [Memory maps](./memory-maps) — memory-centred view.
- [Note maps](./note-maps) — note-centred view.
- [Event maps](./event-maps) — event-centred view.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
