import Link from '@docusaurus/Link';
import ExternalLink from '@site/src/components/ExternalLink';
import type {EcosystemProduct, ProductId} from './data';
import {getCopy, useEcosystemLocale} from './data';
import {ecosystemCategory, ecosystemWords} from './words';

type Props = {product: EcosystemProduct; compact?: boolean};

/** A product card uses the LifeWell angle and the product's own mark. */
export default function ProductCard({product, compact = false}: Props) {
  const locale = useEcosystemLocale();
  const copy = getCopy(product.id as ProductId, locale);
  const words = ecosystemWords();
  return (
    <article className={`eco-card${compact ? ' eco-card--compact' : ''}`}>
      <div className="eco-card__head">
        <img src={`/ecosystem/${product.id}.svg`} width="56" height="56" alt="" loading="lazy" />
        <div>
          <span className="eco-kicker">{ecosystemCategory(product.category)}</span>
          <h3>{product.name}</h3>
        </div>
      </div>
      <p>{copy.card}</p>
      <div className="eco-actions">
        <ExternalLink href={product.liveUrl} className="eco-action eco-action--primary">
          {words.visit(product.name)}
        </ExternalLink>
        <Link to={`/ecosystem/${product.id}`} className="eco-action eco-action--quiet">{words.details}</Link>
      </div>
    </article>
  );
}
