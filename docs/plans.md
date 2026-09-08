---
title: Plans
description: Free, Pro and Family — what each one includes, how the free tier is drawn, and the two ways to pay. Prices in pounds, monthly or yearly.
keywords: [lifewell plans, lifewell pricing, free plan, pro plan, family plan, google play billing]
tags: [plans, account]
sidebar_position: 8
---

# Plans

Three tiers. [`/plans`](https://lifewell.aoneahsan.com/plans) in the app is the live version of this page, and
it renders from the same table the server gates on.

| | Free | Pro | Family |
|---|---|---|---|
| Monthly | — | **£3** | **£6** |
| Yearly | — | **£30** | **£60** |
| Accounts | 1 | 1 | 6 |
| People you can record | 50 | Unlimited | Unlimited |
| Entries | Unlimited | Unlimited | Unlimited |
| Storage | 5 GB | 50 GB | 200 GB |
| Export everything | Yes | Yes | Yes |
| Read-only share links | Yes | Yes | Yes |
| Scheduled exports | — | Yes | Yes |
| Consultations | — | Yes | Yes |
| AI estimates a month | 50 | 1,000 | 1,500 |

## How the free tier is drawn

The tiers are not split by how much of the product you get. They are split by **what a use of it costs to
run**:

- A row in a table costs nothing, so Free is generous with it — 50 people, unlimited entries, read-only share
  links on.
- Storage costs real money but not per use, so it is smaller on Free rather than absent.
- An AI estimate is money out on every press, so it is the one thing limited tightest — and
  **bringing your own key removes that limit on every tier, including Free**.
- A job we run on a timer is recurring work nobody asked for at that moment, so scheduled exports are a paid
  capability.

**Export is on every tier**, and that is not an oversight. A product that holds your life and charges you to
get it back is a product with a hostage.

## Two ways to pay

### On the web

`/profile/premium` shows the plans and how to pay. Payment is arranged manually rather than through a card
form: you pay, you tell us, and an administrator applies the plan against your claim with an end date.

### On Android

The Android app sells through **Google Play Billing**, because Google requires digital goods on Android to be
sold that way. The Android panel therefore never shows a web price, never links out in order to pay, and
never compares the two.

:::warning[Play Billing is built and not switched on]
The purchase flow, the server verification and Google's renewal notifications are written, compiled and
tested against recorded responses. **No real purchase has been made yet**, the Play service account is not
configured, and the platform switch that turns the Play path on defaults to off. Until an internal-testing
build has been through a genuine purchase on a device, treat the Android path as unproven — billing cannot be
exercised at all outside a Play-signed build.
:::

## What a plan actually gates

The server refuses. A limit is not a hidden button — if you are over a ceiling, the write is declined by the
database rather than by the interface declining to offer it. That is why a limit still holds when a request
does not come from the app.

Limits live on the plan row, so they can be changed without a release. The numbers above are what the plans
carry today.

## Grants and end dates

A plan applied by an administrator carries its own end date, and the reason it was granted travels with it.
A plan that has already lapsed cannot be granted, because it would be invisible on every screen and would
report no error.

A [referral reward](./features/referrals.md) extends a paid plan rather than replacing it.

## Changing or stopping

- **Web** — the plan runs to its end date. There is no auto-renewal to cancel.
- **Android** — manage or cancel the subscription in Google Play, which is where the transaction lives.
  LifeWell has no cancel or refund control of its own, because Google holds the transaction and a button
  wired to nothing is worse than no button.

Nothing about your record changes when a plan ends. You drop to Free limits for new writes; what you already
recorded stays, and [export](./your-data/export.md) is on every tier.
