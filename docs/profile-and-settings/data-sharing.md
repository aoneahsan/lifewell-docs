---
title: Data sharing — what you've shared, with whom, and how to revoke
description: LifeWell data sharing is opt-in per record. Share a memory, a journey, a vital trend with a specific family member. See active shares, share-links, and revoke any of them in one tap.
keywords: [lifewell sharing, share data, family share, share link, revoke share, per record sharing, ahsan mahmood]
sidebar_position: 5
---

# Data sharing

Sharing in LifeWell is opt-in per record. Nothing leaves your account by default. When you choose to share — a single memory with a parent, a pregnancy journey with your partner, a week of vitals with your doctor — you do it explicitly, the recipient sees only the records you picked, and you can revoke any share at any time. This page covers the three sharing models, where to manage them, and what the recipient sees.

Sharing settings live under **Profile → Data sharing**.

## The three sharing models

LifeWell supports three distinct sharing models, each with its own use case.

### Model 1 — Family-member sharing (account-to-account)

You share specific records with another LifeWell user. The recipient must have a LifeWell account, and they appear as a "family member" or "connection" in your address book.

| Sharable | Example use case |
| --- | --- |
| A single memory | Show grandma a photo of your kid's first steps |
| A journey (e.g. pregnancy) | Let your partner follow every entry |
| A medication list | Co-manage refills with a caregiver |
| A vitals trend window | Family doctor reviews 30 days of BP |
| A baby's growth log | Co-parent sees every weigh-in |

Each share is per-record, not per-domain. Sharing one memory with your spouse doesn't share every memory; sharing this week's vitals doesn't share next week's automatically.

### Model 2 — Share-link (anyone with the link)

A share-link is a single URL that anyone can open to view a specific record. No LifeWell account required for the viewer. Useful for:

- Sending a blood-donor card to a hospital.
- Sending a medication summary to a pharmacist.
- Sharing a memory page with a relative who doesn't use LifeWell.

Share-links are time-bounded (default 7 days, configurable up to 30) and revocable at any time. Each link has a unique random token in the URL, so guessing isn't viable; the link itself is the credential.

### Model 3 — Public profile (off by default)

If you opt in, a small subset of your profile becomes viewable at a public URL: display name, avatar, achievements you've made public, blood-donor card if you set yourself as a donor. Useful for:

- Listing yourself in a community blood-donor registry.
- Sharing your achievements on social profiles.
- A "let people verify I'm a real account" trust signal.

Public profile is **off by default**. Turning it on is a single toggle under **Data sharing → Public profile**, with a confirmation step that lists exactly what becomes visible. Tracked data (vitals, medications, periods, etc.) is NEVER part of the public profile, even if it's part of an achievement.

## What sharing does NOT do

- **No silent shares.** Every share requires an explicit action from you. No background data flow ever.
- **No "share everything" toggle.** There is no master switch to share your whole account with another user. Every share is record-by-record by design — friction here is a feature, not a bug.
- **No re-sharing.** A recipient cannot re-share what you shared with them. The Firestore Security Rules check `sharedWith` against the requester's UID; chaining shares fails the rule.
- **No exports through sharing.** Sharing is view-only. The recipient sees your data in their LifeWell UI but cannot bulk-download it. If you want to give someone a file copy, use a data export via email request.

## Where active shares show up

Under **Profile → Data sharing → Active shares**, you see a list of every share you've ever created that's still active. Each row shows:

- The record type (memory, journey, vitals window, medication list, etc.).
- Who you shared with (display name + avatar, or "Share-link" for Model 2).
- When you shared it.
- When it expires (for share-links) or "never" (for family shares).
- A **Revoke** button.

Tap **Revoke** and the share ends immediately. The recipient's next attempt to read the record gets a Firestore-rules denial. Already-loaded views may stay visible until refresh, but the data is no longer accessible.

## How the Firestore rules enforce sharing

For records that support sharing (e.g. memories), the document includes a `sharedWith: string[]` field that lists UIDs with read access. The Security Rule reads:

```
allow read: if request.auth != null
             && (request.auth.uid == resource.data.userId
                 || request.auth.uid in resource.data.sharedWith);
```

Writes are still owner-only:

```
allow write: if request.auth != null
              && request.auth.uid == resource.data.userId;
```

A recipient with a share can read the record (it appears in their family member's view inside their LifeWell app) but can never edit, delete, or further share it. Revoking removes their UID from `sharedWith`; the next read attempt fails.

Share-links work slightly differently — they're backed by a temporary Cloudflare Worker endpoint that validates the link token and proxies a single-record read on the viewer's behalf. Worker rate-limiting prevents brute-forcing tokens.

## Sharing with a non-LifeWell user

Two paths:

1. **Share-link** (Model 2) — generate a link, send via email / WhatsApp / wherever. They open the link in any browser, no sign-up required. Expires after the duration you set.
2. **Invite them to LifeWell** — under **Family tree**, you can add a person and invite them via email. If they sign up, the family link auto-converts to a Model 1 share.

Most one-off sharing should use a share-link. Ongoing sharing (a partner, a caregiver, a co-parent) is worth the LifeWell invite because Model 1 is more granular and never expires.

## Audit log

Every share creation, modification, and revocation is logged in a per-user `lifewell_share_audit` collection. You can review the audit log under **Profile → Data sharing → Audit log**. The audit log includes:

- Timestamp.
- The record that was shared.
- The recipient (UID or share-link token).
- The action (create / modify / revoke / expire).

The audit log is read-only — you can't edit entries to cover tracks. If the developer needs to investigate a sharing complaint (e.g. "this record was shared without my consent"), the audit log is the source of truth.

## Frequently asked

**Can I share a record with two people at once?**
Yes. The `sharedWith` array can hold multiple UIDs. From the record's "Share" dialog, add each recipient individually.

**Can the recipient see who else I shared the record with?**
No. The `sharedWith` list is visible only to the owner. Each recipient sees the record itself but no information about other recipients.

**What if my share-link is intercepted?**
Anyone holding the link can open it during its validity window. Treat share-links like email-based magic links: send them through channels you trust, and revoke immediately if you suspect interception.

**Can I share an entire domain (all my memories) in one tap?**
No, by design. The per-record friction is intentional — it makes "I'll just share my whole tracking history with X" something you have to do deliberately, record by record. If you need to give a clinician access to your full vitals history, a one-time data export via email is the better path.

**Does the recipient get a notification when I share?**
For Model 1 (family-member sharing): yes, they get an in-app notification (and a push notification if they have it enabled). For Model 2 (share-links): no — you control how the link reaches them.

**Will sharing show in my wellness score or achievements?**
No. Sharing is a privacy/UX feature, not a tracking metric. There are no achievements for "shared 10 memories" or similar.

## Where to read next

- [Privacy & security](/docs/concepts/privacy-and-security) — the wider privacy posture.
- [Profile overview](./profile-overview) — the rest of the profile area.
- [Family overview](/docs/family/overview) — how family connections work.
- [Memories](/docs/memories-and-notes/memories) — share-link generation for a memory.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
