---
title: Data model reference — Firestore collections + document shapes
description: Reference list of LifeWell's Firestore collections (lifewell_* prefix) with key fields per document type. Companion to /docs/concepts/data-model.
keywords: [firestore collections, data model, schema, lifewell prefix, document shape reference, ahsan mahmood]
sidebar_position: 1
---

# Data model reference

This page is a flat reference of every Firestore collection in LifeWell with its key fields. For the conceptual overview (why per-user collections, why these shapes), see [Concepts → Data model](/docs/concepts/data-model). This page is the index.

All collections prefix with `lifewell_` so they don't collide with other Firebase projects sharing the same Google Cloud account.

## Collection list

| Collection | Document | Owner |
| --- | --- | --- |
| `lifewell_users` | Per-user account record | userId |
| `lifewell_user_preferences` | Per-user preferences (units, language, etc.) | userId |
| `lifewell_user_state` | Per-user app state snapshots | userId |
| `lifewell_wellness_profile` | Per-user wellness profile (height, conditions, etc.) | userId |
| `lifewell_water` | Water-intake log entries | userId |
| `lifewell_vitals_bp` | Blood-pressure readings | userId |
| `lifewell_vitals_sugar` | Blood-sugar readings | userId |
| `lifewell_vitals_heart_rate` | Heart-rate readings | userId |
| `lifewell_vitals_weight` | Weight entries | userId |
| `lifewell_vitals_bmi` | BMI entries | userId |
| `lifewell_medications` | Medication definitions | userId |
| `lifewell_medication_logs` | Per-dose logs | userId |
| `lifewell_sleep` | Sleep sessions | userId |
| `lifewell_calories` | Calorie-log entries | userId |
| `lifewell_workouts` | Exercise sessions | userId |
| `lifewell_mood_journal` | Mood entries | userId |
| `lifewell_period_cycles` | Period cycle records | userId |
| `lifewell_fertility_data` | Fertility-awareness daily records | userId |
| `lifewell_babies` | Baby profiles | userId + partnerUserIds |
| `lifewell_baby_feedings` | Feeding sessions | userId |
| `lifewell_baby_sleep` | Baby sleep sessions | userId |
| `lifewell_baby_diapers` | Diaper changes | userId |
| `lifewell_baby_growth` | Growth measurements | userId |
| `lifewell_baby_milestones` | Milestone records | userId |
| `lifewell_people` | Person records | userId |
| `lifewell_family_connections` | Verified family connections | userId |
| `lifewell_memories` | Memory records | userId |
| `lifewell_notes` | Note records | userId |
| `lifewell_note_folders` | Note folder structure | userId |
| `lifewell_journeys` | Journey records | userId |
| `lifewell_location_snapshots` | Location snapshots (opt-in) | userId |
| `lifewell_chats` | Conversation records | userId |
| `lifewell_chat_messages` | Individual messages | userId |
| `lifewell_communities` | Community definitions | platform |
| `lifewell_community_posts` | Community posts | userId (author) |
| `lifewell_community_comments` | Community comments | userId (author) |
| `lifewell_consultations` | Consultation sessions | userId + professionalId |
| `lifewell_consultation_messages` | Encrypted consultation messages | userId + professionalId |
| `lifewell_professionals` | Professional profiles | professionalId |
| `lifewell_blood_donors` | Blood-donor opt-in profiles | userId |
| `lifewell_blood_donations` | Donation history | userId |
| `lifewell_blood_contact_requests` | Contact requests on donor profiles | requestorUserId + donorUserId |
| `lifewell_achievements` | Per-user achievement progress | userId |
| `lifewell_reminders` | Per-user reminder definitions | userId |
| `lifewell_reminder_logs` | Reminder fire history | userId |
| `lifewell_calendar_events` | Calendar event records | userId |
| `lifewell_payments` | Payment records | userId |
| `lifewell_audit_log` | Admin action audit log | platform (admin) |

## Common field patterns

Every document includes:

- `userId` (string, indexed) — owner; Firestore rules check this.
- `createdAt` (Timestamp) — when created.
- `updatedAt` (Timestamp) — last edit.
- `deletedAt` (Timestamp | null) — soft-delete marker (for collections that soft-delete).

## Firestore-rule patterns

Three access patterns across collections:

1. **User-owned**: `request.auth.uid == resource.data.userId` — most collections.
2. **Multi-owner**: `request.auth.uid in resource.data.partnerUserIds` — baby records with partner access.
3. **Public read**: `lifewell_communities`, `lifewell_community_posts` — anyone can read; only authors can write.

The rules deny everything else by default. Admin claims grant **limited** writes (suspend / restore / verifications) — never reads of personal collections.

## Indexes

Firestore composite indexes are defined in `firestore.indexes.json`. Common indexed combinations:

- `(userId, createdAt DESC)` — for chronological lists.
- `(userId, date, dateRange)` — for time-window queries.
- `(communityId, createdAt DESC)` — for community feeds.

Deploy indexes with `firebase deploy --only firestore:indexes`. **Never** deploy with `firebase deploy --only firestore` — that command can delete indexes.

## Document size limits

Firestore caps documents at 1 MB. LifeWell stays well under by:

- **Splitting large documents** into multiple smaller ones (e.g. one document per memory, not all memories in one).
- **Storing media in Google Drive** (not embedded in Firestore docs).
- **Avoiding nested arrays of unbounded length** (paginate instead).

## Where to read next

- [Concepts → Data model](/docs/concepts/data-model) — conceptual overview.
- [Privacy and security](/docs/concepts/privacy-and-security) — rule architecture.
- [Architecture](/docs/concepts/architecture) — broader system view.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
