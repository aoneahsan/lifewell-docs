---
title: Family groups — 5 closeness levels drive sharing permissions
description: LifeWell family groups bucket your connections into 5 closeness levels (Immediate, Close, Extended, Wider, Network) that govern data-sharing permissions per level.
keywords: [family groups, closeness levels, family sharing tiers, immediate family, extended family, in-laws, privacy controls, ahsan mahmood]
sidebar_position: 3
---

# Family groups

**Family groups** in LifeWell bucket your connections into five closeness levels, from the tightest inner circle (your spouse, children, parents) out to the wider network (acquaintances, distant cousins, work contacts). The level isn't just a label — it drives the **data-sharing permissions** under [Data sharing](./data-sharing), so what your level-1 group sees about you can be different from what your level-3 group sees.

This is the practical answer to "I want my spouse to see my full health log, but my cousins should only see my birthday and contact details, and my work network should only see my job-related profile fields."

## The five levels

The level constants live in `src/types/family-connection.ts` as `GroupLevel = 1 | 2 | 3 | 4 | 5` with these labels:

| Level | Label | Examples |
| --- | --- | --- |
| **1** | Immediate Family | Spouse, children, siblings, parents |
| **2** | Close Family | Spouse's siblings, siblings' families, uncles/aunts |
| **3** | Extended Family | Cousins, grandparents, in-laws at grandparent level |
| **4** | Wider Family | Grandparents' siblings, great-grandparents |
| **5** | Extended Network | Everyone else in your extended network |

The labels are LifeWell's defaults; you don't pick custom labels per account. The level is the contract — the same level means the same thing in everyone's app.

## Why exactly five levels

Five levels balances expressiveness and simplicity:

- **Two levels** is too coarse — "family" vs "not family" doesn't capture nuance.
- **Three levels** misses the difference between immediate and the close-but-not-immediate (in-laws, siblings' kids).
- **Five levels** maps cleanly to most family structures: nuclear, extended-blood, in-laws, wider-blood, network.
- **More than five** is friction — most users won't fine-tune past five buckets.

Five levels also maps to a five-level data-sharing matrix that fits on one screen.

## What each level governs

Per [Data sharing](./data-sharing), each level has its own toggles for what's visible:

| Category | Examples of fields the level can see |
| --- | --- |
| Identity | Name, photo, gender, birthday |
| Contact | Phones, emails, addresses |
| Personal | Bio, notes you wrote about yourself |
| Family relations | Who you're connected to and how |
| Location | Current location, recent journeys |
| Health | Vitals, conditions, medications |
| Professional | Job title, company, work history |

By default:

- **Level 1** sees everything.
- **Level 2** sees most things except detailed health.
- **Level 3** sees identity + contact + family relations.
- **Level 4** sees identity + family relations only.
- **Level 5** sees identity only.

You can override the defaults per category per level — full granularity at [Data sharing](./data-sharing).

## How to assign someone to a level

Two ways:

1. **From the person's profile**, set the family-group field to a level 1–5.
2. **From the family-groups page**, drag a connection between levels.

The level is per-connection — if you and your cousin both have LifeWell accounts and are connected, each of you sets the level independently from your side. You might rate your cousin at level 3, they might rate you at level 2 — both work, the rating reflects how you each see the relationship.

## Bidirectional connections + level asymmetry

Connections are bidirectional (Person A connecting to Person B means both records reflect the link), but the level rating is **not** bidirectional. Each side rates the other independently.

This matters because:

- You might be very close to your second cousin (level 2 from your side) while they barely remember you (level 4 from their side).
- Your level rating affects what *you* share with *them*; their rating affects what *they* share with *you*.

## When to re-assign a level

Relationships shift. People you were once close to drift to the periphery, distant relations become close. Re-assign as needed; the level can change at any time, and the data-sharing permissions immediately reflect the new level.

If you mark a level-1 connection down to level-5, the next time they open LifeWell they'll see less of your data (whatever level-5 shows in your data-sharing matrix). The transition is silent — no notification fires.

## Levels and the family tree

The [family tree](./family-tree) visualisation does not visually colour-code by level (it codes by relationship type instead). The two systems are independent:

- **Relationship type** (parent / sibling / cousin / friend) is the structural fact — who is whom.
- **Level** (1–5) is the relational closeness — how much you share.

A "first cousin" might be level 1 (you're best friends) or level 5 (you've never met). Both are legitimate; the level captures what the relationship type can't.

## Default levels by relationship type

LifeWell suggests a starting level when you add a new relationship:

| Relationship | Default level |
| --- | --- |
| Spouse, child, parent, sibling | 1 (Immediate) |
| Parent-in-law, sibling-in-law | 2 (Close) |
| Aunt / uncle, niece / nephew | 2 (Close) |
| Grandparent, grandchild | 2 (Close) |
| Cousin | 3 (Extended) |
| Great-aunt / great-uncle | 4 (Wider) |
| Friend / colleague | 5 (Network) — adjust based on closeness |

These are suggestions; you override on creation or any time after.

## What this system does not do

- **Doesn't enforce relationship logic.** You can assign your spouse to level 5 if you want; the app trusts your judgement.
- **Doesn't automate level changes.** If you stop interacting with someone, the level doesn't decay. You re-assign manually.
- **Doesn't notify the other person of level changes.** The level is private to each side.
- **Doesn't replace per-person fine-grained sharing.** For "I want to share only this one field with this one person", use a per-person share link instead of the group-level system.

## Worked example

You're inviting your spouse and your mother to share data with you. Your spouse is at level 1, your mother at level 2 in your group settings.

In your [Data sharing](./data-sharing) matrix:

- Level 1 — full health access on.
- Level 2 — basic vitals on, detailed conditions off.

Your spouse signs in to LifeWell and connects to you. They see everything (per level 1).

Your mother signs in and connects to you. She sees identity, contacts, basic vitals — but not your full health log, mental-health notes, or medication adherence — per level 2's matrix.

## Frequently asked

**Can I add a custom level?**
Not at the moment. Five is the structural constant. If five doesn't fit, per-person share links (with per-field grants) are the more granular alternative.

**Can a person be in multiple levels?**
No — each connection has exactly one level rating from your side. The granularity is in the data-sharing matrix (across categories), not in the levels.

**Do levels affect the family tree visualisation?**
No — the tree codes by relationship type, not by level. A level-1 sibling and a level-5 sibling render the same way in the tree.

**What if I forgot to assign a level?**
A new connection without an explicit level defaults to level 5 (extended network). Adjust when convenient.

**Are levels public?**
No — your level rating for someone is visible only to you.

## Where to read next

- [Data sharing](./data-sharing) — the matrix that levels drive.
- [Connections](./connections) — verified bidirectional connections.
- [Family tree](./family-tree) — the visual tree (separate from level coding).
- [Overview](./overview) — module map.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
