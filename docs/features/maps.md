---
title: Maps and places
description: Your own record plotted where it happened — memories, notes, people and events — plus saved places and an opt-in location history.
keywords: [lifewell maps, memory map, saved places, location history, place tracking]
tags: [features, people, memories]
sidebar_position: 10
---

# Maps and places

`/maps` plots things you already recorded. It is a view, not a second store — a memory on the map is the same
row as the memory in the library.

## The four maps

| Map | What it plots |
|---|---|
| `/maps/memories` | Memories that carry a place |
| `/maps/notes` | Notes that carry a place |
| `/maps/people` | People, where you placed them |
| `/maps` | Everything at once, and saved places |

`/maps/full` is the same thing without the surrounding page, for when the map is the only thing you want.

## Saved places

A place worth remembering, with whatever you wanted to remember about it. Saved places appear on the map and
in [the export](../reference/export-format.md).

## Location history

`/people/location-tracking` and `/people/location-history` are **off by default and opt-in**. Nothing is
recorded until you switch them on, and switching them off stops the recording without deleting what is
already there.

:::note[Location is never shared with another account]
A share between two accounts can cover trackers or medications and nothing else. There is no location scope,
and that is a fact about the database rather than a screen that chooses not to offer one. See
[Sharing](./sharing.md).
:::

## What the export carries

Saved places and location settings. They are in the JSON and CSV formats, and the PDF carries a summary — a
count and a span — rather than a list of coordinates.
