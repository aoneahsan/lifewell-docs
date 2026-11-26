---
title: Appearance
description: One icon and one panel for theme, colour, corner radius, density, text size, typeface, surface style and motion. Applied before the first paint.
keywords: [lifewell theme, dark mode, appearance settings, accessibility text size, reduced motion]
tags: [concepts, appearance]
sidebar_position: 5
---

# Appearance

One icon in the top bar. One panel. Every appearance setting in it, on every screen, signed in or not.

## The eight settings

| Setting | What it changes |
|---|---|
| Theme | Light, dark, or follow the system |
| Colour | The accent and the neutrals around it |
| Corner radius | How rounded everything is |
| Density | How much room each row takes |
| Text size | The whole type scale, not just body text |
| Typeface | The font the app is set in |
| Surface style | How panels sit against the page |
| Motion | Full, or reduced |

## Applied before the first paint

The settings are read and written to the page **before anything renders**. There is no flash of the wrong
theme while the app boots, because the theme is decided before the app is running.

That is why they are stored in one place and applied from one table rather than being scattered across
components. A hard-coded colour or corner radius in a component is invisible to this panel, which is the
failure mode the single control exists to prevent.

## Motion

**Motion never carries meaning.** Reduced motion removes animation without removing information.

The setting holds a resolved value rather than the word *system*, and that detail matters: a bare
`prefers-reduced-motion` media query would beat any setting, so somebody whose operating system asks for
reduced motion could not choose full motion in the app. Resolving it once means *full* means full.

## Where it is kept

Your choices are kept on this device. When **Carry my appearance across devices** is on in the same panel,
they are also saved to your account and can follow you to another signed-in device. Turn it off if you want a
different appearance on your laptop and phone; that device keeps its own choice.

## Contrast and targets

AA contrast and a 44-pixel minimum touch target are the floors every screen is built to, along with visible
focus, full keyboard operation and a layout that holds from 320 to 1920 pixels wide.
