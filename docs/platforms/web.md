---
title: Web
description: The web build is the reference build — everything LifeWell does, apart from the two things Android delivers through the operating system.
keywords: [lifewell web app, browser support, progressive web app, pwa]
tags: [platforms, web]
sidebar_position: 1
---

# Web

[lifewell.aoneahsan.com](https://lifewell.aoneahsan.com) is the reference build. Every feature exists here
first, and the Android app is the same application in a native shell.

## Browsers

Current versions of Chrome, Edge, Firefox and Safari. A browser too old to run the app says so at the boot
screen rather than rendering something broken.

## What the web build does not have

Two things, and both are the operating system's rather than the app's:

- **Local reminders that arrive with the app closed.** Those are scheduled by Android. On the web a reminder
  is only visible while the app is open.
- **A platform share sheet.** Sharing a [shopping list](../features/shopping-list.md) on the web opens the
  in-app share view with an explicit copy-to-clipboard, rather than the system sheet.

Everything else — every screen, every tracker, the export, the maps, the community — is the same.

## Adding it to a home screen

Most browsers will offer to install it, which gives you an icon and a window without an address bar. Nothing
extra is downloaded and nothing about the app changes; it is a browser feature.

## Offline

The web build is local-first in the same way the Android build is: writes happen on the device and sync when
there is a connection. What works and what does not is [Offline and
sync](../concepts/offline-and-sync.md).

## The public pages

Some addresses work with no account at all: the [tools](../features/tools.md), the baby-name browser, the
blood donor directory, the blog, the feature pages, and the four legal pages. They are ordinary pages,
rendered as real HTML rather than assembled by JavaScript after loading, so a search engine or an AI crawler
reads the same words you do.
