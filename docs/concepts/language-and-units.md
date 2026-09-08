---
title: Language and units
description: English is the only language today, and the app is built so a second one is a single new file. Units are a preference, not a consequence of your language.
keywords: [lifewell language, translation, i18n, metric imperial units, en-GB]
tags: [concepts, i18n, accessibility]
sidebar_position: 6
---

# Language and units

## One language, built for more

**English is the only language LifeWell ships in.** British English, throughout.

Every user-visible string in the app already goes through the translation layer, which is the part that
cannot be retrofitted: adding it later would mean touching every component. So adding a second language is a
single new file of translations rather than a project.

That is stated as a shape rather than a promise. There is no second language planned, and no timetable.

Two details, if you ever read the strings:

- **Keys describe meaning, not the English text.** Rewording a sentence does not break anything.
- **Nothing is assembled from translated fragments.** One key is one whole sentence with values interpolated
  into it, because word order is not universal.

## Units are a preference, not a language

Metric or imperial is **your choice**, on your profile, and it is deliberately separate from language. Somebody
in the UK may want stones; somebody else may want kilograms; neither follows from the language the interface
is in.

Underneath, **the record stores one canonical unit and converts when it is read**. Two consequences:

- Changing the preference re-displays your history rather than rewriting it.
- Every entry keeps the unit it was written with, so switching preference cannot silently reinterpret twelve
  years of readings.

## Dates, numbers and the first day of the week

Formatted with the platform's own internationalisation, against a British English convention — so a date reads
*8 September 2026* rather than *September 8, 2026*.

The day an entry belongs to comes from **your device**, not from a server. See [The data
model](./data-model.md#the-date-comes-from-your-device).

## Accessibility

The interface is built on React Aria Components, which owns the keyboard behaviour and screen-reader wiring of
every interactive control rather than leaving it to each screen to remember.

The floors every screen is built to: AA contrast, visible focus, full keyboard operation, touch targets of at
least 44 pixels, a layout that holds from 320 to 1920 pixels wide, and a
[reduced-motion setting](./appearance.md#motion) that removes animation without removing information.

Charts carry a readable table of the same numbers, so a chart is never the only way to reach a value.
