---
title: Offline usage — local-first writes with Firestore sync
description: LifeWell on mobile is offline-first — every log writes locally first via Capacitor Preferences + Firestore offline cache, then syncs when network returns.
keywords: [offline first mobile, capacitor preferences, firestore offline, local first, sync on reconnect, ahsan mahmood]
sidebar_position: 5
---

# Offline usage (mobile)

LifeWell's mobile apps are **offline-first**. Every log you create — water entry, medication dose, mood, memory, note — writes to local storage first and reaches Firestore when network connectivity is available. The pattern works on the web app too, but on mobile (especially Android with consistent local storage), the offline guarantees are stronger.

This page covers what works offline, what doesn't, how sync resumes, and the architecture.

## What works offline

| Feature | Offline-capable | Notes |
| --- | --- | --- |
| Log water | Yes | Persists locally, syncs on reconnect |
| Log vitals | Yes | Same pattern |
| Log medications | Yes | Same pattern |
| Log sleep / mood / nutrition | Yes | Same pattern |
| Log baby events | Yes | Feeding, diapers, sleep, milestones |
| View past entries | Yes | Cached locally for offline reading |
| Create memory metadata | Yes | Metadata persists; media upload queued |
| Create note (text / checklist) | Yes | Persists locally |
| Create note (audio / picture) | Queued | Media uploads when online |
| Fire local notifications | Yes | Doesn't need network |
| Read profile / settings | Yes | Cached |
| Browse community feed | Cached | Newest posts need network |
| Send chat message | Queued | Sends on reconnect |
| Update theme / preferences | Yes | Local + syncs |
| Run calculators / timers | Yes | All client-side |

## What does NOT work offline

| Feature | Why not |
| --- | --- |
| Initial sign-in | OAuth requires network |
| Cross-device sync | Sync needs network |
| Push notifications received | Requires network for delivery |
| Photo / video uploads | Need Google Drive connectivity |
| Community posting | Requires network |
| Chat receiving (new messages) | Requires network |
| Cloud Functions calls (rare) | Requires network |
| Consultation booking | Requires network |

The architecture prioritises **personal data entry** (the most-used flows) for offline support. Social, cross-device, and media-upload flows degrade gracefully when offline.

## The storage stack

LifeWell mobile persistence has three layers:

| Layer | What | Use |
| --- | --- | --- |
| **Capacitor Preferences** | Key-value store backed by `SharedPreferences` (Android) / `UserDefaults` (iOS) | App settings, auth token, UI state |
| **Firestore offline cache** | IndexedDB (web) / SQLite (mobile) — Firestore's built-in offline persistence | Document reads / writes with automatic sync |
| **FileSystem / IndexedDB** | Capacitor filesystem + browser IndexedDB | Larger blobs (cached images, attached files) |

The split is intentional: small settings via Preferences (fast, key-value), structured data via Firestore (queryable, syncable), large blobs via filesystem (size-efficient).

## Write flow when offline

1. You tap "Log 250 ml water" on a flight (offline).
2. The Zustand water store adds the entry, persisted to Capacitor Preferences.
3. The Firestore SDK queues the write to its offline cache.
4. The UI updates immediately — today's count goes up by 250 ml.
5. The page shows a tiny "offline" indicator if connectivity is lost.

## Sync flow when network returns

1. Device detects connectivity (via Capacitor `@capacitor/network` + the Firestore SDK's own connection monitoring).
2. Firestore SDK drains its offline-write queue.
3. Each queued write replays to Firestore.
4. Server-side timestamps and IDs reconcile.
5. The Zustand store updates with reconciled IDs.
6. Other devices signed into the same account receive the new entries via their Firestore snapshot listeners (typically within seconds of write completion).

The reconciliation is essentially transparent. Most users don't notice anything beyond the offline indicator disappearing.

## Conflict resolution

What if you log conflicting data on two devices while both are offline?

Firestore's offline mode handles this via **last-write-wins** at the document level — the most recent write timestamp prevails. For LifeWell:

- **Adding new records** (a new water log, a new memory): both records survive — they have different IDs, so no conflict.
- **Editing an existing record** (changing the amount of an existing water log): the most recent edit wins. The earlier device's edit is lost.
- **Deleting a record**: deletions propagate; if Device A deletes while Device B edits, the deletion wins (the record is gone everywhere).

For the LifeWell use case (personal-data tracking, not collaborative editing), last-write-wins is correct. No CRDTs or complex merge logic needed.

## Offline cache size

The Firestore offline cache and Capacitor Preferences combined typically use:

- **10–50 MB** for a typical user with 6–12 months of activity.
- **100+ MB** for heavy users with many memories or long-term tracking.
- **500 MB+** uncommon — usually photo-cache rather than data.

Mobile app sizes (including cache) typically stay under 200 MB total. Users can clear cache via OS Settings → LifeWell → Storage.

## Photo and media offline

For memory media (photos, videos, audio):

- **Capture** the media — saved to device cache immediately.
- **Memory metadata** writes to Firestore offline queue.
- **Media upload** to Google Drive queues until online.
- When online, the upload runs and the memory's `media[]` array gets the Drive file IDs.

So you can create a memory with photos while offline. The memory is visible; the photos show "uploading" placeholders until the actual upload completes.

## Local notifications work offline

A key reliability benefit:

- **Local notifications** (water reminders, medication doses, sleep reminders) are scheduled on the device via `AlarmManager` (Android) / `UNUserNotificationCenter` (iOS).
- They fire even when the device has no network.
- Push notifications (from servers) need network — they don't deliver if offline.

So your daily reminders work on a flight, a remote camping trip, anywhere offline.

## Browser offline (web app)

The web app uses Firestore's offline persistence too — same write-locally, sync-on-reconnect pattern. The differences from mobile:

- **No local notifications** — web reminders only fire when the tab is open.
- **IndexedDB has stricter quotas** (a few hundred MB typically; browser-dependent).
- **Service workers can persist some state** but PWA installation is required for full offline.

For heavy offline use (international travel, remote work), the mobile app is more reliable than the web app on mobile browsers.

## Diagnosing offline issues

| Issue | Cause | Fix |
| --- | --- | --- |
| Entry I logged offline isn't on my other device | Sync hasn't run since device came online | Open the offline device — sync fires within seconds |
| App shows "offline" but I have wifi | Captive portal blocking outbound traffic | Try mobile data or different wifi |
| Photos stuck at "uploading" | Google Drive token expired | Re-sign-in to Drive in Settings |
| Old entries missing | Cache evicted (rare; happens on low-storage devices) | Pull-to-refresh — re-fetches from Firestore |

## What offline mode is not

- **Not a replacement for online sync** — your data needs to reach Firestore eventually to back up and cross-sync.
- **Not unlimited** — local storage has device limits.
- **Not encrypted client-side** — Firestore offline cache uses OS-level encryption (e.g. Android keystore for cache key) but isn't end-to-end encrypted across the network on sync.
- **Not collaborative offline** — multi-user concurrent offline edits don't merge; last-write wins.

## Frequently asked

**How long can I stay offline?**
Indefinitely for entry tracking — until you fill the device's storage or the Firestore offline cache hits its limit. New entries keep queueing. Once online, sync drains the queue (which may take a minute for a large backlog).

**What happens if the app is uninstalled before I went online to sync?**
The unsynced data is gone with the install. Capacitor Preferences and Firestore cache live in the app's sandbox; uninstalling the app removes them. If sync matters, get online before uninstalling.

**Can I force a sync?**
Pull-to-refresh on most lists triggers a sync. Or background-fetch picks it up within ~30 min idle.

**Why does Firestore say "cache offline" when I'm online?**
First read after launch goes from cache; the snapshot listener attaches in the background and updates if anything's new. This is by design — instant display from cache while network catches up.

**Does the offline cache contain my media?**
Thumbnails yes; full-resolution media stays in Google Drive (not cached locally beyond display). Audio files cache locally for offline playback.

## Where to read next

- [Architecture](/docs/concepts/architecture) — overall system architecture.
- [Push notifications](./push-notifications) — local vs server-driven notifications.
- [Google Drive sync](/docs/memories-and-notes/google-drive-sync) — media storage architecture.
- [Android](./android) — Android-specific storage.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
