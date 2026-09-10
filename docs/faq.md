---
title: Questions people ask
description: Answers to what people ask before trusting an app with a life — cost, privacy, getting your record out, offline use, and what LifeWell refuses to do.
keywords: [lifewell faq, is lifewell free, lifewell privacy questions, export data, delete account]
tags: [faq]
sidebar_position: 10
---

# Questions people ask

## Is it a health app?

No. Health is its largest area and there are more screens under it than under anything else, but the largest
single folder of screens is the one about people. LifeWell holds
[seven areas](./domains/overview.md) — health, mind, life stages, people, memories, everyday and sharing —
with **you** in the middle.

Introducing it as a health tracker gets the product wrong.

## What does it cost?

There is a Free tier and two paid ones — Pro at £3 a month and Family at £6. The full comparison is
[Plans](./plans.md).

**Export is on every tier, including Free.** A product that holds your life and charges you to get a copy of
it is a product with a hostage.

## Can I get my record out?

Yes, from inside the app, as JSON, CSV or PDF. The JSON and CSV are complete; the PDF is deliberately not, and
[the format page](./reference/export-format.md) says exactly what each one contains, field by field.

The file is built on your device. Your record never touches our servers on its way to you.

## Can I delete everything?

Deleting your whole account is offered in the app. **The server half is not deployed yet**, so today the
working route is the request form at
[`/delete-account`](https://lifewell.aoneahsan.com/delete-account) — see
[Delete your record](./your-data/delete.md).

Deleting one area and keeping the rest exists in the database and does not yet have a screen.

## Does it work offline?

Writing does. Entries are written locally first and sync when there is a connection — a tunnel is not a reason
to lose a day. What works and what does not is [Offline and sync](./concepts/offline-and-sync.md).

## Where are my photos?

In **your own Google Drive**, under a permission that reaches only the files LifeWell created. We hold a
reference to the file, not the file itself. See [Where your record lives](./your-data/where-it-lives.md).

## Is it end-to-end encrypted?

No, and it would be easy to imply otherwise. Your record is encrypted in transit and at rest by the database
provider, and it is readable by that database. Nothing else about it is sold, mined or advertised against.

## Will it nag me?

Medication and appointment reminders are on because that is why you entered them. The nudge for a day you have
not written anything in is **off** until you ask for it. Everything is on one panel.

There is no streak, no score, no rank, no badge for starting and no weekly report telling you how you did. A
record with gaps in it is still a record.

## Is there an iPhone app?

No. [iOS was removed on 2026-07-16](./platforms/ios.md) and will be re-added when an Apple Developer account
exists. The web app runs in Safari and is the same application.

## Is there a browser extension?

No. It is [planned and not built](./platforms/browser-extension.md). Older documentation described one; that
documentation was describing something that is not shipping.

## Who can see what I record?

Nobody, unless you [shared it](./domains/sharing.md). A link can carry a tracker, your medications or a tree,
and nothing else — there is no scope for your journal, your memories, your notes or your location.

An administrator cannot read your record either: the account list returns an allowlist of columns and no
health column is in it.

## Who builds it?

One person. It is direct about what it cannot do, which is most of this page.

## Something is wrong

[`/contact`](https://lifewell.aoneahsan.com/contact) in the app, or
[`/support`](https://lifewell.aoneahsan.com/support).
