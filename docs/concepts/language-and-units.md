---
title: Language and units
description: LifeWell offers ten languages across its app, docs and browser extension. Your unit choice stays separate from your language.
keywords: [lifewell language, translation, i18n, metric imperial units, en-GB]
tags: [concepts, i18n, accessibility]
sidebar_position: 6
---

# Language and units

## Choose a language

LifeWell offers English, Simplified Chinese, Hindi, Spanish, Arabic, French, Brazilian Portuguese, Russian,
Japanese and Urdu. Choose a language from the header. Arabic and Urdu also change the page direction so the
layout reads naturally from right to left.

Your choice follows your LifeWell account when you sign in on another device or connect the browser extension.
It does not change the units you chose for your readings. The docs and public pages have their own language
addresses so you can link someone straight to the version they read.

Two details, if you ever read the translation files:

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

Dates and numbers follow the language you selected, using the device's internationalisation support. A date
may therefore read *8 September 2026* in English and take a different order in another language. The first
day of the week is a separate device setting; changing language does not silently move it.

The day an entry belongs to comes from **your device**, not from a server. See [The data
model](./data-model.md#the-date-comes-from-your-device).

## Accessibility

The interface is built on React Aria Components, which owns the keyboard behaviour and screen-reader wiring of
every interactive control rather than leaving it to each screen to remember.

The floors every screen is built to: AA contrast, visible focus, full keyboard operation, touch targets of at
least 44 pixels, a layout that holds from 320 to 1920 pixels wide, and a
[reduced-motion setting](./appearance.md#motion) that removes animation without removing information.

Charts carry a readable table of the same numbers, so a chart is never the only way to reach a value.
