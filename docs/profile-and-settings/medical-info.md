---
title: Medical info — blood group, allergies, emergency contact
description: LifeWell medical info on your profile stores blood group, allergies, chronic conditions, emergency contact, and the ICE (in case of emergency) details.
keywords: [emergency medical info, blood group, allergies, ICE contact, in case of emergency, medical alert, ahsan mahmood]
sidebar_position: 8
---

# Medical info

The **medical info** section of your profile is a quick-access record of the medical details someone responding to an emergency would want — blood group, severe allergies, chronic conditions, current medications, your emergency contact, and free-text notes. It's distinct from the deeper [medical records](/docs/health/medical-records) (lab results, vaccinations, history) — this is the 30-second summary that goes on a medical-alert bracelet.

The summary supports:

- A printable / shareable medical-alert card.
- Display on your locked-screen widget (mobile, optional).
- Quick access for emergency-services responders if you share the URL.

## What this section stores

| Field | Type | Notes |
| --- | --- | --- |
| `bloodGroup` | enum | A+, A-, B+, B-, AB+, AB-, O+, O-, unknown |
| `allergies` | array of strings | "Penicillin", "Peanuts", "Latex" — free-text per entry |
| `severeAllergies` | array | Allergies with anaphylactic risk, surfaced more prominently |
| `chronicConditions` | array | "Type 2 diabetes", "Asthma", "Hypertension" |
| `currentMedications` | array | Short list — drawn from the [medications](/docs/health/medications) module |
| `emergencyContact` | object | Name, relationship, phone, optional email |
| `emergencyContactSecondary` | object (optional) | Backup contact |
| `bloodPressureBaseline` | optional | Typical reading for paramedic context |
| `medicAlertNotes` | string | Free text — anything else a responder should know |
| `organDonor` | enum | Yes / no / undecided |
| `dnrStatus` | enum (optional) | Do-not-resuscitate; legally needs paperwork, this is for personal reference |

Filling all fields takes 5 minutes; the value comes when you actually need them.

## Why this exists separately from medical-records

The [medical-records](/docs/health/medical-records) module holds lab results, vaccination history, surgical history — comprehensive but slow to read. The medical-info section is the "first responder summary" — what someone needs in the first 30 seconds of an emergency: blood group, what you're allergic to, who to call, your most relevant chronic conditions.

Both surfaces store overlapping data (blood group is in both); the medical-info section is the *abstract*.

## Medical-alert card

Generate a printable medical-alert card from your medical-info page:

- A wallet-sized card (front: name + blood group + emergency contact; back: severe allergies + chronic conditions).
- Print at home (PDF export).
- Order via a third-party medical-alert service (LifeWell doesn't make jewelry; the card text translates to engraving requests).

Some users carry the physical card in their wallet; others rely on the phone-based options.

## Lock-screen medical-info widget (mobile)

On mobile (Android, iOS in progress), you can opt to expose your medical-info as a lock-screen widget. The widget shows:

- Blood group.
- Severe allergies.
- Emergency contact name + phone.
- A "tap here for full info" link.

The widget is opt-in; default is off. Enabling it means anyone with physical access to your phone (without unlocking) can read this information. Trade-off: emergencies are more useful when the info is readable; theft scenarios are minor since the info is not a security secret.

## Sharing your medical info externally

Three options:

- **Print** the medical-alert card (no internet required).
- **QR code** linking to a public read-only version of your medical info (the URL is unique and revocable).
- **NFC tag** (if you have a programmable tag) writing your medical-info URL to it for tap-to-read.

The QR / NFC versions are stripped down — they expose only the medical-alert essentials, not your full account.

## Emergency-services responder context

If a paramedic or emergency-room doctor encounters your phone or wallet:

- The medical-alert card / QR / lock-screen widget surfaces blood group + allergies + contact.
- They can scan / call for more info.
- The data is read-only at the public URL; no LifeWell account access.

This isn't a substitute for emergency-services notification systems (which vary by country) — it's an information layer.

## Updating medical info

You should update medical info when:

- A new severe allergy is discovered.
- You start or stop a chronic medication.
- Your emergency contact changes.
- A chronic condition develops or resolves.
- You change your organ-donor status.

LifeWell prompts a quarterly review with "is your medical info current?" — easy to dismiss; useful to occasionally take seriously.

## What this is not

- **Not legally binding.** A DNR status here is *not* legally binding — you need notarised paperwork for that. The DNR field is for personal reference, not for emergency-care override.
- **Not a substitute for a medical-alert bracelet.** A wearable visual medical-alert is faster for first responders than digging through a wallet or phone.
- **Not encrypted end-to-end.** Standard Firebase encryption applies. For maximum privacy, you can leave fields empty.
- **Not connected to emergency services.** LifeWell doesn't auto-dial 911 / 999 / 112 / 100.
- **Not auto-populated from medical records.** You enter the summary yourself.

## Honest framing

A LifeWell medical-info card is a useful addition to the layers a first responder might check. The most reliable medical-alert system remains the well-engraved physical bracelet or necklace. Use the LifeWell card as a supplement, not a replacement.

## Privacy

- Standard Firebase encryption at rest.
- Public QR / NFC versions are minimised (only the essentials, no full account access).
- The URL is unique and revocable — generate a new one to invalidate the old.
- Lock-screen widget is opt-in.

## Frequently asked

**Should I list all my medications here?**
The medical-info summary is for the most relevant ones — anticoagulants, insulin, anti-seizure, beta-blockers. Full medication list belongs in the [medications](/docs/health/medications) module.

**What if my emergency contact changes their phone number?**
Update their LifeWell connection (which feeds this field) or edit the medical-info field directly. The card / QR reflects the change on next render.

**Is the QR code secure?**
The URL is unique and not guessable. Anyone with the URL can read the medical info, so don't post it publicly. Revoke and regenerate if compromised.

**What about HIPAA / GDPR sensitive-data category?**
LifeWell is a consumer self-tracker (not a covered entity). The data is yours; encryption at rest applies. For very sensitive medical conditions you don't want even Firebase to hold, leave the field empty.

**Can I share the medical-info card with my partner / family member?**
Yes — partner / family-connections with sufficient data-sharing access automatically see your medical info per the [data-sharing](/docs/family/data-sharing) matrix.

## Where to read next

- [Medical records](/docs/health/medical-records) — full medical history (labs, vaccines, surgeries).
- [Medications](/docs/health/medications) — current medication tracking.
- [Blood donor](./blood-donor) — opt-in donor directory.
- [Security](./security) — account-level security settings.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
