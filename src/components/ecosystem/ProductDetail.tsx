import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import StructuredData from './StructuredData';
import ExternalLink from '@site/src/components/ExternalLink';
import {getCopy, getProduct, useEcosystemLocale, type ProductId} from './data';
import {ecosystemCategory, ecosystemWords} from './words';

/** One source-checked LifeWell perspective for one other product. */
export default function ProductDetail({productId}: {productId: ProductId}) {
  const locale = useEcosystemLocale();
  const product = getProduct(productId);
  if (!product) return null;
  const copy = getCopy(productId, locale);
  const words = ecosystemWords();
  return <Layout title={`${copy.title} — ${words.title}`} description={copy.intro}>
    <StructuredData type="detail" product={product} description={copy.intro} />
    <main className="eco-page container eco-detail">
      <nav aria-label={words.breadcrumb} className="eco-breadcrumb"><Link to="/">{words.docsHome}</Link><span aria-hidden="true"> · </span><Link to="/ecosystem">{words.title}</Link></nav>
      <span className="eco-kicker">{words.showcase}</span>
      <div className="eco-detail-head"><img src={`/ecosystem/${product.id}.svg`} width="80" height="80" alt="" /><div><h1>{copy.title}</h1><p className="eco-lede">{copy.intro}</p></div></div>
      <div className="eco-detail-grid"><div>
        {copy.sections.map((section) => <section key={section.heading} className="eco-detail-section"><h2>{section.heading}</h2><p>{section.body}</p></section>)}
        <div className="eco-actions"><ExternalLink href={product.liveUrl} className="eco-action eco-action--primary">{words.visit(product.name)}</ExternalLink><Link to="/ecosystem" className="eco-action eco-action--quiet">{words.all}</Link></div>
      </div><aside className="eco-factbox"><h2>{words.glance}</h2><p>{product.name}</p><p>{ecosystemCategory(product.category)}</p><p>{words.sourceChecked(product.facts[0]?.checked ?? '')}</p>{product.docsUrl && <ExternalLink href={product.docsUrl}>{words.docs(product.name)}</ExternalLink>}</aside></div>
    </main>
  </Layout>;
}
