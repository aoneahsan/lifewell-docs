---
title: Baby feeding — breast, bottle, solids, schedule
description: LifeWell baby feeding log captures breast (side + duration), bottle (ml + type + brand), and solid (foods + reaction) sessions for one or multiple babies.
keywords: [baby feeding tracker, breastfeeding log, bottle feeding ml, solid food introduction, formula brand, baby feeding schedule, ahsan mahmood]
sidebar_position: 2
---

# Baby feeding

The **baby feeding** surface logs every feeding session for a baby — breast (with side and per-side duration), bottle (with amount, type, and brand), or solid (with food items and reaction). The schema is detailed enough to support pediatrician questions about feeding frequency, bottle volumes, and solid-food allergen introduction, but the form is fast enough to log a 02:00 feed without waking you up further.

This is separate from the [adult breastfeeding tracker](/docs/health/breastfeeding) under `/health/`, which tracks your sessions from your perspective. The baby feeding page logs from the baby's perspective and supports bottle + solid in addition to breast.

## Feeding types

| Type | What it captures | Most useful for |
| --- | --- | --- |
| `breast` | Side (left / right / both), per-side duration, total duration | Exclusively or partially breastfed infants |
| `bottle` | Amount in ml, bottle type (breast milk / formula / mixed), formula brand | Bottle-fed infants; tracking pumped breast milk |
| `solid` | Food items (free-text array), portion size estimate, reaction | Introducing solids from ~6 months |
| `mixed` | Any combination | Sessions combining types |

Pick the type from the start of the form; the relevant fields appear conditionally.

## Breast feeding fields

| Field | Type | Notes |
| --- | --- | --- |
| `startTime` / `endTime` | timestamps | The form supports live timing or post-hoc entry |
| `breastSide` | enum | `left`, `right`, `both` |
| `leftDuration` | minutes | Per-side detail (only if applicable) |
| `rightDuration` | minutes | Per-side detail (only if applicable) |
| `burped` | boolean | Did you burp the baby after? |
| `notes` | string | Free text |

For the next session, the page suggests the side that wasn't last used (alternating-side default), which most lactation guidance recommends. You can override.

## Bottle feeding fields

| Field | Type | Notes |
| --- | --- | --- |
| `bottleAmount` | number (ml) | The pre-feeding bottle volume minus leftover |
| `bottleType` | enum | `breast_milk`, `formula`, `mixed` |
| `formulaBrand` | string | Free text — useful for tracking formula transitions |
| `burped` | boolean | |
| `notes` | string | |

The total daily ml is summarised on the daily-summary tile — useful for "is my baby getting enough?" questions for the pediatrician.

## Solid feeding fields

| Field | Type | Notes |
| --- | --- | --- |
| `foodItems` | string array | "Avocado, banana, oatmeal" — track new allergens by name |
| `solidAmount` | enum | `little`, `some`, `most`, `all` of what was offered |
| `reaction` | enum | `loved`, `liked`, `neutral`, `disliked`, `refused` |
| `notes` | string | Reactions to new foods, unusual chewing, allergic-reaction signs |

The food-items array is your allergen-introduction log. The American Academy of Pediatrics recommends introducing common allergens (peanuts, eggs, dairy, wheat, soy, tree nuts, fish, shellfish) one at a time starting around 6 months — track each first exposure here so you can pinpoint reactions.

## Daily summary

The page header shows today's feeding summary:

| Metric | Source |
| --- | --- |
| Sessions today | Total count |
| Total feeding duration | Sum of breast durations + bottle estimated minutes |
| Breast feedings | Subset count |
| Bottle feedings | Subset count |
| Solid feedings | Subset count |
| Total bottle volume | Sum of bottle ml |
| Last feeding | "2h 15m ago" via `formatDistanceToNow` |

The "last feeding" indicator is what most parents check most often — answering the perpetual question "when did we last feed her?"

## Reminders

Newborns on 2–3 hour feeding schedules benefit from a reminder. Set under [Reminders](/docs/profile-and-settings/reminders) → Baby feeding. Default off.

For older babies on demand-feeding schedules, reminders usually aren't needed.

## Typical feeding patterns

For reference (American Academy of Pediatrics and World Health Organization patient-facing guidance):

| Age | Breast / bottle pattern (general) |
| --- | --- |
| 0–1 month | 8–12 feedings per 24 hours; 10–45 min per breast session; 30–90 ml per bottle |
| 1–3 months | 7–9 feedings; 60–150 ml per bottle |
| 3–6 months | 5–7 feedings; 120–210 ml per bottle |
| 6+ months | Solids introduced + 4–6 breast/bottle feedings |
| 12+ months | Transition to whole milk + 3 meals + 2 snacks |

These are wide ranges, not targets. Individual babies vary enormously. The AAP and WHO publish detailed patient-facing infant-feeding guidance — refer to those for context, or consult a pediatrician / lactation consultant for your specific situation.

## What this log does not do

- **Does not measure breastmilk transfer.** Duration is a proxy, not a volume. If supply / transfer is a concern, weighted feeds at a lactation visit are the gold standard.
- **Does not warn about reactions.** The `reaction` field is your observation. The app does not flag allergic-reaction signs (hives, vomiting, breathing changes) — that's clinical judgment.
- **Does not recommend portion sizes** for solids. The `solidAmount` field is your estimate of how much offered food was consumed.
- **Does not integrate with smart bottles or breast pumps.** Manual entry only.

## Worked example

Wednesday morning, 06:30. You bottle-fed pumped breast milk last night at 02:30 (90 ml taken from a 100 ml bottle). She fed from the left breast at 05:00 for 18 minutes. Now she's hungry again.

Two log entries:

1. **02:30 entry** (back-dated): bottle, 90 ml, breast_milk, burped. Notes: "leftover 10 ml in bottle".
2. **05:00 entry**: breast, left, 18 min, burped.

Open the page now — last-feeding indicator says "1h 30m ago". Time to feed again.

## Frequently asked

**Can my partner log feedings too?**
Yes — if you've granted them partner access (under the baby profile), they can log on their device and the data syncs to yours.

**Should I time my breast feeding live?**
Useful, but optional. Many parents start the timer on their phone when latching, then save when done. The form supports post-hoc entry if you forgot.

**Can I track pumped milk separately from breast feeding?**
Yes — pumped milk fed via bottle is `bottle` type with `breast_milk` selected. The session aggregates show breast vs bottle counts; pumped feeds appear in the bottle column.

**What's the right amount for a 3-month-old bottle?**
General ranges are above; your pediatrician's guidance for your specific baby supersedes them. The AAP's "Infant Feeding Guide" is a good public resource.

**Can I export feedings as a PDF for our pediatrician visit?**
Yes — every page has a PDF export. Most parents export the last 2 weeks for the well-baby visit.

## Where to read next

- [Sleep tracking](./sleep-tracking) — naps and overnight sleep.
- [Diapers](./diapers) — wet / dirty counts (good proxy for feeding adequacy).
- [Growth](./growth) — weight + length with percentiles.
- [Adult breastfeeding tracker](/docs/health/breastfeeding) — log your sessions from your perspective.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
