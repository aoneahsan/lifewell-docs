# LifeWell Docs — CLAUDE.md

**Mirror of `AGENTS.md`** — byte-identical except this header. Update one, update the other.

| Context Budget Last Verified | 2026-09-03 — CLAUDE.md ~6 KB / no PENDING-TASKS.md; re-check due 2026-09-13 |
|---|---|

**Last Updated:** 2026-09-03 — the audit pass: this guide, `README.md` and `package.json` now describe the site
honestly; the **content still describes v2.x** and its refresh is a recorded stage.

Public documentation site for **LifeWell** — *a life companion: one account holding a person's whole life;
health, family, work, memories and the everyday things that hold them together* (never "a health & wellness
app", OD-25). Built with **Docusaurus 3**. This repo is **documentation source only** and is itself **public**
(CC-BY-4.0 content; no secrets, no private tooling names, ever).

- Live docs: https://lifewell-docs.aoneahsan.com · App: https://lifewell.aoneahsan.com (`com.aoneahsan.lifewell`)
- Repo: https://github.com/aoneahsan/lifewell-docs (`main`, remote `o`)
- License: content **CC-BY-4.0**; embedded snippets MIT; "LifeWell" name/logo reserved.

## 🔴 Where this site stands (2026-09-03)

The app at `lifewell.aoneahsan.com` is the **v3 rebuild** (React 19 · Tailwind v4 · React Aria · Supabase
hosted · Capacitor 8 Android · Google Drive for media; web + Android only). **The 109 pages here still
document v2.x** — Firebase/Firestore, Radix, "iOS in prep", a browser extension, a health-and-wellness
positioning — and three claims are recorded as false in the rebuild's frozen contract
(`../02-FROZEN-CONTRACTS.md` §8): **F1** `/feed` is the public blog feed, not a social feed · **F2** the
analytics stack is GA4 + Amplitude + Clarity + Sentry (the page saying Firebase Analytics is banned
misinforms) · **F3** native-update OTA is part of 3.0 (the page says "not integrated").

**The refresh is Stage 7 of `../remaining-work.md`** (kit root, one folder up): fix F1/F2/F3 at their pages,
rewrite the 18 categories for v3, keep the extension URL as an honest "deferred" page (OD-10/OD-67), write
the export format-notes page the app links to, add the v3 announcement post (through the story pipeline,
GATE 4), then push. Until then, do not "touch up" single pages piecemeal — a half-refreshed site contradicts
itself.

## What this is

- Docusaurus static site: `docs/` (18 categories, ~109 MD/MDX pages) + `blog/` + `/about` + a custom
  `src/pages/index.tsx` landing. Brand palette emerald `#10B981` → cyan `#06B6D4`, light + dark.
- SEO/AEO shipped: JSON-LD `@graph` (WebSite + Organization + Person) in `docusaurus.config.ts` headTags,
  `static/robots.txt`, `static/llms.txt`, an IndexNow key file + `indexnow:ping` script, `sitemap.xml`,
  OG/Twitter meta. Re-verify all of it in the built output at the refresh.
- **Deployment: GitHub Pages** via `.github/workflows/deploy-pages.yml` with the custom domain — **a push
  to `main` IS the deploy.** (Adopted 2026-07-25; the old Firebase Hosting target is gone.) Read the push
  output; the repo's ruleset may print `Bypassed rule violations` for the owner's direct push — quote it.
- `docs/MANUAL-TASKS.md` is excluded from the build — verify in `build/`, not in the config.

## Commands

```bash
yarn install
yarn typecheck      # tsc — passes clean
yarn build          # docusaurus build (Rspack via @docusaurus/faster)
```

> **Known local-only build quirk:** `@docusaurus/faster` runs `git submodule status` from the git root; the
> `01-code` parent workspace holds project gitlinks with no `.gitmodules`, so a local `yarn build` can abort
> during VCS init. Environmental — `yarn typecheck` passes and a standalone/CI checkout builds. Do not
> modify the workspace to fight it.

## Do / Don't (project-specific)

- Never run `yarn start` or any dev/preview server; one-shot `yarn typecheck` / `yarn build` only.
- No automated tests (a docs site).
- Keep every health claim source-cited (CDC, WHO, Mayo, ACOG, AAP, NHLBI…); never a fabricated statistic.
- App identifiers and store URLs are tracked in the main `lifewell` project, never here.
- Portfolio info file (weekly): `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/LIFEWELL-DOCS_portfolio-info_2026-05-29.md`
  — tracker `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`; last applied 2026-05-29.
- Gitignore last verified 2026-06-24 — PUBLIC repo: no `.env`, no keys, ever.

## Fleet rules — pointers, never copies

Every rule below is loaded from `~/.claude/rules/` and is not restated here: docs-site standard + the direct
push (`docs-sites.md`) · package hierarchy nvm → npm (global) → yarn (local), upgrades via
`npm-check-updates` (`package-management.md`) · share feature (`share-feature.md`) · gitignore
(`project-config.md`) · sub-agents — `aoneahsan-ccca-*` only, `EXCLUSIVE SCOPE`
(`subagent-orchestration.md`) · model floor Fable 5 / Opus 5 or newer (`01-authorizations.md`) · the
storytelling gates for any new prose (`storytelling-content.md`; the Bible lives in
`../lifewell/docs/story/`) · task speed over docs (`00-house-rules.md`).
