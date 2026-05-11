---
title: Theming system — Radix UI, tokens, and persistence
description: How LifeWell themes the UI. Radix UI primitives, theme tokens, dark/light, accent colors, scaling, font sizes. Persistence via Capacitor Preferences + Firestore.
keywords: [lifewell theme, radix ui, dark mode, theme tokens, accent colors, capacitor preferences, ui scaling, ahsan mahmood]
sidebar_position: 5
---

# Theming system

LifeWell's theming is built on Radix UI primitives layered with a typed token system, persisted locally via Capacitor Preferences and mirrored to Firestore so your preferences follow you across devices. The customizer is exposed to every visitor — signed in or out — because adjustable contrast, scale, and font size are foundational accessibility features, not premium add-ons.

This page describes how the system is wired. For the user-facing reference of each option, see the [theme customizer](/docs/profile-and-settings/theme-customizer) page.

## What Radix UI provides

LifeWell uses `@radix-ui/themes` plus a curated set of 19 Radix primitive packages (`Dialog`, `DropdownMenu`, `Tabs`, `Popover`, `Tooltip`, etc.). Radix gives us:

- **Accessible behavior out of the box** — keyboard navigation, focus management, ARIA roles, screen-reader labels. We never have to re-implement these.
- **Headless primitives** — Radix ships the behavior; we own every pixel of styling.
- **Composable parts** — `Dialog.Root` / `Dialog.Trigger` / `Dialog.Content` etc. let us build complex flows from small pieces.
- **`asChild` polymorphism** — render Radix behavior on whatever DOM element we want, avoiding nested-button accessibility bugs.

Because every interactive primitive in the app is Radix-based, theme changes propagate consistently. Switching `accentColor` from emerald to violet recolors every button, every selected tab, every checkbox indicator, every focus ring — without us having to touch each component.

## Token layers

LifeWell uses three layers of tokens, in order of specificity:

| Layer | Source | Examples |
| --- | --- | --- |
| **Radix theme tokens** | `<Theme>` provider from `@radix-ui/themes` | `accentColor`, `grayColor`, `radius`, `scaling`, `panelBackground`, `appearance` |
| **CSS variables** | `:root` and `[data-theme="dark"]` blocks | `--ifm-color-primary`, `--lifewell-cyan`, surface colors, shadow tokens |
| **Tailwind utilities** | `tailwind.config.ts` | `bg-primary`, `text-foreground`, spacing scale |

Radix tokens flow down through the React tree and apply across every Radix-themed component. CSS variables fill in the gaps Radix doesn't cover (gradients, custom shadows, app-specific surface colors). Tailwind utilities are used for the long tail — spacing, layout, one-off positioning.

The fewest tokens that can express the design is the rule. We don't add a token unless we need it in three or more places.

## The seven user-facing options

All seven are exposed in the [theme customizer](/docs/profile-and-settings/theme-customizer) dialog. Brief table here:

| Option | Values | What it controls |
| --- | --- | --- |
| Appearance | Light / Dark / System | Color scheme; "System" follows OS via `prefers-color-scheme` |
| Accent color | Emerald (default) + 8 others | Primary action color; recolors buttons, links, focus rings, selected states |
| Gray tone | Auto / Gray / Mauve / Slate / Sage / Olive / Sand | Neutral grays that pair tastefully with each accent |
| Border radius | None / Small / Medium / Large / Full | Corner roundness on cards, buttons, dialogs |
| UI scaling | 90% / 95% / 100% / 105% / 110% | Component sizes for high-DPI or accessibility |
| Font size | Small / Medium / Large | Base text size; ratios scale all headings |
| Panel background | Solid / Translucent | Whether dialogs and sheets have a frosted-glass effect |

Defaults are: **Light** appearance, **Emerald** accent, **Auto** gray, **Medium** radius, **100%** scaling, **Medium** font, **Translucent** panels.

## Card-based selection (never dropdowns)

Per the LifeWell design rule, theme options are picked from card-based selectors with live previews, never from `<Select>` dropdowns. The reason is that the option's effect is visual — seeing the preview is the only way to make a confident pick. A dropdown of "Mauve, Slate, Sage, Olive, Sand" tells you nothing; a row of color-dot preview tiles tells you everything.

The customizer's [Radix Dialog](/docs/concepts/architecture) wraps a `ScrollArea` for overflow on small screens, and every selector inside is a `RadioGroup` of card tiles with `aria-checked` on the active option for screen readers.

## Persistence strategy

Theme preferences are persisted in two layers, with sync that's quiet enough you don't notice:

**Layer 1 — Capacitor Preferences (local)**

On every change, the customizer writes to `@capacitor/preferences` (native KV on Android; localStorage fallback on web). This is the immediate store. It survives offline, reloads, and reboots, and it's the source of truth on first paint so there's no flash of unstyled content.

**Layer 2 — Firestore (cross-device)**

A debounced (500ms) write also pushes to `lifewell_user_preferences` under your `userId`. This is what makes your theme follow you to a second device. On sign-in, LifeWell pulls the Firestore document; if it exists, it overwrites the local cache. If you're signed out, only Layer 1 is active.

The two-layer split means:
- **Signed-out users** still get persistent themes (Layer 1 alone).
- **Signed-in users** get cross-device sync without slowing down per-change writes (debounced Layer 2).
- **Multi-device users** see the most-recent change propagate within seconds.

## The boot loader

When LifeWell first paints — on a hard reload, a cold app start, or after an update — it shows a full-page boot loader until two things are true: (1) the Capacitor Preferences theme has hydrated, and (2) the Firebase Auth state has emitted its first event. This prevents the classic "flash to light mode, then snap to dark" that bad theme systems produce.

The boot loader is itself themed (light or dark to match your preference) and shows rotating motivational copy, tips, and "secret feature" teasers every 3 seconds. Reduced-motion users get a static version. ARIA `role="status"` keeps screen readers informed.

Implementation lives in `src/components/SplashScreen.tsx` (canonical re-export at `src/components/shared/BootLoader.tsx`).

## Theme reset

The customizer's **Reset to defaults** button writes the seven default values to both layers in one batch. It does not delete the Firestore document — it just rewrites it with defaults, so other devices pick up the reset on next sign-in.

## Adding a new theme option

If a future LifeWell version adds, say, a "card density" option, the change touches:

1. The `themeStore` in `src/stores/theme.store.ts` — add the field, the default, the setter.
2. The Firestore mirror in `src/services/theme-sync.service.ts` — include the new field in the write payload.
3. The customizer dialog in `src/components/theme/ThemeCustomizer.tsx` — add the card-based selector with a live preview.
4. The CSS variables or Radix `<Theme>` props that the new field controls.
5. This page and the [theme customizer](/docs/profile-and-settings/theme-customizer) reference page.

Every new option follows the same five-step path — store, sync, dialog, application, docs — by design. The pattern is repeatable so the next addition is no harder than the last.

## Frequently asked

**Why expose the theme customizer to signed-out users?**
Accessibility. Light/dark mode, font size, and UI scaling are foundational accessibility features. Hiding them behind sign-in would tell users with low vision or contrast sensitivity to "create an account first." That's not acceptable.

**Why Radix instead of shadcn/ui?**
shadcn/ui is built on Radix, so we get the same accessible primitives. The difference is shadcn ships opinionated default styles you then customize, while we wanted to design the styling layer from scratch around LifeWell's brand tokens. Both approaches are legitimate; we chose direct Radix for control.

**Does the customizer support custom colors (hex picker)?**
No, by design. Radix accent colors are pre-tested for contrast and pair well with the gray tones. Letting users pick arbitrary hex would let them break their own contrast and accessibility. The eight provided accents cover the common preferences without the failure mode.

**What happens if Firestore is unreachable when I change a theme?**
Layer 1 (Capacitor Preferences) saves immediately and the UI updates. Layer 2 (Firestore) queues the write and replays on reconnect, exactly like every other Firestore write in LifeWell. See [offline-first design](./offline-first-design).

**Can the customizer affect the docs site you're reading right now?**
No — this docs site is a separate Docusaurus build hosted at `lifewell-docs.aoneahsan.com`. The docs have a basic light/dark toggle (Docusaurus default) but not the full customizer. The full customizer is in the LifeWell app itself at [lifewell.aoneahsan.com](https://lifewell.aoneahsan.com).

## Where to read next

- [Theme customizer (reference)](/docs/profile-and-settings/theme-customizer) — every option, every value.
- [Architecture](./architecture) — where Radix fits in the wider stack.
- [Privacy & security](./privacy-and-security) — what preference data Firestore stores about you.

---

**Last updated**: 2026-05-11
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
