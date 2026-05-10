---
title: Privacy and security in LifeWell — what data lives where
description: Honest data flow for LifeWell. Per-user Firestore rules, FilesHub storage, no third-party data sale, client-side calculators, Capacitor permission hygiene. What does and doesn't leave your device.
keywords: [lifewell privacy, lifewell security, firestore security rules, fileshub, capacitor permissions, gdpr, ahsan mahmood]
sidebar_position: 3
---

# Privacy and security

LifeWell stores per-user health and personal data, so privacy needs to be more than a marketing line. This page is the honest data-flow document: where each kind of data lives, what touches the network, what doesn't, and what permissions the mobile app requests with what fallback. If something below ever stops being true, it's a bug — please tell me at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## What we don't do

Before describing what LifeWell does, here's what it doesn't do:

- **No data sales.** LifeWell never sells, rents, or licenses your data to advertisers, brokers, insurers, or any third party.
- **No advertising profile.** LifeWell does not build cross-app or cross-site profiles. There are no third-party ad pixels on the app.
- **No clinician access by the developer.** I (Ahsan) cannot read your medical records, vitals, period log, pregnancy log, family tree, or any other tracked data. Firestore Security Rules block it.
- **No "soft archive" after deletion.** When you delete an entry or your account, the data is gone — no backup the developer can restore.
- **No end-to-end encryption claim.** LifeWell is NOT a zero-knowledge product. Your data is encrypted at rest by Firestore and in transit by TLS, but Google (the Firestore operator) holds the keys at rest. If your threat model requires that no operator ever has key access, LifeWell isn't the right tool.

If a feature appears to violate any of these, that's the bug. Report it.

## Where each kind of data lives

| Data type | Storage | Accessible to | Notes |
| --- | --- | --- | --- |
| Account credentials | Firebase Authentication (Google) | Firebase Auth service, locked to your provider | We never see your password. Google/Apple sign-in tokens are validated by Firebase. |
| Tracking history (vitals, water, medications, mood, etc.) | Firestore — `lifewell_*` collections | Only the user matching `request.auth.uid == userId` | Per-document Security Rules; the developer can't read |
| Family tree, journeys, location pins | Firestore | Only the user (and shared family members on explicit invite) | Sharing is explicit per-document; no auto-share |
| Memories, scrapbook, notes | Firestore | Only the user | Optional Drive sync exports media to your own Drive |
| Memory / avatar media (images) | FilesHub (https://fileshub.zaions.com) | Only the user via signed URLs | Files are deleted when you delete the parent record |
| Calculators (BMI, BMR, etc.) | Browser only | Nobody — input is never sent | Calculators run client-side, no network call |
| Theme + UI preferences | Capacitor Preferences (local) + Firestore mirror | Only the user | Local cache survives offline; remote sync for cross-device |
| Reminders | Firestore + OneSignal (delivery only) | Only the user | OneSignal stores delivery metadata; not the reminder content |
| Push notification tokens | Firestore + OneSignal | Only the user | Used only to deliver your own reminders |
| Logs (errors, perf) | Sentry (errors), Amplitude (events) | Aggregated, no PII attached | Both gracefully no-op if env keys aren't set |

## How Firestore Security Rules protect you

Every collection in LifeWell follows the same pattern: documents include a `userId` field, and Security Rules permit read/write only when the requesting auth user matches that field. A simplified example:

```
match /lifewell_vitals/{docId} {
  allow read, write: if request.auth != null
                      && request.auth.uid == resource.data.userId;
  allow create: if request.auth != null
                 && request.auth.uid == request.resource.data.userId;
}
```

This means:

- A logged-out user can read nothing.
- A logged-in user can read only their own documents.
- A user can never write a document that claims to belong to a different user.
- The developer (signed in as a different user) cannot read your data either.

The actual rules in `firestore.rules` cover ~50 collections and are versioned in the source repo. They're deployed via `firebase deploy --only firestore:indexes,firestore:rules` and audited on every release.

## Capacitor permission hygiene (Android)

LifeWell on Android requests sensitive permissions only when a feature actually needs them, with non-permission fallbacks. The full list and fallbacks:

| Permission | When prompted | Fallback if denied |
| --- | --- | --- |
| Camera | "Take photo" on avatar / memory upload | Use gallery picker instead |
| Photos / media | "Choose from gallery" | None needed (system picker) |
| Notifications | When you enable a reminder | Reminder still saves; just no push delivery |
| Location (optional) | When geo-tagging a memory or opening a map view | Manual map placement |
| Calendar | Only if you enable wellness-event sync | Manual entry only |

LifeWell does NOT request: contacts, SMS, call log, body sensors, activity recognition. You can verify this in **Android Settings → Apps → LifeWell → Permissions**.

The 2026-04-18 Play Console rejection happened because Capacitor's `@capacitor/camera` plugin auto-injected the CAMERA permission into the merged AndroidManifest, even though we only prompt at the moment of "Take photo." That now appears in the privacy policy, the Data Safety form, and this page. Future plugin additions go through a merged-manifest audit before any release.

## Browser extension privacy

The [browser extension](/docs/extension/overview) is the most-restricted surface. Per Chrome Web Store policy:

- The extension does not request `<all_urls>` host permissions.
- It never injects content scripts into your tabs.
- It never reads page content from any website.
- It never loads remote auth scripts (no Firebase Auth SDK, no `gapi.js`, no `signInWithPopup`).
- Sign-in goes through Chrome's built-in Identity API; the access token is sent directly to Firestore via REST.
- Document ownership is verified by `userId` field, not `request.auth.uid` (Chrome Identity returns access tokens, not Firebase auth credentials).

Permissions: `storage`, `alarms`, `notifications`, `identity`. Nothing else.

You can verify the extension's full permission list in `chrome://extensions` → LifeWell → "Details" → "Permissions."

## Account deletion

You can delete your LifeWell account at any time from **Profile → Security → Delete account**. The flow:

1. You confirm in-app and re-enter your password (or re-authenticate via Google / Apple).
2. The deletion is queued and reversible for 30 days. During that window, sign back in to cancel.
3. After 30 days, LifeWell:
   - Deletes every Firestore document where `userId` matches your UID (including vitals, medications, memories, notes, family entries, reminders, preferences).
   - Deletes every FilesHub file owned by your account (avatars, memory media).
   - Removes your push notification tokens from OneSignal.
   - Disables your Firebase Auth record.
4. After deletion completes, your data is unrecoverable. No backup the developer can restore.

If you want a copy of your data before deletion, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) — you'll get a JSON export of every document tagged with your `userId`.

## What's encrypted

| Layer | Encryption |
| --- | --- |
| In transit (everywhere) | TLS 1.2+ |
| At rest (Firestore) | Google-managed envelope encryption |
| At rest (FilesHub) | Server-side encryption at the storage layer |
| At rest (Capacitor Preferences on Android) | Android Keystore-backed (when device has a screen lock) |
| In Cloudflare Workers | Workers Secrets (encrypted, not exposed to logs) |

LifeWell does NOT add an additional client-side encryption layer. If your threat model needs end-to-end encryption (so the operator can't ever decrypt), LifeWell isn't the right product — the trade-off would be losing search, analytics across vitals, and shared family features.

## Frequently asked

**Can the developer read my data?**
No, not under normal operation. Firestore Security Rules block read access for any user other than the data owner. The developer (signed in as a different user) gets the same denial as a stranger. There is one exception: if you email asking for a data export or to fix a stuck account, I can use the Firebase admin SDK to read your specific records — but only with your explicit request.

**What about Google? Doesn't Firebase mean Google can read my data?**
Google (the Firestore operator) controls the at-rest encryption keys for Firestore. Google's policies say they don't read your application data, but the technical capability exists at their layer. If that's a deal-breaker for your threat model, LifeWell isn't the right product.

**Why Amplitude and Sentry?**
Amplitude tracks aggregate event-level analytics (e.g. "users who open the BMI calculator within 7 days of signup are 3× more likely to log a vital next week"). It's used for product-direction decisions. Sentry tracks runtime errors so I can fix bugs. Both are configured to scrub PII (no email, no name, no UID in event payloads). Both gracefully no-op if their env keys aren't set, so users on a self-hosted LifeWell variant get neither.

**Does LifeWell comply with GDPR / CCPA?**
LifeWell honors the rights both regulations cover: right to access (data export on request), right to erasure (account deletion), right to data portability (JSON export), right to object to processing. It does not have a regional sales channel that would trigger sale-of-data CCPA provisions because no data is sold.

**Will this page change?**
Yes — every time the data model or permission set changes, this page gets updated and the `Last updated` date bumps. The `Author` line always says Ahsan Mahmood, since I'm the one accountable for what it says.

## Where to read next

- [Data model](/docs/concepts/data-model) — exhaustive Firestore collection list and document shapes.
- [About the developer](/docs/about/about-the-developer) — who's behind LifeWell and how to reach me.
- [Architecture](./architecture) — high-level shape of the system.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
