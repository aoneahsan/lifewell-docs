---
title: Admin users — search, suspend, restore, reset password
description: The LifeWell admin Users page lets admins search accounts by email/name/UID, view metadata, suspend or restore accounts, and force password resets — without reading private user data.
keywords: [admin user management, suspend account, restore account, password reset, user search, ahsan mahmood]
sidebar_position: 2
---

# Admin users

The **Users** page in the admin module is where admins manage user accounts — searching, viewing metadata, suspending abusive accounts, restoring suspended accounts, granting credit packs (e.g. for refunds), and triggering password resets. Critically, **admins cannot read user-private data** (health entries, notes, memories) through this page or any other path — only platform-level account metadata is visible.

## What this page shows

For each user:

- **Display name + photo** (the same one shown in their community profile).
- **Email** (primary account email).
- **UID** (Firebase Auth user ID — internal identifier).
- **Signup date**.
- **Last sign-in date**.
- **Account status** — active / suspended / deleted (in grace) / deleted (purged).
- **Plan** — free / premium.
- **Credit balance**.
- **Country / region** (from sign-up IP — approximate, for compliance routing).
- **Connected platforms** — web / Android / iOS / extension.
- **Role** — user / admin / superadmin.

The page does **NOT** show:

- Health logs.
- Notes content.
- Memory media.
- Chat content.
- Family tree data.
- Any personal record content.

These are denied by Firestore rules regardless of admin role.

## Search

Search supports:

- **Email** (substring match).
- **Display name** (substring match).
- **UID** (exact match).
- **Phone** (last 4 digits if user provided one for blood-donor or 2FA).

Results paginate at 50 per page; filter by status / plan / role for narrower lookups.

## Suspending an account

To suspend:

1. Open the user's record.
2. Tap **Suspend account**.
3. Pick a reason from the predefined list (harassment / spam / payment dispute / policy violation / other).
4. Optional free-text note.
5. Confirm.

Effect:

- User is signed out of all devices.
- New sign-in attempts show "Account suspended — contact support".
- All Firestore writes from the account are denied (account-status check in rules).
- The audit log records the suspension with admin, timestamp, reason.

Suspension is reversible — restore from the same page.

## Restoring an account

1. Open the suspended user's record.
2. Tap **Restore account**.
3. Optional reason text.
4. Confirm.

The user can sign in again on next attempt. Their data was never deleted — suspension is access-only.

## Triggering a password reset

Useful if a user contacts support saying "I can't sign in":

1. Open the user's record.
2. Tap **Send password reset**.
3. Firebase Auth sends a reset email to the account's primary email.
4. The audit log records the action.

Admins **don't see** the user's password (Firebase Auth doesn't expose passwords to anyone, including admins).

## Granting credits

For refunds, promotional grants, or beta-tester compensation:

1. Open the user's record.
2. Tap **Adjust credits**.
3. Enter amount (positive to grant, negative to deduct).
4. Required reason text.
5. Confirm.

The user sees the new balance immediately via Firestore sync.

## Granting premium days

Similar flow:

1. **Adjust premium**.
2. Days to add (1–365 typically; 0–N to extend or reduce).
3. Reason.
4. Confirm.

Premium status updates immediately.

## Account deletion (admin-initiated, rare)

Admins should rarely initiate user-account deletion — the standard flow is user-initiated via their own Settings.

For exceptional cases (court order, regulatory request, user has lost access and requested deletion):

1. Open the user's record.
2. Tap **Initiate deletion**.
3. Required: reason, ticket reference, dual-admin sign-off (a second admin must approve).
4. The 30-day grace period starts.
5. The user is signed out and notified by email.

Same purge schedule applies — 30 days, then complete data wipe.

## Audit log

Every admin action on this page logs to the audit collection. Other admins can:

- See who did what.
- Review the reason text.
- Reverse some actions (suspension, credit grants).

## What this page is not

- **Not a user-data viewer.** No personal-records visibility.
- **Not an impersonation tool.** No "sign in as user".
- **Not for bulk operations.** One user at a time; batch operations require database-level scripts (run by superadmin with appropriate care).

## Where to read next

- [Verifications](./verifications) — approve identity / professional verification.
- [Communities](./communities) — community-level moderation.
- [Payments](./payments) — refund processing.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
