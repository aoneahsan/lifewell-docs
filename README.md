# LifeWell — Documentation

Public documentation for **LifeWell** — *a life companion*: one account holding a person's whole life — health,
family, work, memories, and the everyday things that hold them together. Web and Android. Built by
[Ahsan Mahmood](https://aoneahsan.com).

> **These pages describe LifeWell 3.22.0**, a full rebuild of the 2.x app on a new backend, with Sharing as
> its seventh area since 2026-09-11. The previous documentation described a removed platform, an unshipped
> browser extension, a database the app no longer uses and an inverted analytics stack; all 108 pages were
> deleted on 2026-09-08 and rewritten against the application's own source.
> See [What changed in 3.0.0](https://lifewell-docs.aoneahsan.com/about/changelog).

- **Live site**: <https://lifewell-docs.aoneahsan.com>
- **App**: <https://lifewell.aoneahsan.com>
- **Developer**: Ahsan Mahmood — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) · [aoneahsan.com](https://aoneahsan.com) · [LinkedIn](https://linkedin.com/in/aoneahsan)

This repository contains **only the documentation source** (Docusaurus markdown and assets). The LifeWell
application source is a separate private repository.

## What is documented here

45 pages, structured the way the product is — seven areas around **You**:

- **Get started** — install on the web or Android, the five-step first run, a short tour.
- **The seven areas** — health, mind, life stages, people, memories, everyday and sharing. Six carry a switch
  that turns the area off without deleting anything; sharing does not.
- **Features** — calendar and appointments, reminders, search, community and chats, professionals, blood
  donation, referrals, the shopping list, maps, tools.
- **Plans** — Free, Pro and Family, how the free tier is drawn, and the two ways to pay.
- **Your data** — export everything, delete everything or one area, and where the record actually lives.
- **How it works** — architecture, the data model, privacy and security, offline and sync, appearance,
  language and units.
- **Platforms** — web, Android, iOS (removed 2026-07-16), browser extension (planned, not built).
- **The admin panel** — ten screens, three roles, and the two controls that do less than they look like.
- **Reference** — the export file format field by field, the frozen public addresses, every third-party
  service.
- **FAQ** and **About**.

Every page is written against the application's own source rather than from memory, and cites real
public-health sources (CDC, WHO, Mayo Clinic, ACOG, AAP, NHLBI) where it makes a health claim.

**Where something is not built, the page says not built** — not *coming soon*. Seven such things are listed in
one place on the changelog.

## Built with

- [Docusaurus 3](https://docusaurus.io) — static-site generator, docs served from the **site root**.
- Local search via `@easyops-cn/docusaurus-search-local`.
- Custom CSS using LifeWell's emerald/cyan brand palette, light and dark.
- Yarn 4 with the `node-modules` linker.
- Deployed to **GitHub Pages** (custom domain) by `deploy-pages.yml` — a push to `main` deploys.

## Build and check

```bash
yarn install
yarn typecheck
yarn build
yarn serve
```

`onBrokenLinks` is set to `throw`, so **the build is the link checker** — a broken internal link fails it
rather than shipping. There is no dev-server step in this project's workflow; inspect the real build with
`yarn serve`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds and publishes to GitHub Pages at
`lifewell-docs.aoneahsan.com`. There is no manual deploy step and no Firebase project.

One search-discovery finding on this site is still open, and it is **owner-only**: the sitemap has not been
submitted to Search Console. Every build publishes `/sitemap.xml` with 63 URLs, so it is a submission gap
rather than a build problem, and no agent can close it — it is row 3 of `docs/MANUAL-TASKS.md`.

## License

- **Documentation content**: [CC-BY-4.0](LICENSE) — share, adapt, attribute.
- **Code samples in docs** (TypeScript / JSON / shell snippets embedded in markdown): MIT.
- **"LifeWell" trademark and logo**: not licensed; they remain the property of Ahsan Mahmood.

## Contributing

Improvements are welcome — typo fixes, clarifications, corrections. The guide is at
[About → Contributing](https://lifewell-docs.aoneahsan.com/about/contributing). Open a PR or an issue.

The one rule: **a page may only describe what the product actually does.**

**Note**: this repository is documentation only. Feature requests for the LifeWell app go to
[aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or the in-app feedback form, not as issues here.

## Acknowledgements

LifeWell stands on a lot of open-source work — React, Docusaurus, Supabase, Capacitor, React Aria, Tailwind
CSS, D3.js, Zustand, TanStack Router, Tiptap, and many more. Thanks to those communities.

---

**Maintainer**: Ahsan Mahmood · [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
**Last updated**: 2026-09-12
