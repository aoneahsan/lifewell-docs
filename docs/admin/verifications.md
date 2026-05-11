---
title: Admin verifications — professional + identity verification review
description: The LifeWell admin Verifications page reviews professional applicants (doctors, midwives, etc.) and identity-verification requests, with strict document checks.
keywords: [verification review, professional verification, identity verification, license check, ahsan mahmood]
sidebar_position: 7
---

# Admin verifications

The **admin Verifications** page is where platform admins review verification requests — health professionals (doctors, nurses, midwives, etc.) applying for [consultations](/docs/community/consultations) eligibility, and (in select cases) identity-verified user status for high-trust features. Each request includes submitted documents; admins verify against issuing authorities and approve / reject with reason.

This is a sensitive responsibility — verifying a doctor wrongly damages users who book consultations with them. The page enforces a checklist-driven review.

## Verification types

| Type | What gets verified |
| --- | --- |
| **Professional** | Identity + license + credentials for consultations eligibility |
| **Identity** | Government-ID-confirmed identity for high-trust features (blood donor, community admin) |
| **Business** | (Future) Verified-organisation accounts |

## Professional verification

For a [consultation professional](/docs/community/consultations), the applicant submits:

1. **Identity document** — government-issued photo ID matching their stated name.
2. **License document** — current, active professional license (medical board, nursing board, dietitian registration, etc.).
3. **Specialisation evidence** — board certifications, advanced training, residency completion (where claimed).
4. **Photo for profile** — recent clear headshot.
5. **Bio + credentials list** — typed details.

Admins verify:

- **Identity authenticity** — does the ID look genuine? Name matches submission?
- **License authenticity** — does the issuing authority's online registry confirm the license is current and active?
- **License jurisdiction** — license valid in the jurisdiction the pro states they practice in?
- **Specialisation claims** — does the supporting evidence match what they claim?
- **Photo** — appears to be the same person as the ID? Recent? Appropriate for a professional profile?
- **No red flags** — past sanctions, ongoing disciplinary action (via public registries).

## License verification process

For each license claim:

1. Open the issuing authority's online registry (e.g. UK GMC, US state medical boards).
2. Search by license number.
3. Confirm: name matches, status active, no current restrictions.
4. Take a timestamped screenshot for the audit log.

LifeWell does not automate this with API calls because:

- Most authorities don't expose APIs.
- License authenticity check is high-stakes; human verification is appropriate.
- The volume is low (a few applications per week, not thousands).

## Identity verification

For non-professional identity verification (used for blood-donor visibility, community-admin elevation):

1. Government-ID upload.
2. Optional: selfie with ID for liveness check.
3. Admin reviews:
   - ID appears genuine.
   - Name matches account.
   - Photo matches the LifeWell profile.

Identity verification is a smaller bar than professional — confirming "this is a real person, this is the account holder", not "they are a licensed professional".

## Approval

Once verified:

1. Tap **Approve**.
2. Optional notes.
3. The pro / user gets:
   - "Verified" badge on their profile.
   - Eligibility for the gated feature (consultations / blood donor / community admin).
4. Audit log records the approval with admin + timestamp + checked-items checklist.

## Rejection

If verification fails:

1. Tap **Reject**.
2. Required: detailed reason.
3. The applicant gets an email + in-app banner with the rejection reason and how to re-apply.

Re-application is allowed once the rejection reason is addressed (e.g. expired license → renew → re-apply).

## Renewal

Verifications expire annually:

- License renewal reminders fire 60 days before expiry.
- The pro updates their license number / submits renewed-license document.
- Admin re-verifies.
- On expiry without renewal, the verified badge is removed.

## Document handling

Submitted documents (IDs, licenses) are:

- **Stored encrypted** at rest.
- **Visible to verifying admins only** (not to the entire admin team).
- **Auto-deleted** 60 days after verification (or after rejection).
- **Never used for any other purpose** — no AI training, no aggregation.

The 60-day retention is for audit / re-review window. After that, the verification record persists but the source documents are purged.

## Audit log

Every verification action logs:

- Admin who reviewed.
- Timestamp.
- Documents seen (file IDs, not content).
- Checklist completion.
- Decision + reason.

## What admins CANNOT do here

- **Skip the checklist** for friends / colleagues.
- **Read the pro's other LifeWell data** (memories, health logs, etc.).
- **Self-verify** their own application.

## Where to read next

- [Consultations](/docs/community/consultations) — what verification gates.
- [Blood donor](/docs/profile-and-settings/blood-donor) — identity verification for donor directory.
- [Communities (admin)](./communities) — community-admin verification.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
