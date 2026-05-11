---
title: Note folders — single-parent hierarchy with drag-drop
description: LifeWell note folders organise notes in a single-parent hierarchy. Drag-drop a note into a folder, nest folders, colour-code, archive folders.
keywords: [note folders, notebook organisation, folder hierarchy, drag drop notes, ahsan mahmood]
sidebar_position: 4
---

# Note folders

**Note folders** are the directory structure for your [notes](./notes). Each note belongs to at most one folder (or to no folder, sitting in the root). Folders nest — you can have a "Work" folder containing "Project A", "Project B", and "Meeting notes" subfolders. The folder tree lives in the sidebar of the notes view and supports drag-drop to move notes between folders.

Folders are the "where" of organisation; [tags](./notes#tags--folders) are the "what". The two systems work together — most users settle on a folder per major area of life (work, personal, family, recipes) and tags within for cross-cutting themes.

## What a folder stores

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Internal identifier |
| `name` | string | Display name |
| `parentId` | string (optional) | Parent folder ID; absent means root |
| `colour` | enum (optional) | Visual coding (same 11-colour palette as notes) |
| `isArchived` | boolean | Hidden from main tree but searchable |
| `icon` | string (optional) | Icon name for the folder header |
| `notesCount` | computed | How many notes live in this folder |
| `createdAt` / `updatedAt` | timestamps | |

## Hierarchy rules

- **Single parent**: a folder has exactly one parent (the root counts as a virtual root).
- **No cycles**: you can't move folder A into folder B if B is a descendant of A.
- **Notes per folder**: any number of notes; no enforced limit (Firestore quota is the only practical ceiling).
- **Depth**: practically unlimited, but the UI handles up to ~5 levels gracefully; beyond that, consider tagging instead.

## Drag-drop interactions

In the folder tree:

- **Drag a note** onto a folder → moves the note into that folder.
- **Drag a folder** onto another folder → makes it a subfolder.
- **Drag a folder** onto "Root" → promotes it to the root level.
- **Drag a folder** onto its own parent → no-op.
- **Drag onto an archived folder** → prompts to confirm unarchive + move.

Drag-drop works on web (mouse / trackpad) and on touch devices (long-press to grab, drag, release).

## Creating folders

From the folder tree:

1. Hover a parent (or "Root") → click "+" → name the folder → enter.
2. New folder is created at that level.
3. Drag notes into it from the notes list.

Or from a note's context menu → **Move to folder** → select an existing folder or create a new one inline.

## Colour-coding

The 11-colour palette (same as notes) applies to folders too:

- Default (no colour)
- Red, orange, yellow, green, teal, blue, purple, pink, brown, gray

The folder icon takes the colour; the folder's notes inherit the colour as a subtle hint unless they have their own colour set explicitly.

## Suggested folder structures

Folder layouts that work for many users (treat as starting points, not prescriptions):

### Personal-life pattern
```
Personal
  Daily journal
  Reflections
  Goals
Recipes
Travel
  Lisbon 2025
  Tokyo 2024
Family
  Kids
    Names
    Milestones
  Parents
Reference
  Manuals
  Tax info
```

### Work pattern
```
Work
  Current project
    Meeting notes
    Action items
    Specs
  Past projects
    Project X (archived)
  HR / admin
  Career
    Resume drafts
    Interview prep
Side projects
  Project Y
```

The principle: top-level for major domains, second level for specific contexts within. Resist creating top-level folders for transient topics — they'll go stale.

## Archiving a folder

Archiving a folder hides it from the active tree but keeps its notes searchable. Useful for "I'm done with Project X" — archive the folder, leave the notes intact in case you ever need them.

Restoring is one click — open archived folders, "Unarchive". Notes inside remain in place.

## Deleting a folder

Two options:

- **Delete folder, keep notes** → folder removed; notes move to the root.
- **Delete folder and notes** → folder + every note inside goes to trash (recoverable for 30 days, then permanent).

Always asks for confirmation if the folder is non-empty.

## Folder search

The folder tree has its own search box at the top — substring match against folder names. Useful when you have 50+ folders and need to find "where did I put the dentist note?".

## Folder data and sync

- **Storage**: folder metadata in your Firestore document, per-account.
- **No Drive backup for folder structure** — folders are just metadata, not media. The folder tree always exists in Firestore.
- **Sync**: instant via Firestore snapshot listener. Add a folder on one device, see it on another within seconds.
- **Offline**: the folder tree caches locally; you can create / rename / move offline and changes queue for sync.

## What folders don't do

- **No sharing.** Folders aren't shared between users. Sharing happens at the per-note level via the share link, or at the connection level via [data-sharing](/docs/family/data-sharing).
- **No auto-organisation.** The app doesn't suggest "move this note to that folder" based on content.
- **No symlinks / multi-location.** A note lives in exactly one folder. Use tags if you want a note to belong to multiple categories.
- **No folder-level permissions per partner.** Folders are personal organisation, not access control.

## Worked example

You have 80 notes spread across work, personal, recipes, and travel. Currently flat.

Reorganisation:

1. Create top-level folders: Work, Personal, Recipes, Travel.
2. Drag-drop 30 work-related notes into Work.
3. Inside Work, create Meetings + Projects subfolders. Move accordingly.
4. Drag recipes into Recipes.
5. Drag the 5 Lisbon notes into Travel → Lisbon 2025.
6. Leave personal journaling notes in Personal.

15 minutes of dragging, and the next time you need a meeting note, you don't have to scroll past 79 other notes to find it.

## Frequently asked

**Can a note be in multiple folders?**
No — a note has one parent folder. For multi-categorisation, use tags. A "weekly review" note can be in the Personal folder while tagged "weekly" and "reflection" — those tags are how you also find it from the tag view.

**Why no nested deeper than ~5 levels in the UI?**
The tree renders well up to ~5 levels. Beyond that, indentation eats the space. The system doesn't *enforce* a limit; the UI just becomes awkward. Reorganise with tags instead.

**Can I share a folder with my partner?**
Folder-level sharing isn't supported. Sharing happens per-note (share link) or per-data-sharing-matrix (visible to connections at level N).

**Does the folder structure back up to Google Drive?**
No — folders are pure metadata in Firestore. The Drive backup is for *media* (audio, photos) only, not for note organisation.

**What if I delete a folder accidentally?**
You're asked "delete folder + notes" or "delete folder, keep notes". If you picked the wrong one, deleted notes are recoverable from trash for 30 days.

## Where to read next

- [Notes](./notes) — what folders organise.
- [Memories](./memories) — different shape of memory keeping.
- [Google Drive sync](./google-drive-sync) — Drive integration.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
