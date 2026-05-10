---
title: Welcome to LifeWell — health & wellness companion
description: LifeWell is a private health & wellness companion for web, Android, and the browser. Track vitals, medications, family, memories, and more — built by Ahsan Mahmood.
keywords: [lifewell, health tracking, wellness app, ahsan mahmood, capacitor, firebase]
sidebar_position: 1
slug: /intro
---

# Welcome to LifeWell

LifeWell is a private health and wellness companion that runs on the web, on Android (iOS in prep), and as a Chrome-Web-Store-compliant browser extension. It helps you track vitals, medications, sleep, exercise, nutrition, mental-health practices, family connections, memories, notes, and 12+ everyday wellness calculators — without selling your data and without needing an account for the simple tools.

This site is the public documentation for LifeWell. It is maintained by [Ahsan Mahmood](https://aoneahsan.com), the developer who built the app.

## What you'll find here

| Section | What it covers |
| --- | --- |
| [Get started](./getting-started/install-web) | Install LifeWell on web, Android, or as a browser extension. First-time setup and a 5-minute tour. |
| [Concepts](./concepts/architecture) | How LifeWell is built and why — architecture, data model, privacy posture, offline-first design, theming, multi-platform strategy. |
| [Health](./health/overview) | Vitals, water, medications, exercise, sleep, nutrition, mental health, conditions, period & fertility, pregnancy, breastfeeding, medical records. |
| [Tools](./tools/overview) | BMI, BMR, calorie, TDEE, macro, protein, age calculators. Sleep tracker, step counter, interval/workout/kegel timers. |
| [Family & people](./family/overview) | Family tree, connections, journeys, location tracking, work-tree, structured data sharing. |
| [Memories & notes](./memories-and-notes/memories) | Rich notes with folders, scrapbook memories, Google Drive sync. |
| [Mobile & extension](./mobile/overview) | Android-specific guidance, push notifications, offline usage; browser-extension installation and quick tracking. |
| [Reference & FAQ](./reference/data-model) | Data model, environment variables, third-party integrations, and answers to the questions people ask most often. |

## What LifeWell is for

LifeWell is for people who want a single place to track the things that affect their health and life over time. It's especially useful if you:

- Want to see how vitals like blood pressure or sleep change month-over-month, not just today.
- Need a structured way to record medications, dosages, and reminders.
- Are tracking a pregnancy, a baby's growth, or a family member's care needs.
- Want a private place for memories and notes that syncs across devices without third-party platforms.
- Need quick access to wellness calculators (BMI, BMR, calorie, TDEE) without pop-up ads or signups for the basic tools.

## What LifeWell is NOT

:::caution Honest framing
LifeWell does not give medical advice. Calculators and tracking tools provide information for personal reference only. **Always consult a qualified clinician** for medical decisions.

LifeWell is not a substitute for a doctor, a therapist, or a clinical electronic health record (EHR). It is a personal tracker.

LifeWell does not sell or share user data. See [Privacy & security](./concepts/privacy-and-security) for the full data model and what touches the network.
:::

## Who built LifeWell

LifeWell is designed and developed by **Ahsan Mahmood**, a full-stack engineer working with React, TypeScript, Capacitor, Firebase, and Cloudflare Workers. Reach Ahsan at:

- Email — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
- Portfolio — [aoneahsan.com](https://aoneahsan.com)
- GitHub — [github.com/aoneahsan](https://github.com/aoneahsan)
- LinkedIn — [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan)
- WhatsApp — +92 304 6619706

The full developer profile and the story of why LifeWell exists is on the [About the developer](./about/about-the-developer) page.

## Where to start

If you've never opened LifeWell before, start with [Install on web](./getting-started/install-web) — no download, just open it in any modern browser at [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com).

If you're a developer evaluating the stack, jump to [Architecture](./concepts/architecture) and [Tech stack](./about/tech-stack).

## Frequently asked

**Is LifeWell free?**
The web app and the browser extension are free. The mobile app is free to install. Some advanced features (premium reminders, expanded storage, future cloud features) are gated under a paid tier — see [Premium and payments](./profile-and-settings/premium-and-payments).

**Does LifeWell need an account?**
The simple wellness calculators (BMI, BMR, etc.) work in the browser without an account. Tracking history, family features, memories, notes, and reminders need a sign-in so they sync across devices. Sign-in supports Google, Apple, and email.

**Where is my data stored?**
Tracked data is stored in your account on Firebase Firestore (a Google Cloud product) under per-user security rules. Files (avatars, memory media) are stored on FilesHub. Calculators run entirely in your browser and store nothing. See [Privacy & security](./concepts/privacy-and-security) for full detail.

**Is the source code public?**
The documentation source (this site) is public at [github.com/aoneahsan/lifewell-docs](https://github.com/aoneahsan/lifewell-docs) under the **CC BY 4.0** license. The application source is currently private.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](./about/about-the-developer)
