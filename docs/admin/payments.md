---
title: Admin payments — review, refunds, payout reconciliation
description: The LifeWell admin Payments page reviews user payments, processes refunds, reconciles consultation-credit usage, and tracks payouts to verified professionals.
keywords: [admin payments, refund processing, payment reconciliation, professional payouts, credit ledger, ahsan mahmood]
sidebar_position: 6
---

# Admin payments

The **admin Payments** page is the back-office view of LifeWell's transactional system — user payments for credits / premium, refunds, consultation-credit usage, and payouts to verified professionals. The page shows transactions; the actual money movement happens via the external payment processor (aoneahsan.com/payment) plus the eventual in-app-purchase flows.

This page is admin-only and audit-logged. Financial actions require dual-admin sign-off for amounts above set thresholds.

## What admins can do

| Action | Use |
| --- | --- |
| **Review payment** | See user, amount, type, status |
| **Process refund** | Refund a charged payment (within policy window) |
| **Adjust credit balance** | Grant or deduct credits (with reason) |
| **Track professional payouts** | Pending / paid amounts per pro |
| **Reconcile** | Match external-processor records with LifeWell credit ledger |

## Payment record fields

Each payment row shows:

- User UID + display name.
- Amount + currency.
- Type — credit purchase / premium subscription / consultation payment.
- Status — pending / completed / refunded / disputed.
- External processor reference (e.g. transaction ID at aoneahsan.com/payment).
- Created date + completed date.
- Notes (admin-added).

Admins don't see the user's card number or bank details — those stay with the processor.

## Refund flow

To process a refund:

1. Open the payment.
2. **Refund** → required: reason, full or partial amount.
3. If amount > threshold (typically $50), dual-admin approval prompt.
4. The system:
   - Marks the payment refunded in LifeWell's ledger.
   - Returns credits / premium to the user where appropriate.
   - Triggers the actual refund via the external processor (manual step for now; automated in the future).
5. The user sees a "refund processed" email + in-app banner.
6. The audit log records the refund.

## Refund policy enforcement

The page surfaces the relevant policy when refunding:

- **Premium**: refundable pro-rata within first 14 days.
- **Credits**: refundable within 30 days if unused; partial refund if some used.
- **Consultations**: per the consultation cancellation policy (typically 24 hours).

Admins can override policy with dual-admin approval (e.g. exceptional circumstances).

## Professional payouts

For verified professionals offering consultations:

- Each consultation completed = credits earned (minus platform fee).
- Earnings accrue in the pro's payout balance.
- Monthly (or threshold-based) payout — admin reviews and initiates.
- Payout goes to the pro's external account (bank / PayPal / etc.).

The page shows each pro's:

- Total earned (lifetime).
- Pending payout balance.
- Last payout date.
- Per-consultation earnings breakdown.

## Reconciliation

Once a month, admins reconcile LifeWell's credit ledger against the external processor's transaction list:

1. Export LifeWell's transactions for the month.
2. Export from the external processor.
3. Diff — should match.
4. Resolve discrepancies (rare but happen with refund timing, partial captures, chargebacks).

The page has a built-in reconciliation tool that highlights mismatches.

## Disputed payments

Chargebacks from the processor land here:

- Status flips to "disputed".
- Admin reviews the original transaction + user history.
- Decides: contest the chargeback (with evidence) or accept the loss.
- If accepted: the user's credits / premium revert (rare; usually means the user already used them and the chargeback is fraud).

## Audit log

Every financial action — refunds, credit adjustments, payouts — logs to the audit collection. This is the strictest audit surface; superadmin review of the log is monthly.

## What admins CANNOT do

- **Read user payment method details** (the external processor holds these).
- **Initiate payments on behalf of users** (no admin-side "charge user").
- **Skip dual-admin** for above-threshold transactions.
- **Modify audit log entries.**

## Where to read next

- [Premium and payments (user)](/docs/profile-and-settings/premium-and-payments) — user-side.
- [Verifications](./verifications) — professional verification (prerequisite for payouts).
- [Users](./users) — credit adjustments at user level.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
