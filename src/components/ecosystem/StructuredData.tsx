import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import {products, type EcosystemProduct} from './data';
import {ecosystemWords} from './words';
import ownerProfile from '@site/src/data/owner-profile.json';

const DOCS_URL = 'https://lifewell-docs.aoneahsan.com';
const person = {'@id': `${ownerProfile.person.url}/#person`};

/** Adds page-specific structured data to Docusaurus' static HTML. */
export default function StructuredData({type, product, description}: {
  type: 'list' | 'detail' | 'about'; product?: EcosystemProduct; description?: string;
}) {
  const ecosystemUrl = new URL(useBaseUrl('/ecosystem'), DOCS_URL).href;
  const aboutUrl = new URL(useBaseUrl('/about-developer'), DOCS_URL).href;
  const homeUrl = new URL(useBaseUrl('/'), DOCS_URL).href;
  const words = ecosystemWords();
  let data: Record<string, unknown>;
  if (type === 'list') {
    data = {
      '@context': 'https://schema.org', '@type': 'ItemList', name: words.title,
      itemListElement: products.map((item, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: {'@type': 'SoftwareApplication', name: item.name, url: item.liveUrl, creator: person},
      })),
    };
  } else if (type === 'detail' && product) {
    data = {
      '@context': 'https://schema.org', '@graph': [
        {'@type': 'SoftwareApplication', name: product.name, url: product.liveUrl,
          description, creator: person},
        {'@type': 'BreadcrumbList', itemListElement: [
          {'@type': 'ListItem', position: 1, name: words.title, item: ecosystemUrl},
          {'@type': 'ListItem', position: 2, name: product.name, item: `${ecosystemUrl}/${product.id}`},
        ]},
      ],
    };
  } else {
    data = {
      '@context': 'https://schema.org', '@graph': [
        {'@type': 'AboutPage', name: translate({id: 'about.schema.name', message: 'About the developer of LifeWell'}), url: aboutUrl,
          about: person},
        {'@type': 'Person', '@id': `${ownerProfile.person.url}/#person`, name: ownerProfile.person.name,
          alternateName: ownerProfile.person.alternateName,
          url: ownerProfile.person.url, jobTitle: ownerProfile.person.jobTitle,
          sameAs: ownerProfile.person.sameAs, worksFor: {'@id': `${ownerProfile.organization.url}/#organization`}},
        {'@type': 'BreadcrumbList', itemListElement: [
          {'@type': 'ListItem', position: 1, name: translate({id: 'about.schema.docs', message: 'LifeWell documentation'}), item: homeUrl},
          {'@type': 'ListItem', position: 2, name: translate({id: 'about.kicker', message: 'About the developer'}), item: aboutUrl},
        ]},
      ],
    };
  }
  return <Head><script type="application/ld+json">{JSON.stringify(data)}</script></Head>;
}
