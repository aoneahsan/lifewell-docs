import {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {ToggleButton, ToggleButtonGroup} from 'react-aria-components';
import ProductCard from './ProductCard';
import ExternalLink from '@site/src/components/ExternalLink';
import StructuredData from './StructuredData';
import {getCopy, products, useEcosystemLocale, type ProductId} from './data';
import {ecosystemCategory, ecosystemPlatform, ecosystemWords} from './words';

type View = 'grid' | 'list' | 'table';
const isView = (value: string | null): value is View => value === 'grid' || value === 'list' || value === 'table';

/** Keeps the three directory views in the shareable URL. */
export default function EcosystemDirectory() {
  const locale = useEcosystemLocale();
  const words = ecosystemWords();
  const [view, setView] = useState<View>('grid');
  useEffect(() => {
    const read = () => {
      const value = new URLSearchParams(window.location.search).get('view');
      setView(isView(value) ? value : 'grid');
    };
    read();
    window.addEventListener('popstate', read);
    return () => window.removeEventListener('popstate', read);
  }, []);
  const changeView = (next: View) => {
    const url = new URL(window.location.href);
    if (next === 'grid') url.searchParams.delete('view');
    else url.searchParams.set('view', next);
    window.history.replaceState(null, '', url);
    setView(next);
  };
  return (
    <>
      <StructuredData type="list" />
      <main className="eco-page container">
        <span className="eco-kicker">{words.kicker}</span>
        <h1>{words.title}</h1>
        <p className="eco-lede">{words.intro}</p>
        <ToggleButtonGroup aria-label={words.chooseView} selectionMode="single" disallowEmptySelection
          selectedKeys={new Set([view])}
          onSelectionChange={(keys) => {
            const selected = [...keys][0];
            if (typeof selected === 'string' && isView(selected)) changeView(selected);
          }} className="eco-view-switch">
          {(['grid', 'list', 'table'] as const).map((option) => (
            <ToggleButton key={option} id={option} className="eco-view-button">{words[option]}</ToggleButton>
          ))}
        </ToggleButtonGroup>
        {view === 'grid' && <section className="eco-grid" aria-label={words.title}>
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </section>}
        {view === 'list' && <section className="eco-list" aria-label={words.title}>
          {products.map((product) => <ProductCard key={product.id} product={product} compact />)}
        </section>}
        {view === 'table' && <div className="eco-table-scroll"><table className="eco-table">
          <caption>{words.title}</caption>
          <thead><tr><th scope="col">{words.product}</th><th scope="col">{words.purpose}</th><th scope="col">{words.platforms}</th><th scope="col">{words.links}</th></tr></thead>
          <tbody>{products.map((product) => <tr key={product.id}>
            <th scope="row"><img src={`/ecosystem/${product.id}.svg`} width="40" height="40" alt="" loading="lazy" />{product.name}</th>
            <td>{getCopy(product.id as ProductId, locale).card}</td>
            <td>{Object.keys(product.platforms).length ? Object.keys(product.platforms).map(ecosystemPlatform).join(' · ') : ecosystemCategory(product.category)}</td>
            <td><ExternalLink href={product.liveUrl}>{words.visit(product.name)}</ExternalLink><br /><Link to={`/ecosystem/${product.id}`}>{words.details}</Link></td>
          </tr>)}</tbody>
        </table></div>}
        <p className="eco-next"><Link to="/about-developer">{words.whoBuilt}</Link></p>
      </main>
    </>
  );
}
