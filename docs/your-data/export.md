---
title: Export everything
description: Take your whole record out of LifeWell as JSON, CSV or PDF. The file is built on your device, and the format is documented field by field.
keywords: [lifewell export, export health data, download my data, json csv pdf export]
tags: [your-data, export]
sidebar_position: 1
---

# Export everything

`/health/export`, and **Export everything** in the main menu.

A record you cannot read back is not a record. This is the page that makes that true.

## The three formats

| Format | File | Complete | Best for |
|---|---|---|---|
| **JSON** | `lifewell-export-<date>.json` | **Yes** — everything | Reading it back, or importing it somewhere else |
| **CSV** | `lifewell-export-<date>.zip` | **Yes** — one file per table | A spreadsheet |
| **PDF** | `lifewell-export-<date>.pdf` | **No, by design** | Handing to a clinician |

The PDF leaves things out on purpose. The full field-by-field description of all three, including exactly
what the PDF omits and why, is [The export file format](../reference/export-format.md).

## The file is built on your device

The export is generated in your browser from one read. Nothing is assembled on a server, and no copy of your
record is stored anywhere on its way to you.

What that buys is worth stating plainly: **your record never touches our servers on its way to the person it
belongs to.**

The trade is equally plain. Because the work happens in the tab, leaving the page cancels it, and nothing is
left half-made because nothing was ever stored.

## Choosing a date range

Some rows belong to a day, and some are what those rows mean.

- **Dated rows** — a reading, a meal, a dose, a calendar event — honour the range you pick.
- **Standing rows** — a medicine, a condition, a saved meal, a tracker's target — are always included, even
  when they were created before the range.

Dropping the standing rows would produce an export of doses with no medicines attached, which reads as data
loss.

## The row ceiling

Each table exports at most **5,000 rows**. If a table hits that ceiling, the file says so in its own header
rather than being discovered to be short a year later.

## Scheduled exports

On a paid plan, `/health/export` can run on its own — weekly on a Sunday or a Wednesday, monthly on the
first, or quarterly. You choose how many copies to keep: the last four, the last eight, or every one.

Earlier exports are listed on the page with their format, size and row count.

## Deleting instead

Export and delete are on the same screen, in that order, deliberately. See
[Delete your record](./delete.md).
