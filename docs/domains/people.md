---
title: People
description: Family and work trees, connections, places, messages, community, professionals and blood donation — the largest folder of screens in LifeWell.
keywords: [lifewell family tree, work tree, connections, contacts picker, identity card picture, community, chats, professionals directory, blood donors]
tags: [domains, people]
sidebar_position: 5
---

# People

The largest single folder of screens in the app, and the reason LifeWell is not a health tracker.

## People

`/people` is a record of the people in your life — who they are to you, and the details you would otherwise
keep in four places. `/people/import` brings a list in rather than making you type it.

### Choosing a number from your contacts

On Android, a **Contacts** button sits beside every phone number field. Press it and your phone shows your
contacts; you pick one, and LifeWell reads only that contact's name and numbers and keeps just the number you
choose. Android asks for reading and changing contacts as one permission, and it asks only when you press
Contacts. LifeWell never adds, changes or removes a contact, and your address book is never uploaded, searched
or stored. Say no and you type the number instead — every phone field works either way.

### Identity card pictures

On a person in your own record you can add a picture of the front and back of their identity card — JPEG,
PNG or WebP, up to 5 MB a side. A number alone can be mistyped; the picture is what a check is made against
if a match is ever questioned.

- **Where it is kept.** With LifeWell, encrypted, and not in your Google Drive — the one picture in LifeWell
  that works that way.
- **Who can open it.** Only LifeWell administrators, for a check, and every opening is written to the
  administrators' log. You can see that it is kept, its size and the date you added it, but not the picture
  itself.
- **Who never sees it.** The person it belongs to, anybody you connect with, and any shared link.
- **How it goes.** You remove it, you delete that person, or you delete your account — any of the three
  deletes it for good.

## Trees

- **`/people/family-tree`** — who is related to whom.
- **`/people/work-tree`** — the same idea for colleagues and reporting lines.

Both are built from the same store of people and relationships, so somebody who is in both is one record
rather than two.

## Connections and groups

- **`/people/connections`** — people who also use LifeWell and have agreed to be connected to you. In the
  menu it sits under [Sharing](./sharing.md), as *Partner sharing*.
- **`/people/family-groups`** — a household or family group. A Family plan's seats can only go to somebody
  already connected to you here, and a seat shares nothing — see [Family seats](../plans.md#family-seats).
- **`/people/journeys`** — a shared trip or period, with its own photos and notes.

Asking somebody to connect is one request. If their entry has no email address, if the address is your own,
or if you have asked too often, the app says which rather than failing quietly.

## Places

`/maps` holds saved places, and the maps over your own record — memories, notes, people and events plotted
where they happened. `/people/location-tracking` and `/people/location-history` are opt-in and off by default.

:::note[There is no location sharing between accounts]
Saved places and location history are yours. A link can carry a tracker, your medications or a tree, and
nothing else — the database enum that names what a share may carry has three members and none of them is
location. That absence is the enforcement, rather than a screen that simply does not offer the option.
:::

## Messages

`/chats` is one-to-one and small-group messaging between connected accounts. A conversation with a
[professional](../features/professionals.md) is the same mechanism with a different kind on it.

The export carries **the messages you sent**. The other person's words are the other person's record.

## Community

`/community` is a set of groups with posts and replies. Groups are a shared catalogue rather than something
you create, and every post carries the same moderation route as any other.

You can block someone. Who you have chosen not to see is your own decision and your own record — it is one of
the few things in the export a person might genuinely want a copy of if they ever left.

## Professionals

`/professionals` is a directory of practitioners who have listed themselves, with a verification against a
register. See [Professionals](../features/professionals.md).

## Blood donation

`/blood-donors` is a public directory, and `/profile/blood-donor` is where you list yourself. See
[Blood donation](../features/blood-donation.md).

## Sharing

Everything above answers to one sharing model, which is an area of its own: [Sharing](./sharing.md).
Nothing here is visible to another account unless you made it so.
