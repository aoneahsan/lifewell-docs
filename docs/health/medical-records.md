---
title: Medical records — lab results, vaccinations, medical history
description: LifeWell medical records hold typed lab results, a vaccination log, and a medical-history note. Self-reported and not an insurance-grade EHR.
keywords: [lifewell medical records, lab results tracker, vaccination log, medical history, personal health record, ehr, ahsan mahmood]
sidebar_position: 13
---

# Medical records

**Medical records** in LifeWell is a personal copy of three kinds of clinical reference: typed lab results, a vaccination log, and a free-text medical history. Each entry is manually entered (or photographed) by you, lives only in your account, and is exportable to PDF for sharing with a clinician. It is **not** an electronic health record (EHR), not connected to any provider portal, and not a substitute for the formal records your clinic keeps.

This page is a "I'd like to keep this with me" surface, not an insurance-grade record system. Treat it as a glove-box copy of useful clinical detail, available offline, that travels with your account.

## What you can store

| Surface | Field shape | Use |
| --- | --- | --- |
| [Lab results](./medical-records) | Test name + values + date in the notes field | Bloodwork, cholesterol panel, A1C, thyroid, vitamin D, hormone panels |
| [Vaccinations](./medical-records) | Vaccine name + date in the notes field | COVID, flu, MMR, tetanus, HPV, travel vaccines |
| [Medical history](./medical-records) | Free-text history note | Past conditions, surgeries, family history, allergies |

Each surface follows the same simple-form pattern as the conditions pages: a small form, a list of past entries, optional PDF export.

## Lab results

The lab-results page captures one test result per entry. The form asks for:

- **Numeric value** (validated as a non-negative number, used for trend charts when the same test is logged repeatedly)
- **Notes** (required) — type the full test name, the reference range from your lab report, units, and any context

Example notes content:

> *HbA1c — 5.4% (reference 4.0–5.6%), drawn 2026-04-22 by LabCorp, fasting not required for this test*

The reason this isn't a structured table is that lab tests vary enormously in their fields (single value, ratio, qualitative, sub-panels), and a structured schema strict enough to be useful would also be too strict to fit the test you actually want to log. Free-text notes are flexible; the trend chart still works for any single recurring numeric value.

A photo-of-report upload (with FilesHub for storage) is on the roadmap. For now, photograph the report on your phone and store the file outside LifeWell, then type the key values here.

## Vaccinations

The vaccinations page logs one shot per entry. The form asks for:

- **Value** (kept at 1 — represents one dose; this is not a quantity)
- **Notes** (required) — vaccine name, dose number, brand if known, location, date

Example:

> *COVID-19 mRNA booster — Pfizer-BioNTech, dose 4, administered 2026-09-15 at City Pharmacy, lot #ABC123*

The CDC and your country's national immunisation programme publish recommended schedules. LifeWell does not check whether your vaccination history matches the recommended schedule — that's a clinician conversation. The app keeps the receipt.

## Medical history

The medical-history surface is one free-text note per significant entry. Useful entries:

- **Surgeries** — what, when, who performed it, what hospital.
- **Hospitalisations** — date, reason, length of stay.
- **Past conditions** — anything diagnosed and treated.
- **Active conditions** — chronic conditions worth a clinician knowing about.
- **Family history** — first-degree relatives with significant conditions.
- **Drug allergies and intolerances** — what reaction, how severe.
- **Implanted devices** — pacemaker, IUD, surgical hardware.

A clinician taking your history is going to ask these questions. Having the answers typed out (with dates and specifics) speeds up every visit.

## Export and sharing

Each surface has a PDF export from the page header. Useful for:

- Pre-filling a new-patient intake form.
- Travel — keeping a copy of vaccinations and key medications.
- A second-opinion appointment where you don't want to rely on the new clinician requesting records.
- Emergency contacts — a partner or family member can have an export if you've arranged it.

Partner sharing (read-only) is available under [Data sharing](/docs/profile-and-settings/data-sharing) — useful for spouses managing a partner's care.

## Privacy

Medical-records data is among the most sensitive in the app. Same posture as everything else:

- Per-user Firestore documents, rule-protected so only you can read.
- Not sold, not mined for AI training, not aggregated.
- Free-text notes (test names, vaccine brands, history) are visible only to you.
- Account deletion schedules a 30-day grace window, after which everything is purged (see [Security](/docs/profile-and-settings/security)).

For users in jurisdictions with specific medical-records regulations (HIPAA in the US, GDPR Article 9 special categories in the EU, similar elsewhere), note that LifeWell is a consumer self-tracker, not a covered entity — your provider's EHR remains the formal medical record.

## What this surface is not

LifeWell medical records are:

- **Not an EHR.** No HL7 interoperability, no FHIR endpoints, no provider-portal sync.
- **Not insurance-acceptable.** Insurers require provider-issued records, not user-typed ones.
- **Not authenticated.** Anyone with access to your unlocked LifeWell account can edit your medical history. Use a strong password and enable 2FA if your auth provider supports it.
- **Not reviewed for accuracy.** The app does not verify a typed-in test name is real, a vaccine brand exists, or a date is plausible.
- **Not a reminder for upcoming care.** Set vaccination boosters, lab-followup dates, etc. as reminders manually under [Reminders](/docs/profile-and-settings/reminders).

## How to make this surface most useful

A few practices that work for users with chronic conditions or frequent specialist visits:

1. **Type the lab-report row exactly** — test name, value, units, reference range, lab name. Future-you (and a new clinician) will not remember the lab's specific reference range from a screenshot.
2. **Use the same name across entries** — "HbA1c" not "A1C" some times and "Hemoglobin A1C" others. Consistent naming makes the trend chart work and future-you's search faster.
3. **Date everything in the note as well as the timestamp.** The timestamp is when you logged it; the note's date is when the test or shot happened. They're often weeks apart.
4. **Photograph the report and store it outside the app** for now. The note here is a typed summary, not the source.

## Frequently asked

**Can I import records from my provider portal?**
Not yet. Provider-portal integration (via HL7 FHIR or similar) is on the long-term roadmap but is a substantial engineering effort and may require regional certifications. For now, copy the key values manually.

**Why does the vaccinations form require a numeric value when it doesn't matter?**
A historical schema quirk — all simple-form pages share the same `value` + `notes` shape, and the vaccination page hardcodes `value=1`. A cleaner schema is on the roadmap.

**Can I attach a photo of a lab report?**
Photo upload is a planned feature pending FilesHub wiring. For now, store the photo in your phone's gallery (or your cloud drive) and reference its filename in the notes.

**What happens to medical records if I close my account?**
Same as all other data — 30-day grace window, then complete purge. If you need a permanent copy for your records, export every PDF before initiating account deletion.

**Can I import a CSV of past lab results?**
Not yet. CSV import is on the roadmap.

## Where to read next

- [Conditions](./conditions) — log ongoing conditions whose history lives here.
- [Medications](./medications) — log the medications referenced in your history.
- [Vitals](./vitals) — daily vital signs that complement lab results.
- [Privacy and security](/docs/concepts/privacy-and-security) — how this sensitive data is protected.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
