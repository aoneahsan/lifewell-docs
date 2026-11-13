---
title: Verify a licence
description: How to check that a copy of LifeWell is licensed, by its licence key or by its website, and what each answer means.
keywords: [verify lifewell licence, check white-label licence, licence file]
tags: [white-label]
sidebar_position: 5
last_update:
  date: 2026-11-13
  author: The LifeWell team
---

# Verify a licence

Every licensed copy of LifeWell carries a licence key and serves a file at
`/.well-known/lifewell-white-label-license.json` on its own website. Either one can be checked on
[the verification page](https://lifewell.aoneahsan.com/verify-license). The answer comes from our licensing service, never from the copy being
checked.

## By key

| Answer | Meaning |
|---|---|
| Active | The licence is valid. The page shows who it was issued to, its websites, platforms and dates. |
| Being set up | Paid for; the copy is not live yet. |
| Revoked | A copy using this key is not licensed. |
| No licence with this key | Check it against the certificate. |
| Not a LifeWell key | Keys start with `LIFEWELL-`. |

## By website

| Answer | Meaning |
|---|---|
| Licensed | The site's licence file names an active licence that covers the site. |
| Does not cover this website | The file names a licence for somewhere else. |
| No licence file | The site serves no LifeWell licence file. |
| Could not be reached | Try again in a few minutes. |

A check shows only public fields. No email address or price is ever shown.

## Inside a licensed copy

A licensed copy checks its own key once when it starts and again when it is reopened. If the licence is revoked or
does not cover the website, the copy shows that the licence is not active. Nothing anyone recorded is deleted, and an
outage on our side never stops a copy from working.
