---
title: Data sharing (family) — per-level visibility matrix
description: LifeWell data sharing for family is a per-level x per-category matrix. Five levels (Immediate→Network) by seven categories (identity, contact, health, etc.).
keywords: [family data sharing, per-level sharing, sharing matrix, privacy controls, family group permissions, ahsan mahmood]
sidebar_position: 8
---

# Data sharing (family-module)

The **family-module data-sharing** page is the matrix that decides what each [family-group level](./family-groups) can see about you. Five levels run down one axis, seven category groups run across the other, and each cell is a toggle. The result: a fine-grained map of "what level-2 sees about me vs what level-4 sees about me" without having to set permissions one person at a time.

This page is the granular complement to the family-groups system. Family groups answer "who is in which level"; data sharing answers "what each level sees".

## The matrix

| Category | Level 1 (Immediate) | Level 2 (Close) | Level 3 (Extended) | Level 4 (Wider) | Level 5 (Network) |
| --- | --- | --- | --- | --- | --- |
| **Identity** (name, photo, gender, DOB) | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Contact** (phones, emails, addresses) | ✓ | ✓ | ✓ | optional | × |
| **Family relations** (who you're related to) | ✓ | ✓ | ✓ | optional | × |
| **Personal** (bio, profile notes) | ✓ | ✓ | optional | × | × |
| **Professional** (job, work history) | ✓ | ✓ | ✓ | ✓ | optional |
| **Health** (vitals, conditions, meds) | ✓ | optional | × | × | × |
| **Location** (current, journeys) | ✓ | optional | × | × | × |

Defaults above are LifeWell's suggestion; every cell is a toggle you can flip. The default favours "share less" — increase only when you intentionally want a level to see more.

## Per-category detail

### Identity

Always visible to anyone you're connected to (you can't hide your name from your spouse). Includes:

- Display name and nickname.
- Profile photo.
- Gender (if set).
- Birth date (optional toggle to hide).

### Contact

- Phone numbers (per-number visibility toggles).
- Email addresses (per-email).
- Postal addresses (per-address).
- Social profiles and websites.

Per-method toggles let you share your mobile number with level-1 but not your work line; share your personal email with level-2 but not level-3.

### Family relations

Whether the other person can see your wider family tree.

- Off: they see you alone.
- On: they see the people you've connected to and how.

Sharing this with level-1 lets your spouse see your family tree. Sharing with level-3 lets your cousins navigate your tree to find connections.

### Personal

- Bio (free text describing yourself).
- Your self-profile notes.
- (Optionally) the personal notes you've written about other people.

### Professional

- Job title, company, profession.
- Work history (chronological).
- Education history.

### Health

The most sensitive category. By default only level 1 (immediate family) sees full health; level 2 sees a subset, levels 3+ see nothing.

Toggles within Health:

- **Vitals** (BP, sugar, weight, BMI).
- **Conditions** (allergies, asthma, etc.).
- **Medications** (current meds, adherence).
- **Period & fertility** (period log, cycle predictions).
- **Pregnancy** (pregnancy mode state).
- **Mental health** (mood journal, gratitude, etc.).

You can grant access category-by-category. Most users let spouse see vitals + meds but keep mental-health private.

### Location

- **Current location** (only valuable if you have location-tracking enabled).
- **Recent journeys** (the trips you've recorded).
- **Location history** (the full snapshot timeline).

Most users keep location tightly scoped — level-1 only, and even there often opt-out unless you and your partner are actively coordinating.

## How sharing actually works

When a level-X connection of yours opens your profile:

1. LifeWell pulls your data-sharing matrix.
2. For each category, checks whether your level-X row has the toggle on.
3. Renders only the fields whose toggle is on.

If you flip a toggle off, the change applies on the next render — the next time they open your profile, the data is hidden. No notification fires.

## Level rating asymmetry

Recall from [Family groups](./family-groups): each side rates the other independently. Your matrix determines what *you share with them*; their matrix determines what *they share with you*.

So:

- You rate cousin Sarah as level 2; you set Health → Vitals on for level 2. Sarah sees your vitals.
- Sarah rates you as level 4; she sets Health → off for level 4. You see no health data for Sarah.

The asymmetry is the point — closeness isn't always mutual.

## Per-person overrides

For finer-than-level granularity, you can override the matrix for a specific person:

- "I want Sarah to see my vitals even though her level normally wouldn't."
- "I want my brother to *not* see my medications even though level-1 normally does."

Per-person overrides live in the person's profile under **Sharing overrides**. Use sparingly — too many overrides defeat the predictability of the level system.

## Reset to defaults

If your matrix gets confusing or you want a clean slate, there's a **Reset to defaults** button that restores LifeWell's default matrix. Existing per-person overrides aren't touched by this; they need separate clearing.

## What this system is not

- **Not a public-profile system.** Sharing applies only to verified connections.
- **Not enforced by Firestore rules at every field.** The matrix is the application's source of truth; field-level Firestore rules are coarser. Don't rely on this for keeping data from a determined attacker — the only way to truly protect a piece of data from a connection is to not store it.
- **Not viewable by the other person.** Your connections don't see your sharing matrix; they just see what you're sharing.

## Worked example

You rate three people: spouse at level 1, brother at level 1, mother at level 2.

Your matrix:

- Level 1: every cell on except "Mental health".
- Level 2: identity, contact, professional, vitals — nothing else.

Spouse opens your profile: sees identity, contact, family relations, personal, professional, vitals, medications, conditions, current location, journeys — but not your mental-health log.

Brother opens your profile: same as spouse (both at level 1).

Mother opens your profile: sees identity, contact, professional, vitals — no medications, no conditions, no location, no journeys.

If you flip "Health → Conditions" off for level 1, spouse and brother stop seeing your conditions on next render. If you turn "Health → Medications" on for level 2, your mother starts seeing your medications.

## Frequently asked

**Can I share specific fields rather than whole categories?**
The category granularity is the default level. Per-person overrides (linked in the person's profile) let you go finer. Per-field granularity within a category isn't currently exposed — request it via [feedback](mailto:aoneahsan@gmail.com) if it's important to you.

**Are sharing changes audited?**
There's a sharing audit log in your account that records every matrix change (timestamp + what changed). View it from the data-sharing page footer.

**Can I "see what others see"?**
Yes — there's a **Preview as level N** option that simulates what a level-N connection would see when opening your profile. Useful for verifying your matrix is set correctly.

**What happens to active connections when I lower their level's matrix?**
The changes apply on next render. Data they previously saw will simply stop appearing. No retroactive recall — they may have screenshotted or memorised information, of course.

**Does this matrix affect partner sharing on baby profiles?**
No — baby partner-access (described under [Baby overview](/docs/baby/overview)) uses a separate per-baby permission model. The family-data-sharing matrix is for your own personal record visibility.

## Where to read next

- [Family groups](./family-groups) — the 5-level system this matrix is keyed to.
- [Connections](./connections) — verified bidirectional links.
- [Profile data sharing](/docs/profile-and-settings/data-sharing) — the parent settings page.
- [Privacy and security](/docs/concepts/privacy-and-security) — overall posture.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
