---
title: The admin panel
description: Ten screens, three roles, an audit log nobody can write to directly, and the controls that let plan limits and the referral programme change without a release.
keywords: [lifewell admin, admin panel, platform administration, audit log, moderation, user management]
tags: [admin]
sidebar_position: 9
---

# The admin panel

`/admin`. Not part of the product a member uses, and documented here because it decides things members feel —
plan limits, moderation outcomes, and what an administrator can and cannot see about an account.

## The three roles

| Role | Reaches |
|---|---|
| **Moderator** | The moderation queue, read-only, plus the staff-level lists |
| **Admin** | Everything below |
| **Superadmin** | The same, plus granting roles |

Reading the moderation queue and answering it are **two different permissions on purpose**. A moderator can
work the queue and not decide it. Adding a role and giving it the power to hide posts in one change is how a
role nobody reviewed ends up deciding what other people may say.

## The ten screens

| Screen | What it does |
|---|---|
| `/admin` | The overview |
| `/admin/users` | List accounts, grant or revoke a role, suspend, reinstate, delete, override one account's limits |
| `/admin/plans` | Create, edit or retire a tier; resolve a plan claim; grant a plan with an end date; payment methods; Play product mapping; what a device bought |
| `/admin/moderation` | The report queue, and the decision on each report |
| `/admin/verifications` | Professional register checks — approve or refuse |
| `/admin/inbox` | The get-involved messages |
| `/admin/announcements` | Compose, publish and end announcements, including promotions for other products |
| `/admin/content` | The wellness catalogue and the system tracker types |
| `/admin/settings` | Platform settings, maintenance mode, feature flags, the two payment switches, the referral numbers, the contact address |
| `/admin/audit` | The log |

Every one of the thirty-two administrative operations behind those screens refuses an ordinary user. That is
checked by running each of them as a non-administrator rather than by reading the code.

## What an administrator cannot see

**Your record.** The account list and the account detail return an allowlist of columns, and no health column
is in it. Administering an account never means reading a diary.

Two further deliberate blind spots:

- **A Play purchase token and the raw receipt** are outside the columns the panel can read. One is a
  credential against Google; the other is the whole receipt, and neither answers *when does this lapse*.
- **Referrals cannot be listed at all.** The only read policy scopes to a person's own rows, so an
  administrator cannot browse them. That is a real limitation rather than a feature: spotting a referral ring
  is not possible from the panel today.

## The audit log

`/admin/audit`. Rows arrive **only** from the server functions that perform an action. There is no insert,
update or delete permission for anybody — a log an actor can write is a log an actor can forge, and a log an
actor can erase is not a log.

Two consequences worth stating:

- Deleting an account writes its audit row **first**, and refuses to delete if that write fails.
- Audit rows outlive the account they describe. They name an action, not the record it was performed on.

## Things the panel does that a member feels

- **Plan limits are rows, not code.** A limit can move without a release, and a new tier is one insert. The
  panel refuses to save a paid tier that is worse than Free, and that check runs in the database in the same
  transaction.
- **A plan grant carries an end date and a reason**, and a grant that has already lapsed is refused, because
  it would be invisible on every screen and would report no error.
- **A moderation decision always carries a note.** The author reads one version, the reporter the other.
- **A verification names the register it was checked against**, and a claim naming no register can only be
  refused.
- **An override on one account carries a note**, because an override nobody can explain is one nobody dares
  remove.

## Two controls that do less than they look like

Stated here rather than buried, because both are easy to over-read:

- **A feature flag being off blocks no write.** It removes the menu entry and the screen. It is presentation,
  never protection.
- **Maintenance mode is a courtesy, not a boundary.** It changes what the product shows; it does not close
  the database.

## The one thing with no screen

Voiding a referral is a server function with no interface, so it is done directly against the database. It
refuses without a reason attached — a void nobody can explain is one nobody dares undo.
