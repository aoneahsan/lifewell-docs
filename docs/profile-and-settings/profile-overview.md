---
title: Profile overview — your account, preferences, and settings
description: The profile area in LifeWell brings together your account info, preferences, security, theme, achievements, blood-donor card, medical info, reminders, sharing, and premium settings.
keywords: [lifewell profile, profile settings, account, preferences, achievements, ahsan mahmood]
sidebar_position: 1
---

# Profile overview

Your profile in LifeWell is the central place to manage who you are inside the app — your identity, your preferences, your security choices, your reminders, what you share, and the unlocks (achievements, premium features) you've earned or activated. This page is the map of that area; each subsection below has its own dedicated page with full reference.

You can reach the profile from the avatar in the header or the sidebar entry on any device.

## The nine sections

| Section | Purpose | Full reference |
| --- | --- | --- |
| Profile overview | Identity (name, avatar, date of birth, sex, height, current weight) | This page |
| Preferences | Units, language, time zone, reminder defaults, glass size, daily targets | [Preferences](./preferences) |
| Security | Sign-in methods, password change, sign-out everywhere, account deletion | [Security](./security) |
| Data sharing | What you've shared with whom, share-links, revocation | [Data sharing](./data-sharing) |
| Theme customizer | Appearance, accent, gray, radius, scaling, font, panel | [Theme customizer](./theme-customizer) |
| Achievements | Badges earned through consistent tracking | [Achievements](./achievements) |
| Blood donor | Eligibility, last donation date, donor card export | [Blood donor](./blood-donor) |
| Medical info | Allergies, conditions, emergency contacts, medication list summary | [Medical info](./medical-info) |
| Reminders | All your active and paused reminders in one place | [Reminders](./reminders) |
| Premium & payments | Subscription state, payment history, plan changes | [Premium and payments](./premium-and-payments) |

## What lives in "Profile overview" specifically

The top of the profile area is a small identity card. It holds the fields you provided during [first-time setup](/docs/getting-started/first-time-setup), all of which are optional and editable any time:

- **Display name** — shown when you appear in a family connection or chat. Defaults to the name from your Google / Apple account if you signed in that way.
- **Avatar** — uploaded via camera (mobile) or file picker (web). Stored on FilesHub, not Firestore.
- **Date of birth** — used by age, BMR, and TDEE calculators when you opt in to logging results.
- **Sex / gender** — used to decide which feature surfaces show up (e.g. period tracking visibility, breastfeeding visibility) and for BMR formulas that vary by sex.
- **Height** — used by BMI / BMR / TDEE calculators.
- **Current weight** — used by BMI / BMR / TDEE and shown alongside the vitals weight trend.
- **Time zone** — auto-detected from the device; can be overridden manually if you travel often.

Every field is private to your account. Nothing on this card is shown to other users unless you explicitly include yourself in a family connection.

## What does NOT live here

- **Tracking history** — that lives under the [Health](/docs/health/overview) module, organized by feature (vitals, water, medications, etc.). The profile area shows totals and summaries, not the raw entries.
- **App-wide settings (theme, language, units)** — those live under [Preferences](./preferences) and [Theme customizer](./theme-customizer), not under the identity card.
- **Family tree** — that's its own surface under [Family](/docs/family/overview).
- **Memories, notes, chat history** — separate top-level sections.

The profile area focuses on the small set of fields that are about you-the-account, not your-tracked-data.

## How the profile syncs across devices

Profile fields write to two places (per [theming system](/docs/concepts/theming-system) pattern):

1. **Capacitor Preferences** (local) for instant offline reads.
2. **Firestore `lifewell_user_profiles` document** (debounced 500ms) for cross-device sync.

When you change your display name on Android, the web app picks it up on next refresh. There's no manual "sync" button — Firestore takes care of it.

## How to delete your profile

Account deletion is documented in [Security](./security#account-deletion). The short version: tap **Delete account** under Security, re-authenticate, confirm. The deletion is reversible for 30 days; after that, your Firestore documents, FilesHub files, and Auth record are removed permanently.

## Frequently asked

**Can I have multiple profiles under one sign-in (e.g. for my kid)?**
Not in v1. Each sign-in maps to one profile. If you're tracking a child's data, the recommended pattern is either (a) create a separate account for the child and share specific data via [Data sharing](./data-sharing), or (b) use the [Baby tracking](/docs/baby/overview) module which is designed for tracking another person without requiring them to have their own account.

**My avatar isn't showing.**
First check that the upload completed (the camera/file-picker prompt closed and the avatar tile updated). If the upload visibly succeeded but the avatar shows a placeholder, the FilesHub fetch failed — usually a network issue. Hard-refresh and try again, or email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with your account email so I can check the storage.

**Why is "Sex / gender" optional?**
Because the only places it affects behavior are BMR formulas (which differ by sex) and feature-surface visibility (which can also be toggled directly under Preferences). If you don't want to provide it, you can override the relevant feature toggles instead.

**Where do I find my account email?**
Under **Profile → Security → Connected sign-in methods**. The email is whichever address Firebase Auth has on file for the provider you signed in with (Google, Apple, or email).

**Can I export my profile data?**
Yes. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) requesting an export; you'll receive a JSON dump of every document tagged with your `userId`, including this profile card. See [Privacy & security](/docs/concepts/privacy-and-security#account-deletion).

## Where to read next

- [Preferences](./preferences) — units, language, defaults.
- [Security](./security) — sign-in methods and deletion.
- [Theme customizer](./theme-customizer) — appearance.
- [Reminders](./reminders) — manage everything you've scheduled.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
