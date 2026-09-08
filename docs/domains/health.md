---
title: Health
description: Trackers, medications, food and meals, exercise and conditions — the largest area in LifeWell, and one of six rather than the point of it.
keywords: [lifewell health, health tracking, medication tracker, symptom tracker, vitals]
tags: [domains, health]
sidebar_position: 2
---

# Health

The largest area, and one of six. LifeWell is a life companion; health is where most of the screens happen
to be.

## Trackers

`/health/water` and every screen beside it are views over **one** store. A glass logged from the dashboard
quick action, from `/health/water` and from `/tracking` is the same row — there is no second copy to fall out
of step.

Each tracker carries a unit, a way of collapsing a day, and sane bounds. Two behave differently on purpose:

- **Adding up** — water, steps, calories. A second entry in a day is another reading.
- **Latest wins** — weight, blood pressure, sleep, mood. A second entry in a day is a correction.

That difference is enforced in the database rather than in a screen, so it holds however the row arrives.

The dated screens include water, steps, weight, BMI, blood pressure, blood sugar, cholesterol, heart rate,
sleep, naps, walking, and daily vitamins.

**Your day is your day.** The date on an entry comes from your device, not from a server clock — someone in
UTC+5 logging water at two in the morning is on today, and their day does not reset at seven in the evening.

## Medications

`/health/medications` holds what you take: the medicine, the dose, the schedule, and a record of the doses
actually taken. `/health/child-medication` is the same idea for a child, kept separate so a paediatric dose is
never in the same list as an adult one.

Medications can raise [reminders](../features/reminders.md).

## Food and meals

`/diet-plan` is the way in. Under it:

- **Meals** — what you ate, when.
- **Saved meals** — the things you eat often, so a repeat is one tap.
- **Recipes** and **the meal planner**.
- **A fasting window**, for people who keep one.
- **Portions** and a **nutrition analyser**.
- **[The shopping list](../features/shopping-list.md)**, which the planner can fill.

## Exercise

`/exercise` records sessions — what you did, how long, how hard. `/health/workout-timer`,
`/health/stretching`, `/health/yoga` and `/health/kegel` are the guided ones.

## Conditions

`/health/symptoms` is the way in. A condition is a standing record — what it is, since when — and an episode
is a dated one underneath it. Around them sit allergies, asthma, arthritis, migraine, vaccinations, lab
results and a medical history.

The point of the split is reading it back later: a list of episodes with no condition attached tells you
almost nothing.

## What this area is not

It does not score you, rank you, or keep a streak. There is no number out of ten and no badge for starting.
A gap in the record is a gap in the record — *a record with gaps in it is still a record*.

## Taking it out

Everything here is in [the export](../your-data/export.md), and the health tables are the ones the PDF
format was built around: a document you can print and hand to a clinician.
