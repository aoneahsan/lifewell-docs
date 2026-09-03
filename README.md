# LifeWell — Documentation

Public documentation for **LifeWell** — *a life companion*: one account holding a person's whole life — health,
family, work, memories, and the everyday things that hold them together. Web and Android. Built by
[Ahsan Mahmood](https://aoneahsan.com).

> **Status (2026-09-03).** The app at `lifewell.aoneahsan.com` is the **v3 rebuild** (Supabase, React Aria,
> Tailwind v4, Capacitor Android). **These pages still describe v2.x** — Firebase, iOS "in progress", a browser
> extension — and are being refreshed for v3 as a recorded stage of the rebuild. Until that lands, treat any
> page naming Firebase, Firestore, Radix, iOS or the extension as historical.

- **Live site**: <https://lifewell-docs.aoneahsan.com>
- **App**: <https://lifewell.aoneahsan.com>
- **Developer**: Ahsan Mahmood — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) · [aoneahsan.com](https://aoneahsan.com) · [LinkedIn](https://linkedin.com/in/aoneahsan)

This repository contains **only the documentation source** (Docusaurus markdown + assets). The main LifeWell application source is in a separate private repository.

## What's documented here

~100 pages covering:

- **Getting started** — install on web, Android, browser extension; first-run setup.
- **Concepts** — architecture, data model, privacy posture, offline-first design, theming, multi-platform strategy, wellness scoring.
- **Profile & settings** — preferences, security, theme customizer, data sharing, achievements, blood donor, medical info, reminders, premium.
- **Health module** — vitals, water, medications, exercise, sleep, nutrition, period & fertility, pregnancy, breastfeeding, mental health, conditions, medical records.
- **Tools** — BMI, BMR, calorie, TDEE, macro, protein, age calculators; sleep / step / interval / workout / kegel timers.
- **Baby module** — feeding, sleep, diapers, growth, milestones, baby-name explorer.
- **Family module** — person records, family tree, work tree, groups, connections, journeys, location tracking, data sharing.
- **Memories + Notes + Maps** — life moments, scrapbook, notes with 5 types, Google Drive sync, D3 association maps.
- **Community + Chat** — topic communities, direct/group chats, partner features, professional consultations.
- **Extension + Mobile** — Capacitor 8 architecture, push notifications, offline-first.
- **Admin** — back-office tools (admin-claim-gated).
- **Reference** — Firestore collections, env variables, third-party integrations, browser compatibility.
- **FAQ** — general, health data, privacy, billing, troubleshooting.

Every page is **source-verified** against the actual LifeWell codebase and cites real public-health sources (CDC, WHO, Mayo Clinic, ACOG, AAP, NHLBI, etc.) where it makes health claims.

## Built with

- [Docusaurus 3](https://docusaurus.io) — static-site generator.
- Custom CSS using LifeWell's emerald/cyan brand palette.
- Yarn 4 with the `node-modules` linker.
- Deployed to **GitHub Pages** (custom domain) by the `deploy-pages.yml` workflow — a push to `main` deploys.

## Local development

```bash
yarn install
yarn start
```

Opens `http://localhost:3000` with hot reload.

## Build

```bash
yarn build
```

Generates static HTML/CSS/JS into the `build/` directory. Build takes ~5–30 seconds depending on cache state.

## Deploy

The site deploys to **GitHub Pages** with the custom domain `lifewell-docs.aoneahsan.com`: pushing to `main`
runs `.github/workflows/deploy-pages.yml`, which builds and publishes. There is no manual deploy step.

## License

- **Documentation content**: [CC-BY-4.0](LICENSE) — share, adapt, attribute.
- **Code samples in docs** (TypeScript / JSON / shell snippets embedded in markdown): MIT.
- **"LifeWell" trademark + logo**: not licensed; remain property of Ahsan Mahmood.

## Contributing

Improvements welcome — typo fixes, clarifications, additional examples. The full contributing guide is at [docs/about/contributing](https://lifewell-docs.aoneahsan.com/docs/about/contributing). Open a PR or an issue.

**Note**: This repo is for documentation only. Feature requests for the LifeWell app go to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or the in-app feedback form, not as issues here.

## Acknowledgements

LifeWell stands on a lot of open-source work — React, Docusaurus, Supabase, Capacitor, React Aria, Tailwind CSS, D3.js, Zustand, TanStack Router, TipTap, and many more. Thanks to those communities.

---

**Maintainer**: Ahsan Mahmood · [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
**Last updated**: 2026-05-11
