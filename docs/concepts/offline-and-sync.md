---
title: Offline and sync
description: Entries are written locally first and sync when there is a connection. What works with no signal, what does not, and how the app says which.
keywords: [lifewell offline, offline first, sync, no connection, works offline]
tags: [concepts, offline]
sidebar_position: 4
---

# Offline and sync

Entries are written locally first and sync when there is a connection. **A tunnel is not a reason to lose a
day.**

## What works with no signal

- **Writing anything.** A reading, a dose, a meal, a note, a journal entry. It goes up when there is a
  connection.
- **Reading what you have already opened.** Pages you visited are cached, so they open again.
- **Every calculator and timer.** They compute in the browser and never needed a server.
- **Reminders on Android.** They are scheduled by the device, so they arrive whether or not anything is
  reachable.

## What does not

- **A page you have never opened.** There is nothing cached to show. The app says the page needs a connection
  rather than rendering an empty state, which would read as *you have nothing here*.
- **A photo you have never viewed.** The image is in [your Google Drive](../your-data/where-it-lives.md) and
  has to be fetched once. Until then it shows a placeholder — tap it later, online, and it loads.
- **Anything involving somebody else.** Messages, community, shares and the professionals directory all need
  the other side.
- **Signing in.** The first sign-in needs a connection. An existing session does not.

## How a conflict is settled

Two entries on the same day for the same tracker are settled by that tracker's own rule, and it is the same
rule the database uses everywhere:

- A tracker that **adds up** treats the second entry as another reading.
- A tracker that takes the **latest** treats it as a correction.

So a glass of water logged on the phone and another on the laptop is two glasses, and a weight entered twice
is one weight. That is decided by an index in the database rather than by whichever device syncs second.

## The banner

When the app knows it is offline it says so, once, in a way you can dismiss. It does not silently drop a write
and let you find out later — the honest failure is the whole point of the local-first write.

## What is deliberately not built

There is no background sync daemon and no conflict-resolution interface. The model above is simple enough
that neither is needed, and both would be surfaces that fail in ways nobody can debug from a screenshot.
