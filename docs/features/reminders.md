---
title: Reminders
description: What LifeWell may send you, when, and on which device — three master switches, quiet hours, and why the app never asks Android for an exact alarm.
keywords: [lifewell reminders, medication reminder, appointment reminder, quiet hours, android notifications]
tags: [features, everyday]
sidebar_position: 2
---

# Reminders

`/profile/reminders`, and the same panel under `/settings`.

## The three master switches

| Switch | Default | What it covers |
|---|---|---|
| Medication reminders | **On** | Every medicine you asked to be reminded about |
| Appointment reminders | **On** | Calendar events with a reminder set |
| Nudge me if I have not logged by 9pm | **Off** | The day-with-nothing-in-it prompt |

The asymmetry is the product. Being reminded to take a tablet is why you entered it in the first place;
being nudged for not writing something down is the app asking for attention it was not offered, so it is
opted into rather than out of.

These are master switches. A single medicine can still have its own reminder turned off, and turning the
master off silences every medicine at once.

## Quiet hours

Quiet hours are kept **on the device**, not on your account, and the panel says so where you can read it.
That is the right home rather than merely the convenient one: the same person may want medication reminders
on the handset in their pocket and not on the tablet in the kitchen.

## On Android

Reminders are delivered by Android itself, so one arrives whether or not LifeWell is open.

:::note[LifeWell never asks for the exact-alarm permission]
Android reserves exact alarms for alarm clocks and calendars. The notification plugin declares that
permission by default; LifeWell strips it from the build and schedules every reminder inexactly. A reminder
may therefore land a few minutes either side of its time. The alternative was asking for a permission Google
does not grant to an app of this kind, which would have failed review rather than working.
:::

## Push notifications

Push is a separate thing from a reminder, and it is worth keeping the two apart:

- **A reminder** is scheduled by your own device from something you entered. It works offline.
- **A push notification** comes from us — an announcement, or something that happened on your account.

Push is **receive-only**: LifeWell subscribes your device and routes the tap. It is switched on per device,
never automatically, and web push works only on the deployed site.

:::warning[Push is not built yet]
The subscription plumbing and the app identifier are in place; the service that uses them is not written.
Reminders work today. Push notifications do not arrive yet, on any platform.
:::

## What a reminder shows

A medication reminder is titled with the medicine and its strength; an appointment reminder is titled with
the event. That is what makes it useful and it is also what makes it readable on a lock screen by anybody
standing nearby. If that matters to you, your phone's own notification settings can hide the content of a
notification until it is unlocked — that control belongs to Android rather than to LifeWell.
