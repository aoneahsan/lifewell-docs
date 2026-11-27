---
title: Export a copy
description: Export a selected date range as JSON or CSV, or make a PDF summary. Each table is capped at 5,000 rows per export.
keywords: [lifewell export, export health data, download my data, json csv pdf export]
topics: [your-data, export]
sidebar_position: 1
---

# Export a copy

Open `/health/export`, or choose **Export a copy** in the main menu.

A record you cannot read back is not a record. This is the page that makes that true.

## The three formats

| Format | File | Scope | Best for |
|---|---|---|---|
| **JSON** | `lifewell-export-<date>.json` | Selected date range; 5,000 rows per table | Reading the included record data |
| **CSV** | `lifewell-export-<date>.zip` | Selected date range; 5,000 rows per table | A spreadsheet |
| **PDF** | `lifewell-export-<date>.pdf` | Short summary, not all fields | Taking a summary to an appointment |

The PDF leaves things out on purpose. JSON and CSV can also omit older dated rows outside the chosen range,
rows beyond a table's cap, and uploaded file bytes. The field-by-field description is
[The export file format](../reference/export-format.md).

## An immediate file is built on your device

An immediate export is generated in your browser from an authenticated read of your LifeWell record. The
browser assembles this download; the manual export does not leave an extra stored file on the server.

Because this work happens in the tab, leaving the page cancels an immediate export. A scheduled copy is a
separate server job described below.

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

On an eligible plan, `/health/export` can begin a weekly server-generated copy on Sunday or Wednesday.
That file remains available for seven days, then is deleted; the history line can remain after the file
expires. Use an immediate browser export if you need a copy today.

Earlier exports are listed on the page with their format, size and row count.

## Jobs

Every export also appears on `/jobs`, reached from the foot of the menu beside *Export a copy*. A recording
Speak is reading appears there too. Each row says **Working**, **Ready** or **Did not finish**, with one action:
*Open* or *Try again*.

When an export is ready, a notification arrives, and its **Open** goes straight to the file. A failed export sends
no notification; Jobs shows it as *Did not finish*.

## Deleting instead

Export and delete are on the same screen, in that order, deliberately. See
[Delete your record](./delete.md).
