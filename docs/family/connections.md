---
title: Connections — verified bidirectional family links + requests
description: LifeWell connections are verified bidirectional links between LifeWell users. Each side accepts the relationship; once verified, family-group-level data sharing applies.
keywords: [family connections, connection request, bidirectional link, verified relationship, partner sharing, ahsan mahmood]
sidebar_position: 4
---

# Connections

A **connection** in LifeWell is a verified, bidirectional link between two LifeWell users (or between a user and a person record they own). Connections are how the family-groups and data-sharing systems decide what's visible to whom. Adding "John" as a person in your records does not create a connection on its own — John must have a LifeWell account and accept the connection request for the bidirectional link to exist.

This page covers connection requests, acceptance flow, family-group level assignment, the unverified vs verified distinction, and the connection-management page.

## Verified vs unverified

Two states of "person record + relationship" exist in LifeWell:

| State | What it means |
| --- | --- |
| **Unverified person record** | You created a record for someone (name, contacts, relationship). They may or may not have a LifeWell account. No data is shared either way — the record exists only in your account. |
| **Verified connection** | Both you and the other person are LifeWell users; you sent a connection request; they accepted. Data-sharing permissions (per family-group level) now apply. |

Most person records start unverified. You can connect later when both sides are ready.

## Connection request flow

1. **You initiate** from the person's profile → "Send connection request".
2. **Enter the other person's LifeWell email** (or invite them to LifeWell first if they don't have an account).
3. **Pick the relationship type** from your perspective ("brother", "spouse", "cousin", etc.).
4. **Pick the family-group level** you want them at (or use the default suggestion).
5. **Submit**.

The other person receives a notification in their LifeWell app. They:

1. See the request with your name, profile photo, and proposed relationship type.
2. Accept, decline, or modify the relationship type and level from their side.
3. (On acceptance) The connection is verified and data sharing begins.

If they decline, the request closes; you can re-send later.

## Bidirectional with independent level ratings

Connections are bidirectional in the sense that **both sides see the link** — your record sees them, their record sees you. But each side rates the other's family-group level independently:

- You may rate them as level 2 (Close Family).
- They may rate you as level 4 (Wider Family).
- You share with them what your level-2 matrix says is visible.
- They share with you what their level-4 matrix says is visible.

This asymmetry reflects the reality that closeness isn't always reciprocal.

## Relationship-type validation

When both sides have proposed a relationship type, LifeWell does a sanity check:

- **Mutual relationships** (sibling–sibling, cousin–cousin) match symmetrically.
- **Asymmetric relationships** (parent–child, grandparent–grandchild) check that one side picked the "parent" half and the other picked the "child" half.

Mismatches flag for review before the connection finalises. Most of the time the validation passes automatically.

## Connection management page

The `/people/connections` page lists:

- **Active connections** — verified links, grouped by family-group level.
- **Pending outgoing requests** — connection requests you've sent that haven't been responded to.
- **Pending incoming requests** — others' requests waiting for your response.
- **Declined** — requests that were declined (visible for a short period before clearing).

Each connection shows the other person's name, photo, their relationship to you, your level rating for them, and quick actions (open profile, change level, view shared data, remove connection).

## What sharing looks like once verified

Once a connection is verified:

- The other person sees a curated view of your data, scoped by your data-sharing matrix at their level.
- You see a curated view of their data, scoped by their matrix at your level.
- Changes to either side's level rating or data-sharing matrix apply on next render — no notification fires.

What "curated view" looks like in practice depends on what categories you've enabled at that level. See [Data sharing](./data-sharing) for the matrix.

## Removing a connection

From the person's profile or the connections page → **Remove connection**:

- The bidirectional verified link is broken.
- Data sharing stops immediately on both sides.
- The person record stays in your account (for your reference); their record of you behaves the same on their side.
- A re-connection requires a new connection request and acceptance.

Removing is silent — the other person doesn't get a "removed by X" notification, but they will notice when shared data disappears.

## Why "verified" matters

The bilateral-acceptance design serves a few goals:

- **Privacy**: no one's data is shared without their explicit acceptance.
- **Trust**: a verified connection is one you can build other features on (joint baby tracking, partner-shared journeys, etc.).
- **Anti-abuse**: harassment via unwanted "connections" isn't possible — declining a request stops it.

## Inviting someone to LifeWell

If the person you want to connect with doesn't yet have a LifeWell account, you can invite them by email from the connection-request flow. The invitation:

- Sends an email with your name and a link to LifeWell's signup page.
- Carries the connection-request context so when they sign up, the request appears pre-loaded for them to accept.
- Expires after 14 days if they haven't signed up.

Invitations don't share any data — they're just a "join LifeWell + accept my request" prompt.

## What this system is not

- **Not auto-discovered.** LifeWell does not scan your address book and suggest "people you might know" connections.
- **Not a public following system.** There's no follower / following count, no public connection list.
- **Not enterprise contact-sync.** Single-user-to-single-user only.
- **Not visible to third parties.** Connections live in private Firestore documents.

## Frequently asked

**Can I connect to a deceased family member?**
You can have a person record for them (mark `isAlive: false`), but a connection requires a living LifeWell user on the other side. The record exists for your tree and history.

**Can I connect to a baby's record?**
Baby profiles are linked to parents via the baby's `userId` and `partnerUserIds` fields, not via the connections system. See [Baby overview](/docs/baby/overview) for partner-sharing of baby data specifically.

**Does removing a connection delete the person record?**
No. The person record stays in your account. Only the verified-link + data-sharing aspects are removed.

**What if the other person doesn't have email?**
Connection requests require an email address (since LifeWell auth uses email). For someone without email, keep them as an unverified person record — you don't lose the relationship in your tree, you just don't get the data-sharing layer.

**Are connection requests rate-limited?**
There are reasonable rate limits to prevent spam. Most users won't hit them.

## Where to read next

- [Family groups](./family-groups) — the 5-level closeness system.
- [Data sharing](./data-sharing) — what's actually shared at each level.
- [Overview](./overview) — module map.
- [Person profile fields](./overview#person-record-fields) — what a person record contains.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
