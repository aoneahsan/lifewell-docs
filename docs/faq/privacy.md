---
title: Privacy FAQ — what we collect, who sees it, account deletion
description: Frequently asked questions about LifeWell privacy — what data is collected, who can access it, retention, deletion, third-party sharing, regulatory questions.
keywords: [privacy faq, data collection, account deletion, gdpr, hipaa, third party sharing, ahsan mahmood]
sidebar_position: 3
---

# Privacy FAQ

## What data does LifeWell collect?

Only what you provide:

- **Account metadata** — name, email, sign-up date.
- **Tracking entries** — what you log into the various surfaces.
- **Media** — photos, audio (stored in your Google Drive, not on our servers).
- **Settings** — preferences, theme, reminders.

We **do not** collect:

- Browsing activity beyond LifeWell itself.
- Location without explicit opt-in.
- Contacts without explicit opt-in.
- Sensor data (no auto-capture from accelerometers, heart-rate sensors, etc.).
- Biometrics for analytics.

## Does LifeWell sell my data?

**No.** No data sales, no ad-network sharing, no data-broker partnerships. The revenue model is premium subscriptions + consultation platform fees, not ad targeting.

## Does LifeWell train AI on my data?

**No.** Your health logs, notes, memories, chats are not used for any AI training — neither LifeWell's nor third parties'. The Firestore documents stay in your account.

## Who can see my data?

- **You** — full access.
- **Partner connections** — only data you've granted via the [data-sharing matrix](/docs/family/data-sharing).
- **Platform admins** — account metadata only, not personal records. Firestore rules deny admin reads of personal data.
- **Verified consultation professionals** — only the data you explicitly share into a consultation thread.
- **Nobody else.**

## What about Firebase / Google?

Firestore is the database; Google operates the infrastructure. Standard Firebase encryption at rest. Google's data-handling for Firebase Cloud is governed by their Cloud Data Processing Addendum. We follow least-privilege configuration.

## Is LifeWell HIPAA compliant?

LifeWell is a consumer self-tracker, not a covered entity under HIPAA. We're not a clinic, insurer, or healthcare provider. The platform stores your data with encryption at rest and transport; standards align with consumer-app best practices, not HIPAA-grade audit trails.

If you need HIPAA-grade record-keeping (e.g. a clinician uploading their patients' records), LifeWell is not the right tool.

## GDPR / CCPA?

LifeWell processes data on your behalf:

- **You're the controller** of your data.
- **LifeWell is a processor**.
- **Right to access**: PDF / JSON export from any page.
- **Right to deletion**: account deletion with 30-day grace then complete purge.
- **Right to portability**: bulk JSON export (planned; partial via per-page export today).
- **Right to correct**: edit any field at any time.
- **Right to restrict processing**: pause account (rare — typically just delete).

Full posture in the [privacy policy](https://lifewell.aoneahsan.com/privacy).

## Where is my data stored?

- **Metadata + tracking entries**: Firestore (`us-central1` region currently).
- **Media**: your own Google Drive (region depends on your Google account).
- **Auth tokens**: Firestore + OS-encrypted local storage on device.

Data residency for users in regulated jurisdictions: contact [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) for the latest.

## How long is data retained?

- **Active accounts**: indefinitely (until you delete).
- **Deleted accounts**: 30-day grace period after deletion request, then complete purge.
- **Inactive accounts**: not auto-deleted; we don't reclaim accounts for non-use.

## What about my partner's view of me?

Partners (granted via [partner-features](/docs/community/partner-features)) see only what your data-sharing matrix specifies. By default, partner sharing is opt-in per category — connecting to a partner doesn't auto-share anything beyond identity. You control the visibility.

## Can I be anonymous in communities?

You can use a pseudonym (display name + photo of your choice) in community profiles. Underlying data ties to your account for moderation, but isn't visible to other community members.

## What if I'm hacked / lose my password?

- Reset via the password-reset flow (email link from Firebase Auth).
- The platform never sees your password — Firebase Auth handles it.
- Enable 2FA in [Security](/docs/profile-and-settings/security) for an extra layer.
- If you suspect account compromise, change password + sign out all devices.

## Where do I read the full policy?

[https://lifewell.aoneahsan.com/privacy](https://lifewell.aoneahsan.com/privacy) — the canonical legal document. This FAQ summarises in plain language.

## Where do I read next?

- [Privacy and security (concept)](/docs/concepts/privacy-and-security) — architectural details.
- [Security (profile)](/docs/profile-and-settings/security) — your account-security controls.
- [Data sharing (family)](/docs/family/data-sharing) — partner / family visibility.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
