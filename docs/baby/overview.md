---
title: Baby module — feeding, sleep, diapers, growth, milestones
description: LifeWell's baby module tracks feeding, sleep, diapers, growth, milestones, and a baby-names explorer for one or multiple infants, with optional partner sharing.
keywords: [lifewell baby tracker, infant log, baby feeding tracker, baby sleep tracker, diaper log, growth charts, milestones, ahsan mahmood]
sidebar_position: 1
---

# Baby module overview

The LifeWell **baby module** tracks the practical daily inputs of caring for an infant — feedings, sleep, diapers, growth measurements, and milestones — for one or more babies on a single account. A separate **baby-names explorer** sits on the same nav as a reference tool for parents-to-be. Every record is owned by the primary parent, optionally shared with a partner, and stored under the baby's record in Firestore.

This page is the map of the baby module. It links to each surface, explains what data lives where, and lists what the module deliberately doesn't try to do.

## Surfaces in the baby module

| Surface | What it tracks | Page |
| --- | --- | --- |
| Profile | Name, gender, DOB, birth weight/length/head circumference, pediatrician, hospital | [Baby](./overview) |
| Feeding | Breast, bottle, solid feedings with duration, side, amount, food items | [Feeding](./feeding) |
| Sleep | Naps and overnight sleep with quality, wake-ups, location | [Sleep tracking](./sleep-tracking) |
| Diapers | Wet / dirty / both / dry changes with stool detail and rash tracking | [Diapers](./diapers) |
| Growth | Weight, length, head circumference + percentiles | [Growth](./growth) |
| Milestones | 27 predefined + custom milestones with photos | [Milestones](./milestones) |
| Names | Searchable database of 200+ baby names | [Baby names](./baby-names) |

Each tracking surface shares the same baby profile, so feedings on Tuesday and a milestone on Thursday land under the same baby. Multi-baby accounts have a baby switcher at the top of every page.

## Baby profile

A baby profile holds:

- **Name + nickname** — display names.
- **Gender** — male / female / unknown.
- **Date and time of birth** — drives age calculation and growth-chart anchoring.
- **Birth measurements** — weight (grams), length (cm), head circumference (cm).
- **Profile photo** — uploaded via FilesHub.
- **Medical info** — blood type, allergies, medical notes.
- **Care team** — pediatrician name + phone, hospital of birth.
- **Partner access** — list of partner user IDs who can read/edit.

Age is computed on every page from `(now - DOB)` and displayed in months + days (under 24 months) or years + months (24+ months). The math lives in `calculateBabyAge()` and `formatBabyAge()` in `types/baby.ts`.

## Partner sharing

A baby can have one or more partner user IDs attached. Each partner sees:

- All tracking surfaces for that baby (feedings, sleep, diapers, growth, milestones).
- Write access — partners log feedings and diaper changes too.
- Read access to the baby profile (medical info, pediatrician contact).

Partners do not see your other LifeWell data (your vitals, your meals, your notes) — sharing is per-baby, scoped narrowly. The full sharing model is documented under [Data sharing](/docs/profile-and-settings/data-sharing).

This matters in practice because most infants are cared for by two parents (often on different schedules), and both need to know "when was the last feed?" and "did anyone change the diaper at 02:00?" without texting each other.

## Daily summary

Every day, the baby module computes an aggregate summary:

- **Feeding**: total sessions, total duration, breast / bottle / solid counts, total bottle ml.
- **Sleep**: total sessions, total minutes, night vs nap split, average quality.
- **Diapers**: total changes, wet vs dirty counts, rash flag.
- **Milestones**: count logged today.
- **Mood**: optional happy / fussy / sick / neutral tag for the day.

The summary appears on the baby dashboard and is exportable as a PDF — useful for pediatrician visits where the question "what's been happening this week?" can otherwise mean digging through your phone.

## Reminders

Baby-specific reminders are available under [Reminders](/docs/profile-and-settings/reminders):

- **Feeding reminders** — useful for newborns on strict feeding schedules.
- **Diaper change reminders** — typically after-feeding cue.
- **Sleep reminders** — bedtime cue.
- **Medication reminders** — for vitamin D drops, prescribed meds, etc.

Default schedules are off — most parents find their own rhythm and don't want their phone pinging them about diapers.

## What the module is not

- **Not a clinical record system.** Pediatrician notes, prescribed medications, immunisation history — all of those live with your clinic, not here. LifeWell is a personal day-to-day log.
- **Not a sleep-training programme.** The sleep tracker captures what happened; it does not prescribe sleep-training methods. Books, classes, or sleep consultants exist for that.
- **Not a feeding-advice engine.** The feeding log captures what your baby ate; it does not tell you what to feed. Pediatricians, lactation consultants, and dietitians fill that role.
- **Not a developmental-delay screening tool.** Milestone tracking captures dates; it does not flag delays. Your pediatrician's developmental screens (e.g. ASQ-3, M-CHAT) are the right tool for that conversation.
- **Not paired with smart bottles, pacifiers, or wearable monitors.** Manual entry only.

## Privacy

Baby data is sensitive: medical info, photos, daily routines. Same posture as all other LifeWell surfaces:

- Per-baby Firestore documents, rule-protected — only the primary parent and explicit partner users can read.
- Photos uploaded through FilesHub with the same protection.
- Not sold, not aggregated for benchmarks, not mined for AI training.
- Account deletion (or per-baby archival) follows the same 30-day grace window as the rest of the app.

If you need to remove a partner from a baby's record, do it from the baby profile's "Partner access" section. Removal is immediate.

## Getting started

For new parents:

1. Create a baby profile under **Baby → New baby** with at minimum name and DOB.
2. (Optional) Add birth measurements, photo, pediatrician contact.
3. (Optional) Invite your partner under "Partner access".
4. Start logging feedings, diapers, and sleep from the dashboard or per-surface pages.

Don't try to backfill the first weeks — you'll burn out. Log forward from now.

## Frequently asked

**Can I track multiple babies on one account?**
Yes — twins, triplets, or older siblings each get their own profile. The dashboard's baby switcher lets you flip between them.

**My baby is adopted — does the date of birth matter?**
DOB drives age calculation, which feeds milestone "typical age range" guidance. Enter the actual DOB; the date you started parenting is separate (you can note it in the profile notes).

**Can I export everything for a pediatrician visit?**
Yes — every surface has a per-baby PDF export. The dashboard's "Daily summary export" bundles the week or month into one document.

**What happens when my child is too old for this module?**
The baby module is designed for ~0–24 months. After that, daily feeding/diaper tracking stops being useful, but milestone tracking can continue. You can archive the baby profile to clean up the nav while preserving the history.

**Is LifeWell HIPAA-compliant for baby medical data?**
LifeWell is a consumer self-tracker, not a covered entity under HIPAA. The medical info you store here is your record, not a clinical EHR.

## Where to read next

- [Feeding](./feeding) — breast / bottle / solid feeding log.
- [Sleep tracking](./sleep-tracking) — nap and overnight sleep.
- [Diapers](./diapers) — change log + stool / rash detail.
- [Growth](./growth) — weight / length / head circumference with percentiles.
- [Milestones](./milestones) — 27 predefined + custom milestones.
- [Baby names](./baby-names) — searchable name database.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
