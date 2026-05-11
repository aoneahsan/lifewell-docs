---
title: Family module — people, tree, groups, journeys, sharing
export: false
description: LifeWell's family module covers person records, family tree, work tree, family groups (5 levels), connections, journeys, location tracking, and data sharing.
keywords: [lifewell family, family tree, family groups, connections, journeys, location tracking, data sharing, people, ahsan mahmood]
sidebar_position: 1
---

# Family module overview

The LifeWell **family module** is a personal-CRM-meets-genealogy layer for the people in your life — immediate family, extended family, professional contacts, and anyone else you want to keep a record of. Each person gets a record with contacts, life dates, professional history, and an optional health-info note. From there, the module composes the records into visualisations (family tree, work tree), groupings (5 levels of closeness), connection management (verified bidirectional links), journeys (location snapshots + travel records), and per-group-level data sharing controls.

The surfaces under `/family/*` and `/people/*` share data — they are different views of the same underlying records.

## Surfaces in the family module

| Surface | What it does | Page |
| --- | --- | --- |
| Person profile | Name, contacts, addresses, life dates, professional history, health info | [Connections](./connections) |
| Family tree | D3.js force-directed visualisation of biological / marital relationships | [Family tree](./family-tree) |
| Family groups | 5-level closeness groupings driving data-sharing permissions | [Family groups](./family-groups) |
| Connections | Verified bidirectional family connections + connection requests | [Connections](./connections) |
| Work tree | D3.js visualisation of professional relationships | [Work tree](./work-tree) |
| Journeys | Trip records combining location snapshots + photos | [Journeys](./journeys) |
| Location tracking | Optional automatic location snapshots (opt-in) | [Location tracking](./location-tracking) |
| Data sharing | Per-group-level visibility controls (what level-1 sees vs level-5) | [Data sharing](./data-sharing) |

## Why a "family module" at all

Most apps treat contacts as a flat list with one address each. Real-world relationships are nested (you trust your spouse with more than your second cousin) and richer (the same person may have a work role, a family role, a journey shared with you, and a health note you want to remember).

LifeWell models the richer reality:

- **Each person is a real entity**, not just a name + number. Phones, emails, addresses, social profiles, identity documents, work history, education, bio, notes — fill in what you want, leave the rest empty.
- **Relationships are explicit**. "John is my brother" is stored as a typed bidirectional relationship, not as text in a note field.
- **Groups grade closeness**. Five levels from "immediate family" down to "extended network" govern what you share automatically with whom.
- **The same record powers many views.** The family-tree picture and the work-tree picture pull from the same person records you maintain.

## Self profile

There's one special person record per account: **you**, marked with `isSelf: true`. The self record acts as the anchor for tree visualisations (the tree starts from "you") and for relationship calculations.

You create the self profile when you first open the People area; LifeWell prompts you to fill in name + DOB at minimum.

## Person record fields

A person record holds:

| Group | Fields |
| --- | --- |
| Identity | Name, nickname, avatar (with Google Drive backup option), gender |
| Life dates | Birth date, death date, isAlive flag |
| Contact methods | Multiple phones, emails, addresses; primary flags; type labels (home/work/mobile/etc.) |
| Online presence | Social profiles, websites |
| Identity docs | Driver's licence, passport, ID — stored for your reference |
| Professional | Profession, company, job title, full work history, education history |
| Personal | Bio, notes, optional health-info subdocument |
| Sync | Device-contact link, isFromDevice flag, lastSyncAt |
| Timestamps | createdAt / updatedAt / deletedAt (soft delete) |

You don't need to fill all of this for every person — most users fill name + DOB + phone for casual contacts and the full set for immediate family.

## Relationship types

The relationship vocabulary covers what you'd expect plus more:

- **Direct family**: parent, child, sibling, spouse, grandparent, grandchild, aunt/uncle, niece/nephew, cousin.
- **In-laws**: parent-in-law, sibling-in-law, child-in-law.
- **Step / half / adoptive**: stepparent, stepchild, step-sibling, half-sibling, adoptive parent, foster parent, adopted child, foster child.
- **Non-family**: partner (unmarried), friend, colleague, mentor, mentee, neighbour, acquaintance, ex-spouse, ex-partner.
- **Other**: godparent, godchild, custom relationship name.

Each relationship is stored bidirectionally — if you mark John as your brother, his record sees you as a sibling too.

## Storage and sync

Person records live in Firestore under your account. The full sync architecture:

- **Local-first**: every record is cached in Zustand + Capacitor Preferences for offline reading.
- **Firestore source of truth**: writes go to Firestore; the snapshot listener updates local cache.
- **Device contacts**: optional import from the device address book (Android / iOS), with link maintained for re-sync.
- **Google Drive avatar backup**: optional — your photos can back up to your own Google Drive (via the proxy in `workers/google-drive-token-proxy/`).

## What this module is

- A personal record-keeping system for the people in your life.
- A genealogy-light tool for the family tree without going full Ancestry.com.
- A privacy-respecting alternative to social-network "people graphs" that mine your contacts.

## What this module is not

- **Not a social network.** There's no feed, no follow, no public profile. Your records are yours.
- **Not an enterprise CRM.** No deal pipelines, no email marketing, no lead scoring.
- **Not a contact-sharing platform.** Your records aren't shared unless you explicitly create a partner-share link.
- **Not an identity-verification service.** Identity documents stored here are for your reference; no government-grade verification.

## Privacy

People records contain some of the most sensitive data in LifeWell — full contact details, identity documents, addresses, relationships, possibly health notes about loved ones. Same posture as every other surface:

- Per-account Firestore documents, rule-protected — only you read.
- No selling, no AI training, no aggregation.
- Connection-based sharing is opt-in per-connection.
- Account deletion follows the 30-day grace window.

For data-sharing specifically (what shared with whom at which group level), see [Data sharing](./data-sharing) — the controls are granular and off by default.

## Where to start

1. Create your **self profile** at `/people/create` (filled at minimum: name, DOB).
2. Add 2–3 **immediate family members** (spouse, parents, children).
3. Mark relationships from each new person back to you (the bidirectional system handles the rest).
4. Browse the [family tree](./family-tree) visualisation.
5. (Optional) Configure [data-sharing](./data-sharing) preferences if you plan to invite partners.

Don't try to build a complete family tree on day one — add people as they come up.

## Frequently asked

**Can I import contacts from my phone?**
Yes — the import flow (Android via Capacitor's contacts plugin, iOS in progress) reads device contacts you select and creates person records. You can re-sync later if you update a phone contact.

**Are these records public?**
No. They live in your account. The only people who see them are partner connections you grant access to under [Data sharing](./data-sharing).

**Can I represent deceased family members?**
Yes — set `isAlive: false` and optionally set the death date. They appear in the tree with a different visual treatment.

**What about complex family structures (step / adopted / chosen family)?**
The relationship vocabulary covers step, half, adoptive, foster, and custom relationships. Use what fits.

**Does LifeWell upload my contacts anywhere I don't know about?**
No. Device-contact import is opt-in and only the records you explicitly import are stored. Nothing is uploaded silently.

## Where to read next

- [Family tree](./family-tree) — D3 force-directed visualisation.
- [Family groups](./family-groups) — 5-level closeness system.
- [Connections](./connections) — verified bidirectional connections.
- [Data sharing](./data-sharing) — per-group-level visibility controls.
- [Privacy and security](/docs/concepts/privacy-and-security) — overall data protection posture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
