import type {ComponentProps} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import OriginalLayout from '@theme-original/Layout';
import ownerProfile from '@site/src/data/owner-profile.json';

const SITE_URL = 'https://lifewell-docs.aoneahsan.com';

/** The site entity is emitted in each locale's prerendered HTML. */
export default function Layout(props: ComponentProps<typeof OriginalLayout>) {
  const {i18n} = useDocusaurusContext();
  const siteUrl = new URL(useBaseUrl('/'), SITE_URL).href;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: siteUrl,
        name: translate({id: 'site.name', message: 'LifeWell Documentation'}),
        description: translate({id: 'site.description', message: 'Public documentation for LifeWell, which keeps the people and moments of your life in one place: your family and friends, what you know about them, your memories and your plans, with wellbeing, mind and life stages around them. Written by the LifeWell team.'}),
        creator: {'@id': `${ownerProfile.person.url}/#person`},
        publisher: {'@id': `${ownerProfile.organization.url}/#organization`},
        inLanguage: i18n.currentLocale === 'en' ? 'en-GB' : i18n.currentLocale,
      },
      {
        '@type': 'Person', '@id': `${ownerProfile.person.url}/#person`,
        name: ownerProfile.person.name, alternateName: ownerProfile.person.alternateName,
        url: ownerProfile.person.url, sameAs: ownerProfile.person.sameAs,
        jobTitle: ownerProfile.person.jobTitle,
        worksFor: {'@id': `${ownerProfile.organization.url}/#organization`},
      },
      {
        '@type': 'Organization', '@id': `${ownerProfile.organization.url}/#organization`,
        name: ownerProfile.organization.name, alternateName: ownerProfile.organization.alternateName,
        url: ownerProfile.organization.url, logo: ownerProfile.organization.logo,
        founder: {'@id': `${ownerProfile.person.url}/#person`},
        sameAs: ownerProfile.organization.sameAs,
      },
      {
        '@type': 'SoftwareApplication', '@id': 'https://lifewell.aoneahsan.com/#software',
        name: 'LifeWell', url: 'https://lifewell.aoneahsan.com',
        description: translate({id: 'home.tagline', message: 'Keep the people and moments of your life in one place — and everything around them.'}),
        logo: {'@type': 'ImageObject', url: `${SITE_URL}/img/logo.svg`},
        creator: {'@id': `${ownerProfile.person.url}/#person`},
        publisher: {'@id': `${ownerProfile.organization.url}/#organization`},
      },
    ],
  };
  return <OriginalLayout {...props}><Head>
    <meta name="keywords" content={`${translate({id: 'site.keywords', message: 'LifeWell, family tree, people, memories, family and friends, notes, calendar, wellbeing, Android app'})}, ${ownerProfile.keywords}`} />
    <meta property="og:site_name" content={translate({id: 'site.name', message: 'LifeWell Documentation'})} />
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Head>{props.children}</OriginalLayout>;
}
