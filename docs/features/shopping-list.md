---
title: The shopping list
description: A list built from your meals and recipes or written by hand, and shared as plain text so the person doing the shop needs no account.
keywords: [lifewell shopping list, meal planner shopping list, share shopping list]
tags: [features, everyday, health]
sidebar_position: 9
---

# The shopping list

Reachable from the food and meals area, `/diet-plan`.

## Where a list comes from

- **From the meal planner.** Plan a week and the ingredients become a list.
- **From a saved meal or a recipe.**
- **By hand**, for the things no planner knows about.

Items can be ticked off in the shop. The list is yours and stays in your record until you clear it.

## Getting it out of the app

Two ways, and which one you get is decided when you press the button rather than when the page loads:

| Where | What happens |
|---|---|
| Web | The in-app share view opens, with an explicit copy-to-clipboard |
| Android | The platform share sheet opens |

The list leaves as **plain text**. The person doing the shop does not need LifeWell, an account, or a link
that expires.

Changing your mind and closing the share sheet is a silent no-op. It is not a failure, so it does not produce
an error.

## What is in the export

Shopping lists and their items are in [the export](../reference/export-format.md), in the JSON and CSV
formats. They are not in the PDF: a PDF is a document you hand to a clinician, and a shopping list is not for
that reader.
