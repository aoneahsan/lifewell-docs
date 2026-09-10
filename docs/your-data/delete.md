---
title: Delete your record
description: Delete your whole account, or one of the seven areas and keep the rest. What each one removes, what it deliberately keeps, and where each stands today.
keywords: [delete lifewell account, delete my data, gdpr deletion, account deletion]
tags: [your-data, privacy]
sidebar_position: 2
---

# Delete your record

`/settings` → **Your data**. Export sits above delete on that screen, in that order, deliberately.

## Delete your account

The whole record and the account behind it.

The flow is: **Your data** → **Export everything** → **Delete account** → type `DELETE` to confirm → signed
out immediately, record gone.

There is no soft archive that the developer can read afterwards.

:::warning[The server half is not deployed yet]
The button, the confirmation and the call behind it are built and correct. **The function that actually
removes the account is not deployed**, so pressing it today reports that deletion is not available rather
than reporting a success that did not happen — and it points you at
[`/delete-account`](https://lifewell.aoneahsan.com/delete-account), which is the documented route that works
now.

That page is a frozen address referenced from the Play Store listing. It is the fallback precisely so there is
never a moment when deletion is impossible.
:::

## Delete one area

Remove everything in Health, or in Memories, and keep the rest. It is in `/settings` → **Your data** →
*Delete a single domain*.

- It runs as **one transaction**. Every table commits together or none of them does — a half-deleted area
  with no record of where it stopped is worse than either outcome.
- It **tells you what went**, table by table, with counts.
- It writes a line to your account's own log, so the deletion is a thing that happened rather than an absence
  you notice later.
- You have to **type the words** — `DELETE HEALTH`, `DELETE MEMORIES` — and that check is made by the server,
  not by the dialog. A confirmation that only exists in the interface is a nicety; this is a boundary.

### One cascade worth knowing about

Deleting **People** also removes the photo tags that say who is in a picture, because a tag points at a person
who will no longer exist. Those rows are counted and reported rather than vanishing into an area you did not
choose.

### People and Sharing are deleted separately

Deleting **People** removes your people, your trees and your places, and it does not touch what you share.
Deleting **Sharing** revokes every link, ends every connection and deletes every reply waiting for you, and
your people stay exactly where they are. Clearing out a contact list should never quietly end what your doctor
can read. See [Sharing](../domains/sharing.md).

### What deleting an area deliberately keeps

| Kept | Why |
|---|---|
| Notifications | A delivery record spans every area. Deleting Health must not silently delete a notice about a share |
| Your AI provider key | An account-level credential, not content in any area |
| Your Google Drive connection | A live credential and an external connection. Severing it is its own action, in settings |
| A Play purchase record | Account-level. Deleting it would strand an entitlement you paid for |
| AI usage metering | Account-level, and it is what a limit is counted from |

## Hiding is not deleting

[Switching an area off](../domains/overview.md#switching-an-area-off) keeps every row. Deleting an area keeps
none. They are two controls in two places for exactly that reason.

## What deletion does not reach

- **Files in your own Google Drive.** LifeWell holds a reference; deleting your record removes the reference.
  The files are in your Drive, and they are yours to delete there. See [Where your record
  lives](./where-it-lives.md).
- **Anything you sent somebody else.** A message you sent sits in their conversation too.
- **Administrative audit lines about your account.** A log an actor can erase is not a log; those lines
  outlive the account they describe, and they name an action rather than your record.
