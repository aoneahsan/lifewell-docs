---
title: Premium and payments — credits, premium tier, support links
description: LifeWell offers a free tier covering most features. Premium unlocks higher limits and consultation credits. Payments via external links to aoneahsan.com/payment.
keywords: [lifewell premium, premium tier, consultation credits, support developer, payments, ahsan mahmood]
sidebar_position: 10
---

# Premium and payments

LifeWell ships with a **free tier** that covers all the core features — health tracking, family records, memories, notes, maps, communities, baby tracking. A **premium tier** is on the way to support the platform sustainably and unlock higher limits (more photos per memory, unlimited family tree depth, longer audio notes, deeper analytics). **Consultation credits** are a separate prepaid currency for booking [1-on-1 sessions](/docs/community/consultations) with verified professionals.

Payments today route through external links (aoneahsan.com/payment) — the in-app payment system is built but follows a no-cost-feature design principle. This page documents the current state and the intended direction.

## Current state (free for everyone)

As of the current release, every feature in LifeWell is available without payment:

- All health tracking (vitals, water, medications, exercise, sleep, nutrition).
- All baby tracking (multi-baby, full schema).
- All memory and note records.
- All family / connections / partner features.
- All maps and visualisations.
- All achievements and reminders.
- Browser extension + mobile apps.

The reason: the platform's core feature set is built on zero-cost infrastructure (Firebase free tier, your own Google Drive for media, Cloudflare Workers free tier for the OAuth proxy). The free tier isn't a teaser — it's the product.

## Premium tier (planned)

The premium tier will introduce higher limits and supplementary features:

| Free tier | Premium tier (planned) |
| --- | --- |
| Up to 50 photos per memory | Unlimited |
| Family tree depth: 4 generations | Unlimited depth |
| Audio note length: 5 minutes | 30 minutes |
| Up to 3 family group | Unlimited |
| 7-day insights history | Full-history insights |
| Standard themes | Premium themes |
| Standard reminders | Smart-AI reminders (when introduced) |
| Standard support | Priority support |

Pricing will be transparent. Likely $X/month or $Y/year (subject to final pricing). Annual commitment will offer a discount.

Premium will be opt-in; the free tier will continue covering most users.

## Consultation credits

Separate from premium. Credits buy time with verified [professionals](/docs/community/consultations):

- 1 credit ≈ $0.10 USD equivalent.
- Sold in packs (50 / 100 / 250 / 500).
- A typical consultation is 50–300 credits depending on professional + session length.
- Credits don't expire.

Credits and premium are independent — premium subscribers can still buy and use credits; non-premium users can buy and use credits.

## How payment works today

Pre-in-app-payment, the flow is:

1. From the **Premium** or **Buy credits** page, tap **Support / pay**.
2. Open `https://aoneahsan.com/payment?project-id=lifewell&project-identifier=com.aoneahsan.lifewell` in browser.
3. Complete payment on the external page.
4. LifeWell receives confirmation and grants premium / credits.

This routes through Ahsan's payment infrastructure (the developer behind LifeWell). The reason for the external flow:

- Avoids in-app-purchase platform fees (30% Apple / Google) which would make sustainable pricing harder.
- Allows multiple payment methods (cards, mobile wallets, PKR-local options) instead of only the platform-native rails.

For Apple App Store / Google Play compliance, in-app pricing for digital goods will eventually need in-app-purchase rails. The external link is a transition state.

## Premium status on your profile

Once you've purchased premium:

- Your profile shows a **Premium** badge.
- Feature limits expand automatically.
- The premium page shows renewal date.
- Cancel any time — premium-tier features revert at next renewal.

## What premium is NOT for

A few things premium **does not** do:

- **Doesn't grant identity verification** for community / blood-donor / professional status (those are separate verification flows).
- **Doesn't unlock secret features** that have been intentionally hidden.
- **Doesn't add advertising.** LifeWell has no ads regardless of tier.
- **Doesn't grant LifeWell access to your data** beyond what's already in your account.
- **Doesn't replace your role as the data owner.** Even at premium, you own your data.

## Refunds

LifeWell's refund policy:

- **Premium**: pro-rata refund within the first 14 days. After 14 days, no refund on the current month.
- **Credits**: unused credits refundable within 30 days of purchase. Used credits not refundable (the professional has been paid out).
- **Consultations**: see the consultation cancellation policy on each session.

Submit refund requests via [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or through the in-app **Refund request** form.

## Honest framing

A few things to know:

- **LifeWell is bootstrapped.** No VC funding; the developer (Ahsan Mahmood) supports the platform via own resources and your premium subscriptions.
- **You'll see "Support the developer" prompts**, especially around the support links standard. These are not pressure tactics — they're optional. Skip them; the app works fine.
- **Payment infrastructure is intentionally external** to avoid platform fee overhead, but it's also a smaller surface area than a bank-grade payment processor would offer. For high-value transactions (large credit packs, multi-year premium), email support directly.
- **No revenue from selling your data.** That's not a model that funds LifeWell. The revenue model is premium subscriptions + consultation platform fees.

## Privacy in payments

- Payment processing happens on the external page; LifeWell never sees your card / bank details.
- Subscription / credit balance is stored in your account.
- Receipts / invoices available from the premium page.
- Tax / VAT handling depends on your jurisdiction.

## What you support by going premium

Premium revenue funds:

- Developer time (Ahsan working on the platform full-time).
- Firebase costs as the user base grows beyond the free tier.
- Cloudflare Workers' next-tier pricing as proxy traffic grows.
- Domain / SSL / hosting renewal.
- Marketing / community-management costs.

It's not funding a VC's return. It's funding the platform's continued existence.

## Frequently asked

**Can I use LifeWell forever without paying?**
Yes. The free tier is a complete product. Premium is supplementary.

**Will premium become required?**
No commitment, but no — the core features will stay free. Premium will remain higher limits + supplementary features.

**Can I support without subscribing?**
Yes — a one-time donation via `aoneahsan.com/payment` works. Mention "LifeWell support" in the note.

**Does payment work in my country?**
The external payment page supports many regions. If your region isn't covered, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) for alternative payment methods.

**What about Apple / Google in-app purchase compliance?**
LifeWell's mobile apps may eventually offer in-app-purchase for credits / premium to satisfy app-store rules. The external option will stay alongside for users who prefer it.

## Where to read next

- [Consultations](/docs/community/consultations) — paid 1-on-1 with professionals.
- [About the developer](/docs/about/about-the-developer) — Ahsan Mahmood, who builds LifeWell.
- [Achievements](./achievements) — `premium_days` rewards earn free premium.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
