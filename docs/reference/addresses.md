---
title: Addresses that do not move
description: Ninety-six public LifeWell addresses and fifteen redirects that are frozen. A rebuild changes code, not addresses.
keywords: [lifewell urls, permanent links, redirects, sitemap, frozen urls]
tags: [reference, seo]
sidebar_position: 2
---

# Addresses that do not move

Ninety-six public addresses on [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) are frozen. Every one
of them resolves in 3.0.0, and none of them changed in the rebuild.

They are frozen because they are already public — indexed by search engines, shipped to installed apps, or
linked from somewhere we do not control. **The rebuild changes code, not contracts.**

## What is in the ninety-six

| Group | Count | Examples |
|---|---|---|
| Core public pages | 9 | `/` · `/features` · `/about` · `/contact` · `/get-involved` · `/support` · `/sitemap` · `/blog` · `/feed` |
| Blog posts | 47 | `/blog/<slug>` |
| Feature pages | 28 | `/features/<slug>` |
| Tools | 5 | `/tools` and the four calculators that stayed |
| Standalone pages | 3 | `/baby-names` · `/blood-donors` · `/health-tools` |
| Legal and compliance | 4 | `/privacy` · `/terms` · `/delete-account` · `/permissions` |

:::note[One more feature page is decided and not published]
`/features/professionals` will be a twenty-ninth feature page and the ninety-seventh address. It is not
published, so it is not counted above; the two numbers move on the day it ships and not before. The
professionals directory itself is a signed-in screen at `/professionals`, it is not indexed, and it does not
move — see [Professionals](../features/professionals.md).
:::

:::note[`/feed` is the blog feed, and never a social feed]
An earlier version of this documentation described `/feed` as a social feed. It is not, and never was. It is
the **public readable feed of recent blog content** — the human-readable companion to `/feed.xml`. There is no
social feed in LifeWell.
:::

The four legal addresses are referenced from the Google Play listing and the Data Safety form. A 404 on
`/privacy` or `/delete-account` is a policy violation rather than a broken link, which is why they are in this
list rather than in a nice-to-have one.

## A feature page keeps describing a feature

The rebuild merged some duplicated screens. Where it did, the feature page still resolves and still describes
what you can do — it points at the new location rather than at the old one.

## Redirects

Fifteen, all permanent.

### Out, to ZTools

| From | To |
|---|---|
| `/tools/bmi-calculator` | `ztools.zaions.com/bmi-calculator` |
| `/tools/tdee-calculator` | `ztools.zaions.com/tdee-calculator-advanced` |
| `/tools/bmr-calculator` | `ztools.zaions.com/bmr-calculator` |
| `/tools/macro-calculator` | `ztools.zaions.com/macronutrient-calculator` |
| `/tools/protein-calculator` | `ztools.zaions.com/protein-intake-calculator` |
| `/tools/body-fat-calculator` | `ztools.zaions.com/body-fat-calculator` |
| `/tools/ideal-weight-calculator` | `ztools.zaions.com/ideal-weight-calculator` |
| `/tools/heart-rate-zones` | `ztools.zaions.com/heart-rate-zone-calculator` |
| `/tools/age-calculator` | `ztools.zaions.com/age-calculator` |
| `/tools/workout-timer` | `ztools.zaions.com/workout-timer` |

### In, to the screen that replaced them

| From | To |
|---|---|
| `/data-deletion` | `/delete-account` |
| `/tools/calorie-counter` | `/health/calories` |
| `/tools/fasting-tracker` | `/health/fasting` |
| `/tools/sleep-tracker` | `/health/sleep` |
| `/tools/step-counter` | `/health/steps` |

A redirect target may move if the screen behind it moves. The redirect itself is never deleted.

## Files at the root

`sitemap.xml` · `feed.xml` · `robots.txt` · `llms.txt` · `ai.txt` · `pricing.txt` · `humans.txt`

The sitemap and the feed are **generated at build time** from the route registry rather than maintained by
hand, so they cannot drift from what the site actually serves. In the 2.x app both were hand-written, and they
had drifted.

`robots.txt` allows the AI crawlers by name — GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot,
Google-Extended, CCBot, Applebot and Bingbot — and repeats the private-route rules inside each named group,
because a crawler obeys its own group and ignores the wildcard one.

## Why the addresses do not match the areas

`/health/mood-journal` is in the Mind area and `/health/menopause` is in Life stages. The prefix is wrong
about the area, and it stays wrong on purpose — see [The seven areas](../domains/overview.md#why-the-addresses-do-not-match-the-areas).

## Not in the list

`/search` is deliberately absent from the sitemap and marked `noindex`. It is a signed-in surface over one
person's own records: there is nothing there for a crawler, and a search page in a search index is an
invitation to probe it.
