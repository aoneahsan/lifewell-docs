---
title: Notes — text, audio, picture, checklist, mixed
description: LifeWell notes are quick records with 5 types (text, audio, picture, checklist, mixed), 11 colours, pinning, archiving, folders, and Google Drive backup.
keywords: [notes app, audio notes, picture notes, checklist, tiptap rich text, google drive backup, ahsan mahmood]
sidebar_position: 3
---

# Notes

**Notes** in LifeWell are quick records — a thought you want to keep, a checklist for tomorrow, a photo of a whiteboard, a voice memo of a meeting. Five types cover the common shapes: pure **text**, **audio**, **picture**, **checklist**, or **mixed** (any combination). Each note has a title, optional content, colour coding, pinning, archiving, folders for organisation, tags, and cross-feature associations linking it to memories, people, events, or chats.

Notes are the lightweight counterpart to [memories](./memories) (deep, intentional life-moment records). A note is the thing you write in 10 seconds; a memory is the thing you reflect on for 10 minutes.

## Note types

| Type | What's primary | Example |
| --- | --- | --- |
| `text` | Rich-text body | "Pick up dry-cleaning after work" |
| `audio` | Recorded voice memo | A 90-second meeting summary |
| `picture` | Uploaded photo(s) | Snapshot of a whiteboard, a receipt |
| `checklist` | Tickable items | Shopping list, packing list |
| `mixed` | Multiple media + text | A meeting note with audio recap + photo of slides + typed action items |

Pick the type when you create the note; you can change it later if the note evolves.

## Rich-text editor (TipTap)

Text notes use a **TipTap** editor (powered by ProseMirror). Supported formatting:

- Headings (H1–H3).
- Bold, italic, underline, strikethrough.
- Bullet and numbered lists.
- Task lists with checkboxes (separate from `checklist` type — task lists are inline checkable items inside a text note).
- Code (inline) and code blocks.
- Block quotes.
- Horizontal rules.
- Links.
- Tables (basic).
- Image embedding (linked from your Drive).

The editor is keyboard-shortcut-friendly (`Cmd-B` bold, `Cmd-I` italic, `Cmd-K` link, etc.) and renders cleanly on mobile.

## Audio notes

Tap **Record** on an audio-note → speak → tap **Stop** → save. The recording uploads to your Google Drive and the note metadata in Firestore references the file.

- **Browser audio**: uses `MediaRecorder` API where available (Chrome / Firefox / Safari modern versions).
- **Mobile**: uses Capacitor's audio plugin for native quality.
- **Max length**: ~5 minutes per recording (configurable; default keeps file sizes manageable).
- **Playback**: in-note audio player with scrubbing and speed (1×, 1.25×, 1.5×, 2×).

A pending feature: optional automatic transcription via a clinician-approved local-only model. Currently transcription is manual ("transcribe the audio for me later"). Speech-to-text via paid cloud APIs is on the long-term roadmap with explicit user opt-in.

## Picture notes

A picture note has one or more photos as the primary content + optional caption. Uploaded photos go to your Google Drive; the thumbnail is cached locally for quick preview.

Useful for:

- Whiteboard / blackboard snapshots after a meeting.
- Receipts.
- Reference images.
- Sketches you want to keep.

## Checklist notes

A checklist is an ordered list of `ChecklistItem`s, each with a text and a checked/unchecked state. Drag to reorder; check items off; the note shows progress ("3 of 7 done") in its list-card preview.

Sub-items (nested checklists) are supported with `Tab` indentation in the editor.

## Mixed type

Some notes don't fit one type. A `mixed` note can have:

- A text body.
- One or more audio recordings.
- One or more photos.
- A checklist.

All at once. Useful for meeting notes (typed action items + photo of slides + voice memo of the discussion).

## Colours

Notes have an optional colour for visual organisation:

| Colour | Use suggestion |
| --- | --- |
| default | No colour (most notes) |
| red | Urgent |
| orange | Bills / financial |
| yellow | Reminders |
| green | Wellness / personal |
| teal | Travel |
| blue | Work |
| purple | Personal projects |
| pink | Family / kids |
| brown | Recipes / food |
| gray | Reference / archive |

These are user-meaningful, not enforced. Use them however helps you scan a wall of notes.

## Pinning and archiving

- **Pinned** notes appear at the top of the notes list.
- **Archived** notes are hidden from the main list but still searchable.
- **Deleted** notes go to a trash that retains them for 30 days before permanent deletion.

The pin / archive / trash pattern matches what most note apps do — keep it familiar.

## Tags + folders

Two organisation systems:

- **Folders** ([Note folders](./note-folders)) — a single-parent hierarchy. A note belongs to at most one folder.
- **Tags** — many-to-many. A note can have any number of tags.

Use folders for "where" (work folder, recipes folder, project X folder) and tags for "what" (urgent, idea, follow-up). Most users develop folder + tag conventions over time.

## Associations

Each note can be associated with other LifeWell entities:

- **Memories** — link a quick note to a memory it relates to.
- **People** — link a note to a person from your records.
- **Events** — link a note to a calendar event.
- **Chats** — link a note to a chat thread.
- **Health entries** — link a note to a specific vital reading or condition entry.

Associations create the cross-references shown on the [note maps](/docs/maps/note-maps) visualisation. They also surface contextually: opening a person's profile shows notes associated with that person.

## Google Drive backup

Same architecture as memories:

- Note metadata lives in Firestore.
- Media (audio + photos) lives in your Google Drive.
- Token exchange goes through `lifewell-gdrive-token-proxy` (the Cloudflare Workers proxy).

See [Google Drive sync](./google-drive-sync) for the full architecture.

If you skip Google Drive setup, you can still create text and checklist notes (no media). Audio and picture notes require Drive.

## Search

Substring search across:

- Title.
- Text body (rich-text rendered to plain).
- Checklist items.
- Tags.

Case-insensitive. Real-time as you type. Search ignores archived notes by default (toggle to include).

## What this is

- A fast, flexible note-taking layer with rich text + media.
- A cross-reference layer linking notes to people, memories, events.

## What this is not

- **Not a knowledge-graph app.** No automatic backlink discovery (yet).
- **Not real-time collaborative.** Single-user notes; no co-editing.
- **Not an OCR layer.** Picture notes are pictures; the app doesn't extract text from images automatically.
- **Not encrypted at rest with your own key.** Standard Firebase encryption applies; no client-side end-to-end encryption.

## Frequently asked

**Can I import from another notes app (Evernote / Notion / Apple Notes)?**
Bulk import from common formats (HTML, Markdown bundle, ENEX) is on the roadmap. For now, copy-paste preserves most formatting.

**What happens if my Google Drive runs out of space?**
Audio and picture note uploads fail with an error. Text and checklist notes still work. Free up space in your Drive to resume.

**Can I export all my notes?**
Yes — JSON export of metadata + links to Drive files. Markdown bundle export is planned.

**Are notes encrypted?**
Server-side encryption at rest (Firebase default). Not client-side end-to-end encrypted. If you need E2EE for the most sensitive notes, write them somewhere else.

**Why do checklists have a separate type if rich-text notes can have task lists?**
Two reasons: (1) The checklist type renders differently (progress bar, large tick targets), better for to-do-list use. (2) Notifications can be set on checklist progress ("you finished today's checklist!"). Rich-text task lists are inline; checklists are first-class.

## Where to read next

- [Note folders](./note-folders) — folder hierarchy.
- [Google Drive sync](./google-drive-sync) — Drive integration architecture.
- [Memories](./memories) — deeper life-moment records.
- [Note maps](/docs/maps/note-maps) — visualisation of note associations.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
