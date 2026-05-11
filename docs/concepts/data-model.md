---
title: Data model — Firestore collections and document shapes
description: How LifeWell organizes data in Firestore. The lifewell_ collection prefix, per-user security rules, document shapes for the main domains, indexing strategy.
keywords: [lifewell data model, firestore schema, lifewell collections, firestore security rules, document shape, ahsan mahmood]
sidebar_position: 2
---

# Data model

LifeWell stores user data in Cloud Firestore. Every collection follows a small set of shared rules — the `lifewell_` prefix, a `userId` field for ownership, ISO timestamps, and explicit per-document security — so the data layer reads the same way across 50+ feature domains. This page documents that shape and shows the main document types so you can predict what a given screen reads or writes.

If you're building integrations, this is the source-of-truth schema. If you're a user wondering "where does this go when I tap save?", this is the answer.

## Collection naming

Every Firestore collection starts with `lifewell_`. This prefix exists for one reason: the developer's Firebase account hosts multiple unrelated projects in the same `firestore.rules` file, and the prefix makes it impossible to accidentally widen a rule to a different project's collection.

Examples:

| Domain | Collection |
| --- | --- |
| Vitals | `lifewell_vitals` |
| Water tracking | `lifewell_water_log` |
| Medications | `lifewell_medications` |
| Memories | `lifewell_memories` |
| Notes | `lifewell_notes` |
| Family members | `lifewell_family_members` |
| Reminders | `lifewell_reminders` |
| Push tokens | `lifewell_push_tokens` |
| User preferences | `lifewell_user_preferences` |
| Communities | `lifewell_communities` |
| Chats | `lifewell_chats` |
| Achievements | `lifewell_achievements` |

The full list lives in `firestore.indexes.json` and `firestore.rules` in the source repo. Roughly 50 collections at the time of writing (2026-05-11).

## Every document has these fields

| Field | Type | Why |
| --- | --- | --- |
| `id` | string (auto) | Firestore-generated document ID |
| `userId` | string | The Firebase Auth UID of the owner. Used by every Security Rule. |
| `createdAt` | Firestore Timestamp | Server-side timestamp on insert |
| `updatedAt` | Firestore Timestamp | Server-side timestamp on every update |
| `_search` (selected collections) | string | Lowercased denormalized string for fast fuzzy search |

The `userId` field is what makes everything per-user-private. Every Security Rule reads:

```
allow read, write: if request.auth != null
                    && request.auth.uid == resource.data.userId;
```

A user is allowed to read or write a document only when their Firebase Auth UID matches the `userId` field stored on that document. If `userId` is missing or doesn't match, the request is denied — even for the developer.

## Sample document shapes

The shapes below are simplified for readability — the production types in `src/types/` include more fields for analytics and admin tooling. They illustrate the pattern, not every column.

### `lifewell_vitals`

```ts
{
  id: 'v_abc123',
  userId: 'firebase_auth_uid',
  type: 'blood_pressure' | 'blood_sugar' | 'weight' | 'bmi' | 'height',
  value: {
    systolic?: number,
    diastolic?: number,
    pulse?: number,
    fasting?: boolean,
    weightKg?: number,
    heightCm?: number,
  },
  unit: 'mmHg' | 'mg/dl' | 'mmol/L' | 'kg' | 'lb' | 'cm' | 'ft-in',
  measuredAt: Timestamp,    // when the user took the reading
  notes?: string,
  tags?: string[],
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### `lifewell_water_log`

```ts
{
  id: 'w_xyz789',
  userId: 'firebase_auth_uid',
  amountMl: 250,             // explicit ml; default glass = 250
  loggedAt: Timestamp,
  source: 'manual' | 'reminder',
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### `lifewell_medications`

```ts
{
  id: 'm_qwe456',
  userId: 'firebase_auth_uid',
  name: 'Metformin',
  dosage: { amount: 500, unit: 'mg' },
  schedule: {
    times: ['08:00', '20:00'],
    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    startsOn: Timestamp,
    endsOn?: Timestamp,
  },
  remindersEnabled: true,
  notes?: string,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### `lifewell_memories`

```ts
{
  id: 'mem_lkj321',
  userId: 'firebase_auth_uid',
  title: string,
  body: string,            // rich text
  mediaFileIds: string[],  // pointers into FilesHub
  location?: { lat: number, lng: number, label?: string },
  capturedAt: Timestamp,
  visibility: 'private' | 'family',
  sharedWith: string[],    // userIds with explicit access
  tags?: string[],
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### `lifewell_family_members`

```ts
{
  id: 'fm_pqr987',
  userId: 'firebase_auth_uid',       // who owns this family-tree entry
  personId: 'firebase_auth_uid',     // the represented person (null if non-LifeWell)
  displayName: string,
  relation: 'parent' | 'child' | 'sibling' | 'spouse' | 'cousin' | ...,
  dateOfBirth?: Timestamp,
  photoFileId?: string,
  notes?: string,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

## Indexing

Firestore requires composite indexes for any query that filters on one field and orders by another. LifeWell's `firestore.indexes.json` declares roughly 40 composite indexes, one per common screen query. Examples:

| Query | Index on |
| --- | --- |
| Today's water entries for a user | `(userId, loggedAt DESC)` |
| Recent vitals of a specific type | `(userId, type, measuredAt DESC)` |
| Memories visible to family | `(userId, visibility, capturedAt DESC)` |
| Notes in a folder | `(userId, folderId, updatedAt DESC)` |
| Chat messages in a room | `(roomId, createdAt ASC)` |

Indexes are deployed via `firebase deploy --only firestore:indexes`. Never `firebase deploy --only firestore` (that command also deploys rules and can drop indexes that aren't currently referenced in the local file).

## Reads, writes, and offline

Every read in LifeWell goes through the Firebase SDK, which caches results locally (IndexedDB on the web, native on Android). Writes that happen while offline get queued and replayed on reconnect. This is the foundation of [offline-first design](./offline-first-design).

Some collections are deliberately small (preferences, family members) so that the full set fits in the offline cache for instant reads. Others are growth-unbounded (vitals, water_log, chats) and are queried by recent window only.

## What does NOT live in Firestore

| Data type | Where it lives | Why |
| --- | --- | --- |
| Memory and avatar media | FilesHub object storage | Firestore document size limit (~1 MB) makes it the wrong place for binary blobs |
| Theme + UI preferences (offline copy) | Capacitor Preferences (native KV / localStorage) | Survives offline with zero round-trip |
| Auth credentials | Firebase Authentication service | Out of scope for Firestore |
| Push delivery state | OneSignal (free tier) | Push routing is OneSignal's job; we only store the device token in `lifewell_push_tokens` |
| Calculator inputs (BMI, BMR, etc.) | Browser only — never sent anywhere | No network call required; nothing to persist unless the user explicitly saves a result |

## Frequently asked

**Can the developer read my documents?**
No. Firestore Security Rules block the developer (signed in as a different user) the same way they block any other user. The only exception is when you explicitly request a data export via email — in that case I run the admin SDK against your specific UID and send you a JSON dump.

**Why the `lifewell_` prefix?**
The Firebase project hosts more than one product. A consistent prefix per project makes Security Rules read at a glance: "this rule applies to LifeWell collections only." It also makes accidental cross-project rule changes catastrophically obvious during code review.

**What happens if a write fails partway through a transaction?**
The Firebase SDK retries with exponential backoff for transient errors. If the network is genuinely offline, the write queues in IndexedDB and replays on reconnect. Document-level conflicts use last-writer-wins, which is the right semantic for personal tracking (you don't have two devices co-authoring a single vital).

**Does LifeWell use Firestore Bundles or only direct SDK calls?**
Direct SDK calls. Bundles are useful for serving static reference data (e.g. a fixed list of countries); LifeWell's data is all per-user and dynamic, so bundles wouldn't buy anything.

**Where do I find the actual `firestore.rules` file?**
The application source is private. The published rules are deployed under the `lifewell-prod` Firebase project; you can request a redacted copy via [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) for security review. For the public docs, the rule pattern is summarized above.

## Where to read next

- [Privacy & security](./privacy-and-security) — the data-flow narrative for non-developers.
- [Architecture](./architecture) — how Firestore fits into the wider system.
- [Offline-first design](./offline-first-design) — how Firestore handles disconnection.
- [Third-party integrations](/docs/reference/third-party-integrations) — Firebase + Cloudflare Workers + OneSignal + FilesHub + Sentry + Amplitude.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
