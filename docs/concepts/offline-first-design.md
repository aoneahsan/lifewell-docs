---
title: Offline-first design — how LifeWell handles disconnection
description: LifeWell works without a connection for most tracking surfaces. Service worker caches the app shell, Firestore caches your data offline, Capacitor Preferences stores settings locally.
keywords: [lifewell offline, offline first, service worker, firestore offline cache, capacitor preferences, pwa offline, ahsan mahmood]
sidebar_position: 4
---

# Offline-first design

LifeWell is offline-first by design: most tracking surfaces work even when you have no connection, and changes you make while offline sync automatically when the network returns. This page explains how that's wired together — service worker on the web, Capacitor on mobile, Firestore offline persistence underneath both — and what specifically does and doesn't work without connectivity.

## Why offline-first matters here

People log health data at moments when connectivity is uneven: at the gym, on a flight, during a hospital visit, in a basement room with poor signal. If LifeWell only worked online, those exact moments — the ones with the most worth logging — would be the moments LifeWell failed. So the architecture treats a missing connection as an expected condition, not an error.

The trade-off: offline-first adds complexity (caching, conflict resolution, state reconciliation). LifeWell pays that cost so the user doesn't.

## The four layers of offline support

| Layer | Role | Implementation |
| --- | --- | --- |
| Service worker (web) | Cache the app shell so the UI loads on a fresh tab even with no network | Vite PWA plugin with a workbox strategy |
| Capacitor (Android / iOS) | Bundle the app shell at install time, no runtime download needed | Capacitor 8 packages the production web build into the APK / AAB |
| Firestore offline persistence | Cache document reads / writes locally, queue writes for replay | Firebase SDK's `enableIndexedDbPersistence` (web) / native equivalent (mobile) |
| Capacitor Preferences | Store theme settings, session tokens, and tiny key-value state | `@capacitor/preferences` (native KV on mobile, localStorage fallback on web) |

These four layers cover the four kinds of state LifeWell needs to handle: the UI bundle, server-stored documents, in-flight writes, and local preferences.

## What works fully offline

Once LifeWell has been opened at least once on a device (so the service worker is installed and the app shell is cached):

- **Calculators and timers.** All 12+ calculators (BMI, BMR, calorie, TDEE, macro, protein, age, sleep tracker, step counter) and all timers (interval, workout, kegel) run entirely in the browser. No network required at any point.
- **Theme customizer.** Pick light / dark / accent / radius / scaling. Choices persist via Capacitor Preferences locally.
- **Logging vitals, water, medications, mood, exercise, sleep.** Writes go through Firestore's offline queue. The UI confirms the save immediately; the actual server-write happens once the connection returns.
- **Reading recently viewed history.** Documents Firestore has cached locally are served instantly, even offline.
- **Reading and editing notes.** Notes live in Firestore with full offline persistence.
- **Browsing memories.** Memory metadata is in Firestore (offline-cached); the photos live on FilesHub and may show a placeholder if you didn't view them while online.

## What needs a connection

These features need at least one round-trip to a backend, so they degrade gracefully when offline:

- **First-ever sign-in.** Firebase Auth needs to validate against Google / Apple / your password. Once you're signed in, the session token is cached for offline use until it expires (typically 1 hour, then it auto-refreshes when next online).
- **First-ever load of a memory's photo or video.** The photo is fetched from FilesHub on demand. If you've never viewed that memory online, the photo shows a placeholder; tap it later when online to fetch.
- **Reminders firing.** Locally-scheduled reminders (Capacitor LocalNotifications) fire offline. Push reminders that come from the server (OneSignal) need a connection to be delivered.
- **Family connections and sharing.** Inviting a family member or viewing their shared journey requires an online write.
- **Community features and chats.** These require server confirmation for ordering and visibility.
- **Google Drive sync of memory media.** Requires online OAuth round-trip plus actual upload.

## How write queuing works

When you tap "Save" on a vital, water glass, or medication entry while offline:

1. The form passes the data to the relevant service in `src/services/`.
2. The service calls Firestore's `setDoc()` or `addDoc()` (or `updateDoc()`).
3. Firestore's SDK detects no connection and queues the write in IndexedDB (web) or the native cache (mobile).
4. The UI gets a synthetic "success" — the local document is updated immediately.
5. When the network returns, the SDK replays queued writes in order. Conflicts are resolved by last-writer-wins (which is fine for personal tracking — you don't have multiple authors writing the same document).
6. Once the server confirms, the local document is reconciled with the server's view.

You can verify this is working: open LifeWell, log a vital, switch your device to airplane mode, log another vital, switch airplane mode off. Both vitals appear in your history. Watch the network tab and you'll see the second write fire when the connection returns.

## How read caching works

Firestore's offline persistence keeps a local copy of every document you've recently read. When you open a screen while offline:

1. The screen subscribes to the relevant Firestore query.
2. Firestore checks IndexedDB / native cache for matching documents.
3. Matching documents are served immediately from cache.
4. When the network returns, Firestore quietly compares server state with cache and pushes any changes.

The cache size is bounded — Firestore evicts least-recently-used documents when it gets full. For LifeWell's typical user (1-5 MB of tracked data), the entire user's history fits comfortably in the cache.

## Reminders and notifications offline

Local reminders (the "log water at 14:00" kind) are scheduled via Capacitor LocalNotifications on Android. They fire on time even if the device is offline, since the schedule is held by Android itself.

Push reminders (the "your blood pressure trend dropped this week" kind, sent server-side) are delivered via OneSignal. They need a connection to arrive — but Android caches them briefly if the device is offline at the moment the server sends, and delivers when the device comes back online.

If you rely on offline reminders, prefer **local schedule** (set in the reminder edit screen) over **server-driven push**.

## What about iOS?

The iOS Capacitor build (in prep, not yet shipped) uses the same Capacitor offline strategy: the production web build is bundled into the IPA, Firestore offline persistence works identically, Capacitor Preferences uses iOS Keychain when a screen lock is set.

The one iOS-specific wrinkle is service worker behavior in iOS Safari, which is more limited than Chrome. The iOS Capacitor build sidesteps that by bundling the app shell rather than relying on a web service worker.

## Frequently asked

**My logged vital didn't appear on my other device.**
The first device queued the write while offline, and it hasn't synced yet. As soon as the first device gets a network connection, the write replays and shows up on the second device within a few seconds.

**The calculators show "Loading..." forever offline.**
That shouldn't happen — calculators run client-side with no network call. If you see this, hard-refresh on the web (Cmd-Shift-R / Ctrl-F5) so the service worker re-fetches the latest bundle. If it persists, report to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

**Can I work offline indefinitely?**
Effectively yes for tracking. Firebase Auth tokens expire after about an hour, so eventually a long-offline session will fail to make new writes. Once you re-connect, the SDK refreshes the token automatically and replays everything.

**What happens if two devices log the same entry while both offline?**
Both writes get unique document IDs (Firestore auto-generates them), so there's no conflict — you just end up with two separate entries. If that's not what you wanted, delete the duplicate from history. LifeWell never silently merges entries across devices.

**Does the browser extension work offline?**
The popup UI works, but the extension's quick-tracking buttons and reminder scheduling rely on Firestore, so they'll queue writes the same way the web app does. Calculators in the extension popup are not provided — for those, click "Open LifeWell" and use the full web app.

## Where to read next

- [Architecture](./architecture) — high-level system shape.
- [Privacy & security](./privacy-and-security) — what data lives where.
- [Push notifications](/docs/mobile/push-notifications) — local vs. server-driven reminder delivery.
- [Mobile offline usage](/docs/mobile/offline-usage) — Android-specific offline behavior.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
