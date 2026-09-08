---
title: Blood donation
description: A public directory of donors, requests that reach them, and a contact release that is given once to one person and can be withdrawn.
keywords: [blood donor directory, blood donation, blood request, lifewell blood donors]
tags: [features, people]
sidebar_position: 6
---

# Blood donation

## The directory

[`/blood-donors`](https://lifewell.aoneahsan.com/blood-donors) is public. It needs no account to read.

A listing shows a blood group and a general area. **It does not show a phone number**, and that is the whole
design rather than a feature waiting to be added.

## Listing yourself

`/profile/blood-donor` creates a listing. Nothing about your health record is attached to it — a donor
listing is a blood group, an area, and whether you are currently available.

## Requests

`/dashboard/blood-requests` is where a request you made lives. A request reaches donors who match; it does
not broadcast to everyone.

## The contact release

When a donor decides to respond, they release their contact details **to one person, once**.

Two things follow from that, and both are real:

- **The release can be withdrawn.** If the donor withdraws it, it disappears from the requester's screen too.
- **It is deliberately not in the export.** A row in a downloaded file is neither once nor withdrawable, and
  the requester has already seen it in the app. Making it durable is a decision the donor never made.

Your own listing and the requests you sent are in [the export](../reference/export-format.md). Somebody
else's number is not.

## What this is not

LifeWell does not arrange donations, verify eligibility, or contact a blood service. It is a directory and a
way to ask. Everything after that happens between two people and a hospital.
