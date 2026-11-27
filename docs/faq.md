---
title: Questions people ask
description: Answers to what people ask before trusting an app with a life — cost, privacy, getting your record out, offline use, and what LifeWell refuses to do.
keywords: [lifewell faq, is lifewell free, lifewell privacy questions, export data, delete account, family seats, contacts permission, favourites]
topics: [faq]
sidebar_position: 10
---

# Questions people ask

## Is it a health app?

No. LifeWell keeps the people and moments of your life in one place. You start with yourself, add the people
who matter, keep what you know about them and the moments you share. Everything else LifeWell holds is there
to help your life go well. It holds [seven areas](./domains/overview.md) — people, memories, everyday and
sharing, then health, mind and life stages around them — with **you** in the middle. Health is one of them.
It is not the point of the app.

Introducing it as a health tracker gets the product wrong.

## What does it cost?

There is a Free tier and two paid ones, priced in US dollars — Pro at $9.99 a month or $99.90 a year, and
Family at $8.99 per seat a month or $89.90 per seat a year, from three seats. The Android purchase path uses
Google Play Billing, but it is not switched on yet; the app does not link to another checkout. The full
comparison and current payment status are on [Plans](./plans.md).

**Export is on every tier, including Free.** A product that holds your life and charges you to get a copy of
it is a product with a hostage.

## What does a Family seat give the person who holds it?

The Family plan's limits, and nothing of yours. A seat shares no record, entry, person or file in either
direction; the payer sees only that you hold a seat and the date you took it. A seat can only go to somebody
already connected to the payer as family, either of you can end it, and if the plan ends every seat ends —
anything above Free's limits then becomes read-only. See [Family seats](./plans.md#family-seats).

## Can I get my record out?

Yes. Choose a date range and download record data as JSON or CSV, or a PDF summary. Each table is capped at
5,000 rows per export. [The format page](./reference/export-format.md) says what each file contains.

The browser builds the file from an authenticated read of your account. The export job does not leave an
additional stored file on the server.

## Can I delete everything?

You can delete the live account from **Settings → Your data** after confirming the action. Encrypted manual
backups may retain earlier data until rotation. If you cannot sign in, the public
[`/delete-account`](https://lifewell.aoneahsan.com/delete-account) page explains the help route. See
[Delete your record](./your-data/delete.md).

You can also delete one area and keep the rest from **Settings → Your data → Delete a single domain**. The app shows what was removed, table by table. See [Delete one area](./your-data/delete.md#delete-one-area).

## Does it work offline?

LifeWell pauses the app when the connection drops. If **Keep working offline** is on, you can choose to keep
logging supported readings, cycle changes and symptom episodes on this device until the connection returns.
Pages are not cached for offline use. See [Offline and sync](./concepts/offline-and-sync.md).

## Where are my photos?

In **your own Google Drive**, under a permission that reaches only the files LifeWell created. We hold a
reference to the file, not the file itself. See [Where your record lives](./your-data/where-it-lives.md).

## Is it end-to-end encrypted?

No, and it would be easy to imply otherwise. Your record is encrypted in transit and at rest by the database
provider, and it is readable by that database. Nothing else about it is sold, mined or advertised against.

## Will it nag me?

Medicine due-dose reminders appear in the LifeWell inbox; they do not send a phone notification or email. Device notifications for supported event reminders need your permission. The app water tracker does not set drink reminders. Check the channel shown for each reminder before relying on it.

There is no streak, no score, no rank, no badge for starting and no weekly report telling you how you did. A
record with gaps in it is still a record.

## Is there an iPhone app?

No. [iOS was removed on 2026-07-16](./platforms/ios.md) and will be re-added when an Apple Developer account
exists. The web app runs in Safari and is the same application.

## Is there a browser extension?

It has been built for Chrome and Firefox, but it is [not yet available in either store](./platforms/browser-extension.md).
The extension keeps its wellness entries in the browser; connecting your account does not upload them.

## Why does Android ask about my contacts?

Because you pressed **Contacts** beside a phone number, and only then. Android asks for reading and changing
contacts as one permission; LifeWell reads only the one contact you pick — its name and numbers — keeps only
the number you choose, and never adds, changes or removes a contact. Your address book is never uploaded,
searched or stored. Say no and you type the number instead. See
[Privacy and security](./concepts/privacy-and-security.md#permissions).

## Who can see a picture of somebody else's identity card?

Only LifeWell administrators, for a check, and every opening is logged. You can see that the picture is kept,
its size and the date, but not the picture itself, and it is never shown to the person, any connection or any
shared link. It is kept with LifeWell, encrypted — not in your Google Drive — until you remove it, delete the
person or delete your account. See [People](./domains/people.md#identity-card-pictures).

## How do I keep the pages I use at the top of the menu?

Press the star in the top bar on any page. It appears under **Favourites** at the top of the menu — up to 12,
kept on your account, and removing one asks first. **All pages** at the foot of the menu lists every page,
and each page ends with a *More in …* row of related pages.

## Where is Sign out?

Under your name in the phone menu, at the foot of the sidebar on a desktop, on your profile, and first under
Settings → Security.

## Who can see what I record?

Nobody, unless you [shared it](./domains/sharing.md). A link can carry a tracker, your medications or a tree,
and nothing else — there is no scope for your journal, your memories, your notes or your location.

An administrator cannot read your record either: the account list returns an allowlist of columns and no
health column is in it.

## Who builds it?

The LifeWell team. It is direct about what it cannot do, which is most of this page —
see [Who builds LifeWell](./about/the-developer.md).

## Something is wrong

[`/contact`](https://lifewell.aoneahsan.com/contact) in the app, or
[`/support`](https://lifewell.aoneahsan.com/support).
