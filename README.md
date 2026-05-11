# LifeWell — Documentation

Public documentation for **LifeWell** — a private, personal wellness platform built by [Ahsan Mahmood](https://aoneahsan.com). Covers health tracking, family records, baby tracking, memories, notes, community, consultations, and more across web, Android, iOS (in progress), and a browser extension.

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
- Deployed to Firebase Hosting.

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

The site deploys to Firebase Hosting (`lifewell-docs` project):

```bash
yarn build
yarn deploy:firebase
```

See `docs/docusaurus-build-plan/04-deployment.md` (in the main lifewell repo) for the full deploy + Search Console submission workflow.

## License

- **Documentation content**: [CC-BY-4.0](LICENSE) — share, adapt, attribute.
- **Code samples in docs** (TypeScript / JSON / shell snippets embedded in markdown): MIT.
- **"LifeWell" trademark + logo**: not licensed; remain property of Ahsan Mahmood.

## Contributing

Improvements welcome — typo fixes, clarifications, additional examples. The full contributing guide is at [docs/about/contributing](https://lifewell-docs.aoneahsan.com/docs/about/contributing). Open a PR or an issue.

**Note**: This repo is for documentation only. Feature requests for the LifeWell app go to [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or the in-app feedback form, not as issues here.

## Acknowledgements

LifeWell stands on a lot of open-source work — React, Docusaurus, Firebase, Capacitor, Radix UI, Tailwind CSS, D3.js, Zustand, TanStack Router, TipTap, and many more. Thanks to those communities.

---

**Maintainer**: Ahsan Mahmood · [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
**Last updated**: 2026-05-11
