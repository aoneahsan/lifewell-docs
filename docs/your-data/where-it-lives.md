---
title: Where your record lives
description: Written on your device first, synced to a Postgres database with per-row rules, with photos in your own Google Drive. What that means when you go offline, disconnect, or leave.
keywords: [lifewell offline, google drive storage, where is my data stored, sync, postgres]
tags: [your-data, privacy, concepts]
sidebar_position: 3
---

# Where your record lives

Three places, and they hold different things on purpose.

| What | Where | Who can read it |
|---|---|---|
| Everything you type | A Postgres database, hosted by Supabase | You, and anyone you [shared it with](../domains/sharing.md) |
| Photos and files | **Your own Google Drive** | You, through Google |
| Preferences, session, drafts | Your device | You, on that device |

## Written on your device first

Entries are written locally first and sync when there is a connection. A tunnel is not a reason to lose a
day.

What that means in practice:

- You can record something with no signal, and it goes up when there is one.
- Reads you have already made are cached, so a page you visited opens again offline.
- A page you have never opened, offline, has nothing to show you — the app says so rather than showing an
  empty state that looks like an empty record.

## Photos are in your Drive, not ours

LifeWell asks Google for a scope that reaches **only the files LifeWell itself created**. It cannot list, read
or touch the rest of your Drive, and that is a property of the permission rather than a promise about our
conduct.

We hold a reference to the file, not the file itself.

| If you… | Then… |
|---|---|
| Disconnect Drive | Captions, dates, albums and tags stay. The images become unreachable |
| Delete a file in Drive | The image is gone. LifeWell still knows there was one |
| Export your record | You get the references and the captions, never the image bytes |
| Delete your LifeWell account | The references go. The files stay in your Drive, for you to delete there |

The trade is that a photo depends on a Google account you control, rather than on storage we control. That is
the direction the trade was meant to run.

## The database, and what stops another account reading you

Every table has row-level security on, and every read runs **as you**. There is no service key in the browser
and no administrative path that the app can take on your behalf.

The rules are written so that a query has to prove its own ownership from its own filters. That matters
because Postgres row-level security *filters* a list rather than refusing it — a query missing its owner
filter returns fewer rows rather than an error, which looks fine in a review and is not fine.

Two accounts were seeded specifically so this can be tested against real rows, because a query returning zero
rows satisfies any rule vacuously.

## Backups

There is no point-in-time recovery behind this database, and saying otherwise would be the easy lie. Backups
are taken by hand, verified by replaying them into a throwaway database and comparing counts, and kept off
the provider that holds the live copy.

**Your own backup is the [export](./export.md)**, and it is on every plan including Free for exactly this
reason. A product that holds your life and charges you to get a copy of it is a product with a hostage.

## What else leaves your device

Photos go where your own Google account keeps them. Analytics and error reports go to the services named in
[Integrations](../reference/integrations.md), and neither carries the contents of your record — an error
report names the screen and the failure, not what you wrote on it.

Nothing about your record is sold, and there is no advertising network in the product.
