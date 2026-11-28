# Account-controlled tasks — LifeWell Docs

> This file is excluded from the public docs build. The owner can point a desktop session with the logged-in Chrome profile at the root handoff; no console report needs to be copied by hand.
>
> Last updated: 2026-11-28

## ⏳ Pending

| # | Task | Why account access is needed | Detailed runbook | Status |
|---|---|---|---|---|
| 3 | **Desktop agent: verify the docs sitemap in Google Search Console.** Check the property covering `https://lifewell-docs.aoneahsan.com/`, submit `https://lifewell-docs.aoneahsan.com/sitemap.xml` if absent, and record the processing state and date. This is search-discovery finding `fnd-sitemap-not-submitted-ac34c86428`. | The signed-in Chrome profile holds the Search Console property and its reports. | `../SEARCH-ENGINE-DESKTOP-HANDOFF.md` → Google Search Console and evidence return path. | ⏳ Pending desktop evidence; submission is not indexing. |

## ✅ Completed

| # | Task | Resolution | Date |
|---|---|---|---|
| 1 | Add DNS for `lifewell-docs.aoneahsan.com`. | `dig` returned the CNAME `aoneahsan.github.io` and GitHub Pages addresses; the HTTPS host served the current docs build. | 2026-11-28 |
| 2 | Configure GitHub Pages and HTTPS. | GitHub Pages API reported custom domain `lifewell-docs.aoneahsan.com`, `https_enforced: true`, source `gh-pages` at `/`; the live English and French tools HTML matched the new build byte for byte. | 2026-11-28 |
