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

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
