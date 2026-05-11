---
title: Blood donor — opt-in donor directory with rate limits
description: LifeWell blood donor is an opt-in public directory where verified donors offer to help in emergencies, with rate limits to prevent harassment.
keywords: [blood donor directory, blood donation, blood group, donor finder, emergency blood, rate limits, ahsan mahmood]
sidebar_position: 7
---

# Blood donor

**Blood donor** is an opt-in public directory in LifeWell. If you enable it, your blood group and chosen contact methods become searchable to other LifeWell users who need a donor in your area. Rate limits prevent harassment — most users default to "1 contact request per day, 3 per week, 5 per month". The platform is built around the simple human reality that someone, somewhere, sometimes needs blood urgently.

This feature is **completely opt-in**. The default is off; you decide whether to participate.

## What enabling does

When you toggle **Show me in the blood donor directory** on:

1. Your blood group becomes searchable.
2. Your chosen display name + city become public on your donor card.
3. Other LifeWell users in need can contact you via your chosen methods.

If you toggle off later, your card disappears from searches; any past contact records remain (so you have history for your own use).

## What a donor profile stores

| Field | Required | Notes |
| --- | --- | --- |
| `bloodGroup` | Yes | Standard ABO + Rh (A+, A-, B+, B-, AB+, AB-, O+, O-) |
| `displayName` | Yes | Your name (or pseudonym) for the directory |
| `city` | Optional | For geographic filtering |
| `country` | Optional | For broader filtering |
| `contactLimits` | Yes | How many requests you'll accept (day / week / month) |
| `preferredContactMethods` | Yes | Subset of in-app / phone / WhatsApp / email |
| `showPhone` | Boolean | Whether to expose your phone number |
| `showEmail` | Boolean | Whether to expose email |
| `phone` | Conditional | Stored only if `showPhone` is true |
| `availabilityStatus` | Yes | `available` / `cooldown` / `paused` |

## Contact methods

You pick which methods other users can use to contact you:

- **In-app** — they message you via LifeWell chat.
- **Phone** — they call your phone (you'd have shown your number).
- **WhatsApp** — they message your WhatsApp (number shown).
- **Email** — they email you.

Pick all four if you want to be widely reachable; pick only in-app if you want to keep your phone private. The platform respects your choices — only the methods you've enabled are surfaced on your donor card.

## Rate limits

To prevent harassment, you set how many contact requests you'll accept:

| Limit | Default | Range |
| --- | --- | --- |
| Per day | 1 | 0–20 |
| Per week | 3 | 0–20 |
| Per month | 5 | 0–20 |

A `0` limit means "no contacts in that window" — useful if you're temporarily paused.

When a requestor exceeds the limit (you've already had a request today and the limit is 1/day), they see a message: "This donor has reached today's contact limit. Try another donor or wait until tomorrow."

## Availability status

| Status | Meaning |
| --- | --- |
| `available` | Active in the directory; contact requests allowed |
| `cooldown` | Recently donated; appears as "in cooldown until [date]" — contact limited |
| `paused` | Manually paused; hidden from search until you resume |

Cooldown follows medical recommendations — most jurisdictions require 56–84 days between whole-blood donations (8 weeks is the common standard from the Red Cross). LifeWell lets you pick 2 to 8 months as cooldown, defaulting to 3 months.

When in cooldown, you appear as cooldown status (not paused) so requestors know you're a real, recent donor and can plan around the future-available date.

## Donation records

Each time you donate (whether through LifeWell-coordinated request or independently), log it in the donation history:

- Date.
- Location (donation centre name).
- Type (whole blood / plasma / platelets).
- Volume (mL).
- Notes (any reactions, hydration, etc.).

The log:

- Calculates cooldown end automatically.
- Surfaces total donations / total volume on your profile (lifetime).
- Builds the history a donor centre might ask for.

## Finding a donor (the requestor's view)

If you need a donor:

1. Open the [blood donors directory](/docs/profile-and-settings/blood-donor).
2. Filter by blood group + your location (city / country).
3. Browse donor cards.
4. Tap **Contact** on a donor whose limits haven't been hit today.
5. Pick a contact method (one of their preferred methods).
6. Send the request.

LifeWell logs the request on the donor's side (counting toward their rate limit) and forwards the contact via the chosen method.

## Verification — donor identity and blood group

Donor profiles aren't auto-verified. The blood group is self-reported. **Always verify with a blood test before transfusion.** LifeWell does not connect to medical-test databases or government donor registries.

The honest framing: the directory is a starting point ("are there any A-positive donors in my city?"), not a clinical guarantee. A donor centre / hospital does the actual matching.

## What this feature is

- A way for users willing to donate to be findable in emergencies.
- A respectful contact system with built-in rate limits.
- A personal donation log.
- A bridge to local donation centres (LifeWell does not transfuse anyone).

## What this feature is not

- **Not a clinical donor matching service.** Hospitals do the matching with full testing.
- **Not a blood bank.** LifeWell doesn't hold any blood.
- **Not anonymous.** Donor cards show display name + city; you're contactable.
- **Not for cross-border emergencies in most cases.** Blood logistics are local.
- **Not insurance-billable.** Donation is voluntary.

## Honest framing on blood donation generally

A few facts worth knowing (Red Cross + WHO public-health resources):

- **Most people can donate.** Age, weight, recent health, and recent travel are the typical screens.
- **Whole-blood donation takes about an hour** — the actual blood draw is ~8–10 minutes.
- **Cooldowns** between donations: 56 days for whole blood (US Red Cross), 8 weeks (UK NHS). Platelets shorter; plasma can be more frequent.
- **Recovery** — most donors feel fine afterward with adequate hydration; some experience light dizziness.
- **Compatibility**: O-negative is universal donor; AB-positive is universal recipient. ABO + Rh matching is essential for safe transfusion.

LifeWell links to the Red Cross, NHS, and your country's national blood-service guidance for full details.

## Privacy

The opt-in nature is essential:

- Default off.
- Profile data minimised — only what you choose to share.
- Phone / email visibility separately controllable.
- Pseudonyms allowed.
- Pause at any time; remove from directory at any time.
- Past contact requests logged for your own audit.

## Frequently asked

**Will I be flooded with requests?**
The rate limits cap this. With the default 1/day, 3/week, 5/month, even a popular donor in a small area handles a manageable volume.

**Can I see who contacted me historically?**
Yes — your blood-donor activity log shows past contacts (their pseudonym + city + date + outcome if you marked it).

**What if I get a request from someone obviously not in need?**
Use the **Report** button. The platform investigates suspicious requestors.

**Do I have to share my real name?**
No — display name can be a pseudonym. The trade-off: some recipients prefer real-name donors for trust.

**What's the relationship between LifeWell and official blood services?**
None formally. LifeWell is a peer directory. Official services (Red Cross, NHS, etc.) operate independently. LifeWell directs users to those services for actual donation.

## Where to read next

- [Medical info](./medical-info) — blood group is stored here too.
- [Privacy and security](/docs/concepts/privacy-and-security) — opt-in posture across LifeWell.
- [Reminders](./reminders) — set a cooldown-ending reminder.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
