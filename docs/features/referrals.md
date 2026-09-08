---
title: The referral programme
description: Invite someone, and a confirmed sign-up earns points, a badge and — past a threshold — a month of a paid plan. Every number is an admin setting rather than a constant.
keywords: [lifewell referral, invite a friend, referral rewards, free month]
tags: [features, plans]
sidebar_position: 8
---

# The referral programme

You get a code. Someone signs up with it. When their sign-up is **confirmed**, you earn points and a badge,
and past a threshold you earn a month of a paid plan.

## What confirmed means

Confirmed is a real signal, not a click: the invited account has to exist **and** have a verified email
address. It is decided by the server at the moment both are true.

That strictness is deliberate, because the confirm path hands out a paid tier. A programme that awarded on a
click would be a programme that paid for opening a link.

## The rules the database enforces

- **One person can only ever be referred once.** Deleting an account and creating it again is not a way to
  mint rewards.
- **You cannot refer yourself.** The form says so; the database is what decides it.
- **Nothing about the award path is callable from a browser.** A client-callable *confirm me* would be a
  client-callable *pay me*.

## What you can see about the people you invited

A count and a state. Never a name.

The invitee is never itemised to the referrer, and that promise is kept by the column grant rather than by a
screen choosing not to render it — the query you are allowed to run does not return the identifier at all.

## A month that extends rather than replaces

If you already hold a paid plan when a reward lands, the month is added to the end of it. It does not
overwrite what you paid for.

## Every number is an admin setting

Points per confirmed sign-up, the badge, the threshold, how many months, which plan, and a monthly cap are
all settings on the platform rather than constants in the code. They can move without a release, and the
sentence you read is generated from whatever they currently are.

The exact thresholds and caps are visible only to signed-in accounts. They are precisely what somebody
building an abuse ring would want to know.

## Where it stands today

:::warning[The member screen is not built yet]
The programme's server half is live — the ledger, the confirm path, the award, the reward that extends a
paid plan, and the administrator's controls over all seven numbers. **What does not exist yet is the screen
that shows you your code and your count.** Until it does, there is nothing in the app for you to open.
:::

When it arrives, what you invited and what it earned are in [the
export](../reference/export-format.md) as **People you invited** and **What your invitations earned**.
