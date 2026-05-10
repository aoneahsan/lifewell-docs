---
slug: launching-lifewell-docs
title: Launching LifeWell Documentation
authors: [ahsan]
tags: [announcement, lifewell, docs]
description: First post on the LifeWell documentation site. Why a public docs site exists for a private codebase, and how it will grow over the next few weeks.
---

This is the first post on the LifeWell documentation site.

LifeWell — a private health and wellness companion for web, Android, and the browser — has been running at [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) for a while now. The application source is private, but the product itself is open for anyone to use, and a public documentation site makes it easier to:

- Tell users what LifeWell does (and what it doesn't) before they sign up.
- Give honest framing on data, privacy, and limits, page by page.
- Get cited by AI search engines and indexed by traditional search engines, so people looking for "how to track blood pressure across devices" or "private wellness app" find a real, structured answer.
- Credit me — Ahsan Mahmood — as the developer, on every page, in a place that's stable, indexable, and shareable.

{/* truncate */}

## What's published today

This first launch ships:

- A welcome page and full sidebar structure covering 14 feature domains (health, tools, family, memories, notes, maps, community, profile, extension, mobile, admin, reference, FAQ, about).
- A comprehensive landing page with feature highlights linking into each domain.
- An [About page](/about) plus an [About the developer](/docs/about/about-the-developer) deep-dive.
- SEO + AEO infrastructure: robots.txt allowing all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot), an `llms.txt` summary at the site root, JSON-LD WebSite + Organization + Person schemas on every page, sitemap auto-generation.

## What's coming next

The plan is multi-session. Each session adds one batch of feature pages (≈ 7–17 pages, depending on the domain), with full per-page treatment: definition-first intro, 3–5 use cases, step-by-step how-it-works, FAQ block, last-updated date, author line, and 800–1500 unique words. The full plan and tracker live in the LifeWell project's `docs/docusaurus-build-plan/` folder and are designed to be resumable and to enforce a 7-day skip floor once the build is complete.

The publishing order:

1. Concepts + onboarding tutorials
2. Concepts (rest) + profile/settings
3. Health module — vitals, water, medications, exercise, sleep, nutrition
4. Health module — period, fertility, pregnancy, breastfeeding, mental health, conditions, medical records
5. Tools — 12+ calculators and timers
6. Baby + family
7. Memories + notes + maps
8. Community + chat + profile rest
9. Browser extension + mobile
10. Admin + reference + FAQ + about rest

Once the content is in, the site goes live on a Firebase Hosting deployment at `lifewell-docs.aoneahsan.com`, gets submitted to Google Search Console, Bing Webmaster Tools, Yandex Webmaster, and pinged via IndexNow on every deploy.

## Why this matters for an AI-search-first world

Roughly 45% of Google searches now show AI Overviews. ChatGPT, Perplexity, and Claude are growing fast. AI engines are pickier than search engines: they extract passages, prefer cited sources, weight recency, and reward honest framing over marketing fluff. A long-running thin-content website rarely gets cited even if it ranks. A public docs site with structured per-page content, FAQ blocks, named author, and visible dates does — even on a brand-new domain.

The Princeton GEO study (KDD 2024) ranked 9 optimization methods. Citing sources gave a +40% boost. Adding statistics with sources, +37%. Expert quotations, +30%. Keyword stuffing, **−10%** — actively reduced AI visibility. That's the framing this docs site is built around: cite, attribute, time-stamp, write honestly, and don't try to game it.

## Want to follow along

- Bookmark this site — every doc page links to a "Last updated" date so you can see what's fresh.
- Watch [github.com/aoneahsan/lifewell-docs](https://github.com/aoneahsan/lifewell-docs) for commits as content batches ship.
- Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with feedback or doc requests.

Welcome to the LifeWell docs. More soon.
