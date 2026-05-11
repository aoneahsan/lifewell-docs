---
title: General FAQ — what LifeWell is, who it's for, where to start
description: Frequently asked questions about LifeWell — what it does, who builds it, who it's for, where to sign up, how to use it across web / mobile / extension.
keywords: [lifewell faq, what is lifewell, who built lifewell, how to use lifewell, ahsan mahmood]
sidebar_position: 1
---

# General FAQ

## What is LifeWell?

LifeWell is a private, personal wellness platform — health tracking (vitals, water, medications, exercise, sleep, nutrition), family records, memories, notes, baby tracking, communities, professional consultations, and more, in one account. Built to keep your data yours, with multi-platform access (web + Android + iOS + browser extension).

## Who built it?

**Ahsan Mahmood** ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)). One-person engineering, bootstrapped. See [About the developer](/docs/about/about-the-developer) for full credits.

## Who is it for?

Anyone who wants:

- A private place to track personal health metrics over time.
- A family records system (memberships, milestones, medical history).
- A baby-tracking surface for new parents.
- A periods / fertility tracker that doesn't sell data.
- A digital "memory journal" with photos backed by their own Google Drive.

LifeWell is consumer-grade — not clinical software. It's a personal log + reminder + journal, not a medical-record system or telemedicine platform.

## How much does it cost?

Free for all current features. A premium tier is planned for higher limits + supplementary features. Consultations with verified professionals cost credits ($0.10 USD equivalent each). See [Premium and payments](/docs/profile-and-settings/premium-and-payments).

## Where do I sign up?

`https://lifewell.aoneahsan.com` → **Sign in** → Google or email.

## How do I use LifeWell across devices?

Sign in with the same account on:

- Web at `lifewell.aoneahsan.com`.
- Android app (Play Store).
- iOS app (coming).
- Browser extension (Chrome Web Store).

All four sync your data via Firestore — log on one, see on others.

## Is my data private?

Yes — per-account Firestore documents, rule-protected. No selling. No AI training. No ad targeting. Media stored in your own Google Drive. See [Privacy and security](/docs/concepts/privacy-and-security) for details.

## Can my partner see my data?

Only if you've explicitly set them as a [primary partner](/docs/community/partner-features) and configured the [data-sharing matrix](/docs/family/data-sharing) to grant access. Default is no sharing.

## What's the difference from Apple Health / Google Fit / Samsung Health?

| Aspect | LifeWell | Big-tech health |
| --- | --- | --- |
| Source of data | Manual entry | Auto-captured from sensors |
| Scope | Health + family + memories + notes + community | Health metrics only |
| Privacy posture | Your data, your account, opt-in everything | Locked into platform ecosystem |
| Tracking accuracy | Self-reported (depends on you) | Sensor-measured (more accurate) |
| Cross-platform | Yes (web + Android + iOS + extension) | Vendor-locked |

LifeWell complements wearable platforms — you might wear a Garmin for accurate fitness tracking and use LifeWell for the lifestyle / memory / family layer above.

## Why no automatic data import from wearables?

Wearable APIs are technically restrictive, regionally fragmented, and a meaningful engineering project. We launched without to ship the core product faster. Apple HealthKit + Google Fit import are on the roadmap.

## How do I delete my account?

Settings → [Security](/docs/profile-and-settings/security) → Delete account. There's a 30-day grace window before permanent purge. After 30 days, every Firestore collection under your `userId` is removed.

## How do I export my data?

Most surfaces have PDF export. JSON-bulk-export-of-everything is planned. For now, per-surface exports cover most needs.

## I found a bug — where do I report?

Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with steps to reproduce + your browser / device. Or use the in-app **Feedback** form.

## Where do I read next?

- [Health data FAQ](./health-data) — health-tracking-specific questions.
- [Privacy FAQ](./privacy) — privacy + security questions.
- [Billing FAQ](./billing) — premium + credits questions.
- [Troubleshooting FAQ](./troubleshooting) — when things break.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
