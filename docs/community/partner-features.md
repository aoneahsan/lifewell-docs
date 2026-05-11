---
title: Partner features — shared baby tracking, journeys, cycle awareness
description: LifeWell partner features let couples share baby tracking, joint journeys, period and pregnancy awareness, with granular partner-level data sharing.
keywords: [partner sharing, couple app, shared baby tracking, partner cycle awareness, joint journey, ahsan mahmood]
sidebar_position: 3
---

# Partner features

**Partner features** in LifeWell are the surfaces designed for couples sharing data — joint baby tracking, shared journeys, period and pregnancy awareness for partners, and per-partner data-sharing overrides. The partner relationship is one of the highest-trust connections in LifeWell and gets specialised UX rather than being squeezed into the generic [connections](/docs/family/connections) model.

## What partner sharing covers

| Surface | Partner view |
| --- | --- |
| [Baby tracking](/docs/baby/overview) | Both parents log feedings, sleep, diapers, growth, milestones into the same baby's record |
| Joint memories | A memory tagged "with my partner" appears for both |
| Joint journeys | Both partners contribute photos and location snapshots to a shared trip |
| Period & fertility awareness | If you're tracking and you've granted access, your partner sees cycle predictions for relevant context |
| Pregnancy mode | Joint pregnancy view — both partners see the week-by-week info |
| Sleep & wellness awareness | Partner sees your nightly sleep summary (granted explicitly) |
| Reminders | Partner can set reminders that ping both phones (e.g. "give baby vitamins") |

## How partner status differs from a regular connection

A regular [connection](/docs/family/connections) at family-group level 1 sees a lot — but partner status adds:

- **Joint baby co-parenting** — both can edit the same baby record. Regular level-1 connections can only view.
- **Joint event creation** — partners can create shared events.
- **Pregnancy mode hand-off** — when one partner enters pregnancy mode, the other can opt in to the partner-view automatically.
- **Reminder propagation** — reminders set by one partner can fire on the other's device.

## Establishing partner status

From your [profile-and-settings/data-sharing](/docs/profile-and-settings/data-sharing) page:

1. Pick an existing connection with relationship type `spouse`, `partner`, or `co-parent`.
2. Toggle **Mark as primary partner** on.
3. Confirm — your connection gets a notification asking them to accept.
4. They accept (or decline).
5. Once both confirm, partner features unlock.

You can have **one** primary partner at a time. Co-parenting situations with multiple parents (blended families, polyamorous partnerships) use the standard partner-shared baby model with multiple partner IDs on the baby record but only one "primary" partner per user account.

## Baby co-parenting

The baby module is the most polished partner feature. Once both parents have partner status linked to the baby:

- Each can **log any baby event** — feedings, diapers, sleep, milestones — and the other sees them within seconds via Firestore sync.
- The **"last feeding"** indicator on the baby dashboard reflects who logged the latest, regardless of which parent.
- **Milestones** include a `recordedBy` flag so you can see "Dad logged 'first laugh' today".
- **Photo uploads** for milestones merge into the same baby photo album.
- **Notes** on the baby (medical-info, allergy notes) are shared.

See [baby overview](/docs/baby/overview) for the full baby-tracking surface.

## Joint memories and journeys

For memories:

- Tag your partner in a memory → the memory appears on both your timelines.
- Both partners can edit shared memories (with edit history maintained).
- Photos uploaded by either partner stay in the uploader's Google Drive but are visible to both via the metadata link.

For journeys:

- Create a journey marked "shared with my partner".
- Both partners can add location snapshots and photos.
- Either can rename, add notes, or change the privacy setting (with mutual visibility of changes).

## Period and pregnancy partner-awareness

Highly sensitive — opt-in per layer:

| Layer | Default | What partner sees |
| --- | --- | --- |
| Cycle awareness | Off | Predicted period start, fertile window — for support and planning |
| Symptom awareness | Off | Logged symptoms (cramps, fatigue, mood) for "today she's in a rough spot" context |
| Pregnancy mode | Off | Week-by-week pregnancy info; partner sees current trimester and important dates |
| Breastfeeding | Off | Session frequency, helpful for night-feed routines |

Each layer requires explicit opt-in. Defaults are off because not every couple wants this level of shared visibility.

## Wellness awareness

If both partners track health on LifeWell, opt-in wellness awareness shows:

- Each other's sleep summary (without details — just "got 5h, 2 wakes" if you allow it).
- Each other's daily step count.
- Each other's mood-journal trend (general direction, not entries).
- Activity / workout days.

The goal: support, not surveillance. The partner view is intentionally summary-only by default; full details require the higher data-sharing matrix toggles.

## Granular overrides

The [data-sharing matrix](/docs/family/data-sharing) still applies for fields not covered by partner-specific toggles. Partner status doesn't auto-share everything — it unlocks specific joint surfaces and changes some defaults, but most categories stay at the level you've configured.

## Ending partner status

From the same page where you set it:

1. **Remove primary partner** toggle off.
2. Confirm.
3. Both sides confirm.
4. Shared surfaces revert to standard connection visibility.
5. Joint records (shared baby, shared memories, shared journeys) need to be split or kept-as-joint by mutual agreement (the UI prompts).

If the relationship is over and amicable, joint baby records can stay joint indefinitely. If acrimonious, "split" the baby record into per-parent copies (with one chosen as canonical).

## What partner features are not

- **Not full account access.** Partner doesn't get your password, your medications, your private notes, or your full memory archive automatically. Only what you've shared via opt-ins.
- **Not co-account ownership.** Each user has their own account; partner features are sharing on top of separate accounts.
- **Not enterprise multi-user.** This is for romantic / co-parenting partnerships, not work-team sharing.
- **Not legally binding consent for medical decisions.** Partner-shared medical data is for personal context, not a legal authority.

## Privacy posture

Partner status is high-trust but reversible:

- Granted by mutual confirmation.
- Revokable unilaterally — either side can end partnership at any time.
- Audit log of partner-status changes available from profile/data-sharing.
- No retroactive recall — past shares stand, but future shares stop.

## Frequently asked

**Can I have multiple partners simultaneously?**
You can have multiple partner-shared baby records (relevant for blended-family co-parenting). You can have one "primary partner" account designation at a time. Polyamorous configurations work via the multi-baby-parent model; the primary partner designation is for UX defaults.

**My partner doesn't use LifeWell. Can they still see baby tracking?**
They need an account. Invite them from the connections page; they sign up; you mark as partner; baby tracking becomes joint.

**What if my partner and I separate?**
End partner status from data-sharing. Joint baby records can stay shared (best for the kid) or be split. Reach out via [feedback](mailto:aoneahsan@gmail.com) if you need help with a difficult separation transition.

**Does partner status appear on the family tree?**
Yes — the connection with type `spouse` or `partner` renders on the family tree (see [family tree](/docs/family/family-tree)).

**Is partner data co-owned legally?**
LifeWell holds the data on behalf of each account. Joint records are technically each partner's copy with sync. Legal ownership questions in a separation should consult counsel, not the app.

## Where to read next

- [Baby overview](/docs/baby/overview) — the main partner surface.
- [Data sharing](/docs/profile-and-settings/data-sharing) — granular permission controls.
- [Connections](/docs/family/connections) — verified bidirectional links.
- [Journeys](/docs/family/journeys) — shared trip records.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
