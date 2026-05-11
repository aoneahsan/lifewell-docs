---
title: Admin communities — approve, suspend, escalation handling
description: The LifeWell admin Communities page lets platform admins approve new community proposals, suspend communities that violate rules, and handle moderation escalations.
keywords: [admin community moderation, approve community, suspend community, content moderation escalation, ahsan mahmood]
sidebar_position: 3
---

# Admin communities

The **admin Communities** page is where platform admins manage the LifeWell communities surface — approving new community proposals, suspending communities that violate platform rules, demoting community admins, and handling moderation escalations that community admins flagged for platform review.

This is distinct from community-level moderation: community admins handle day-to-day posts within their community. Platform admins handle community-level decisions and cross-community policy enforcement.

## What admins can do

- **Approve new community proposals** from users.
- **Suspend** a community for policy violations.
- **Restore** a suspended community.
- **Add or remove community-admin** roles.
- **Process escalation reports** from community admins.
- **Delete posts** that violate platform-wide policy (rare; usually the community admin handles).

## New community proposals

When a user submits a community proposal:

1. The proposal appears in **Pending proposals**.
2. Platform admins review:
   - Topic is meaningful and not redundant with existing communities.
   - Proposed name is professional.
   - Initial admin team has reasonable accounts (not throwaway).
   - Topic doesn't require regulatory licensing (e.g. proposing a "medical advice" community is rejected — that's what [consultations](/docs/community/consultations) is for).
3. Approve / reject with reason.
4. On approval, the community is created with the proposed admin team.

## Suspending a community

If a community has repeated policy violations or its admins refuse to enforce platform rules:

1. Open the community's admin page.
2. **Suspend community** → required reason.
3. Effect: community becomes read-only (no new posts) and a banner shows "Suspended pending review".
4. Existing posts remain visible (for users to retrieve their content) for 30 days, then hidden.

Suspension is reversible — restore from the same page.

## Adding / removing community admins

Community admins are appointed by:

- The community's existing admin team (community-level).
- Platform admins (this surface) when community admins fail to act.

Typical use: a community's lead admin becomes inactive and stops moderating. A platform admin can promote an active member to admin so moderation resumes.

## Escalation handling

Community admins escalate to platform admins when:

- A post is harassing, hateful, or illegal at the platform level.
- A user repeatedly violates after community-level bans.
- A dispute between two community admins.

Each escalation lands in the **Escalations** queue with the report content, the community admin's note, and the relevant user/community context. Platform admins:

- Review the post / pattern.
- Decide: dismiss / warn / suspend user / suspend community.
- Reply to the community admin who escalated.

## Cross-community policy enforcement

A user who's been suspended at the community level can be suspended at the platform level if their behaviour pattern crosses communities. The [Users](./users) page handles the suspension; the Communities page handles the cross-community pattern recognition.

## Audit log

Every action (approve / suspend / admin-change / escalation-decision) writes to the audit log with admin, timestamp, target, reason.

## What this page is not

- **Not for moderating individual posts** — that's the community admin's job. Platform admins step in only for escalations.
- **Not for content recommendation tuning.** No algorithmic feed promotion.
- **Not for setting community rules** — communities set their own rules within the platform-wide rule framework.

## Where to read next

- [Communities (user)](/docs/community/communities) — the user-facing view.
- [Users](./users) — user-account-level moderation.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
