import roster from '@site/src/data/ecosystem.json';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const CURRENT_PRODUCT_ID = 'lifewell';
export const products = roster.products.filter((product) => product.showcase && product.id !== CURRENT_PRODUCT_ID);
export type EcosystemProduct = (typeof products)[number];
export type ProductId = EcosystemProduct['id'];
export type ProductCopy = {
  card: string;
  title: string;
  intro: string;
  sections: {heading: string; body: string}[];
  facts: string[];
};

type ContentModule = {default?: ProductCopy} | ProductCopy;
type ContentContext = ((path: string) => ContentModule) & {keys(): string[]};

declare global {
  interface ImportMeta {
    webpackContext(directory: string, options: {recursive: boolean; regExp: RegExp; mode: 'sync'}): ContentContext;
  }
}

// Rspack includes one source file per product and locale. The locale gate rejects
// missing files before the multilingual build, so a published page never falls back to English.
const content = import.meta.webpackContext('../../content/ecosystem', {
  recursive: true,
  regExp: /\.json$/,
  mode: 'sync',
});

/** Return copy from the current locale's source file. */
export function getCopy(id: ProductId, locale: string): ProductCopy {
  const key = `./${locale}/${id}.json`;
  if (!content.keys().includes(key)) throw new Error(`Missing ecosystem translation: ${key}`);
  const value = content(key);
  return 'default' in value && value.default ? value.default : value as ProductCopy;
}

export const getProduct = (id: ProductId) => products.find((product) => product.id === id);

/** The page build's locale, rather than the browser's language. */
export function useEcosystemLocale(): string {
  return useDocusaurusContext().i18n.currentLocale;
}
