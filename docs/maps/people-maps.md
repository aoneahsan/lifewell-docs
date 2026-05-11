---
title: People map — D3 graph of you, your connections, and shared context
description: LifeWell people map renders you, your connections, and the memories / notes / events you share — a D3.js force-directed view of your social graph.
keywords: [people map, social graph, connections visualisation, who you know, shared memories, ahsan mahmood]
sidebar_position: 4
---

# People map

The **people map** centres on you and renders your connections plus the things that link you to them — shared memories, notes mentioning them, events you attended together. It's a force-directed picture of who is in your life and what context you share. Different from the [family tree](/docs/family/family-tree) (which renders biological/marital relationships only), the people map mixes family, friends, colleagues, and any other connection in one view.

## What the graph contains

| Node | Source |
| --- | --- |
| You (self) | The centre, always your self profile |
| Person | Each connection with at least one relationship or shared entity |
| Memory | A memory both you and the person appear in |
| Note | A note associated with the person |
| Event | An event with the person as a participant |
| Tag | Tags that group related people |

Edges:

- **You–person** (the direct relationship).
- **Person–memory** (tagged in the memory).
- **Person–note** (associated with the note).
- **Person–event** (participant).
- **Person–person** (mutual relationships if your records reflect them).

## Centring

By default the map is **self-centred** — you sit in the middle, people radiate outward. You can recentre on any node:

- Click a person → see *their* connections from your records.
- Click a memory → see who appears in it.

This lets you explore the graph from different perspectives without losing the data — recentring is a render setting, not a navigation.

## Filters

| Filter | Use |
| --- | --- |
| Family-group level | "Only level 1–2 people" |
| Relationship type | "Only friends" or "Only colleagues" |
| Has shared memory | "Only people I've logged memories with" |
| Date range | "People with shared activity in 2024" |
| Tag | "Only people tagged 'bookclub'" |

## Group-level clustering

A useful mode: turn on **cluster by family-group level**. The simulation pulls level-1 people close (immediate family), level-2 next (close family), and so on outward. The visual ring structure mirrors the conceptual closeness levels.

## Worked example

You have 60 people in your records:

- 6 immediate family (level 1).
- 8 close family + close friends (level 2).
- 18 extended family + good friends (level 3).
- 22 colleagues + acquaintances (level 4–5).

Open the people map with default filters:

- 60 person nodes.
- ~25 memory nodes (memories with people-tagging).
- ~12 note nodes (notes with person association).
- Hundreds of edges.

Turn on **cluster by level**. Concentric rings appear: 6 close to you, then 8, then 18, then 22 — visually mapping the conceptual closeness.

You notice:

- One immediate-family member has only 1 memory edge — gap to fill.
- A "colleague" you also tagged in 5 memories is probably closer than level-5; reassign to level-3.
- A handful of memories cluster around your wedding with 8 friends — the wedding "supergroup" of close-friends-of-the-day.

## What the people map adds beyond the family tree

- **Mixes professional + family.** The family tree filters to family relationships; the people map shows everyone.
- **Surfaces shared context.** A name without memories is a stale contact; the map distinguishes active relationships from records that have decayed.
- **Reveals invisible groups.** Tag-clustering reveals groups (book club, weekly Monday game, friends-from-grad-school) that aren't in any explicit relationship type.

## Performance

| Person count | Behaviour |
| --- | --- |
| Up to 100 | Smooth |
| 100–250 | Slows to settle; usable with filtering |
| 250+ | Filter by level or relationship type |

The full graph rarely needs to render everyone — most exploration happens with level + date filters applied.

## Interactivity

Standard map controls — pan, zoom, click, drag, right-click. Plus:

- **"Path to X"** — given two nodes, highlight the shortest path of relationships between them.
- **"People in common with X"** — given a person, highlight everyone who shares memories, notes, or events with them.

These power-user features are tucked behind the right-click menu.

## What the people map is not

- **Not LinkedIn.** No profiles you don't own, no public following, no recommendations.
- **Not auto-built from address book.** The map renders person records you've created; it doesn't scrape your contacts.
- **Not real-time.** The graph reflects your records at this moment; nothing live-updates beyond Firestore snapshot.
- **Not a partner-shared view.** Each LifeWell user's people map is their own.

## Privacy

The map is yours alone:

- Per-account, private.
- Connections you have don't see your people map — they see your data through their own perspective.
- Exports are local.

## Frequently asked

**Why does my brother appear with only 1 edge?**
You haven't tagged him in many memories or notes. Edges in the map come from typed associations — tag people you care about in your memories and notes for a richer graph.

**Can I see my partner's people map?**
No — even at the highest data-sharing level, the map is each user's private rendering of their data. You'd see their entities (memories, notes), not their map.

**Can I export the people map for genealogy software?**
JSON export gives the raw graph. GEDCOM export (specific to genealogy software) is on the roadmap.

**Why are some people in the map who aren't in my contacts app?**
Person records in LifeWell are not synced to your device contacts unless you explicitly enable contacts sync. Records can be LifeWell-only.

## Where to read next

- [Family tree](/docs/family/family-tree) — biological/marital relationships only.
- [Connections](/docs/family/connections) — verified connection management.
- [Memory maps](./memory-maps) — memory-centred lens.
- [Maps overview](./overview) — all map types.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
