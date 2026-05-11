---
title: Baby diapers — wet, dirty, stool detail, rash tracking
description: LifeWell baby diaper log tracks wet / dirty / both / dry changes with optional stool color, consistency, amount, and rash severity for clinical reference.
keywords: [baby diaper log, wet diaper count, stool color chart, diaper rash, baby health indicators, pediatrician notes, ahsan mahmood]
sidebar_position: 4
---

# Baby diapers

The **baby diaper log** records every diaper change with optional detail — stool color, consistency, amount, and rash status. The wet-and-dirty counts are one of the most useful health indicators for newborns (pediatricians ask "how many wet diapers in 24 hours?" at every early well-baby visit because it's a strong proxy for feeding adequacy and hydration).

Quick-log buttons cover ~90% of changes ("just wet", "wet + dirty"), and the full form is one tap away when you need to capture stool detail or note a rash.

## What a diaper change records

| Field | Type | Notes |
| --- | --- | --- |
| `time` | timestamp | Auto-fills to now; back-dateable |
| `type` | enum | `wet`, `dirty`, `both`, `dry` |
| `stoolColor` | enum (optional) | `yellow`, `brown`, `green`, `black`, `white`, `red`, `orange` |
| `stoolConsistency` | enum (optional) | `watery`, `loose`, `soft`, `formed`, `hard`, `pellets` |
| `stoolAmount` | enum (optional) | `small`, `medium`, `large` |
| `hasRash` | boolean | |
| `rashSeverity` | enum (optional) | `mild`, `moderate`, `severe` |
| `appliedCream` | boolean | Did you apply diaper rash cream? |
| `creamUsed` | string (optional) | Brand / type (Aquaphor, Desitin, zinc oxide, etc.) |
| `notes` | string (optional) | Free text |

The `dry` type exists for diaper-checks where the diaper was opened but didn't need changing — useful for hourly check protocols some parents follow with newborns.

## Quick-log buttons

The page has four big buttons at the top:

- 💧 **Wet** — most common, single tap.
- 💩 **Dirty** — quick log; stool detail optional.
- 💧💩 **Both** — wet + dirty in one diaper.
- ✨ **Dry** — opened, didn't need changing.

Tapping a button creates a record with just the type and timestamp. Tap "Add detail" to expand the form for stool detail, rash, notes.

## Daily summary

- **Total changes** today.
- **Wet count** — strong proxy for hydration / feeding adequacy.
- **Dirty count** — bowel-movement frequency.
- **Has rash** — flag if any change today noted a rash.

## Expected wet diaper counts (pediatrician reference)

For reference (American Academy of Pediatrics newborn-care guidance):

| Age | Wet diapers per 24 hours |
| --- | --- |
| Day 1 of life | 1 |
| Day 2 | 2 |
| Day 3 | 3 |
| Day 4 onward | 6+ |
| 1+ months | 6–8+ |

Significantly fewer than these reference counts can indicate feeding adequacy or dehydration concerns and is a reason to call your pediatrician.

## Stool color reference

Newborn stool patterns are highly variable. Quick reference (verify with your pediatrician for specific concerns):

| Color | What it often means |
| --- | --- |
| **Black, tarry** | Meconium — normal in first 24–48 hours |
| **Greenish-black** | Transition stool — days 2–4 |
| **Yellow, seedy, mustardy** | Typical breastfed stool (after transition) |
| **Tan / brown** | Typical formula-fed stool |
| **Bright green** | Often normal; can indicate foremilk/hindmilk imbalance, food sensitivity (in breastfeeding), or formula transition |
| **Red blood / streaks** | Call pediatrician same-day. Possible causes: small anal fissure, milk-protein allergy, more serious causes |
| **White / pale (acholic)** | Call pediatrician promptly. Can indicate biliary atresia or liver issues — uncommon but urgent |
| **Persistent very dark / tarry** (past day 4) | Call pediatrician |

The Mayo Clinic and AAP publish detailed patient-facing stool-color charts. LifeWell logs the color you select; it does not flag clinical concerns. **If something looks wrong, call your pediatrician** — don't wait on the app.

## Stool consistency reference

| Consistency | What it often means |
| --- | --- |
| Watery | Diarrhoea — common with viral illness; concerning if many in a row + dehydration signs |
| Loose | Typical for breastfed babies |
| Soft | Typical for transitional or formula stools |
| Formed | Typical for older infants on solids |
| Hard | Constipation — common with formula transitions and solid-food introduction |
| Pellets | Significant constipation |

## Rash tracking

When you flag `hasRash`, you can record:

- **Severity**: mild / moderate / severe.
- **Cream applied**: which one (Aquaphor, Desitin, zinc oxide 40%, A&D, etc.).
- **Notes**: extent, location, appearance.

Most diaper rashes are minor and respond to:

1. Frequent diaper changes (don't let the baby sit in wet/dirty diapers).
2. Air time without a diaper.
3. Barrier cream (zinc oxide is the workhorse).
4. Gentle cleansing (water + soft cloth often beats wipes for inflamed skin).

Rashes that don't respond, spread beyond the diaper area, look like raised satellite pustules (possible yeast), or have open broken skin warrant a pediatrician call.

## Reminders

Some parents — especially with newborns — set a 2- or 3-hour diaper-check reminder so they don't lose track. Set under [Reminders](/docs/profile-and-settings/reminders) → Baby diaper. Default off.

## Worked example

It's a Wednesday morning. You change your 2-week-old after her first feed. Wet, mustardy yellow, seedy. Quick-tap 💧 Wet, then "Add detail", select stool color: yellow, consistency: soft (the seedy yellow is technically loose/soft), amount: medium. Save.

Daily summary shows 1 wet, 0 dirty, 0 both. By the end of the day she's had 8 wet, 4 dirty (you logged each) — comfortably in the AAP's reference range.

## What this log does not do

- **Does not diagnose stool issues.** Stool color and consistency descriptions above are reference, not diagnosis. For anything concerning (blood, pale, persistent watery), call your pediatrician.
- **Does not detect dehydration.** Low wet-diaper counts are one signal among many; dehydration also presents with sunken fontanelle, dry mouth, lethargy.
- **Does not flag patterns.** No automatic "5 days no bowel movement → notify" alert. You watch your baby; LifeWell records.

## Frequently asked

**Should I really log every diaper?**
For the first 2–4 weeks, the wet/dirty count is one of the few objective signals you have on feeding adequacy — yes, log every one. After ~6 weeks, when feeding patterns are established, you can drop to logging only notable diapers (large bowel movements, anything unusual).

**My baby hasn't pooped in 3 days — is that normal?**
For exclusively breastfed babies, going 3–7+ days between bowel movements can be normal after the first 4–6 weeks. Formula-fed babies and older infants tend toward more regular patterns. Constipation signs are hard stools or significant straining — not just frequency.

**The cream-used field — does it matter what I write?**
Useful for two reasons: tracking which creams worked (and which didn't) on which rashes, and noting brand-specific information for a pediatrician question.

**Can I edit a logged diaper change?**
Yes — tap the entry in the list. Edit time, type, stool detail, notes. Save updates immediately.

**Can my partner log diapers?**
Yes — with partner access. Both parents log, both see the same list.

## Where to read next

- [Feeding](./feeding) — diaper counts strongly correlate with feeding adequacy.
- [Sleep tracking](./sleep-tracking) — overnight diaper-and-feed routines.
- [Growth](./growth) — weight checks alongside diaper counts.
- [Milestones](./milestones) — diaper-related milestones (first solid stool, etc.).

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
