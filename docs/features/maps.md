---
title: Maps and places
description: Follow the connections among memories, notes, people, events and the place names you saved. Location history is a separate opt-in control.
keywords: [lifewell maps, memory map, saved places, location history, place tracking]
tags: [features, people, memories]
sidebar_position: 10
---

# Maps and places

`/maps` is called **Connections** in the app. It shows how things you already recorded relate, with a Places
layer for names you attached to memories or events. It reads the original records rather than making a
second copy or inferring geographic coordinates.

## The connection views

| Address | What it opens |
|---|---|
| `/maps` | The Connections view with layers for everything, people, places and location history |
| `/maps/memories` | A bounded connection walk starting from a memory |
| `/maps/notes` | A bounded connection walk starting from a note |
| `/maps/people` | A graph of people and their relationships |

`/maps/full` gives the people graph more room by removing the surrounding page. Calendar and chat entries
also have connection walks; their dates and place names stay attached to the underlying records.

## Saved places

A place here is the name you entered, not a position LifeWell collected. The Places layer lists memories
and calendar entries with place names. Saved place data appears in [the export](../reference/export-format.md).

## Location history

`/people/location-tracking` and `/people/location-history` describe a separate, **off-by-default** opt-in
feature. The Android background recorder is implemented for version 3.31.0 and later. It requests the
separate location permissions when you enable recording; existing history can still be viewed and deleted.
The 3.31.0 Play build still needs its owner upload and device verification, so the current Play release must
not be treated as having this recorder yet.

:::note[Location is never shared with another account]
A link can carry a tracker, your medications or a tree, and nothing else. There is no location scope, and
that is a fact about the database rather than a screen that chooses not to offer one. See
[Sharing](../domains/sharing.md).
:::

## What the export carries

Saved place rows and location settings are in JSON and CSV. The PDF counts saved place rows instead of
printing a list of coordinates.
