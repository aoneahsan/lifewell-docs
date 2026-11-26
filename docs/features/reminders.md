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
| Medication reminders | **On** | Inbox prompts for due, unmarked doses when you open your medication list on this device |
| Appointment reminders | **On** | Timed calendar events with a reminder set; Android can alert one hour before when notifications are allowed |
| Wellness reminders | **Off** | Eye-break, movement and posture schedules you choose on their pages |

The first two categories start on because they follow a medicine or event you chose to record. Wellness
breaks are optional interruptions and start off. Turning a category on does not create an event or a
daily reminder.

These are master switches. A single medicine can still have its own reminder turned off. The medication
switch controls whether this device asks LifeWell to create due-dose inbox prompts when you open the
medication list; it does not remove prompts already in the inbox.

## Quiet hours

Quiet hours are kept **on the device**, not on your account, and the panel says so where you can read it.
That is the right home rather than merely the convenient one: the same person may want device notifications
on the handset in their pocket and not on the tablet in the kitchen. Medicine due-dose prompts are in the
LifeWell inbox, not this device channel.

## On Android

Supported event and wellness reminders can be delivered by Android itself when you allow device notifications,
including while LifeWell is closed. Medicine due-dose prompts appear in the LifeWell inbox when a dose is due
and unmarked; they do not send a phone notification or email. The water tracker does not schedule drink reminders.

:::note[LifeWell never asks for the exact-alarm permission]
Android reserves exact alarms for alarm clocks and calendars. The notification plugin declares that
permission by default; LifeWell strips it from the build and schedules every reminder inexactly. A reminder
may therefore land a few minutes either side of its time. The alternative was asking for a permission Google
does not grant to an app of this kind, which would have failed review rather than working.
:::

## Push notifications

Push is a separate thing from a reminder, and it is worth keeping the two apart:

- **A device reminder** is scheduled from a supported event or wellness prompt. It can arrive while the app is closed.
- **A push notification** is a broadcast the LifeWell team sends through OneSignal. LifeWell does not
  automatically send account-event push messages.

Push is **receive-only**: LifeWell subscribes your device and routes the tap. It is switched on per device,
never automatically, and web push works only on the deployed site.

Permission alone does not mean the device is subscribed. The settings panel shows the subscription state;
on the web, subscription works only at the deployed LifeWell address. The team controls when a broadcast is
sent, so enabling push does not promise that a message will arrive on a schedule.

## What a reminder shows

The medicine due-dose prompt stays in the LifeWell inbox. A supported event reminder on Android can show its
title on the lock screen, where somebody nearby may read it. Your phone's notification settings can hide
content until it is unlocked; that control belongs to Android rather than to LifeWell.
