---
title: Web
description: Use LifeWell in a browser, with the web-specific reminder, sharing and offline behavior explained.
keywords: [lifewell web app, browser support, progressive web app, pwa]
tags: [platforms, web]
sidebar_position: 1
---

# Web

[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) opens LifeWell in a browser. The Android app shares
the account and record, while device notification and sharing behavior depends on the platform.

## Browsers

Current versions of Chrome, Edge, Firefox and Safari. A browser too old to run the app says so at the boot
screen rather than rendering something broken.

## What the web build does not have

Some actions depend on the browser and operating system:

- **Local reminders that arrive with the app closed.** Supported event and wellness alerts are scheduled by
  Android when notifications are allowed. A closed browser tab cannot deliver those device alerts; medicine
  due-dose prompts appear in the LifeWell inbox when you open the medication list.
- **A platform share sheet.** Sharing a [shopping list](../features/shopping-list.md) on the web opens the
  in-app share view with an explicit copy-to-clipboard, rather than the system sheet.

The same account and saved records are available on both platforms. Check each feature's guide for its
delivery and permission details.

## Adding it to a home screen

Most browsers will offer to install it, which gives you an icon and a window without an address bar. Nothing
extra is downloaded and nothing about the app changes; it is a browser feature.

## Offline

The web app blocks the current page while the connection is down. With **Keep working offline** enabled,
you can choose to queue supported quick logs on this device; the rest of the record still needs the server.
The app does not cache pages for offline opening. See [Offline and sync](../concepts/offline-and-sync.md).

## The public pages

Some addresses work with no account at all: the [tools](../features/tools.md), the baby-name browser, the
blood donor directory, the blog, the feature pages, and the four legal pages. They are ordinary pages,
rendered as real HTML rather than assembled by JavaScript after loading, so a search engine or an AI crawler
reads the same words you do.
