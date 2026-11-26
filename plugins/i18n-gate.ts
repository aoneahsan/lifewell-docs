import {existsSync, readFileSync, readdirSync, statSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = ['en', 'zh-Hans', 'hi', 'es', 'ar', 'fr', 'pt-BR', 'ru', 'ja', 'ur'] as const;
const JSON_CATALOGUES = [
  'code.json',
  'docusaurus-theme-classic/navbar.json',
  'docusaurus-theme-classic/footer.json',
  'docusaurus-plugin-content-blog/options.json',
  'docusaurus-plugin-content-docs/current.json',
];
const MARKDOWN = /\.(?:md|mdx)$/;
const PLACEHOLDER = /\{[a-zA-Z][\w.]*\}/g;
const EMPTY_OR_DRAFT = /^(?:TODO|FIXME|TBD|TRANSLATE|PLACEHOLDER|coming soon|\[.*?translate.*?\])$/i;
const UNCHANGED_TERMS = new Set(['LifeWell', 'Zaions', 'Ahsan Mahmood', 'GitHub', 'LinkedIn', 'Android', 'Google Play', 'RSS', 'Atom', 'Blog', 'CC BY 4.0', 'sitemap.xml', 'feed.xml', 'llms.txt']);
const issues: string[] = [];

function file(relative: string): string { return path.join(ROOT, relative); }
function read(relative: string): string {
  if (!existsSync(file(relative))) {
    issues.push(`missing file ${relative}`);
    return '';
  }
  return readFileSync(file(relative), 'utf8');
}
function json(relative: string): unknown {
  const raw = read(relative);
  if (!raw) return null;
  try { return JSON.parse(raw) as unknown; }
  catch { issues.push(`invalid JSON ${relative}`); return null; }
}
function filesIn(relative: string, accept: (name: string) => boolean): string[] {
  const directory = file(relative);
  if (!existsSync(directory)) { issues.push(`missing directory ${relative}`); return []; }
  const walk = (dir: string): string[] => readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : accept(name) ? [path.relative(directory, full).split(path.sep).join('/')] : [];
  });
  return walk(directory).sort();
}
function leaves(value: unknown, prefix = ''): Map<string, string> {
  const result = new Map<string, string>();
  if (typeof value === 'string') { result.set(prefix, value); return result; }
  if (Array.isArray(value)) {
    value.forEach((part, index) => { for (const [key, text] of leaves(part, `${prefix}/${index}`)) result.set(key, text); });
  } else if (value !== null && typeof value === 'object') {
    for (const [key, part] of Object.entries(value)) {
      for (const [leaf, text] of leaves(part, `${prefix}/${key}`)) result.set(leaf, text);
    }
  }
  return result;
}
function placeholders(text: string): string[] { return [...text.matchAll(PLACEHOLDER)].map(([part]) => part).sort(); }
function pluralForms(locale: string): string[] {
  const order: Intl.LDMLPluralRule[] = ['zero', 'one', 'two', 'few', 'many', 'other'];
  const categories = new Intl.PluralRules(locale).resolvedOptions().pluralCategories;
  return order.filter((category) => categories.includes(category));
}
function compareText(source: string, target: string, where: string, locale: string): void {
  if (!target.trim() || EMPTY_OR_DRAFT.test(target.trim())) issues.push(`${where}: empty or placeholder text`);
  if (source.includes('|')) {
    const sourceBranches = source.split('|');
    const targetBranches = target.split('|');
    const expected = pluralForms(locale);
    if (targetBranches.length !== expected.length) {
      issues.push(`${where}: expected ${expected.length} plural forms (${expected.join(', ')}), found ${targetBranches.length}`);
    }
    const sourceSlots = [...new Set(placeholders(source))].sort();
    const targetSlots = [...new Set(placeholders(target))].sort();
    if (sourceSlots.join(',') !== targetSlots.join(',')) issues.push(`${where}: placeholder mismatch`);
    const requiredInEach = sourceSlots.filter((slot) => sourceBranches.every((branch) => placeholders(branch).includes(slot)));
    targetBranches.forEach((branch, index) => {
      if (!branch.trim()) issues.push(`${where}: empty plural form ${expected[index] ?? index}`);
      for (const slot of requiredInEach) {
        if (!placeholders(branch).includes(slot)) issues.push(`${where}: missing ${slot} in plural form ${expected[index] ?? index}`);
      }
    });
  } else if (placeholders(source).join(',') !== placeholders(target).join(',')) {
    issues.push(`${where}: placeholder mismatch`);
  }
  if (locale !== 'en' && source.trim() === target.trim() && source.trim().length >= 5 && /[A-Za-z]/.test(source) && !UNCHANGED_TERMS.has(source.trim())) {
    issues.push(`${where}: English copy remains`);
  }
}
function compareLeaves(source: unknown, target: unknown, where: string, locale: string): void {
  const sourceLeaves = leaves(source);
  const targetLeaves = leaves(target);
  for (const [key, text] of sourceLeaves) {
    if (!targetLeaves.has(key)) issues.push(`${where}${key}: missing key`);
    else if (key.startsWith('/facts/')) {
      if (targetLeaves.get(key) !== text) issues.push(`${where}${key}: fact identifier changed`);
    } else compareText(text, targetLeaves.get(key) ?? '', `${where}${key}`, locale);
  }
  for (const key of targetLeaves.keys()) if (!sourceLeaves.has(key)) issues.push(`${where}${key}: extra key`);
}
function compareCatalogue(relative: string, locale: string): void {
  const source = json(`i18n/en/${relative}`);
  const target = json(`i18n/${locale}/${relative}`);
  if (!source || !target || typeof source !== 'object' || typeof target !== 'object') return;
  const a = source as Record<string, {message?: string}>;
  const b = target as Record<string, {message?: string}>;
  for (const [key, entry] of Object.entries(a)) {
    if (!(key in b)) { issues.push(`i18n/${locale}/${relative}: missing key ${key}`); continue; }
    compareText(entry.message ?? '', b[key]?.message ?? '', `i18n/${locale}/${relative}:${key}`, locale);
  }
  for (const key of Object.keys(b)) if (!(key in a)) issues.push(`i18n/${locale}/${relative}: extra key ${key}`);
}
function proseLines(markdown: string): Set<string> {
  let fenced = false;
  let frontMatter = false;
  const lines = markdown.split(/\r?\n/);
  if (lines[0] === '---') frontMatter = true;
  return new Set(lines.flatMap((line, index) => {
    if (index === 0 && frontMatter) return [];
    if (frontMatter && line === '---') { frontMatter = false; return []; }
    if (/^\s*```/.test(line)) { fenced = !fenced; return []; }
    const text = line.trim();
    if (fenced || frontMatter || text.length < 35 || /^(?:\|| {4}|https?:\/\/|<|import )/.test(line)) return [];
    return /[A-Za-z]{4}/.test(text) && text.split(/\s+/).length >= 6 ? [text] : [];
  }));
}
function compareContent(sourceDir: string, targetDir: string, locale: string, exclude: Set<string> = new Set()): void {
  if (!existsSync(file(targetDir))) { issues.push(`missing directory ${targetDir}`); return; }
  const sourceFiles = filesIn(sourceDir, (name) => MARKDOWN.test(name)).filter((name) => !exclude.has(name) && !name.startsWith('i18n/'));
  const targetFiles = filesIn(targetDir, (name) => MARKDOWN.test(name));
  for (const name of sourceFiles) {
    const relative = `${targetDir}/${name}`;
    if (!targetFiles.includes(name)) { issues.push(`missing file ${relative}`); continue; }
    const source = read(`${sourceDir}/${name}`);
    const target = read(relative);
    if (!target.trim() || EMPTY_OR_DRAFT.test(target.trim())) issues.push(`${relative}: empty or placeholder content`);
    if (locale !== 'en' && source.trim() === target.trim()) issues.push(`${relative}: English copy remains`);
    if (locale !== 'en') {
      const targetLines = proseLines(target);
      for (const line of proseLines(source)) if (targetLines.has(line)) issues.push(`${relative}: English prose remains: ${line.slice(0, 70)}`);
    }
    for (const field of ['title', 'description', 'sidebar_label']) {
      const match = (value: string) => value.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
      const sourceValue = match(source);
      const targetValue = match(target);
      if (sourceValue && !targetValue) issues.push(`${relative}: missing ${field}`);
      else if (locale !== 'en' && sourceValue.length >= 18 && sourceValue === targetValue) issues.push(`${relative}: English ${field} remains`);
    }
    const sourceTokens = placeholders(source);
    const targetTokens = placeholders(target);
    if (sourceTokens.join(',') !== targetTokens.join(',')) issues.push(`${relative}: placeholder mismatch`);
  }
  for (const name of targetFiles) if (!sourceFiles.includes(name)) issues.push(`${targetDir}/${name}: extra file`);
}
function compareBlogTaxonomy(locale: string): void {
  const targetDir = `i18n/${locale}/docusaurus-plugin-content-blog`;
  const source = read('blog/tags.yml');
  const target = read(`${targetDir}/tags.yml`);
  const values = (input: string) => [...input.matchAll(/^\s*(label|description):\s*(.+)$/gm)].map((match) => `${match[1]}:${match[2]}`);
  const english = values(source);
  const translated = values(target);
  if (english.length !== translated.length) issues.push(`${targetDir}/tags.yml: label or description count mismatch`);
  english.forEach((value, index) => {
    const translatedValue = translated[index];
    if (!translatedValue) return;
    const [field, ...words] = value.split(':');
    const [targetField, ...targetWords] = translatedValue.split(':');
    if (field !== targetField) issues.push(`${targetDir}/tags.yml:${index}: field mismatch`);
    compareText(words.join(':'), targetWords.join(':'), `${targetDir}/tags.yml:${index}`, locale);
  });
  if (!existsSync(file(`${targetDir}/authors.yml`))) issues.push(`missing file ${targetDir}/authors.yml`);
}
function checkEnglishSource(): void {
  const code = json('i18n/en/code.json') as Record<string, unknown> | null;
  if (!code) return;
  const sourceFiles = filesIn('src', (name) => /\.tsx?$/.test(name));
  for (const name of sourceFiles) {
    const text = read(`src/${name}`);
    for (const match of text.matchAll(/(?:translate\(\{\s*id:\s*|<Translate\s+id=)["']([^"']+)["']/g)) {
      if (!(match[1] in code)) issues.push(`i18n/en/code.json: missing source key ${match[1]} from src/${name}`);
    }
  }
}

checkEnglishSource();
const requestedLocale = process.argv.includes('--locale') ? process.argv[process.argv.indexOf('--locale') + 1] : undefined;
if (requestedLocale && !LOCALES.includes(requestedLocale as typeof LOCALES[number])) issues.push(`unknown locale ${requestedLocale}`);
const englishOnly = requestedLocale === 'en';
if (!englishOnly) {
  const sourceProducts = filesIn('src/content/ecosystem/en', (name) => name.endsWith('.json'));
  for (const locale of LOCALES.filter((entry) => entry !== 'en' && (!requestedLocale || entry === requestedLocale))) {
    for (const relative of JSON_CATALOGUES) compareCatalogue(relative, locale);
    compareContent('docs', `i18n/${locale}/docusaurus-plugin-content-docs/current`, locale, new Set(['MANUAL-TASKS.md', 'PACKAGES.md']));
    compareContent('blog', `i18n/${locale}/docusaurus-plugin-content-blog`, locale);
    compareBlogTaxonomy(locale);
    const productDir = `src/content/ecosystem/${locale}`;
    if (!existsSync(file(productDir))) { issues.push(`missing directory ${productDir}`); continue; }
    const targetProducts = filesIn(productDir, (name) => name.endsWith('.json'));
    for (const name of sourceProducts) {
      if (!targetProducts.includes(name)) { issues.push(`src/content/ecosystem/${locale}/${name}: missing product copy`); continue; }
      compareLeaves(json(`src/content/ecosystem/en/${name}`), json(`src/content/ecosystem/${locale}/${name}`), `src/content/ecosystem/${locale}/${name}`, locale);
    }
    for (const name of targetProducts) if (!sourceProducts.includes(name)) issues.push(`src/content/ecosystem/${locale}/${name}: extra product copy`);
  }
}
if (issues.length) {
  process.stderr.write(`LifeWell docs i18n gate failed (${issues.length} issues):\n${issues.join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`LifeWell docs i18n gate passed (${requestedLocale ?? 'ten locales'}).\n`);
}
