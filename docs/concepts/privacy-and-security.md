---
title: Privacy and security
description: What leaves your device and what does not — sign-in without a password, per-row database rules, scrubbed analytics, and the claims LifeWell deliberately does not make.
keywords: [lifewell privacy, health data privacy, row level security, analytics scrubbing, data security]
tags: [concepts, privacy]
sidebar_position: 3
---

# Privacy and security

The honest version, including the parts that are less flattering than a marketing page would carry.

## Sign-in

Google only. There is no password field, so **we never see or store a password** — there is not one to store.

The session lives in browser storage on the web and in the platform keystore on Android. Signing out
everywhere ends every session, not only the one in front of you.

## What stops another account reading your record

Every table has row-level security enabled, and every read runs **as you**. There is no administrative key in
the browser and no path the app can take on your behalf.

Three things underneath that are worth stating, because each of them is where this normally goes wrong:

- **A list is filtered, not refused.** Postgres row-level security returns fewer rows rather than an error, so
  a query missing its owner filter looks like a working feature. Every list read filters on the column the
  rule reads.
- **Rules are proved against seeded rows.** A query returning zero rows satisfies any rule vacuously, so the
  test accounts hold real data — one with ninety days of readings, one with fourteen, neither of them an
  administrator.
- **Every list is capped.** A list read returns twenty rows by default and fifty at most, enforced in the
  database. There is no query that walks the whole table.

## What we collect about how you use it

Four services, and every one of them is off when its key is absent:

| Service | For |
|---|---|
| Google Analytics 4 | Which pages get used |
| Amplitude | Which actions get taken |
| Microsoft Clarity | Session replay, to see where an interface fails |
| Sentry | Errors |

**None of them carries the contents of your record.** That is enforced by an allowlist rather than a
convention: an analytics property survives only if the registry declares it for that event *and* the value
passes a type guard. A string has to be a bounded token, so a sentence, an email address or a note body
cannot pass. A number has to be a small non-negative integer, so a measurement cannot pass as a count.

The scrubbers are tested by pushing real identifiers through them and failing if any survives. A scrubber
verified by reading is a scrubber that regresses silently.

Session replay is the one to be most aware of, because it records an interface rather than an event. The app
marks sensitive elements so they are masked in a recording.

:::note[Firebase Analytics is not banned, and this page used to say it was]
An earlier version of this documentation stated that Firebase Analytics was forbidden and had been replaced.
That was wrong. Google Analytics 4 **is** the Firebase analytics property — one property, two ways of talking
to it — and it runs alongside Amplitude, Clarity and Sentry rather than instead of them. The four together are
the analytics stack, and the sentence claiming otherwise misinformed readers about what the product does.
:::

## Permissions

[`/permissions`](https://lifewell.aoneahsan.com/permissions) lists every permission the app declares and what
it is for. The list is short and it is checked against the merged Android manifest rather than against
intentions — plugins inject permissions, and an unaudited manifest is how an app ends up asking for something
nobody chose.

Nothing asks for contacts, SMS or call logs.

## What LifeWell does not claim

- **Not end-to-end encrypted.** Your record is encrypted in transit and at rest by the database provider, and
  it is readable by that database. Claiming otherwise would be false.
- **Not a medical device**, and nothing in it is a diagnosis.
- **No advertising network.** Nothing about you is sold, and there is no third-party ad code in the product.
- **No point-in-time recovery.** Backups are taken by hand and verified by replay. Your own copy is the
  [export](../your-data/export.md), which is why export is on every plan.

## Getting it out, or getting rid of it

[Export everything](../your-data/export.md) · [Delete your record](../your-data/delete.md) ·
[Where your record lives](../your-data/where-it-lives.md).

The legal pages are [`/privacy`](https://lifewell.aoneahsan.com/privacy) and
[`/terms`](https://lifewell.aoneahsan.com/terms). They are written to be read, not to be survived.
