---
title: Baby milestones — first smile, first steps, first words, more
description: LifeWell baby milestones tracker includes 27 predefined developmental milestones across 6 categories plus custom milestones, each with photos and notes.
keywords: [baby milestones, developmental milestones, first smile, first steps, first words, infant development, ahsan mahmood]
sidebar_position: 6
---

# Baby milestones

The **baby milestones tracker** captures the firsts — first smile, first laugh, first roll, first crawl, first word, first steps — plus 22 more developmental milestones predefined across six categories, with photos and notes per achievement. You can also create custom milestones for the moments that matter to you but aren't in the predefined list ("first time on the swing", "first beach visit", "first solid food she actually liked").

LifeWell ships with 27 predefined milestones from `types/baby.ts`, each tagged with a typical age range so you can see at a glance what's expected at your baby's age.

## Categories

| Category | Examples |
| --- | --- |
| **Physical** | Holds head up, rolls over, sits, crawls, pulls to stand, first steps, walks independently |
| **Cognitive** | Follows objects with eyes, recognises faces, object permanence, points at objects |
| **Language** | Coos and gurgles, babbles, says "mama"/"dada", first words |
| **Social** | First social smile, laughs out loud, stranger anxiety, waves bye-bye |
| **Self-care** | Holds bottle/cup, finger feeds, uses spoon |
| **First** | First smile, first tooth, first haircut, first solid food, first word |

The "first" category is intentionally distinct from social/language firsts to support celebratory moments (first haircut, first solid food) that aren't pure developmental markers.

## What a milestone record stores

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | The milestone name |
| `description` | string (optional) | Predefined milestones come with a one-liner |
| `category` | enum | One of the 6 categories above |
| `achievedDate` | date | When it happened |
| `ageAtAchievement` | months + days | Auto-computed from baby DOB + achieved date |
| `photoUrls` | string array | FilesHub-stored photos |
| `videoUrl` | string (optional) | FilesHub-stored video |
| `notes` | string (optional) | Free text — where, who saw, anything memorable |
| `recordedBy` | enum | `parent` or `partner` (auto-set from who logged) |

## Predefined milestones (27)

Each predefined milestone includes a typical-age range. These ranges follow general public-health guidance from CDC's "Learn the Signs. Act Early." and AAP's developmental milestones:

| Name | Category | Typical age |
| --- | --- | --- |
| Holds head up | Physical | 1–4 months |
| Rolls over | Physical | 4–6 months |
| Sits without support | Physical | 6–8 months |
| Crawls | Physical | 7–10 months |
| Pulls to stand | Physical | 8–12 months |
| First steps | Physical | 9–15 months |
| Walks independently | Physical | 12–18 months |
| First social smile | Social | 1–3 months |
| Laughs out loud | Social | 3–5 months |
| Stranger anxiety | Social | 6–9 months |
| Waves bye-bye | Social | 8–12 months |
| Coos and gurgles | Language | 1–4 months |
| Babbles | Language | 4–7 months |
| Says "mama" or "dada" | Language | 8–14 months |
| First words | Language | 10–15 months |
| Follows objects with eyes | Cognitive | 1–3 months |
| Recognises faces | Cognitive | 2–4 months |
| Object permanence | Cognitive | 6–9 months |
| Points at objects | Cognitive | 9–14 months |
| First smile | First | 1–3 months |
| First tooth | First | 4–10 months |
| First haircut | First | 6–24 months |
| First solid food | First | 4–6 months |
| First word | First | 8–14 months |
| Holds bottle/cup | Self-care | 6–10 months |
| Finger feeds | Self-care | 7–10 months |
| Uses spoon | Self-care | 12–18 months |

## Custom milestones

For moments not in the predefined list, create a custom milestone with any name, category, date, photos, and notes. Custom milestones don't have a typical-age range (since they're unique to you), but they're stored, photographed, and exported alongside the predefined ones.

## Photo and video

Each milestone supports multiple photos and one video, stored via FilesHub:

- **Photos** — uploaded from device gallery, served from FilesHub CDN.
- **Video** — single upload, capped at typical mobile-video-clip size.
- **Privacy** — FilesHub storage is per-user; partners with access can view, no one else.

A milestone with photos is the kind of record people actually look back on years later — invest the 30 seconds to attach a photo when you log.

## Typical age ranges — what they mean

The ranges (e.g. "4–6 months") represent the typical window during which most babies achieve the milestone. Outside the range doesn't automatically mean a problem:

- **Before the range**: early development; often celebrated.
- **Within the range**: typical.
- **Slightly after the range**: still within normal variation for many babies; the range is "most" not "all".
- **Significantly after the range**: worth discussing with your pediatrician at the next well-baby visit.

The CDC's "Learn the Signs. Act Early." (cdc.gov/ncbddd/actearly) provides clinical guidance on when delays warrant evaluation — earlier intervention generally yields better outcomes if a delay turns out to be real.

LifeWell does not flag late milestones. The app records dates; clinical judgement on developmental concerns is your pediatrician's role.

## Tips per milestone

Each predefined milestone includes 2 short tips from the developmental guidance literature. Examples:

- **Holds head up**: practice tummy time daily; support head when carrying.
- **Rolls over**: never leave baby unattended on elevated surfaces; celebrate this achievement.
- **First social smile**: make eye contact and smile often; talk to your baby frequently.
- **Stranger anxiety**: this is a normal developmental stage; introduce new people gradually.

These are starting points, not exhaustive parenting advice.

## Daily summary integration

The baby's daily summary shows "milestones logged today" as a count — useful for the moment when you realise the achievement deserves a celebration. The full list is on the milestones page.

## Worked example

Your 4-month-old just rolled from her stomach to her back for the first time, witnessed at 10:32 on Tuesday during tummy time.

Open Milestones → Add milestone → select "Rolls over" from predefined → achieved date today → photo of her on her back grinning → notes "First roll! Stomach to back. During tummy time on the play mat. Daddy was on the call so didn't see but daddy got a hug later." Save.

The record stores age at achievement (4 months, 12 days), feeds the daily summary count, appears in the milestones chronological list.

## Export

Per-baby milestone export to PDF — a printable timeline with photos. Many parents export periodically as a "this year in milestones" keepsake.

## What this tracker is not

- **Not a developmental screening tool.** Tracking milestone dates doesn't replace clinical screening (ASQ-3, M-CHAT for autism risk, etc.). Your pediatrician's developmental screens at well-baby visits are the right tool for "is my child developing normally?".
- **Not a milestone-comparison forum.** LifeWell does not aggregate milestone ages across users for "average ages" or social comparison. Babies vary widely; obsessing over the cohort isn't useful.
- **Not auto-prompted.** The app doesn't quiz you at age 6 months on which milestones you should have hit by now. You log what happens, in your own time.

## Frequently asked

**My baby skipped a milestone — should I worry?**
Some babies skip crawling and go straight to walking. Some never say "mama" but suddenly form full sentences. Skipping a predefined milestone is not in itself concerning. Trajectory and overall development matter; pediatric screening is the right check.

**Can I edit the typical age range for a milestone?**
No — predefined milestone ranges are read-only. They're reference, not a target. Use custom milestones for any unique-to-you achievements.

**What if I forgot when a milestone happened?**
Approximate. "Around mid-April" is fine — guess a date you remember, add a note "approximate, was sometime in mid-April". Future-you would rather have an approximate date than nothing.

**Can my partner add milestones?**
Yes — with partner access. The `recordedBy` field captures who logged. Useful when a partner catches a milestone you missed.

**Does the photo upload count toward FilesHub limits?**
Yes — milestone photos use FilesHub like any other photo upload. FilesHub free-tier limits apply per user.

## Where to read next

- [Growth](./growth) — physical milestones often coincide with growth spurts.
- [Feeding](./feeding) — feeding milestones (first solid, finger feeds, spoon).
- [Memories](/docs/memories-and-notes/memories) — broader memory log alongside milestones.
- [CDC Learn the Signs](https://www.cdc.gov/ncbddd/actearly) — clinical milestone reference.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)

:::note Health information — not medical advice
LifeWell and this documentation are provided for general wellness and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment, and nothing here is intended to diagnose, treat, cure, or prevent any condition. Always consult a qualified healthcare professional with questions about your health, and never disregard or delay professional advice because of something you read here. In an emergency, contact your local emergency services.
:::
