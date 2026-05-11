---
title: Work tree — D3 visualisation of professional connections
description: LifeWell work tree is a D3.js force-directed graph of your professional relationships — colleagues, mentors, mentees, alumni — grouped by company and role.
keywords: [work tree, professional network, colleague graph, mentor mentee map, alumni connections, ahsan mahmood]
sidebar_position: 6
---

# Work tree

The **work tree** is the professional counterpart to the [family tree](./family-tree). It renders your work-related connections — colleagues, mentors, mentees, alumni from past companies, professional acquaintances — as a D3.js force-directed graph. Each node is a person; each edge is a professional relationship. The visualisation groups nodes by company / organisation so the structure shows at a glance ("here's everyone from my last job", "here's my MBA cohort").

The work tree shares its data model with the family tree but filters to professional relationship types and to the work-history field on each person record.

## What the tree shows

- **Nodes** — people with at least one professional relationship to you (colleague, mentor, mentee, business contact, network) or whose record lists a shared employer / school in work history.
- **Edges** — relationships and shared-affiliation links.
- **Clusters** — nodes grouped by company / organisation. The D3 force simulation pulls same-company nodes together.
- **You** — your self profile sits at the centre.

## Relationship types in the tree

| Type | Edge meaning |
| --- | --- |
| Colleague | You and they worked at the same company at the same time |
| Mentor / mentee | Asymmetric professional development relationship |
| Manager / report | Reporting relationship |
| Client | You served them or vice versa |
| Vendor | Vendor relationship |
| Investor / investee | Investment relationship |
| Alumni | Same school or programme |
| Conference / event contact | Met via professional event |
| Other | Anything else professional |

The tree treats these as edges; clusters form by `company` / `educationHistory` overlap in the person records.

## Controls

| Control | What it does |
| --- | --- |
| Pan | Click-drag the background |
| Zoom | Scroll wheel or pinch |
| Click node | Open the person's detail |
| Right-click | Quick-action menu |
| Zoom in / out / fit | Discrete zoom controls |

Same pan-zoom helper library as the family tree — consistent UX across both.

## How it builds the graph

1. Start with your self profile.
2. For each person in your records, check if they have a professional relationship to you OR if your `workHistory` / `educationHistory` overlaps theirs.
3. Render found people as nodes; render explicit relationships and shared-affiliation links as edges.
4. D3 force simulation groups same-company nodes together.

The tree includes both **explicit relationships you typed in** ("Jane is my mentor") and **inferred shared affiliations** ("Jane and I both have Acme Corp in our work history"). Inferred edges are visually distinct (dotted) so you can see which are formal connections vs. which are co-occurrences.

## Use cases

A few common ways people use the work tree:

- **Recruitment lookups**: "Do I know anyone at Acme Corp?" — find the Acme cluster.
- **Cold-outreach mapping**: "Who's the closest path from me to a person at X company?" — the graph distance is informative.
- **Alumni search**: "Who else from my MBA cohort do I know?" — the school cluster shows.
- **Mentor finding**: "Who in my network has mentor labels?" — filter the tree by mentor relationships.
- **Career retrospective**: see the layered work history visually.

## Best practices

- **Fill in work history** on the people who matter — without `company` and `jobTitle` in the record, the work tree has nothing to cluster.
- **Use explicit relationship types** for closer professional connections; inferred-only is weaker signal.
- **Don't try to map your entire LinkedIn** — the tree is meant for the relationships that matter to you, not for completeness.

## Privacy

Like everything else in LifeWell, the work tree is:

- **Per-account, private** — not shared with anyone unless you grant explicit connection access.
- **Not auto-imported from LinkedIn** — there is no LinkedIn integration.
- **Not used for advertising** — your professional graph is yours.

## What this tree is not

- **Not LinkedIn.** No public profile, no follower count, no posting feed, no job-listings layer.
- **Not a CRM.** No deal pipeline, no contact-frequency reminders, no sales-engagement features.
- **Not auto-built.** It renders what you typed in; no scraping or import.
- **Not a path-finder API.** The visualisation shows graph distance to a target, but it's a visual estimate, not a Dijkstra-result. Useful for "do I know someone at company X" not for routing.

## Performance

- Up to ~150 professional connections renders well.
- 150–300 starts to compress visually.
- Past 300, the cluster grouping helps, but consider filtering (e.g. by relationship type or company).

## Worked example

You have 22 people in your records with `workHistory` containing "Acme Corp", "Beta Inc", or your MBA programme. Two are tagged as mentors, one as a current colleague at your current job (Beta Inc), four as alumni of the MBA.

Opening the work tree:

- Three visible clusters: Acme Corp (8 people), Beta Inc (10 people including you and the colleague), MBA programme (4 people).
- Explicit relationship edges connect you to the two mentors and the current colleague.
- The 4 alumni and your two mentors appear in multiple clusters where their records share affiliations.

You can use this to find common-affiliation people quickly without scrolling through a contact list.

## Frequently asked

**Can I import my LinkedIn connections?**
Not directly. LinkedIn's API doesn't permit programmatic bulk import for general apps. Manual entry, or one-time CSV export from LinkedIn (Settings & Privacy → Get a copy of your data → Connections), then re-entry into LifeWell, is the path.

**Can I see the work tree without family people cluttering it?**
The work tree only renders people with at least one professional relationship or shared-affiliation. People with only family relationship types don't appear here. If a person appears in both trees (a colleague who's also a cousin), they appear in both — that's fine.

**Can I share my work tree with a recruiter?**
Connection-based sharing applies the same way as family — you can grant a specific person read access to your professional graph, but it's not the typical use case. Most users keep the work tree private.

**Are mentor edges asymmetric?**
Yes — mentor / mentee is directional. The tree renders the asymmetry with an arrow.

**What's the difference between "colleague" and "alumni" in this model?**
Colleague = currently or recently at the same company. Alumni = same school or programme. Both are professional, distinct labels.

## Where to read next

- [Family tree](./family-tree) — biological / marital counterpart.
- [Overview](./overview) — module map.
- [Connections](./connections) — verified bidirectional links.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
