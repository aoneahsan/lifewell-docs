---
title: First-time setup — sign in, profile, and theme
description: Walk through the first 5 minutes in LifeWell. Sign in with Google, Apple, or email; set up your profile; pick a theme; choose your language. Then you're ready.
keywords: [lifewell signup, lifewell sign in, first time setup, lifewell profile, theme customizer, i18n languages, ahsan mahmood]
sidebar_position: 4
---

# First-time setup

The first time you sign in to LifeWell, three quick steps unlock the rest of the app: choose a sign-in method, fill in a minimal profile, and pick a theme. Everything else (which features you use, how you arrange the dashboard, what you track) follows naturally — and stays editable. This page walks through that first five minutes.

You can do all of this on the [web app](https://lifewell.aoneahsan.com), the [Android app](./install-android), or the [browser extension](./install-extension). The state syncs across surfaces, so what you set up on one device shows up on the others as soon as you sign in.

## Sign in

LifeWell supports three sign-in methods. Choose what you have available — there's no functional difference once you're in.

### Continue with Google

The fastest path. Tap **Continue with Google**, pick your Google account, accept the consent screen. Done. Google sign-in unlocks one extra capability: optional Google Drive sync for memory media (see [Google Drive sync](/docs/memories-and-notes/google-drive-sync)). You can still use LifeWell fully without enabling Drive sync.

### Continue with Apple

Available on the web app and once iOS ships. Tap **Continue with Apple**, choose to share your real email or use Apple's Hide My Email relay. Apple sign-in works identically to Google for tracking, family, memories, and so on — Drive sync is the only Google-specific feature you'll skip.

### Continue with email

Tap **Email**, enter your address, set a password (or use the magic-link flow if shown). LifeWell sends a verification email; click the link to confirm. From there, every visit signs you in with email + password.

If you're signing in on the [browser extension](./install-extension), the recommended path is Google sign-in via the Chrome Identity API — it brokers auth through the browser itself rather than loading any third-party auth script. See [Install extension](./install-extension) for the rationale.

## Set up your profile

After sign-in, LifeWell asks for the minimum it needs to make tracking and calculators useful. None of these fields are required — you can skip and fill them in later from [Profile overview](/docs/profile-and-settings/profile-overview).

| Field | Why LifeWell asks | Required? |
| --- | --- | --- |
| Display name | Shown in family connections and chat features | Optional |
| Date of birth | Used by age, BMR, and some other calculators | Optional |
| Sex / gender | Used by BMR, period tracker visibility, breastfeeding visibility | Optional |
| Height | Used by BMI calculator and progress charts | Optional |
| Weight (current) | Used by BMI / BMR / TDEE calculators | Optional |
| Time zone | Used for reminder delivery times | Auto-detected |
| Avatar (photo) | Shown in family connections | Optional |

You can leave any of these blank and LifeWell still works — calculators that need a value will ask you in-context, and tracking features won't pre-fill defaults that aren't there.

## Pick a theme

LifeWell uses Radix UI primitives across the entire app, with a full theme customizer that's exposed to **every user**, signed-in or not. Tap the palette icon in the header to open it. The customizer lets you adjust:

- **Appearance** — Light, Dark, or System (follow your OS preference).
- **Accent color** — pick from 8+ color swatches; LifeWell defaults to emerald.
- **Border radius** — none, small, medium (default), large, or full.
- **UI scaling** — 90% to 110% in 5% increments (helpful for high-DPI screens or accessibility).
- **Font size** — small, medium (default), or large.
- **Panel background** — solid or translucent.
- **Gray tone** — auto, gray, mauve, slate, sage, olive, or sand (the gray that pairs with your accent).

Every option is a card-based selector with a visible preview, not a dropdown. Choices apply instantly; nothing requires a reload. Preferences persist locally via Capacitor Preferences and sync to your Firestore profile so they follow you across devices.

If you ever want LifeWell back to its defaults, the customizer has a **Reset** button at the bottom that restores everything in one click.

## Choose a language

LifeWell ships with 10 language locales out of the box: English, Arabic (with right-to-left layout), Spanish, French, German, Portuguese, Russian, Turkish, Urdu, and Chinese. The app auto-detects your browser / OS language on first visit; you can override from **Profile → Language** at any time.

Translation coverage is highest on the most-used screens (auth, dashboard, vitals, calculators, settings) and tapers off in admin / reference areas — those fall back to English when a translation isn't yet available. If you want to contribute translations, see [Contributing](/docs/about/contributing).

## What's next

You're set up. From here you can:

- [Quickstart tour](./quickstart-tour) — see what LifeWell does in five minutes of clicking around.
- [Health overview](/docs/health/overview) — the most-used domain; track vitals, water, medications.
- [Theme customizer](/docs/profile-and-settings/theme-customizer) — full reference for every customization option.

## Frequently asked

**Can I switch sign-in methods later?**
Yes — go to **Profile → Security**. Adding a second method (e.g. email + Google) is straightforward. Removing your only sign-in method is blocked to prevent locking yourself out.

**Will my data move if I create a second account by mistake?**
LifeWell does not auto-merge separate accounts because they're considered different users. If you want to consolidate, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with the two account email addresses and we can guide you through the manual migration.

**Why does the theme customizer apply to signed-out visitors too?**
Per the global design rule, every Radix-based project in the Ahsan stack exposes a full theme customizer to **all** users, signed-in or not. It's a foundational accessibility feature — light/dark, font size, scaling — and gating it behind sign-in would be a poor experience.

**What happens if I delete my account?**
Account deletion is reversible for 30 days, then permanent. After 30 days, LifeWell deletes your Firestore documents, removes your media from FilesHub storage, and clears your auth record. There's no soft-archive that the developer can read. See [Privacy & security](/docs/concepts/privacy-and-security) for the full account-deletion flow.

**The auth screen is stuck on a spinner.**
Almost always a third-party-cookie or popup-blocker issue. Check that `accounts.google.com` and `lifewell.aoneahsan.com` are both allowed for cookies and popups. If that doesn't fix it, hard-refresh and try again. Report stubborn cases to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with browser version + the exact error.

---

**Last updated**: 2026-05-10
**Author**: [Ahsan Mahmood](/docs/about/about-the-developer)
