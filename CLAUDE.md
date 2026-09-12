# LifeWell Docs — CLAUDE.md

**Mirror of `AGENTS.md`** — byte-identical except this header. Update one, update the other.

| Context Budget Last Verified | 2026-09-12 — CLAUDE.md 7,814 B / no PENDING-TASKS.md; re-check due 2026-09-22 |
|---|---|

**Last Updated:** 2026-09-12 — **these pages describe LifeWell 3.22.0.** The 3.0.0 address `/features/sharing`
and its 2.x `/docs/` form now redirect to the Sharing area (OD-90 A6), so `docs/features/sharing.md` is
excluded from the build rather than rendered; the Sharing page now says what a copied address does and does
not carry. 🔴 **The one open search-discovery finding is OWNER-ONLY** — submitting the sitemap to Search
Console (`fnd-sitemap-not-submitted-ac34c86428`; row 3 of `docs/MANUAL-TASKS.md`, and
`../lifewell/SEARCH-DISCOVERY-ISSUES.md`). The site publishes `/sitemap.xml` with 63 URLs on every build, so
it is a submission gap and never a build problem; no agent can close it. Earlier, 2026-09-11 — the Sharing
area page (`docs/domains/sharing.md`; the seventh domain, OD-80), the `/blog` level-one heading fixed at the
theme level, the changelog running to 3.22.0. Earlier, 2026-09-08 — 🔴 **the v3 rewrite landed.** All 108 v2
pages were deleted and rewritten against the app's own source.

Public documentation site for **LifeWell** — *a life companion: one account holding a person's whole life;
health, family, work, memories and the everyday things that hold them together* (never "a health & wellness
app", OD-25). Built with **Docusaurus 3**. This repo is **documentation source only** and is itself **public**
(CC-BY-4.0 content; no secrets, no private tooling names, ever).

- Live docs: https://lifewell-docs.aoneahsan.com · App: https://lifewell.aoneahsan.com (`com.aoneahsan.lifewell`)
- Repo: https://github.com/aoneahsan/lifewell-docs (`main`, remote `o`)
- License: content **CC-BY-4.0**; embedded snippets MIT; "LifeWell" name/logo reserved.

## 🔴 Four things that will break if you do not know them

1. 🔴 **THE DOCS ARE SERVED FROM THE SITE ROOT — `routeBasePath: '/'`, and it is load-bearing.** The app
   links to `https://lifewell-docs.aoneahsan.com/reference/export-format` from its export screen
   (`../lifewell/src/features/export/components/states.tsx`). That link **already ships**, so with the
   default `docs` base the page would sit at `/docs/reference/export-format` and the shipped link would 404
   in production. Never restore the `docs` prefix. Every old `/docs/**` address is redirected by
   `@docusaurus/plugin-client-redirects`.
2. 🔴 **THIS REPO IS PUBLIC AND THE OWNER'S PRIVATE VAULT TOOLING MUST NEVER BE NAMED IN IT** — not the
   product name, not its host, not a token prefix, in prose, config, front matter, a comment or a file name.
   16 files carried it before the rewrite. Say "the secure vault", or drop the sentence.
   🔴 **The gate is `grep -ril <the vault product's name> .` and `… build/`, both → 0 — and THIS FILE MUST NOT
   SPELL THAT NAME**, or the gate matches its own instructions and can never reach 0. The name is in
   the vault's own rule file under `~/.claude/rules/` (`ls ~/.claude/rules | grep -i vault -e api` finds it);
   read it there, never write it here. That is the same trap as an archive that quotes the line a gate
   looks for.
3. 🔴 **`docs/MANUAL-TASKS.md` is EXCLUDED from the build** via the docs plugin's `exclude` array — which
   **replaces** the plugin defaults, so they are restated there. Verify in `build/`, never in the config:
   `ls build/ | grep -i manual` → nothing. `docs/features/sharing.md` sits in the same array for a different
   reason: it is a redirect now, and **a client redirect whose `from` is still a real route is silently
   ignored**, so the page has to stop being one. Verify the redirect in `build/`, never in the config:
   `build/features/sharing/index.html` must be a meta refresh to `/domains/sharing`.
4. 🔴 **A page may only describe what the product actually does.** The v2 site described a removed platform,
   an unshipped extension, the wrong database and an inverted analytics stack — every one written in good
   faith, then left behind by the product. Not built → the page says **not built**, never *coming soon*.
   Built but not switched on → say which. A limitation goes next to the claim it limits, in the same
   paragraph.

## What this is

- Docusaurus static site: `docs/` (45 pages) + `blog/` + a custom `src/pages/index.tsx` landing. Brand
  palette emerald `#10B981` → cyan `#06B6D4`, light + dark.
- Structure mirrors the product: **seven areas around You** (`domains/`), then `features/`, `plans`,
  `your-data/`, `concepts/`, `platforms/`, `admin`, `reference/`, `faq`, `about/`.
- **`onBrokenLinks: 'throw'`** and `onBrokenMarkdownLinks: 'throw'` — **the build is the link checker.**
- Local search via `@easyops-cn/docusaurus-search-local` (`docsRouteBasePath: '/'` — it must match).
- SEO/AEO shipped: JSON-LD `@graph` (WebSite + Organization + Person) in `docusaurus.config.ts` headTags,
  `static/robots.txt`, `static/llms.txt` (rewritten for v3), an IndexNow key file + `indexnow:ping` script,
  `sitemap.xml`, OG/Twitter meta.
- **Deployment: GitHub Pages** via `.github/workflows/deploy-pages.yml` with the custom domain — **a push
  to `main` IS the deploy.** 🔴 **No Firebase project, ever** — no `firebase.json`, no `.firebaserc`, no
  deploy script. Read the push output; the repo's ruleset may print `Bypassed rule violations` for the
  owner's direct push — quote it, never call it a clean push.

## Commands

```bash
yarn install
yarn typecheck      # tsc
yarn build          # docusaurus build (Rspack via @docusaurus/faster)
yarn serve          # inspect the real build; never `yarn start`
```

## Do / Don't (project-specific)

- Never run `yarn start` or any dev/preview server; one-shot `yarn typecheck` / `yarn build` only.
- No automated tests (a docs site).
- **The voice is the app's, and it is binding** — second person · **no contractions** · **zero exclamation
  marks** · en-GB · sentence case headings · em dash welcome. It was measured from the 61 approved click-dummy
  pages, not invented: `../lifewell/docs/story/story-bible.md` §4 and `voice-fingerprint.md`. Never *empower*,
  *journey*, *seamless*, *unlock*, *effortless*, and never *streak*, *score*, *badge* or *rank* as something
  the product offers.
- Every page carries `title` + `description` front matter, or it is invisible to search.
- Facts come from the app's own source, never from memory: the export tables from
  `../lifewell/src/features/export/tables.ts`, plan limits from `../lifewell/src/config/plans.ts`, the Android
  floor from `../lifewell/android/variables.gradle`, the admin surface from
  `../lifewell/docs/admin/ADMIN-SURFACE.md`, the frozen addresses from `../02-FROZEN-CONTRACTS.md`.
- Keep every health claim source-cited (CDC, WHO, Mayo, ACOG, AAP, NHLBI…); never a fabricated statistic.
- App identifiers and store URLs are tracked in the main `lifewell` project, never here.
- Gitignore last verified 2026-09-08 — PUBLIC repo: no `.env`, no keys, ever.

## Fleet rules — pointers, never copies

Every rule below is loaded from `~/.claude/rules/` and is not restated here: docs-site standard + the direct
push (`docs-sites.md`) · package hierarchy nvm → npm (global) → yarn (local), upgrades via
`npm-check-updates` (`package-management.md`) · gitignore (`project-config.md`) · sub-agents —
`aoneahsan-ccca-*` only, `EXCLUSIVE SCOPE` (`subagent-orchestration.md`) · model floor Fable 5 / Opus 5 or
newer (`01-authorizations.md`) · the storytelling gates for any new prose (`storytelling-content.md`; the
Bible lives in `../lifewell/docs/story/`) · task speed over docs (`00-house-rules.md`).
