---
title: Note map — D3 graph of notes, folders, tags, associations
description: LifeWell note map renders your notes and their cross-feature associations (people, memories, events, chats) as a D3.js force-directed graph.
keywords: [note map, note graph, knowledge graph, note backlinks, d3 visualisation, ahsan mahmood]
sidebar_position: 3
---

# Note map

The **note map** visualises your [notes](/docs/memories-and-notes/notes) and the things they're linked to: people from your records, memories, calendar events, and chats. Each association you tagged on a note becomes an edge; the D3 force simulation arranges everything into clusters that reveal which notes belong together by their relationships.

This is the closest LifeWell comes to a knowledge-graph view — it doesn't auto-infer backlinks (you typed the associations in yourself), but the graph layout makes the cross-references easy to navigate.

## What the graph contains

| Node | Source |
| --- | --- |
| Note | One per note in your records |
| Person | Each unique person associated with at least one note |
| Memory | Each memory linked to at least one note |
| Event | Each calendar event linked to a note |
| Chat | Each chat thread linked to a note |
| Tag | Each tag used by ≥2 notes |
| Folder | Each folder containing ≥3 notes (optional cluster anchor) |

Edges:

- **Note–person** (associated).
- **Note–memory** (linked).
- **Note–event** (linked).
- **Note–chat** (linked).
- **Note–tag** (carries the tag).
- **Note–folder** (lives in the folder).

## Why a note map

Searching notes by title gets you "find me this specific thing". Browsing folders gets you "what's in this domain". The note map answers different questions:

- **Which notes are connected to a specific person?** → cluster around that person node.
- **Which notes are linked to the same memory?** → cluster around the memory.
- **Which notes are orphans (no associations)?** → isolated nodes — candidates for cleanup or tagging.
- **What themes cluster across folders?** → tag-driven clusters cross folder boundaries.

## Filters

| Filter | Use |
| --- | --- |
| Folder | "Only show notes in this folder" |
| Tag | "Only show 'project-X' notes" |
| Type | "Only show audio notes / picture notes / etc." |
| Date range | "Only notes from the last 90 days" |
| Has association of type | "Only notes linked to a person / memory / event" |
| Hide node types | Toggle entity types off |

## Tag and folder clustering

The map supports two clustering modes:

- **Cluster by tag** — same-tag notes attract toward each other. Useful for seeing how tags actually group your content (and whether your tagging is consistent).
- **Cluster by folder** — notes in the same folder attract toward each other. Useful for seeing if your folder structure matches the way you've actually linked things.

When both are off, the force simulation runs pure attraction–repulsion on shared associations only.

## Performance

| Note count | Behaviour |
| --- | --- |
| Up to 200 | Smooth |
| 200–500 | Usable with date/tag filtering |
| 500+ | Filter aggressively or split by folder |

Most users hit 100–200 notes before the map starts to feel busy.

## Interactivity

- **Click a note node** → opens the note.
- **Click a person/memory/event/chat node** → opens that entity's detail page.
- **Drag a node** → pin it to a position (force-released).
- **Right-click** → quick actions (hide, pin, focus, archive note).
- **Search** → find a specific note by title.

## Worked example

You have 150 notes spread across 8 folders. Open the note map without filtering:

- 150 note nodes.
- 14 person nodes.
- 22 memory nodes.
- 6 event nodes.
- 18 tag nodes.

Turn on **cluster by folder**. The 8 folders become visual clusters. You notice:

- The Work folder has 60 notes — many tightly clustered around one person (your manager) plus a tail of notes loosely linked.
- The Recipes folder has 18 notes, all isolated (no cross-feature associations — they don't really need any).
- The Personal folder has 30 notes scattered, some linked to memories, others to people.

Switch to **cluster by tag**:

- Suddenly tag clusters appear that cross folder boundaries — "urgent" tagged notes from Work + Personal cluster together; "follow-up" tags reveal a backlog.

Different clusterings reveal different things — switch between them as questions arise.

## What this map is not

- **Not Roam / Obsidian.** No automatic `[[backlink]]` parsing inside note content. Associations are explicit fields, not inferred from text.
- **Not real-time collaborative.** Single-user.
- **Not a search alternative.** For finding a specific note by title or content, search is faster. The map is for *exploration*, not retrieval.

## Privacy

The note map is rendered from your private notes:

- Per-account, only you see it.
- Per-note data-sharing applies — if you've made a specific note shareable to a connection, they see the note's detail page, not your map.
- Exports go to your device.

## Frequently asked

**My note map is sparse — most notes are isolated dots.**
You haven't added many associations. The map shows what you typed in. Tag people, link memories, attach events to your notes and the graph fills out.

**Can I make the map auto-link notes that mention the same name?**
Not currently. Auto-link via text mention is a planned feature (it's harder than it looks — disambiguation across people with similar names is non-trivial).

**Why don't all my tags show as nodes?**
Tags with only 1 note don't appear as cluster anchors (they wouldn't draw a useful cluster). Tags used by 2+ notes appear.

**Can I share the note map with my partner?**
Export PNG and share the image. The interactive view is single-user.

## Where to read next

- [Notes](/docs/memories-and-notes/notes) — the source data.
- [Note folders](/docs/memories-and-notes/note-folders) — folder hierarchy.
- [Memory maps](./memory-maps) — memory-centred lens.
- [Maps overview](./overview) — all map types.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
