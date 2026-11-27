/**
 * Redirects for addresses search engines still ask for, kept apart from the 3.0.0 move list in
 * `docusaurus.config.ts` so the SEO contract can check every one of them after the build.
 *
 * - `LEGACY_DOC_REDIRECTS`: 2.x `/docs/**` pages Google still requested on 2026-11-27, each 404 until now
 *   (aoneahsan/lifewell-docs#1, SA-P31). Each one points at the page that now covers its subject.
 * - Topic pages: `/tags/*` and `/blog/tags/*` were generated from page tags and listed nothing a reader could
 *   not reach from the sidebar or `/sitemap` (SA-P32). Pages keep their topics as `topics:` front matter, shown
 *   on `/sitemap`, and the old topic addresses lead to the closest real page.
 */
import {readdirSync, readFileSync} from 'node:fs';
import path from 'node:path';

/** One redirect, in the shape `@docusaurus/plugin-client-redirects` takes. */
export interface Redirect {
  readonly to: string;
  readonly from: string[];
}

export const LEGACY_DOC_REDIRECTS: readonly Redirect[] = [
  {
    to: '/features/tools',
    from: [
      '/docs/tools/interval-timer',
      '/docs/tools/kegel-trainer',
      '/docs/tools/step-counter',
      '/docs/tools/macro-calculator',
      '/docs/tools/protein-calculator',
      '/docs/tools/sleep-tracker-tool',
      '/docs/tools/calorie-calculator',
      '/docs/tools/workout-timer',
    ],
  },
  {to: '/domains/people', from: ['/docs/family/family-tree', '/docs/family/journeys', '/docs/family/location-tracking']},
  {to: '/admin', from: ['/docs/admin/payments', '/docs/admin/wellness-admin']},
  {to: '/domains/stages', from: ['/docs/baby/sleep-tracking', '/docs/baby/growth']},
  {
    to: '/domains/health',
    from: [
      '/docs/health/medical-records',
      '/docs/health/medications',
      '/docs/health/water-tracking',
      '/docs/health/sleep',
      '/docs/health/exercise-and-workouts',
      '/docs/health/vitals',
    ],
  },
  {to: '/features/maps', from: ['/docs/maps/memory-maps']},
  {to: '/category/get-started', from: ['/docs/category/get-started']},
  {to: '/getting-started/first-run', from: ['/docs/profile-and-settings/profile-overview']},
  {to: '/concepts/language-and-units', from: ['/docs/profile-and-settings/preferences']},
];

/** Docs pages a topic can land on, most specific first. */
const TOPIC_HOMES = ['domains', 'features', 'concepts', 'platforms', 'developers', 'getting-started', 'your-data'];

/**
 * Reads the topic keys and permalinks from a `topics.yml` (the former `tags.yml`).
 *
 * @param file - absolute path to the file
 * @returns each topic's permalink, without a leading slash
 */
export function topicPermalinks(file: string): string[] {
  return readFileSync(file, 'utf8')
    .split('\n')
    .map((line) => /^\s+permalink:\s*\/?(\S+)\s*$/.exec(line)?.[1])
    .filter((permalink): permalink is string => permalink !== undefined);
}

/**
 * Builds the redirects for the old generated topic pages.
 *
 * @param siteDir - the docs site root
 * @param docRoutes - every doc route that exists, with a leading slash (from `docs/**`)
 * @returns redirects for `/tags`, `/tags/<topic>`, `/blog/tags` and `/blog/tags/<topic>`
 */
export function topicRedirects(siteDir: string, docRoutes: ReadonlySet<string>): Redirect[] {
  const byTarget = new Map<string, string[]>();
  const add = (to: string, from: string): void => {
    byTarget.set(to, [...(byTarget.get(to) ?? []), from]);
  };
  add('/sitemap', '/tags');
  for (const topic of topicPermalinks(path.join(siteDir, 'docs', 'topics.yml'))) {
    const home = [...TOPIC_HOMES.map((dir) => `/${dir}/${topic}`), `/${topic}`].find((route) => docRoutes.has(route));
    add(home ?? '/sitemap', `/tags/${topic}`);
  }
  add('/blog', '/blog/tags');
  for (const topic of topicPermalinks(path.join(siteDir, 'blog', 'topics.yml'))) add('/blog', `/blog/tags/${topic}`);
  return [...byTarget].map(([to, from]) => ({to, from}));
}

/**
 * Lists the doc routes from the `docs/` tree (route base `/`), so a topic redirect never points at a missing page.
 *
 * @param files - doc file paths relative to `docs/`, e.g. `domains/health.md`
 * @returns routes such as `/domains/health`; `index.md` maps to its folder
 */
export function docRoutesFrom(files: readonly string[]): Set<string> {
  return new Set(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map((file) => `/${file.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '')}`.replace(/\/$/, '') || '/'),
  );
}

/** The blog's author page listed one author, the team, beside the same posts `/blog` lists. */
export const BLOG_AUTHOR_REDIRECTS: readonly Redirect[] = [{to: '/blog', from: ['/blog/authors', '/blog/authors/ahsan']}];

/**
 * Every redirect this file owns, for `docusaurus.config.ts` and the build-output contract alike.
 *
 * @param siteDir - the docs site root
 * @returns the legacy, topic and author redirects
 */
export function seoRedirects(siteDir: string): Redirect[] {
  const docFiles = readdirSync(path.join(siteDir, 'docs'), {recursive: true, encoding: 'utf8'});
  return [...LEGACY_DOC_REDIRECTS, ...BLOG_AUTHOR_REDIRECTS, ...topicRedirects(siteDir, docRoutesFrom(docFiles))];
}
