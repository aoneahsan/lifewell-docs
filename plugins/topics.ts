/**
 * Page topics for `/sitemap`. Pages carry `topics:` front matter (formerly `tags:`); the labels per locale live
 * in `topics.yml` (formerly `tags.yml`). Topics are not routes: the generated `/tags/*` pages listed nothing a
 * reader could not reach from the sidebar or `/sitemap`, and search engines saw them as boilerplate (SA-P32).
 */
import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';

/** Topic key → label for the locale being built, per plugin (`topics.yml`, which replaced the tag pages). */
export const topicLabels = {docs: new Map<string, string>(), blog: new Map<string, string>()};

/**
 * Reads a `topics.yml` (`key:` then an indented `label: "…"`) into key → label.
 *
 * @param file - the file; a missing file gives no labels
 * @returns the labels by key
 */
function readTopicLabels(file: string): Map<string, string> {
  const labels = new Map<string, string>();
  let key = '';
  for (const line of (existsSync(file) ? readFileSync(file, 'utf8') : '').split('\n')) {
    key = /^([^\s#][^:]*):\s*$/.exec(line)?.[1] ?? key;
    const label = /^\s+label:\s*"?(.*?)"?\s*$/.exec(line)?.[1];
    if (label !== undefined && key) labels.set(key, label);
  }
  return labels;
}

/**
 * A page's topic labels from its `topics:` front matter.
 *
 * @param frontMatter - the page's front matter
 * @param kind - which plugin's labels apply
 * @returns the labels, falling back to the key when a locale has no label
 */
export function topicsOf(frontMatter: object, kind: keyof typeof topicLabels): string[] {
  const topics = (frontMatter as {topics?: unknown}).topics;
  return Array.isArray(topics) ? topics.map((topic) => topicLabels[kind].get(String(topic)) ?? String(topic)) : [];
}

/**
 * Loads the topic labels for the locale being built.
 *
 * @param siteDir - the docs site root
 * @param locale - the locale being built
 */
export function loadTopicLabels(siteDir: string, locale: string): void {
  const localized = locale === 'en' ? '' : path.join('i18n', locale);
  topicLabels.docs = readTopicLabels(path.join(siteDir, localized ? path.join(localized, 'docusaurus-plugin-content-docs', 'current') : 'docs', 'topics.yml'));
  topicLabels.blog = readTopicLabels(path.join(siteDir, localized ? path.join(localized, 'docusaurus-plugin-content-blog') : 'blog', 'topics.yml'));
}
