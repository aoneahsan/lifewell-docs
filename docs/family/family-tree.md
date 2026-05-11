---
title: Family tree — D3.js force-directed visualisation
description: LifeWell family tree is a D3.js force-directed graph of your biological and marital relationships, with pan, zoom, and per-node detail.
keywords: [family tree, d3 family tree, genealogy chart, family graph, relationship visualisation, ahsan mahmood]
sidebar_position: 2
---

# Family tree

The **family tree** in LifeWell renders your person records and their relationships as a D3.js force-directed graph. Each node is a person; each edge is a relationship; the graph self-organises so close relationships sit close together visually. You can pan, zoom, click a node to open the person's detail page, and adjust the rendering as the tree grows.

Unlike traditional vertical-pedigree trees (great for genealogy, awkward for modern relationship structures), the force-directed layout handles step-families, divorces, adoption, chosen family, and the messy reality of real lives without forcing everything into a single vertical hierarchy.

## What the tree shows

- **Nodes** — every person record marked with a relationship to you (directly or indirectly through someone else).
- **Edges** — relationships. Different relationship types render with different line styles (solid for blood, dashed for marriage / partnership, dotted for step / adoptive).
- **Colors** — different colours for direct family, in-laws, step, and "other" relationships.
- **Avatars** — if the person has a profile photo, the node is the photo; otherwise a default initials avatar.

## Controls

| Control | What it does |
| --- | --- |
| Pan | Click-drag the background to move the view |
| Zoom | Mouse-wheel or pinch-zoom |
| Click node | Open the person's detail page |
| Right-click node | Quick-action menu (edit, view, mark relationship) |
| Zoom-in / zoom-out buttons | Discrete zoom steps for users without scroll wheels |
| Maximise | Toggle full-screen tree view |
| Reset | Re-centre on your self profile + 100% zoom |

The pan-zoom-reset behaviour uses LifeWell's shared `d3-zoom-helpers` so it matches the [work tree](./work-tree) and other D3 visualisations across the app.

## How it builds the graph

1. Read your self profile (the node marked `isSelf: true`).
2. Find every person record linked by a typed relationship.
3. Recursively add their relationships (one or two hops deep, depending on tree-size settings).
4. Render with D3's force simulation: nodes repel each other, edges act as springs, the simulation settles into a stable layout.

The depth is configurable so you can show just immediate family or expand to the wider network without rendering 500 nodes at once (which would be illegible).

## Best practices for the tree

Most users find these patterns make the tree readable:

- **Start with immediate family** — spouse, parents, children, siblings. The tree's most informative when these 4–8 nodes are reliable.
- **Add in-laws second** — your spouse's parents and siblings.
- **Add grandparents and aunts/uncles next**.
- **Then cousins, second cousins** as you want.
- **Use the photo avatar** when possible — the tree is much easier to read with faces than with name labels alone.

Avoid trying to render 100+ distant relatives — the tree becomes a hairball. Use [family groups](./family-groups) for casting a wider net without cluttering the visualisation.

## Relationship rendering

Different relationship types have different visual treatment:

| Relationship type | Line style | Colour |
| --- | --- | --- |
| Parent / child | Solid | Default |
| Sibling | Solid | Default |
| Spouse | Solid | Marriage colour |
| Partner (unmarried) | Dashed | Marriage colour |
| Ex-spouse / ex-partner | Dashed | Faded |
| Step / half / adoptive | Dotted | Default |
| In-law | Solid | In-law colour |
| Friend / colleague / other | Dotted | Other colour |

The treatments are subtle (no rainbow visual noise) but consistent enough that the tree communicates relationship type at a glance.

## Multi-generation handling

For tree-traversal purposes:

- **Up to 4 generations** above and below render cleanly without overlapping.
- **5+ generations** start to look cramped; zoom out or hide branches.
- **Cousins of cousins** (lateral expansion) is the most common cause of clutter — consider whether you need them in the tree or just in your records.

The depth-control slider lets you cap "how many hops from me" to render.

## Performance

The D3 force simulation runs in the browser:

- **Up to ~200 nodes** renders smoothly on a typical phone or laptop.
- **200–500 nodes** is usable but the layout settles slower.
- **500+ nodes** starts to feel sluggish; consider hiding distant relatives via depth or group filters.

The simulation pauses once the layout settles, so static viewing has no ongoing cost.

## Export

Three export options:

- **PNG image** — flatten the current tree to an image.
- **SVG** — vector export, scales without loss; useful for printing.
- **JSON** — the underlying graph data for those who want to process it elsewhere.

PDF export of the tree is on the roadmap.

## What this tree is not

- **Not a genealogy database.** No GEDCOM import / export yet (planned). For deep multi-generation genealogy with sources and citations, dedicated tools (Ancestry, FamilySearch, Gramps) are better.
- **Not a DNA-result viewer.** No 23andMe / AncestryDNA integration.
- **Not a public family tree.** Your tree is private; sharing requires explicit partner connections.
- **Not a relationship-suggestion engine.** It renders what you typed in; it doesn't try to infer cousins from co-occurring data.

## Frequently asked

**Why a force-directed layout instead of vertical pedigree?**
Vertical pedigree trees assume one ancestral line. Real families have step-parents, adoptive parents, surrogate parents, chosen family — none of which fit a strict vertical hierarchy. Force-directed graphs handle the irregularity gracefully.

**Can I print my tree?**
Yes — SVG export is the highest-quality option. Open the SVG in any browser or vector editor and print.

**My ex-spouse shows up as dashed — can I hide them entirely?**
You can delete the relationship (in the person's edit page), which removes the edge but keeps the person record. Or you can mark the person as "hidden from tree" in their profile.

**Why does the tree look like a hairball with 50 nodes?**
Two common causes: too many "friend" or "colleague" relationships polluting the family view (use [work tree](./work-tree) for those), or too many cousins / grandparents (lower the depth setting). The tree is meant for the relationships that matter; aggressive trimming is a feature.

**Does the tree update when I add new people?**
Yes — the snapshot listener picks up new records and re-renders automatically. No refresh needed.

## Where to read next

- [Work tree](./work-tree) — the professional counterpart.
- [Family groups](./family-groups) — group-based closeness levels.
- [Connections](./connections) — verified bidirectional connections.
- [Overview](./overview) — module summary.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
