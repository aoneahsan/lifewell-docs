# Manual / User-Only Tasks — Lifewell Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-09-08

## ⏳ Pending manual tasks

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| 1 | **Add DNS.** In Hostinger, add a `CNAME` record `lifewell-docs` → `aoneahsan.github.io` on `aoneahsan.com`. | Only you control the `aoneahsan.com` DNS zone. | ☐ Not started |
| 2 | **Configure GitHub Pages.** Repo **Settings → Pages**: source = **GitHub Actions**, custom domain = `lifewell-docs.aoneahsan.com`, then **Enforce HTTPS** once the certificate provisions. | Repo settings are owner-only. | ☐ Not started |
| 3 | **Submit the sitemap.** In Search Console (`sc-domain:aoneahsan.com`) submit `https://lifewell-docs.aoneahsan.com/sitemap.xml`. The site publishes it — 63 URLs, regenerated on every build — so this is a submission gap, not a build problem. | Search Console access is yours. | ☐ Not started |

`static/CNAME` already ships `lifewell-docs.aoneahsan.com` inside `build/`, and `.github/workflows/deploy-pages.yml` builds and
publishes on every push to `main` — these steps are all that remain.

⚠️ Rows 1 and 2 read *Not started*, but on 2026-09-08 `https://lifewell-docs.aoneahsan.com` answered **200** and served the
current build, so both appear to have been done already. Only you tick these off, so they are left as they are — please close
them if that is right. Row 3 came from the search-discovery runner's `sitemap-not-submitted` finding.

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| — | — | — | — |
