---
title: Theme customizer — every option in the customizer dialog
description: Full reference for the LifeWell theme customizer. Seven options (appearance, accent, gray, radius, scaling, font, panel), with what each value does, defaults, and reset.
keywords: [lifewell theme customizer, appearance, accent color, gray tone, border radius, ui scaling, font size, panel background, ahsan mahmood]
sidebar_position: 4
---

# Theme customizer

The theme customizer is the dialog that lives behind the palette icon in the LifeWell header. It controls every visual aspect of the UI that you, the user, are allowed to adjust — appearance, accent color, gray tone, border radius, UI scaling, font size, and panel background. This page is the option-by-option reference. For the architecture behind it, see [Theming system](/docs/concepts/theming-system).

The customizer is exposed to every visitor, signed in or out. Accessibility-affecting options (scaling, font size, appearance) are not gated behind sign-in.

## How to open it

- **Web app or PWA**: click the palette icon in the top-right of the header.
- **Android app**: same — palette icon in the header.
- **Browser extension**: not available in the extension popup (Chrome Web Store size constraints). Open the web app for theming.
- **Quick appearance cycle**: a separate sun-moon-monitor icon next to the palette cycles Light → Dark → System without opening the full customizer.

The customizer renders as a Radix Dialog with a `ScrollArea` for overflow on small screens. Every selector inside is a card-based grid with live previews — never a dropdown.

## Option 1 — Appearance

| Value | Effect |
| --- | --- |
| Light | Force light mode regardless of OS setting |
| Dark | Force dark mode regardless of OS setting |
| System (default) | Follow OS — `prefers-color-scheme` media query, with a live `change` listener so OS toggles propagate immediately |

System mode is the default because it respects user-level OS settings without LifeWell having to opt in. Users who explicitly want one mode override System with Light or Dark.

## Option 2 — Accent color

The single biggest visual lever. Recolors buttons, links, focus rings, selected tabs, checkbox indicators, slider tracks, and every Radix component that has an `accent` slot.

| Color | Hex (light mode) | When it fits |
| --- | --- | --- |
| **Emerald (default)** | `#10B981` | Brand-default, signals health and growth |
| Cyan | `#06B6D4` | Cooler health vibe, pairs well with the LifeWell secondary token |
| Indigo | `#6366F1` | Calmer, more "tech" feel |
| Violet | `#8B5CF6` | Creative, less clinical |
| Crimson | `#DC2626` | Higher urgency / energy |
| Amber | `#F59E0B` | Warm, attention-getting |
| Mint | `#10B981` | Lighter green, similar to emerald |
| Gray | `#6B7280` | Maximum neutrality |

All accent values are pre-validated for contrast across light and dark mode. Hex pickers are deliberately not provided (per [theming system](/docs/concepts/theming-system) — letting users pick arbitrary hex would let them break their own contrast).

## Option 3 — Gray tone

Radix Themes ships seven gray scales tuned to pair with specific accent colors. The right gray tone makes the accent feel intentional; the wrong one makes it feel detached.

| Gray tone | Pairs well with |
| --- | --- |
| **Auto (default)** | Radix picks the best-paired gray for your current accent |
| Gray | Pure neutral, works with any accent |
| Mauve | Crimson, Pink, Plum, Purple, Violet |
| Slate | Sky, Cyan, Indigo, Iris |
| Sage | Mint, Teal, Green |
| Olive | Grass, Lime |
| Sand | Yellow, Amber, Orange, Brown |

Most users leave this on **Auto** and never think about it. Power users who want a specific texture pick manually.

## Option 4 — Border radius

| Value | Effect |
| --- | --- |
| None | Hard 90° corners — austere, "design tool" feel |
| Small | 4 px radius — subtle softening |
| **Medium (default)** | 8 px radius — LifeWell's chosen middle ground |
| Large | 12 px radius — softer, more friendly |
| Full | Pill-shaped buttons, fully rounded cards — playful |

Applies to cards, buttons, dialogs, form fields. Tooltips and badges have their own internal radius that doesn't follow this setting (they're always rounded).

## Option 5 — UI scaling

| Value | Effect |
| --- | --- |
| 90% | Compact — fits more on screen, useful on small laptops |
| 95% | Slightly compact |
| **100% (default)** | Standard sizing |
| 105% | Slightly larger components |
| 110% | Largest — useful for high-DPI screens or accessibility |

Affects component sizes (button heights, input heights, icon sizes, spacing) but does NOT affect font size — that's a separate option (Option 6). You can mix: 110% scaling with Small font, or 90% scaling with Large font, depending on what your eyes prefer.

## Option 6 — Font size

| Value | Body text |
| --- | --- |
| Small | 14 px |
| **Medium (default)** | 16 px |
| Large | 18 px |

Headings scale proportionally — picking Large doesn't bloat headings disproportionately. This option is the most direct accessibility lever for users with low vision.

## Option 7 — Panel background

| Value | Effect |
| --- | --- |
| Solid | Dialog and sheet backgrounds are opaque |
| **Translucent (default)** | Dialog and sheet backgrounds have a slight transparency (`backdrop-filter: blur`) |

Translucent feels more modern but may cost a frame on lower-end devices. Solid is the right pick if you notice scrolling jank on an older device.

## Reset to defaults

A **Reset** button at the bottom of the customizer restores all seven options to their factory defaults (Light or System, Emerald, Auto gray, Medium radius, 100% scaling, Medium font, Translucent panels) in one click. It writes the defaults to both Capacitor Preferences and Firestore, so the reset propagates across devices.

## How changes persist

Every change writes to:

1. **Capacitor Preferences** (immediate, local) — survives offline, restored on first paint.
2. **Firestore `lifewell_user_preferences` document** (debounced 500ms) — cross-device sync.

Signed-out users get only Layer 1 (still persistent locally). Signed-in users get both.

See [theming system](/docs/concepts/theming-system) for the architecture in detail.

## Frequently asked

**Why are my customizations gone after switching browsers?**
Capacitor Preferences is per-browser on the web (uses localStorage under the hood). If you switched browsers and weren't signed in, the new browser starts fresh. Sign in, and your Firestore-stored preferences sync to the new browser within a few seconds.

**Can I save multiple theme presets?**
Not in v1. Each account has one active theme. If you want to switch between, say, "high-contrast for daytime" and "soft for evening," manually toggling appearance + scaling is the only path. A theme-preset feature is on the roadmap but not committed.

**The customizer doesn't open on the browser extension.**
Correct — the extension popup doesn't have room for the full customizer. Open [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com), customize there, and your settings sync to the extension on next sign-in.

**My font size changes broke the layout.**
Shouldn't happen — every screen is tested at Small / Medium / Large font + 90% / 100% / 110% scaling. If you find a screen that visibly breaks, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with the screen path and a screenshot.

**Does the customizer affect printed pages?**
No — print stylesheets force a clean light-mode rendering for legibility on paper. Custom accent colors and dark mode are intentionally overridden when you print.

## Where to read next

- [Theming system (architecture)](/docs/concepts/theming-system) — how it works under the hood.
- [Preferences](./preferences) — other dials (units, language, daily targets).
- [Profile overview](./profile-overview) — the wider profile area.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
