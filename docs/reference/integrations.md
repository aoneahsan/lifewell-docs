---
title: Third-party services
description: Every outside service LifeWell talks to, what it is for, what it receives, and what happens when its key is absent.
keywords: [lifewell integrations, third party services, google drive, sentry, amplitude, clarity, onesignal, turnstile]
tags: [reference, privacy]
sidebar_position: 3
---

# Third-party services

Everything LifeWell talks to that is not LifeWell. **Every one of them is switched off when its key is
absent** — an unconfigured service is skipped entirely rather than failing at runtime.

## Your record

| Service | What it is for | What it receives |
|---|---|---|
| **Supabase** | The database and sign-in | Everything you record. It is the store |
| **Google account** | Sign-in | Your email address and name, from Google to us |
| **Google Drive** | Your photos and files | The files themselves, in **your** Drive, under a scope that reaches only what LifeWell created |
| **Google Maps** | The map tiles behind [Maps](../features/maps.md) | The area being displayed |

Sign-in is Google only, so **we never see or store a password**.

## Telling you things

| Service | What it is for | State |
|---|---|---|
| **OneSignal** | Push notifications | Subscription is wired; the service that sends is not written. **No push arrives yet** |
| **Google Play Billing** | Subscriptions on Android | Built, tested against recorded responses, and **not switched on**. See [Plans](../plans.md#on-android) |

Push is **receive-only** by design: the app subscribes a device and routes a tap. Reminders are a different
thing entirely — they are scheduled by your own device and work offline.

## How we know the product works

| Service | What it is for | What it receives |
|---|---|---|
| **Google Analytics 4** | Which pages get used | A page path and an event name |
| **Amplitude** | Which actions get taken | An event name and allowlisted properties |
| **Microsoft Clarity** | Session replay, to find where the interface fails | A recording of the interface, with sensitive elements marked for masking |
| **Sentry** | Errors | The failure, the screen and the release, with identifiers redacted |

:::note[All four run, and Firebase Analytics is not banned]
An earlier version of this documentation stated that Firebase Analytics was forbidden and had been replaced by
Sentry and Amplitude. That was wrong on both counts. Google Analytics 4 **is** the Firebase analytics property
— one property, two SDKs — and it runs **alongside** Amplitude, Clarity and Sentry. The four together are the
stack.
:::

**None of them carries the contents of your record.** An analytics property survives only if the event's
registry declares it and the value passes a type guard, so a sentence, an email address or a measurement
cannot pass. The scrubbers are tested by pushing real identifiers through them and failing if any survives.

## Keeping the forms usable

| Service | What it is for |
|---|---|
| **Cloudflare Turnstile** | A bot check on the contact and get-involved forms |

Turnstile is a challenge rather than a tracker, and it is only on the two public forms.

## Files and outbound email

File storage and the small number of emails LifeWell sends — a welcome message, and the confirmation when you
ask for your account to be deleted — run on a private service the developer operates rather than on a
third-party email platform.

There is no user-to-user email, no newsletter, and no marketing send. Your name and address are used to
deliver the message and nothing else.

## Over-the-air updates

**Planned, not integrated.** No update package is in the build and nothing is fetched or applied. See
[Android](../platforms/android.md#over-the-air-updates).

## What is deliberately absent

- **No advertising network**, and no third-party ad code.
- **No data broker, and no sale of anything.**
- **No Firebase backend.** The 2.x app ran on Google's document database; 3.0.0 does not, and one of the
  defects this rebuild fixes is the read-quota exhaustion that took the 2.x app down for a day.
- **No external calendar.** Nothing is read from or written to Google Calendar or any other.
