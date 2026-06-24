# LifeWell Docs — CLAUDE.md

**Last Updated**: 2026-06-22 (finalization: added "not medical advice" disclaimers to all 22 health/tool/baby docs; Play Store cross-links in navbar + footer + Organization JSON-LD; changelog brought current to v2.15.0; `llms.txt` version → 2.15.0; repo flipped PUBLIC per fleet docs-public policy — no secrets tracked, only `.firebaserc` project id)

Public documentation / knowledge-base site for **LifeWell** (the health & wellness app; app source lives in a separate **private** repo). Built with **Docusaurus 3.10**. This repo is **documentation source only** and is itself **public** (CC-BY-4.0 content, no secrets).

- Live docs: https://lifewell-docs.aoneahsan.com
- App: https://lifewell.aoneahsan.com (Capacitor app id `com.aoneahsan.lifewell`)
- Repo: https://github.com/aoneahsan/lifewell-docs
- License: docs content **CC-BY-4.0**; embedded code snippets MIT; "LifeWell" name/logo reserved.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

---

## What this is

- Docusaurus static site, ~108 MD/MDX doc pages + blog + `/about` + custom `src/pages/index.tsx` landing.
- Brand palette: Emerald `#10B981` → Cyan `#06B6D4` gradient. Light + dark mode (respects `prefers-color-scheme`).
- Content domains: getting-started, concepts, profile/settings, health, tools, baby, family, memories/notes, maps, community, mobile, extension, admin, reference, FAQ.
- SEO/AEO already shipped: JSON-LD `@graph` (WebSite + Organization + Person) in `docusaurus.config.ts` headTags, `static/robots.txt`, `static/llms.txt`, IndexNow key file + `indexnow:ping` script, `sitemap.xml` (weekly changefreq), OG/Twitter card meta.
- Deployment target: **Firebase Hosting** (project `lifewell-docs`, see `.firebaserc` + `firebase.json`). Deploy: `yarn build && yarn firebase:deploy`.

## Commands

```bash
yarn install
yarn typecheck      # tsc — passes clean
yarn build          # docusaurus build (Rspack via @docusaurus/faster)
yarn firebase:deploy
```

> **KNOWN LOCAL-ONLY BUILD QUIRK:** `@docusaurus/faster` (Rspack) eagerly runs `git submodule status` from the repo's git root. Because the `01-code` parent workspace contains project gitlinks (e.g. `github-profile`) with **no `.gitmodules`**, that command exits 128 and the local `yarn build` aborts during VCS init. This is environmental, not a code/dep problem — `yarn typecheck` passes and a standalone/CI checkout (no sibling gitlinks) builds fine. Do NOT modify the workspace or fight this locally.

## Do / Don't

- No automated tests (this is a docs site).
- Never run dev/preview/emulator servers (`yarn start`, `firebase emulators:start`). One-shot `yarn typecheck` / `yarn build` only.
- Keep health claims source-cited (CDC, WHO, Mayo, ACOG, AAP, NHLBI, etc.).
- App identifiers / store URLs are tracked in the main `lifewell` project, not here.

---

## Portfolio Info File — Weekly Update Rule
- Canonical portfolio info file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/LIFEWELL-DOCS_portfolio-info_2026-05-29.md`
- Update at least once per week (and on any material change). Keep the last-updated date in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

## Package Manager Hierarchy: nvm → npm (global) → yarn (local) (IRON-SOLID)

Three tiers, each tool ONLY for its tier — for the best, most reproducible dev results:
- **`nvm`** → install/update Node.js (which bundles `npm`): `nvm install --lts`. Use nvm to get/update `npm` itself.
- **`npm`** → ALL global packages: `npm install -g yarn` (install yarn globally if missing) + `npm install -g <pkg>` (every other global CLI).
- **`yarn`** → ALL local project work: `yarn`, `yarn add <pkg>`, `yarn add -D <pkg>` inside the project.

❌ NEVER use `npm`/`pnpm` for LOCAL installs. NEVER use `pnpm` at all. ✅ Only `yarn.lock` in the project — delete `package-lock.json` and `pnpm-lock.yaml`.

## Package Upgrades: Use `npm-check-updates`
For dependency upgrades use `npx -y npm-check-updates -u && yarn install` (latest STABLE), NOT `yarn upgrade --latest`. Full rule in global `~/.claude/CLAUDE.md`. Last applied: 2026-05-29

## Share Feature — Web + Mobile Contract (IRON-SOLID)

All user-facing "share" actions follow the global contract: **web** (any browser, incl. mobile web) opens an in-app `WebShareModal` — a social grid (X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, Email web-intents) + a copy-link button; **native** (Capacitor) uses the OS share sheet via `@capacitor/share`. The web-vs-native split is decided at button-click via `Capacitor.isNativePlatform()`. ❌ Never use `navigator.share` as the primary web path with a silent clipboard fallback. **Full spec: `~/.claude/rules/share-feature.md`.**

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24
