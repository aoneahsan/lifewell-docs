---
title: About the developer — Ahsan Mahmood
description: LifeWell is built by Ahsan Mahmood, a full-stack engineer focused on Capacitor, React, Firebase, and Cloudflare. Contact, portfolio, and other open-source work.
keywords: [ahsan mahmood, aoneahsan, full-stack engineer, capacitor developer, react engineer, firebase, cloudflare workers]
---

# About the developer

LifeWell is designed, built, and maintained by **Ahsan Mahmood** — a full-stack engineer working primarily with React, TypeScript, Capacitor, Firebase, and Cloudflare Workers.

## Contact

| Channel | Address |
| --- | --- |
| Email | [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) |
| Phone / WhatsApp | +92 304 6619706 |
| Portfolio | [aoneahsan.com](https://aoneahsan.com) |
| GitHub | [github.com/aoneahsan](https://github.com/aoneahsan) |
| LinkedIn | [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan) |
| NPM | [npmjs.com/~aoneahsan](https://npmjs.com/~aoneahsan) |
| Address | [zaions.com/address](https://zaions.com/address) |

## What I do

I build production software across web, mobile (via Capacitor), and browser extensions, with a focus on:

- **React + TypeScript on the frontend** — TanStack Router, react-hook-form + Zod, Zustand state, Radix UI primitives, Tailwind CSS, i18next.
- **Capacitor for cross-platform mobile** — Android (iOS in prep), edge-to-edge layouts, native plugin integration (camera, push, geolocation, biometrics), Play Store compliance hygiene.
- **Firebase as a free-tier backend** — Firestore for data, Auth for sign-in, Hosting for static deploys; Cloud Functions only when Firestore Security Rules can't guard a workflow.
- **Cloudflare Workers for server-side secrets** — token-proxy patterns that keep `client_secret` off the frontend, with strict project-prefixed secret naming.
- **Honest engineering discipline** — centralized loggers (no scattered `console.log`), URL-state preservation across reloads, unique dev ports per project, mandatory store-listing compliance audits, and ban-lists for libraries that cause more problems than they solve.

## Why LifeWell exists

LifeWell started as a personal tracking surface and grew into a four-platform health and wellness product (web app, Android, browser extension, Firebase Functions backend). It is now the canonical reference codebase for two cross-project rules I enforce in every project:

1. **The centralized-logger rule.** No direct `console.*` calls in app code. Set after the 2026-04-29 logger refactor that touched 95 files and ~624 callsites in this codebase.
2. **The Play-Console permissions audit.** Inspect the merged AndroidManifest before every release; Capacitor plugins auto-inject permissions even when unused. Set after a 2026-04-18 CAMERA permission rejection from `@capacitor/camera`.

Both rules now apply across every project I ship — and they originated here.

## Other open-source and product work

I publish utilities and Capacitor plugins on [npm](https://npmjs.com/~aoneahsan) and maintain a portfolio of products at [aoneahsan.com](https://aoneahsan.com). My GitHub is [github.com/aoneahsan](https://github.com/aoneahsan) — issues and PRs welcome.

## Want to support this work?

LifeWell, the documentation site, and the wider open-source utility set are all built on personal time. If you've found them useful, consider:

- Filing thoughtful issues, PRs, or doc improvements at [github.com/aoneahsan/lifewell-docs](https://github.com/aoneahsan/lifewell-docs)
- Sharing LifeWell with someone who might benefit
- Visiting [aoneahsan.com/payment?project-id=lifewell&project-identifier=com.aoneahsan.lifewell](https://aoneahsan.com/payment?project-id=lifewell&project-identifier=com.aoneahsan.lifewell) if you'd like to send a one-time contribution

There's no pressure — using the app and giving honest feedback is the most valuable support.

## Working together

If you're hiring or want to collaborate on a Capacitor / Firebase / Cloudflare project, reach out at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or via [LinkedIn](https://linkedin.com/in/aoneahsan). Resume and portfolio details on request.

---

**Last updated**: 2026-05-10
**Author**: Ahsan Mahmood
