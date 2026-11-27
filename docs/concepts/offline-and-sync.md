---
title: Offline and sync
description: LifeWell pauses the app when the connection is lost, with an optional way to keep supported quick logs on this device until it returns.
keywords: [lifewell offline, offline first, sync, no connection, works offline]
topics: [concepts, offline]
sidebar_position: 4
---

# Offline and sync

LifeWell checks whether a real request can reach the app. When the connection drops, a full-screen message
holds the current page in place. It lifts after the connection returns and a fresh request succeeds; the page
continues without reloading.

## What works with no signal

If **Keep working offline** is on in device settings, the connection message offers **Keep logging offline**.
That opens the current page with a slim offline bar. Supported metric readings, cycle-day changes and symptom
episodes can be held on this device and replayed when the connection returns. The queue has a limit and shows
when a write cannot be held; it never says a failed server write succeeded.

An Android reminder already scheduled on the device can still arrive without a connection.

## What does not

- **New pages and uncached assets.** The service worker does not save pages or intercept requests. Opening a
  page you have not loaded needs a connection.
- **Server reads and other writes.** Messages, community, shares, photos, appointments and sign-in need the
  service. A local queue is available only for the supported log types above.
- **A first load while offline.** LifeWell has no offline app shell to start from a closed tab without a
  connection.

## How a conflict is settled

Queued changes are replayed when a real connection returns. Each queued operation carries enough identity to
be retried without duplicating it. The destination tracker still applies its own rule:

- A tracker that **adds up** treats the second entry as another reading.
- A tracker that takes the **latest** treats it as a correction.

Two water readings remain two readings; a tracker that keeps the latest value handles a correction under its
own data rule. A queued change is not visible on another device until the server accepts it.

## The banner

The connection message blocks the app by default and offers a retry. It can be bypassed only through the
**Keep logging offline** choice when that device setting is on. The slim bar then keeps the offline state in
view. On reconnect, LifeWell replays queued writes and refreshes active reads without reloading the page.

## What is deliberately not built

There is no cached offline copy of the whole app and no background sync while the tab is closed. The supported
quick-log queue is a narrow way to keep a small entry through a temporary loss of connection.
