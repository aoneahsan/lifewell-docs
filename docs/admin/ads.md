---
title: Admin ads — internal placement system (currently no external ads)
description: LifeWell does not run external advertising. The admin ads page configures internal feature promotions (premium tier, consultations, new features) only.
keywords: [no ads, internal promotions, no advertising, feature promotion, ahsan mahmood]
sidebar_position: 4
---

# Admin ads

LifeWell **does not run external advertising**. No third-party ad networks, no Google AdSense, no programmatic ad placements. The admin **Ads** page is reserved for internal promotion of LifeWell's own features — premium tier prompts, consultation feature highlights, new feature announcements — never external sponsors.

This page exists primarily as a reminder of the platform's stance: **no surveillance advertising, no ad-funded model**.

## What the page does

The admin Ads page configures:

| Item | Description |
| --- | --- |
| **Premium prompts** | Where and how often to show "consider premium" prompts to free users |
| **Consultation highlights** | Featured professionals in the [consultations](/docs/community/consultations) directory |
| **Feature announcement banners** | Cross-app banners when a new feature ships |
| **Survey prompts** | User feedback surveys (opt-in) |

## What the page does NOT configure

- Third-party advertising — there is none.
- Affiliate links — none.
- Sponsored content — none.
- Email marketing campaigns to non-opt-in users — none.
- Push notifications for marketing — only opt-in.

## Why no ads

The decision is structural, not just principled:

- **Revenue model is premium subscriptions + consultation platform fees**, not ad impressions.
- **Health data is sensitive**. Building any ad-targeting layer on top would require either profiling users (against the privacy posture) or showing untargeted ads (low value to advertisers, annoying to users).
- **User trust** matters more than incremental revenue. Free users help build the network; premium and consultations fund the platform.

## Premium prompts

Currently the only "ad-like" surface — gentle reminders to consider premium for users who've hit a free-tier limit. Configurable:

- **Frequency cap** — e.g. show no more than once per week.
- **Surfaces** — which pages can show the prompt (currently: only when hitting a specific limit, not on the dashboard).
- **A/B test variants** — different prompt text (off by default; would require explicit opt-in to be activated).

## Feature announcement banners

When LifeWell ships a major feature:

- The Ads page lets admins configure a top-of-app banner.
- Users can dismiss; the banner won't re-show for 7 days after dismissal.
- Banners auto-expire 14 days after creation.

## What admins set

- Title.
- Description.
- Call-to-action button.
- Target URL (must be a LifeWell internal URL).
- Display dates (start / end).
- Visibility (all users / specific user segments — currently just "all" or "premium" or "non-premium").

## Audit log

All ad/banner changes log to the audit collection. Other admins can see what banners are scheduled and who created them.

## Where to read next

- [Premium and payments](/docs/profile-and-settings/premium-and-payments) — the premium tier the page sometimes promotes.
- [Consultations](/docs/community/consultations) — featured-professional listings.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
