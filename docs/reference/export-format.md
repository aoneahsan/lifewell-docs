---
title: The export file format
description: What is in a LifeWell export, field by field and table by table — the JSON header, the CSV archive, what the PDF leaves out, and what no format ever contains.
keywords: [lifewell export format, json export schema, csv export, import lifewell data, data portability]
tags: [reference, export, your-data]
sidebar_position: 1
---

# The export file format

This describes the file [Export everything](../your-data/export.md) produces, so another application can read
it without guessing.

It is not a LifeWell format. JSON is JSON, and the archive is an ordinary zip of ordinary CSV files.

## The three files

| Format | File name | Media type | Complete |
|---|---|---|---|
| JSON | `lifewell-export-<YYYY-MM-DD>.json` | `application/json` | **Yes** |
| CSV | `lifewell-export-<YYYY-MM-DD>.zip` | `application/zip` | **Yes** |
| PDF | `lifewell-export-<YYYY-MM-DD>.pdf` | `application/pdf` | **No** — see below |

The date is your own local day, not a server day. The name stays ASCII and the same shape in every language,
because it is something you will search a downloads folder for.

## The JSON document

One object. A small header, then one key per table, each holding an array of rows.

```json
{
  "exportedAt": "2026-09-08T11:04:22.417Z",
  "schema": 1,
  "range": { "from": "2026-01-01", "to": "2026-09-08" },
  "rowCap": 5000,
  "truncated": ["metric_entries"],
  "profile": { "id": "…", "display_name": "…" },
  "conditions": [],
  "medications": [ { "…": "…" } ]
}
```

| Header field | Type | Meaning |
|---|---|---|
| `exportedAt` | ISO 8601 string, UTC | When the file was made |
| `schema` | number | The format version. Currently **1** |
| `range.from` / `range.to` | ISO date or `null` | The window you chose. `null` means open-ended |
| `rowCap` | number | The per-table ceiling that was applied — **5000** |
| `truncated` | array of table names | Tables that hit the ceiling. Empty means nothing was cut |
| `profile` | object or `null` | Your profile row, carried whole rather than as a one-row array |

Three things worth knowing before you write a reader:

- **A table with no rows is an empty array, not an absent key.** `"meals": []` is a statement; a missing
  `meals` key would be a question.
- **`truncated` is the only signal that a file is partial.** Read it before you conclude somebody has no
  history.
- **The JSON is pretty-printed**, two spaces. It is a file you are meant to open and search, and a single
  eight-megabyte line is not something a text editor opens gracefully.

## The CSV archive

A zip holding **one `.csv` per table**, named `<table>.csv`. The columns are the table's own columns.

| Detail | Value |
|---|---|
| Line endings | CRLF, per RFC 4180 |
| Encoding | UTF-8 **with a byte-order mark** |
| Quoting | RFC 4180 — doubled quotes, fields containing `"`, `,`, CR or LF are quoted |
| Empty cell | `null` and `undefined` both become an empty cell |
| Nested values | Kept whole as JSON in the cell, rather than flattened across rows |

Two deliberate choices that will otherwise look like bugs:

- **A table with no rows still gets a file**, carrying only its header row. A missing file is
  indistinguishable from a failed export; a header alone proves the table was considered.
- **A cell whose text begins `=`, `+`, `-`, `@`, a tab or a carriage return is prefixed with an
  apostrophe.** Spreadsheets treat those characters as the start of a formula. Your data is your own, so this
  is not protection from a stranger — it is protection for whoever you hand the file to, who on this page is
  often a doctor. Strip the leading apostrophe if you are parsing rather than opening.

The byte-order mark is there because Excel on Windows reads an unmarked UTF-8 file as the local code page,
which mangles any name with an accent in exactly the tool this format exists for.

## Every table in the file

Sixty-five tables, grouped by the area they belong to.

- **Range** — *Dated* rows honour the date window you chose. *Standing* rows are always included, because a
  dose with no medicine attached reads as data loss.
- **In the PDF** — *Listed in full* prints the rows. *Counted, not listed* prints the count and the span but
  not the rows. *Not in the PDF* means exactly that.

### Health

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `conditions` | Conditions | Standing | Listed in full |
| `condition_episodes` | Episodes | Dated | Listed in full |
| `medications` | Medications | Standing | Listed in full |
| `medication_doses` | Medication doses | Dated | Counted, not listed |
| `metric_entries` | Tracker readings | Dated | Counted, not listed |
| `user_metric_settings` | Tracker settings | Standing | Listed in full |
| `metric_definitions` | Tracker types | Standing | Listed in full |
| `meals` | Meals | Dated | Counted, not listed |
| `saved_meals` | Saved meals | Standing | Not in the PDF |
| `saved_meal_items` | Saved meal items | Standing | Not in the PDF |
| `eating_windows` | Fasting window | Standing | Listed in full |
| `shopping_lists` | Shopping lists | Standing | Not in the PDF |
| `shopping_list_items` | Shopping list items | Standing | Not in the PDF |
| `movement_sessions` | Workouts | Dated | Counted, not listed |
| `wellness_breaks` | Wellness breaks | Dated | Not in the PDF |
| `wellness_nudges` | Wellness nudges | Standing | Not in the PDF |

### Mind

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `journal_entries` | Journal entries | Dated | Not in the PDF |
| `mind_sessions` | Guided sessions | Dated | Counted, not listed |

### Life stages

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `cycle_days` | Cycle days | Dated | Counted, not listed |
| `babies` | Children | Standing | Listed in full |
| `baby_growth` | Growth measurements | Standing | Listed in full |
| `baby_logs` | Baby logs | Dated | Counted, not listed |
| `baby_milestones` | Milestones | Standing | Listed in full |

### People

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `people` | People | Standing | Listed in full |
| `person_edges` | Relationships | Standing | Not in the PDF |
| `connections` | Connections | Standing | Listed in full |
| `connection_prefs` | Connection settings | Standing | Not in the PDF |
| `share_links` | Shares | Standing | Listed in full |
| `share_submissions` | Sent through a share link | Standing | Not in the PDF |
| `community_members` | Groups you joined | Standing | Not in the PDF |
| `posts` | Community posts | Standing | Listed in full |
| `post_replies` | Community replies | Standing | Not in the PDF |
| `blocks` | People you blocked | Standing | Not in the PDF |
| `chats` | Conversations | Standing | Not in the PDF |
| `chat_members` | Who is in each conversation | Standing | Not in the PDF |
| `messages` | Messages you sent | Standing | Not in the PDF |
| `message_hides` | Messages you hid | Standing | Not in the PDF |
| `professionals` | Your professional listing | Standing | Listed in full |
| `professional_claims` | What you told us about yourself | Standing | Not in the PDF |
| `professional_slots` | Times you offered | Standing | Not in the PDF |
| `professional_verifications` | Register checks | Standing | Not in the PDF |
| `blood_donor_profiles` | Your blood donor listing | Standing | Listed in full |
| `blood_requests` | Blood requests you sent | Standing | Listed in full |

### Memories

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `memories` | Memories | Standing | Not in the PDF |
| `scrapbook_items` | Scrapbook items | Standing | Not in the PDF |
| `media_files` | Media items | Standing | Counted, not listed |
| `media_albums` | Albums | Standing | Listed in full |
| `media_people` | Who is in a photo | Standing | Not in the PDF |
| `tags` | Tags | Standing | Listed in full |
| `taggables` | Tagged items | Standing | Not in the PDF |

### Everyday

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `notes` | Notes | Standing | Not in the PDF |
| `note_folders` | Note folders | Standing | Not in the PDF |
| `location_points` | Saved places | Standing | Counted, not listed |
| `location_settings` | Location settings | Standing | Listed in full |
| `events` | Calendar | Dated | Listed in full |
| `event_checklist_items` | Appointment notes | Standing | Not in the PDF |
| `reminder_schedules` | Reminders | Standing | Listed in full |

### Your account

| Table | What it holds | Range | In the PDF |
|---|---|---|---|
| `profiles` | Your profile | Standing | Listed in full |
| `notifications` | Messages sent to you | Dated | Not in the PDF |
| `export_runs` | Earlier exports | Standing | Not in the PDF |
| `export_schedules` | Scheduled exports | Standing | Not in the PDF |
| `plan_grant_requests` | Plan requests | Standing | Not in the PDF |
| `referrals` | People you invited | Standing | Not in the PDF |
| `referral_rewards` | What your invitations earned | Standing | Not in the PDF |
| `account_audit` | Changes to your account | Dated | Not in the PDF |

## What each format leaves out

**JSON and CSV are complete.** Every one of the sixty-five tables above is in both.

**The PDF is not, and that is the point of it.** A PDF is a document people print, hand to a receptionist and
leave on a desk. So it carries what a clinician actually reads and nothing else:

- **Listed in full** — the standing records: conditions, medications, tracker types and targets, children,
  growth measurements, milestones, people, connections, shares, calendar, reminders, your profile.
- **Counted, not listed** — the high-volume dated ones: tracker readings, medication doses, meals, workouts,
  cycle days, baby logs, guided sessions, media items, saved places. Forty rows out of four thousand is a
  sample, and a sample in a document labelled *your record* misleads the one reader it exists for. A listed
  table prints at most **60 rows**.
- **Not in the PDF at all** — the journal, memories, notes, scrapbook items, messages, community replies, and
  everything else somebody wrote for themselves.

:::warning[The journal is never in the PDF, and that one is not a preference]
Everything else on this page is a choice about what is useful. The journal is the one surface in LifeWell that
must not leave on a sheet of paper somebody sets down on a desk. It is in the JSON and the CSV, which are
files you open yourself.
:::

## What no format ever contains

Seven things are absent from **every** export, including the complete ones.

| Absent | Why |
|---|---|
| **Media files themselves** | The images live in your own Google Drive. The export carries the reference, the caption and the date — the bytes were never ours to hand over |
| **Anything shared *with* you** | Somebody else's record, lent to you. It leaves when they revoke it, which a copy in your file would not |
| **Deleted rows** | Deletion is deletion. There is no recycle bin behind the export |
| **Operational logs** | Rate-limit counters, dismissed notices and similar. Interface state, not your record |
| **Your password** | There is not one. Sign-in is Google, and we never see or store a password |
| **Your AI provider key** | Held encrypted, and it is a live credential. Writing it into a plain file you are about to email yourself would be a leak wearing the costume of completeness |
| **AI usage metering** | The meter a limit is counted from, not something you wrote |

Five further tables are held back for the same class of reason, each of them a credential or somebody else's
record:

| Held back | Why |
|---|---|
| Reports you made about a post | Nobody can read that table back, including you. A moderation queue that leaks through a download is the same leak with an extra step |
| A blood donor's released contact details | Given once, to one person, and withdrawable. A row in a file is neither |
| Your Google Drive connection | It holds a live refresh token |
| A Play purchase record | It holds a purchase token Google will honour. Your entitlement is already in the file, on your profile |
| Dismissed announcements | Which notices you closed. Interface state |

And four tables are shared reference data rather than yours: the plan list, the community catalogue, the food
database, and one internal table used by a keep-alive check.

## Reading it back

There is no import. Nothing in LifeWell reads one of these files back in.

The format is documented so that **something else** can — a script, a spreadsheet, another application, or
you in five years with a text editor. Two properties make that practical, and both are deliberate:

1. Every identifier in the file is the database's own column name, so a column means the same thing in the
   JSON, the CSV and this page.
2. The header names its own limits. A partial file says it is partial in its first ten lines.

## When this page changes

Every wave that adds a table adds its row above, and a test asserts the list here matches the schema in both
directions — a table in one and not the other fails the build rather than shipping a silent gap.

If you are writing a reader, key off `schema`. It is `1` today, and it will increase before anything in the
shape above changes meaning.
