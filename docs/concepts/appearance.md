---
title: Appearance
description: One icon, one panel, nine settings — theme, colour, corner radius, density, text size, typeface, surface style, motion and pointer. Applied before the first paint.
keywords: [lifewell theme, dark mode, appearance settings, accessibility text size, reduced motion]
tags: [concepts, appearance]
sidebar_position: 5
---

# Appearance

One icon in the top bar. One panel. Every appearance setting in it, on every screen, signed in or not.

## The nine settings

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
| Pointer | The cursor treatment, where a device has a pointer at all |

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

**On the device**, not on your account. It survives a reload and a restart, and it is per device by design —
the same person may want a dark, dense interface on a laptop and a large, roomy one on a phone.

That does mean a new device starts from the defaults rather than inheriting what you chose elsewhere. There is
no account-level sync of appearance today.

## Contrast and targets

AA contrast and a 44-pixel minimum touch target are the floors every screen is built to, along with visible
focus, full keyboard operation and a layout that holds from 320 to 1920 pixels wide.
