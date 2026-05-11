---
title: Memories — life moments with photos, people, location
description: LifeWell memories capture life moments with rich text, media stored in your Google Drive, tagged people, locations, life impact, and audio notes.
keywords: [life memories, memory journal, photo memories, google drive backup, audio notes, ahsan mahmood]
sidebar_position: 1
---

# Memories

**Memories** in LifeWell are records of life moments — a wedding, a first day at a new job, a quiet afternoon with your grandmother — captured with title, rich description, media (photos, videos, audio), tagged people from your [connections](/docs/family/connections), a location, the date with precision (exact / month / year), and optional fields for "why this matters" and "how this affected me later". Each memory is yours, stored in your own Google Drive for media + Firestore for metadata.

This is the deep, intentional version of "I want to remember this" — distinct from the shallower [notes](./notes) (quick text/checklist) and the trip-level [journeys](/docs/family/journeys).

## What a memory record stores

| Group | Fields |
| --- | --- |
| Core | Title (required), rich-text description |
| Media | Multiple files (photos, videos, audio) stored in Google Drive; YouTube links |
| Context | Date, date precision (exact / month / year), location |
| People | Linked person records (who was there) |
| Tags | Free-form tag array |
| Importance | "Why this matters" |
| Life impact | How this affected you afterward |
| Random thoughts | Free text |
| Notes | Free text |
| Audio notes | Voice memos about the memory (separate from media) |

You only fill what you want. Title + date + one photo is a complete memory; the deeper fields are there when you want to capture more than the surface.

## Date precision

Memories often happen in time, but with fuzzy precision: you remember the year, maybe the month, but not the day. The `datePrecision` field handles this:

- **exact** — full date known.
- **month** — only the month + year are remembered.
- **year** — only the year.

The timeline view groups by year + month + day according to the precision so a "1994" memory doesn't get a random fake day attached to it.

## Media storage in Google Drive

Memory media — photos, videos, audio — is stored in **your own Google Drive**, not on LifeWell servers. This means:

- **Your storage quota, not ours.** A memory with 50 photos consumes 50 photos' worth of your Google Drive space.
- **Your data, your retention.** Revoke LifeWell's Google Drive permission and the files stay in your Drive; revoke and delete the LifeWell account and the files still stay in your Drive.
- **No proxy charges.** LifeWell isn't paying egress fees to serve your photos because we don't host them.
- **Token exchange via Cloudflare Workers proxy** (the `lifewell-gdrive-token-proxy` worker) — see [Google Drive sync](./google-drive-sync) for the full architecture.

The trade-off: you need a Google account, and you grant LifeWell scoped access. If you don't want Google Drive in the loop, you can still log memories — just without media (text + audio-notes only).

## People in a memory

Each memory can be tagged with people from your records. The tags create cross-references:

- The memory page shows "with: [Alice], [Bob], [you]".
- Each tagged person's profile shows the memories they appear in (subject to [data-sharing](/docs/family/data-sharing) visibility).
- The [people maps](/docs/maps/people-maps) visualisation uses these tags to render people-to-memory edges.

People-tagging is what turns memories from "my private journal" into "the connective tissue of my relationships".

## Life impact + importance + random thoughts

Three optional fields capture the meaning of a memory:

- **Importance** — why this matters to you, briefly.
- **Life impact** — how this affected you afterward (one-time event, lasting change, perspective shift, etc.).
- **Random thoughts** — free-text overflow.

These exist because the most valuable thing about a memory is often not what happened but why it stuck. You can leave them empty; you can fill all three.

## Audio notes

Separate from the media array (which holds primary photos/videos), the `audioNotes` array holds voice memos *about* the memory. Useful when you want to reflect verbally rather than typing — open the memory, record a 30-second voice note, save. The voice notes play back on the memory page, listed in chronological recording order.

Audio notes go through the same Google Drive backup path as other media.

## Memory timeline

The main memories view is a chronological timeline (newest first by default). You can:

- **Filter** by year, by tag, by tagged person, by location.
- **Search** across title, description, notes — substring match, case-insensitive.
- **Switch views** between timeline, grid (photo-led), and map (where memories happened).

## Sharing a memory

Per-memory privacy:

- **Private** (default) — only you see it.
- **Shared with connections** — visible to a subset of connections you pick.
- **Shared via link** — generates a public read-only link.

Sharing surfaces title, description, media, tagged people (with their consent settings respected), location, and date. It doesn't share your importance/life-impact/random-thoughts fields by default — those stay private — though you can toggle them shareable per memory.

## Export

Per-memory PDF export bundles everything (title, date, description, photos, audio transcripts if available, importance, life impact). Useful for creating a printed memory book or sharing offline.

Bulk export — pick a year or a tag and export every memory matching as one PDF — is on the roadmap.

## Privacy posture

Memories are some of the most personal data in LifeWell:

- **Metadata** (title, description, fields) in Firestore, per-account, rule-protected.
- **Media** in your Google Drive (your account, not ours).
- **No selling, no AI training, no aggregation.**
- **Share links** revocable at any time.
- **Account deletion** purges memory metadata; Google Drive files survive in your Drive unless you delete them separately (or revoke the LifeWell Drive permission and we lose access).

## What memories are not

- **Not a public diary.** Default private; sharing is explicit.
- **Not auto-generated.** Memories are deliberate — you write each one. No "your Year in Review" auto-collage like Facebook / Google Photos do.
- **Not a photo-management app.** Photos live in your Drive; LifeWell links to them. Bulk photo editing belongs in Google Photos or similar.
- **Not a social network.** No feed, no likes, no comments by other users.

## Worked example

A wedding you attended on 2025-08-14.

- Title: "Sarah and Ben's wedding"
- Date: 2025-08-14, precision: exact.
- Location: "Vineyard at Carmel, California, USA".
- People: tag Sarah, Ben, three of your mutual friends.
- Media: upload 12 photos + 1 video from your phone.
- YouTube link: the wedding-band's official video.
- Tags: wedding, friends, california, 2025.
- Importance: "First wedding I attended of childhood friends. Marks the chapter where my close friends are settling down."
- Life impact: "Reconnected with friends I hadn't seen in years. Decided to plan a reunion trip with them next year."
- Audio notes: 1-minute voice memo about the speeches.

The memory appears on your timeline, on the [people maps](/docs/maps/people-maps) connecting you to Sarah/Ben/the friends, on the [memory maps](/docs/maps/memory-maps) as a node, and (if you share with Sarah + Ben) on their views of you.

## Frequently asked

**Why does media go to my Google Drive instead of LifeWell's servers?**
Because (1) your photos are yours, (2) we don't want to be the custodian of your photos forever, and (3) storage at scale is expensive — building a free product on someone else's storage doesn't pencil out.

**What happens to media if I revoke Google Drive permission?**
The metadata (title, date, description) stays in LifeWell; the media files become inaccessible from LifeWell but stay in your Drive. Re-granting permission restores access.

**Can someone else's memory tag me without my consent?**
The tag exists in their record; whether their tag of you appears anywhere YOU can see depends on their data-sharing matrix. Notifications about "you've been tagged" aren't currently sent — privacy by default beats notifications by default here.

**Can I export everything if I leave LifeWell?**
Yes — bulk export to JSON of all metadata + links to your Google Drive media files. You don't get stranded.

**How big can a memory be?**
Per-memory: hundreds of photos is fine in metadata terms (each is just a Drive file ID + thumbnail). The practical limit is your Google Drive storage and how patient you are uploading.

## Where to read next

- [Scrapbook](./scrapbook) — drag-drop visual layout of photos and text.
- [Notes](./notes) — quick text / audio / checklist notes.
- [Google Drive sync](./google-drive-sync) — how the Drive integration works.
- [Memory maps](/docs/maps/memory-maps) — visualisation of memory connections.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
