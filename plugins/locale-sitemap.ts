import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {setTimeout as delay} from 'node:timers/promises';
import {load} from 'cheerio';

type Entry = {url: string; lastmod: string};
type Options = {outDir: string; currentLocale: string; defaultLocale: string; locales: readonly string[]};

/** Wait for Docusaurus' sitemap plugin, whose postBuild runs beside this plugin's postBuild. */
async function writtenSitemap(file: string): Promise<string> {
  const deadline = Date.now() + 30_000;
  for (;;) {
    const xml = await readFile(file, 'utf8').catch((error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') return '';
      throw error;
    });
    if (xml.trimEnd().endsWith('</urlset>')) return xml;
    if (Date.now() >= deadline) throw new Error(`locale-sitemap: ${file} was not completed by the sitemap plugin`);
    await delay(25);
  }
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** After the last locale, publish one root sitemap containing every locale URL and its reciprocal alternates. */
export async function consolidateLocaleSitemaps({outDir, currentLocale, defaultLocale, locales}: Options): Promise<void> {
  if (currentLocale !== locales[locales.length - 1]) return;
  const root = path.dirname(outDir);
  const byRoute = new Map<string, Map<string, Entry>>();
  for (const locale of locales) {
    const directory = locale === defaultLocale ? root : path.join(root, locale);
    const $ = load(await writtenSitemap(path.join(directory, 'sitemap.xml')), {xmlMode: true});
    if ($('urlset').length !== 1) throw new Error(`locale-sitemap: invalid ${locale} URL set`);
    $('url').each((_index, node) => {
      const url = $(node).children('loc').text().trim();
      const lastmod = $(node).children('lastmod').text().trim();
      if (!url || !lastmod) throw new Error(`locale-sitemap: ${locale} has an undated or empty URL`);
      const pathname = new URL(url).pathname;
      const route = locale === defaultLocale ? pathname : pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/';
      const entries = byRoute.get(route) ?? new Map<string, Entry>();
      if (entries.has(locale)) throw new Error(`locale-sitemap: duplicate ${locale} URL for ${route}`);
      entries.set(locale, {url, lastmod});
      byRoute.set(route, entries);
    });
  }

  const urls: string[] = [];
  for (const [route, entries] of byRoute) {
    if (entries.size !== locales.length) throw new Error(`locale-sitemap: ${route} is missing a locale URL`);
    const requiredEntry = (locale: string): Entry => {
      const entry = entries.get(locale);
      if (!entry) throw new Error(`locale-sitemap: ${route} is missing ${locale}`);
      return entry;
    };
    const alternates = locales.map((locale) => {
      const entry = requiredEntry(locale);
      const language = locale === 'en' ? 'en-GB' : locale;
      return `<xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(entry.url)}"/>`;
    });
    alternates.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(requiredEntry(defaultLocale).url)}"/>`);
    for (const locale of locales) {
      const entry = requiredEntry(locale);
      urls.push(`<url><loc>${escapeXml(entry.url)}</loc><lastmod>${escapeXml(entry.lastmod)}</lastmod>${alternates.join('')}</url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  await writeFile(path.join(root, 'sitemap.xml'), xml, 'utf8');
}
