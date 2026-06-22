---
title: Changelog — version history and release notes
description: LifeWell version history — what shipped when, notable changes per release, and links to release notes for major versions.
keywords: [lifewell changelog, version history, release notes, what's new, ahsan mahmood]
sidebar_position: 3
---

# Changelog

LifeWell version history. The canonical version is in `package.json`; this page narrates what changed and when. Mobile-app version numbers may lag the web app by a release cycle while waiting for store review.

## Versioning scheme

LifeWell uses **semantic versioning** (`MAJOR.MINOR.PATCH`):

- **MAJOR** — breaking changes (rare; consumer apps avoid these).
- **MINOR** — new features, no breakage.
- **PATCH** — bug fixes, security patches.

The internal `build` number increments per CI run for traceability.

---

## v2.15.0 — June 2026

The current Android release (versionCode 16).

- **Reminders use battery-friendly scheduling.** Medication, water, and bedtime reminders now use inexact alarms (`@capacitor/local-notifications` falls back automatically), so the app no longer requests the Android "alarms & reminders" permission. Google Play reserves the exact-alarm permission for alarm-clock and calendar apps; a wellness app is not eligible, so the permission was removed.
- **Fewer device permissions.** Permission footprint tidied up across the manifest.
- Stability and performance improvements.

---

## v2.14.1 — June 2026

A privacy, honesty, and Play Store compliance release.

- **Clearer "not medical advice" reminders.** A reusable medical-disclaimer notice now appears on the home page, the dashboard, every health tool, and both footers — LifeWell is for general wellness and education, never a substitute for a clinician.
- **More complete account deletion.** Deletion now removes every current data collection plus your memories sub-collection and FilesHub media. The previous list used legacy names and could orphan data.
- **Fuller privacy policy.** The policy now names every third-party service in use (Firebase, OneSignal, Amplitude, Sentry, Microsoft Clarity, FilesHub, Google Drive); `/data-deletion` redirects to `/delete-account`; web-only location and microphone features are framed honestly.
- Backup of sensitive health data disabled (security hardening); smaller download via resource shrinking.

---

## v2.13.0 — June 2026

Android release-build hardening.

- Declared the Advertising ID permission required by analytics and push on Android 13+.
- Enabled R8 code minification and NDK debug symbols for higher release-build quality.
- Privacy policy updated with Advertising ID and push-notification sections.

---

## v2.1.0 — May 2026

Native polish, offline access, and simpler first-use flows.

- **Hardware back button** behaves correctly on Android — navigates back through history, exits only from a top-level screen.
- **Offline access** — cached data is available without a network connection (Firestore local cache).
- **Edge-to-edge / notch support** — content respects the device safe area.
- **Simplified first-use flows** for memories, notes, people, and the family tree (progressive disclosure — full depth stays available in detail/edit views).
- Accessibility: the whole app now respects the reduced-motion preference.
- Fixed: a lab-result numeric value that was not saved correctly, and ~69 colour-utility classes that silently applied no colour.

---

## v2.0.x — May 2026

### v2.0.0 — May 2026

**Major milestone**: LifeWell-docs documentation site launches alongside the platform — a public Docusaurus site at `lifewell-docs.aoneahsan.com` documenting every feature in detail.

- **Documentation**: 100+ pages of comprehensive feature docs, source-verified against the actual code.
- **SEO infrastructure**: `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.); structured JSON-LD; `llms.txt`; `pricing.md`.
- **Public GitHub repo**: docs site open-sourced under CC-BY-4.0 license.

Web app + Android app already at version 2.0.x — this release primarily ships the new docs.

---

## v1.x — 2025

Active development through 2025. Highlights:

### Health module

- 45+ tracked surfaces — vitals (BP, sugar, heart rate, BMI, weight), water, medications, exercise, sleep, nutrition, mental health.
- Pregnancy mode with trimester-aware adaptations.
- Period & fertility tracking.
- Breastfeeding tracker.

### Family module

- Person records with rich profile fields.
- D3.js family tree + work tree visualisations.
- 5-level family-group system with per-level data-sharing matrix.
- Verified bidirectional connections.

### Baby module

- Multi-baby profiles.
- Feeding (breast / bottle / solid), sleep, diapers, growth, milestones.
- Partner co-parenting with shared baby records.

### Memories + Notes + Maps

- Rich memory records with media in user's Google Drive.
- Scrapbook drag-drop editor.
- Notes with 5 types + 11 colours + folders + tags.
- D3 maps (people, memory, note, event, full).

### Tools

- 7 calculators (BMI, BMR, calorie, TDEE, macro, protein, age).
- 5 timers (sleep, step, interval, workout, kegel).

### Community + Chat

- Topic communities with moderation.
- Chats (direct / group / self).
- Verified-professional consultations with credits.

### Mobile + Extension

- Android Capacitor app shipped to Play Store.
- iOS in progress.
- Chrome / Edge / Brave browser extension via WXT.

### Profile / Admin

- 11-colour theme customizer.
- Achievements with 7 categories × 4 tiers.
- Blood-donor opt-in directory.
- Medical-info first-responder summary.

---

## v0.x — 2024

Pre-launch development. Internal builds, not publicly released.

---

## Release cadence

- **Web app**: Continuous deployment via Firebase Hosting on merge to main. Multiple releases per week typical.
- **Mobile app**: Bi-weekly to monthly to the stores, dependent on review cycles.
- **Browser extension**: Bi-weekly to the Chrome Web Store, dependent on review.
- **Docs**: Updated alongside features (this site).

## How to know what's new

- Major releases get a [blog post](/blog).
- In-app banner announces significant features.
- App update screens summarise changes.
- This changelog tracks the canonical history.

## Where do I read next?

- [Tech stack](./tech-stack) — what LifeWell is built with.
- [About the developer](./about-the-developer) — who builds and maintains.
- [Contributing](./contributing) — how to contribute to docs.

---

**Last updated**: 2026-06-22
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
