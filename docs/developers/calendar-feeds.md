---
title: Calendar feeds
description: Subscribe to your LifeWell calendar from Google Calendar, Apple Calendar or Outlook with a read-only feed address, and revoke it whenever you like.
keywords: [lifewell calendar feed, subscribe to lifewell calendar, ics feed, google calendar subscription]
topics: [developers, calendar]
sidebar_position: 6
last_update:
  date: 2026-11-19
  author: The LifeWell team
---

# Calendar feeds

A calendar feed puts your LifeWell calendar inside the calendar app you already use. You make a feed in
**Settings → Other apps → Calendar feeds**, copy its address, and subscribe to it from Google Calendar, Apple
Calendar, Outlook or any app that accepts an `.ics` subscription. The feed is read-only: your calendar app
shows LifeWell's events and cannot change them.

## How do I subscribe?

1. In LifeWell, open **Settings → Other apps → Calendar feeds** and choose **New feed**.
2. Copy the address it gives you.
3. In your calendar app, add a calendar **from a URL** (Google Calendar calls it *From URL*, Apple Calendar
   *New Calendar Subscription*) and paste the address.

Your calendar app decides how often it checks the feed, not LifeWell. Some check every few minutes, Google
Calendar can take hours, so a change you make in LifeWell may take a while to appear there.

## What does the feed contain?

The events in your [LifeWell calendar](../features/calendar-and-appointments.md), from 90 days ago to about
13 months ahead, up to 2,000 of them. Nothing else in your record is reachable through a feed, and private
notes are left out.

Times are wall-clock, as they are in LifeWell: *the dentist at 09:30* stays 09:30 wherever you are, rather
than moving when you change time zone.

## Is the address a secret?

Yes. Calendar apps cannot send a token, so the feed's credential is part of its address — anyone with the
address can read that calendar. That is why a feed is built to give away as little as possible:

- it reaches **one calendar**, read-only, and nothing else in your record;
- it is not an access token, and cannot be used on the [API](./api.md);
- you can see it again only under the same [10-minute rule](./authentication.md#can-i-see-a-token-again) as a
  token.

If an address has been shared somewhere it should not have been, revoke it and make a new one.

## How do I stop a feed?

Choose **Revoke** on the feed's row. From then on the address answers `404`, and your calendar app drops the
events the next time it checks. Make one feed for each app you subscribe from; then revoking one leaves the
others working.
