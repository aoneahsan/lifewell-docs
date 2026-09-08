---
title: Sharing
description: Two ways to let somebody see part of your record — a share with a connected account, or a read-only link — and exactly what each one can cover.
keywords: [lifewell sharing, share health data, read only link, partner sharing, data sharing]
tags: [features, people]
sidebar_position: 7
---

# Sharing

Nothing in your record is visible to another account unless you made it so. There are two ways to make it so,
and they are different.

## A share with a connected account

`/people/data-sharing`. You choose a [connection](../domains/people.md#connections-and-groups) and what they
may read.

A share can cover **trackers** or **medications**. That is the complete list — the database enum that names
what a share may cover has two members, and there is no third.

So there is no scope that grants another account your location, your journal, your memories or your notes.
That absence is the enforcement, rather than a screen that simply does not offer the option.

## A read-only link

`/people/share-links` produces a link that shows a slice of your record to whoever holds it, without an
account.

- The link is the credential. Anyone who has it can open it.
- It is read-only, always.
- You can revoke it, and the link stops working.
- Someone can send something back through it — a note, a measurement — which lands in
  `/people/share-links` for you to accept or discard rather than being written straight into your record.

Read-only links are available on every plan, including Free.

## Family groups

A Family plan shares its seats through a family group (`/people/family-groups`). A seat is an account of its
own with its own record; it is not a window into yours. Sharing between two accounts in one family group
still goes through the two mechanisms above.

## What the other side sees

A share shows what you chose and the dates it covers. It does not show that other things exist and are
withheld, because a list of things somebody may not see is itself information about you.

## Revoking

Every share and every link can be revoked from the same screen that made it. Revoking is immediate.
