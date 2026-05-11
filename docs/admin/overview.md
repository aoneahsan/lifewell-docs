---
title: Admin overview — platform administration for LifeWell maintainers
description: The LifeWell admin module covers user management, community moderation, ads, notifications, payments, verifications, and wellness-admin tools. Admin-claim gated.
keywords: [lifewell admin, platform administration, user management, content moderation, admin dashboard, ahsan mahmood]
sidebar_position: 1
---

# Admin overview

The **admin module** in LifeWell is the back-office surface for platform maintainers — managing users, moderating communities, configuring ad placements, sending platform-wide notifications, reviewing payments, processing verification requests, and tuning wellness-admin settings. Access is gated by **admin claims** on your account; regular users never see these pages.

This documentation is included for transparency about what the admin tools can and cannot do. If you're a regular user, this won't affect your day-to-day use of LifeWell. If you're an admin (currently a small team including Ahsan Mahmood), this section is your reference.

## Admin surfaces

| Page | Purpose |
| --- | --- |
| [Users](./users) | View, search, suspend, restore user accounts |
| [Communities](./communities) | Moderate communities, approve / suspend admins |
| [Ads](./ads) | Configure ad placements (currently none — LifeWell has no ads) |
| [Notifications](./notifications) | Send platform-wide announcements |
| [Payments](./payments) | Review payments, refunds, credit grants |
| [Verifications](./verifications) | Approve / reject professional and identity verifications |
| [Wellness admin](./wellness-admin) | Tune wellness-score weights, default reminders |

## Access control

Admin pages are protected by a Firestore-stored admin-role claim:

- Users with `role: 'admin'` (or `superadmin`) on their account see the admin nav.
- All other users don't see admin pages at all (the routes redirect to dashboard).
- Firestore rules deny admin-only writes from non-admin users — even if a malicious user discovered the URLs, the data writes would be rejected.

## What admins can do

- View any user's account metadata (name, email, signup date, plan).
- Suspend / restore accounts (with reason).
- Approve or remove community admins.
- Process verification requests for professionals or identity-verified users.
- Grant credits or premium days (e.g. for promotional purposes or refunds).
- Send platform-wide notifications.
- Review payment / refund history.

## What admins CANNOT do

- **Read users' private health data** — Firestore rules deny admin-read of personal health collections by default. Privacy posture is consistent across roles.
- **Read users' private notes, memories, or chats.**
- **Impersonate users** — there's no "sign in as user X" function.
- **Delete user accounts without process** — account deletion goes through the same 30-day grace flow regardless of who initiates.
- **Override user privacy settings** — admins can't grant themselves access to someone's medical info.

Admin power is intentionally limited to platform operations, not user-data access.

## Audit log

Every admin action is logged with:

- Admin who performed it.
- Timestamp.
- Action type.
- Target (user / community / payment).
- Reason text.

The audit log is queryable by other admins and is the accountability mechanism for admin actions.

## Becoming an admin

Admin claims are granted manually (not self-serve):

1. Submit a request with justification (community admin, paid support, etc.).
2. An existing superadmin reviews.
3. The claim is added to your account.

There's no automated path to admin status. The mechanism deliberately limits who has back-office access.

## Where to read next

- [Users](./users) — account management.
- [Communities](./communities) — community moderation.
- [Verifications](./verifications) — professional and identity verification.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
