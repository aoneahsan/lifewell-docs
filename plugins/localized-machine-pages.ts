import {readFileSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {setTimeout as delay} from 'node:timers/promises';
import {load} from 'cheerio';
import type {SitePage, SitePagesData} from './site-pages';

const RSS_WAIT_MS = 30_000;
const RSS_POLL_MS = 25;

/**
 * Whether an error is a missing file's.
 *
 * @param error - anything a file read rejected with
 * @returns true for `ENOENT`
 */
function isMissingFile(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT';
}

/**
 * Reads the blog's RSS file once it is written in full. Docusaurus runs every plugin's `postBuild` at the same time,
 * so the blog plugin may still be writing it. The build starts by clearing its output folder, so a complete file
 * (one that ends with `</rss>`) is this build's.
 *
 * @param file - absolute path of the blog's `rss.xml` in the build output
 * @returns the file's text
 * @throws when the file is not complete within {@link RSS_WAIT_MS}
 */
async function readWrittenRss(file: string): Promise<string> {
  const deadline = Date.now() + RSS_WAIT_MS;
  for (;;) {
    const text = await readFile(file, 'utf8').catch((error: unknown) => {
      if (isMissingFile(error)) return '';
      throw error;
    });
    if (text.trimEnd().endsWith('</rss>')) return text;
    if (Date.now() >= deadline) {
      throw new Error(
        `site-pages: ${file} was not written within ${RSS_WAIT_MS / 1000} s. The blog's RSS feed (feedOptions.type) must stay on.`
      );
    }
    await delay(RSS_POLL_MS);
  }
}

/**
 * Escapes a value for an XML attribute in double quotes.
 *
 * @param value - the raw value
 * @returns the escaped value
 */
export function escapeXmlAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** The translated catalogues and docs are also the source for each locale's machine-readable pages. */
export async function writeLocalizedMachinePages({
  outDir,
  siteDir,
  locale,
  siteUrl,
  pages,
  stripLocale,
}: {
  readonly outDir: string;
  readonly siteDir: string;
  readonly locale: string;
  readonly siteUrl: string;
  readonly pages: SitePagesData;
  readonly stripLocale: (pathname: string) => string;
}): Promise<void> {
  if (locale === 'en') return;
  const catalogue = JSON.parse(readFileSync(path.join(siteDir, 'i18n', locale, 'code.json'), 'utf8')) as Record<string, {message: string}>;
  const message = (key: string): string => {
    const value = catalogue[key]?.message;
    if (!value) throw new Error(`site-pages: ${locale} is missing ${key} for machine-readable output`);
    return value;
  };
  const absolute = (permalink: string): string => new URL(`/${locale}${stripLocale(new URL(permalink, siteUrl).pathname)}`, siteUrl).href;
  const line = (page: SitePage): string => `- [${page.title}](${absolute(page.permalink)}): ${page.description}`;
  const all = pages.groups.flatMap((group) => group.pages);
  const featured = new Set([
    '/intro', '/domains/overview', '/domains/people', '/domains/memories', '/domains/everyday',
    '/domains/sharing', '/your-data/export', '/plans', '/developers/api', '/ecosystem', '/about-developer',
  ]);
  const selected = all.filter((page) => featured.has(stripLocale(new URL(page.permalink, siteUrl).pathname)));
  if (selected.length !== featured.size) throw new Error(`site-pages: ${locale} machine index is missing a featured route`);
  const summary = `# LifeWell\n\n> ${message('home.description')}\n\n## ${message('docs.sitemap.group.docs')}\n\n${selected.map(line).join('\n')}\n\n- [${message('docs.sitemap.title')}](${absolute(`/${locale}/sitemap`)})\n- [${message('docs.feed.title')}](${absolute(`/${locale}/feed`)})\n`;
  const full = `# LifeWell\n\n> ${message('home.description')}\n\n${pages.groups.map((group) => `## ${group.kind === 'category' ? group.label : message('docs.sitemap.group.docs')}\n\n${group.pages.map(line).join('\n')}`).join('\n\n')}\n\n## ${message('docs.sitemap.group.posts')}\n\n${pages.posts.map(line).join('\n')}\n`;
  const plansSource = await readFile(path.join(siteDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current', 'plans.md'), 'utf8');
  const plans = plansSource.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '').trim()
    .replaceAll('https://lifewell.aoneahsan.com/plans', `https://lifewell.aoneahsan.com/${locale}/plans`)
    .replace(/\]\(\.\/([^)#]+)\.md(#[^)]+)?\)/g, (_match, route: string, fragment: string | undefined) =>
      `](${absolute(`/${route}`)}${fragment ?? ''})`);
  if (!plans.startsWith('# ') || !plans.includes('|')) throw new Error(`site-pages: ${locale} plans cannot make pricing.md`);
  await Promise.all([
    writeFile(path.join(outDir, 'llms.txt'), summary, 'utf8'),
    writeFile(path.join(outDir, 'llms-full.txt'), full, 'utf8'),
    writeFile(path.join(outDir, 'pricing.md'), `${plans}\n`, 'utf8'),
  ]);
}

/** Docusaurus uses English feedOptions for every locale; localize the emitted RSS and Atom channel metadata. */
export async function localizeFeedMetadata({outDir, siteDir, locale, blogPath}: {
  readonly outDir: string;
  readonly siteDir: string;
  readonly locale: string;
  readonly blogPath: string;
}): Promise<string> {
  const rssFile = path.join(outDir, blogPath, 'rss.xml');
  const rss = await readWrittenRss(rssFile);
  if (locale === 'en') return rss;
  const options = JSON.parse(readFileSync(path.join(siteDir, 'i18n', locale, 'docusaurus-plugin-content-blog', 'options.json'), 'utf8')) as Record<string, {message: string}>;
  const footer = JSON.parse(readFileSync(path.join(siteDir, 'i18n', locale, 'docusaurus-theme-classic', 'footer.json'), 'utf8')) as Record<string, {message: string}>;
  const title = `LifeWell · ${options.title?.message ?? ''}`;
  const description = options.description?.message;
  const copyright = load(footer.copyright?.message ?? '').text();
  if (!description || title === 'LifeWell · ' || !copyright) throw new Error(`site-pages: ${locale} blog feed metadata is missing`);
  const replaceHead = (xml: string, subtitleTag: string, copyrightTag: string): string => xml
    .replace(/(<title>)[^<]*(<\/title>)/, `$1${escapeXmlAttribute(title)}$2`)
    .replace(new RegExp(`(<${subtitleTag}>)[^<]*(<\\/${subtitleTag}>)`), `$1${escapeXmlAttribute(description)}$2`)
    .replace(new RegExp(`(<${copyrightTag}>)[^<]*(<\\/${copyrightTag}>)`), `$1${escapeXmlAttribute(copyright)}$2`);
  const localizedRss = replaceHead(rss, 'description', 'copyright');
  await writeFile(rssFile, localizedRss, 'utf8');
  const atomFile = path.join(outDir, blogPath, 'atom.xml');
  const deadline = Date.now() + RSS_WAIT_MS;
  let atom = '';
  while (!atom.trimEnd().endsWith('</feed>')) {
    atom = await readFile(atomFile, 'utf8').catch((error: unknown) => {
      if (isMissingFile(error)) return '';
      throw error;
    });
    if (atom.trimEnd().endsWith('</feed>')) break;
    if (Date.now() >= deadline) throw new Error(`site-pages: ${atomFile} was not completed by the blog plugin`);
    await delay(RSS_POLL_MS);
  }
  await writeFile(atomFile, replaceHead(atom, 'subtitle', 'rights'), 'utf8');
  return localizedRss;
}
