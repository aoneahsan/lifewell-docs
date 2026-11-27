# Search-console fix log — lifewell-docs

Fixed path in every repo (`aoneahsan-cccs-search-issue-remediation`). Newest first. Not published: excluded in
`docusaurus.config.ts` and skipped by `plugins/i18n-gate.ts`. The audit session retests with the commands under
**Retest**.

## aoneahsan/lifewell-docs#1 — indexing + AEO fix list · 2026-11-27 · commit `307cab5` (gh-pages `7e10eafb`)

Status: live-verified, google-pending. Built in all 10 locales with zero warnings; `yarn seo:contract` passes in all
10 and failed on planted defects (a second description, a noindex, a deleted redirect page). Rendered at 1440 and 390,
`/sitemap` topic chips present in en and fr. Published to `gh-pages` 2026-11-27; IndexNow 200.

Live proof, 2026-11-27: every old URL in the table → 301 to its slashed form, whose page carries
`http-equiv="refresh" content="0; url=<new home>/"` (for example `/docs/tools/interval-timer/` → `/features/tools/`);
`/compare` → 301 `/compare/` → 200; `sitemap.xml` has 0 unslashed page URLs.

| Box | SA | What was wrong (evidence) | Root fix (file) | Contract | Live proof |
|---|---|---|---|---|---|
| Body 1: 25 old docs URLs 404 | P31 | 2.x `/docs/**` paths Google still requests; `curl` gave 404 for each on 2026-11-27 | `plugins/seo-redirects.ts` `LEGACY_DOC_REDIRECTS` (+ `/docs/health/vitals`, a 26th from the comment list), wired in `docusaurus.config.ts` | `yarn seo:contract` fails if any `from` page or its target is missing | see Retest |
| Body 1: `/compare/` 404 | P26 | `trailingSlash: false` wrote `compare.html`; GitHub Pages 404s the slashed form | `docusaurus.config.ts` `trailingSlash: true`; every page is `<route>/index.html`, so `/x` 301s to `/x/` | contract fails on any `x.html` page, unslashed canonical or unslashed sitemap URL | see Retest |
| Comment 3: `/tags/health` not indexed | P32 | ~43 generated topic pages × 10 locales repeated the sidebar | topics moved from `tags:` to `topics:` front matter, `tags.yml` → `topics.yml` (`plugins/topics.ts` feeds `/sitemap` chips); `/tags/*` and `/blog/tags/*` 301 to the matching page (`topicRedirects`) | contract checks every topic redirect | see Retest |
| (found on the way) `/blog/authors`, `/blog/authors/ahsan` had no meta description | P29/P32 | the author page listed one author, the team, beside `/blog` | team author written inline in each post (all 10 locales), `authors.yml` removed, `onInlineAuthors: 'ignore'`; both URLs 301 to `/blog` | contract: one description per page | see Retest |
| Comment 1: feeds / llms.txt / sitemap in "crawled, not indexed" | P33 | `feed.xml`, `blog/atom.xml`, `sitemap.xml` are machine files | none needed: feeds are not meant to be indexed. There are no `.md` mirrors on this host, and GitHub Pages cannot send headers anyway | — | — |
| Comment 2: `/blog/rss.xml` "duplicate without canonical" | P33 | RSS is XML and cannot carry a canonical; `/feed.xml` is a copy of it with its own self link (`plugins/site-pages.ts` `rootFeed`) | none needed: Google reports feeds this way and they are not ranking pages | — | — |
| Comment 3: `/features/maps`, `/developers/calendar-feeds` not indexed | — | both 200 with their own title, description and text; both linked from the sidebar on every page and from `/sitemap` | no code change. Ranking depends on authority, and the daily audit requests indexing | — | `curl -s -o /dev/null -w '%{http_code}' https://lifewell-docs.aoneahsan.com/features/maps/` → 200 |
| Body 2: generic "not indexed" advice | P32 | — | boilerplate removed as above. Owner decision 2026-11-27: no public page is noindexed | — | — |

Overruled by owner law: the issue's "cut or noindex boilerplate" → public pages are never noindexed. The
boilerplate topic and author pages were removed and redirected instead.

### Pending

| Box | Why not done | Who | Next action |
|---|---|---|---|
| Google re-crawl and Validate fix | console work | daily audit | request indexing for the redirected URLs; Validate fix |

### Retest

```bash
H=https://lifewell-docs.aoneahsan.com
for p in /docs/tools/interval-timer /docs/health/sleep /docs/health/vitals /docs/category/get-started /compare /tags/health /blog/authors/ahsan; do
  printf '%s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$H$p")"
done   # expect 301 to the slashed form, then a page whose meta refresh points at the new home
curl -s "$H/compare/" -o /dev/null -w '%{http_code}\n'   # 200
curl -s "$H/domains/health/" | grep -o '<link rel=canonical[^>]*>'   # one, slashed
curl -s "$H/sitemap.xml" | grep -c '<loc>[^<]*[^/]</loc>'   # 0 unslashed page URLs (feeds excepted)
```
