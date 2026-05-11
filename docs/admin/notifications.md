---
title: Admin notifications — platform-wide announcements via OneSignal
description: The LifeWell admin Notifications page sends platform-wide announcements to users via OneSignal — service status, new feature launches, security advisories.
keywords: [admin notifications, platform announcement, push notification, service status, security advisory, ahsan mahmood]
sidebar_position: 5
---

# Admin notifications

The **admin Notifications** page is where platform admins send announcements to users — service-status updates, new-feature launches, security advisories, or important policy changes. Notifications fire through [OneSignal](/docs/mobile/push-notifications) (push) and / or in-app banners and / or email, depending on the target audience and urgency.

This page is used **sparingly**. Sending too many platform notifications trains users to ignore them.

## What admins send

| Notification type | Use |
| --- | --- |
| **Service-status alert** | "Sync is temporarily slow — investigating" |
| **Feature launch** | "Memory maps just launched — try it out" |
| **Security advisory** | "We've fixed a vulnerability — please update the app" |
| **Policy change** | "Privacy policy updated — review and accept" |
| **Survey invitation** | "Help us improve LifeWell — 5-minute survey" (opt-in only) |
| **Outage post-mortem** | "Yesterday's brief outage explained" |

## Configuring a notification

The form asks:

| Field | Notes |
| --- | --- |
| **Audience** | All users / premium only / free only / specific country / opt-in to surveys |
| **Channels** | Push / in-app banner / email (one or more) |
| **Priority** | Low / normal / high (high bypasses quiet hours) |
| **Title** | Short headline |
| **Body** | Brief description (push limit ~120 chars; in-app longer) |
| **Action** | Optional CTA — link to docs / settings / specific page |
| **Schedule** | Now / specific time / deferred |

Preview is mandatory — see exactly what the user sees before sending.

## Confirmation flow

For high-volume notifications:

1. Configure as above.
2. Tap **Preview** to see the rendered notification.
3. Tap **Send** — system prompts for confirmation.
4. If audience is large (>10,000 users), a **second admin must approve** before the send fires.
5. After approval, the send goes to OneSignal's API.
6. Delivery typically completes within minutes.

The dual-admin check on large sends prevents accidental "send to everyone" mistakes.

## Per-channel routing

- **Push**: via OneSignal → FCM (Android) + APNs (iOS) + browser push.
- **In-app banner**: rendered on the dashboard on next page load.
- **Email**: via the email provider (separate from LifeWell's core stack).

Users can opt-out of marketing notifications via Preferences. Critical security and policy notifications can't be opted-out (they're delivered regardless).

## What admins should NOT send

- **Marketing pressure** ("upgrade to premium now!" — annoying).
- **Engagement-baiting** ("you haven't opened LifeWell in 3 days").
- **Misinformation** about health topics — that's a community-admin issue, not an admin notification.
- **Cross-promotion** for unrelated products.

The discipline matters: every notification trains users on whether to take future ones seriously.

## Audit log

Every notification logs:

- Admin who sent.
- Timestamp.
- Audience size.
- Channels used.
- Content snapshot.

Anyone can query the audit log via the dashboard.

## Delivery metrics

After sending, the page shows:

- **Sent count** (target audience size).
- **Delivered count** (OneSignal delivery success).
- **Opened count** (users who tapped the notification).
- **Action count** (users who tapped the CTA).

These help calibrate future sends; they're not for ad-style A/B testing.

## What this page is not

- **Not a marketing automation system.** No multi-step drip campaigns.
- **Not a user-segmentation engine** beyond the few coarse audience filters.
- **Not personalised.** Same content to everyone in the chosen audience.

## Where to read next

- [Push notifications](/docs/mobile/push-notifications) — the user-side delivery.
- [Reminders](/docs/profile-and-settings/reminders) — user-set reminders (distinct from platform notifications).

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
