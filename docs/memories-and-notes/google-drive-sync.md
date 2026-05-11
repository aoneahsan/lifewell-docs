---
title: Google Drive sync — your media, your Drive, our metadata
description: LifeWell stores memory and note media (photos, audio, video) in your own Google Drive. Token exchange runs through a Cloudflare Workers proxy with no client secret in the app.
keywords: [google drive integration, oauth, drive backup, cloudflare workers proxy, lifewell media storage, ahsan mahmood]
sidebar_position: 5
---

# Google Drive sync

LifeWell stores **memory and note media** (photos, audio, video) in **your own Google Drive**, not on LifeWell servers. Metadata about each piece of media (title, file ID, timestamp, link to memory or note) lives in Firestore; the binary file lives in your Drive. This page explains how the integration works, why we chose this architecture, what data flows where, and how to revoke or disconnect.

## Why your own Google Drive

Three reasons:

1. **Your data, your account.** Your photos belong to you. Storing them in your Drive — under your Google account, your Drive quota — keeps them yours forever, regardless of LifeWell's future.
2. **No proxy storage costs.** LifeWell would otherwise need to host gigabytes per user. Skipping that keeps the app free.
3. **Privacy by design.** Even LifeWell's operators don't have direct access to your photos — we hold a scoped OAuth token, not a server-side key.

The trade-off is that you need a Google account and have to grant LifeWell scoped Drive permission. If that's a non-starter, you can use LifeWell without Drive (you'll be limited to text + checklist notes — no photo memories or audio notes).

## What's stored where

| Data | Where it lives |
| --- | --- |
| Memory metadata (title, date, description, people, importance) | LifeWell's Firestore |
| Note metadata (title, content, type, folder, tags) | LifeWell's Firestore |
| Memory media files (photos, videos, audio) | **Your Google Drive** |
| Note media files (audio, picture-note photos) | **Your Google Drive** |
| Thumbnails | LifeWell cache (transient) |
| Drive folder structure (e.g. `LifeWell/Memories/2025/`) | **Your Google Drive** |
| OAuth token | LifeWell's Firestore (encrypted, scoped, refreshable) |

LifeWell creates a top-level **LifeWell** folder in your Drive on first connection, with subfolders for memories and notes. You can rename or move them in your Drive (the file IDs are what matter, not the folder names) but LifeWell will recreate the default structure if you delete the parent folder.

## The Cloudflare Workers proxy

To avoid exposing `client_secret` in the frontend (a major security risk in client-side OAuth flows), LifeWell uses a Cloudflare Workers proxy:

- **Worker name**: `lifewell-gdrive-token-proxy`.
- **Code location**: `workers/google-drive-token-proxy/` in the source repo.
- **Secret**: `LIFEWELL_GOOGLE_CLIENT_SECRET` stored via `wrangler secret put`.
- **CORS**: locked to `lifewell.aoneahsan.com` and `localhost:5901`.
- **What it does**: receives an OAuth authorization code from the LifeWell client, exchanges it with Google for an access + refresh token, returns the tokens to the client. Also handles refresh-token grants.

The client (your browser or mobile app) never sees the client secret. The worker is stateless — it doesn't store anything; it's a pass-through for the token exchange.

## OAuth scopes requested

LifeWell requests the minimum scopes needed:

- `https://www.googleapis.com/auth/drive.file` — read/write access to files **the app created**.

The `drive.file` scope is much narrower than full-Drive access. LifeWell can only see files LifeWell created in your Drive. Your other Drive files (documents, spreadsheets, photos uploaded outside LifeWell) are invisible to LifeWell.

If for any reason a future feature needs broader access (e.g. importing an existing photo from your Drive), the OAuth flow would re-prompt for the additional scope, and you'd see the request before accepting.

## Connection flow

1. From any media-requiring action (creating a memory, attaching audio to a note), if Drive isn't connected, you see "Connect Google Drive".
2. Click → OAuth popup opens to Google's account chooser.
3. Pick the Google account you want to use.
4. Google shows the permission request: "LifeWell wants to see, edit, create, and delete only the specific Google Drive files you use with this app".
5. Approve → Google returns an authorization code → LifeWell client sends it to the Cloudflare Worker.
6. Worker exchanges with Google → returns access + refresh token → client stores the (refresh-only) token in Firestore.
7. Subsequent API calls use the refresh token to get short-lived access tokens.

## Multi-Drive accounts

If you have multiple Google accounts (personal + work), you can connect more than one. Each memory or note has a `driveAccountId` referencing which connected account holds its files. Most users connect one; the architecture handles many.

## Revoking access

Two ways:

- **From LifeWell**: `Profile → Connected accounts → Google Drive → Disconnect`. This deletes the LifeWell-stored token. Existing files remain in your Drive.
- **From Google**: `myaccount.google.com → Security → Third-party apps with account access → LifeWell → Remove access`. This revokes the token at Google's end; LifeWell's stored token becomes invalid.

Either path stops LifeWell from accessing your Drive. Re-connecting restores access (the files are still there, the app re-recognises them by file ID).

## What happens to LifeWell media if you disconnect Drive

The metadata (memory titles, note descriptions, all the rich fields) stays in Firestore intact. The media references point to file IDs LifeWell can no longer fetch. Practically:

- Memories without media still display title, date, description, people, importance, etc.
- Memory pages show placeholders where media would be ("media unavailable — Drive disconnected").
- Note media (audio playback, picture-note display) shows similar placeholders.

Reconnecting (same Google account) restores everything; reconnecting with a different account doesn't (the file IDs don't exist there).

## Quota and storage limits

- **Google Drive free tier**: 15 GB across Drive, Gmail, Photos.
- **Per-photo size**: most phone photos are 2–5 MB. A few thousand memory photos fit in 15 GB.
- **Video**: video eats Drive quota fast (4K video at 100 MB/min adds up). Consider lower resolution if you store a lot.
- **LifeWell's view**: app cares only that uploads succeed; if you hit Drive quota, uploads fail with an error from Google.

## Sync status

Each piece of media has a sync status:

| Status | Meaning |
| --- | --- |
| `pending` | Queued for upload; nothing in Drive yet |
| `uploading` | In progress |
| `synced` | Successfully uploaded; Drive has the file |
| `error` | Upload failed (network, quota, permission, etc.) |
| `local` | Local-only (offline, will sync when online) |

The memory or note shows the sync state for each attached file. Failed uploads have a retry button.

## Offline behaviour

The Capacitor app caches uploaded files locally for offline access. If you create a memory offline:

1. Media is stored in local Capacitor Preferences / IndexedDB.
2. Metadata is created with `syncStatus: 'local'`.
3. On reconnection, the upload queue runs.
4. Once each file uploads, the local copy can be evicted (or kept for offline read).

The web app's offline support is weaker — most browsers limit IndexedDB to a few hundred megabytes. Mobile is the better surface for heavy offline use.

## Privacy posture

- LifeWell holds an OAuth refresh token, not your password.
- The token is stored in Firestore under your user document, with field-level rules denying any other user.
- The Cloudflare Worker is stateless — no token storage at the proxy.
- The `drive.file` scope means LifeWell can never see files it didn't create.
- Revoking access is a single click on your end.

## What this is not

- **Not OneDrive / Dropbox / iCloud integration.** Google Drive only, currently.
- **Not enterprise SSO.** Personal Google accounts and Google Workspace accounts both work, but no enterprise identity provider integration.
- **Not full Drive sync.** LifeWell doesn't sync your entire Drive. Only the files it creates.
- **Not file-encryption at rest.** Drive's standard encryption applies; no LifeWell-specific E2E encryption layer.

## Frequently asked

**Can I use iCloud or Dropbox instead?**
Not currently. iCloud and Dropbox each have very different OAuth and storage models; supporting them is a non-trivial engineering project. Google Drive was the launch choice because of its `drive.file` scope, mature OAuth, and ubiquity.

**What if Google deprecates the API?**
Google has stable Drive APIs going back many years; deprecation is unlikely on short notice. If it ever happens, we'd migrate to a successor or to a different provider.

**Why a Cloudflare Worker proxy?**
Browser-side OAuth requires either implicit grant (legacy, less secure) or PKCE + a server to handle the token exchange. The Cloudflare Worker is the cheapest, simplest "server" we can run — free tier covers our token-exchange volume.

**Can I see what files LifeWell created in my Drive?**
Yes — open your Drive, look in the `LifeWell` folder. Subfolders organise by memory/note category.

**What happens if I delete the LifeWell folder in my Drive?**
LifeWell loses access to the files. Re-creating the folder doesn't bring them back (the file IDs are gone). Don't delete the folder unless you mean to delete the media.

## Where to read next

- [Memories](./memories) — primary user of Drive backup.
- [Notes](./notes) — audio + picture notes use Drive.
- [Privacy and security](/docs/concepts/privacy-and-security) — overall privacy posture.
- [Architecture](/docs/concepts/architecture) — system-level overview.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
