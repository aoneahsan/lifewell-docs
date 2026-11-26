import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {title: string; icon: string; description: string; to: string; cta: string};

/** Six verified entry points into the public documentation. */
function featureList(): FeatureItem[] {
  return [
    {
      title: translate({id: 'home.feature.people.title', message: 'The people in your life first'}), icon: '🧭',
      description: translate({id: 'home.feature.people.description', message: 'You start with yourself and add the people who matter. Memories, the everyday and sharing sit with them, and health, mind and life stages around them. Six of the seven areas can be switched off — off means the menu stops listing it, not that anything is deleted.'}),
      to: '/domains/overview', cta: translate({id: 'home.feature.people.cta', message: 'Read about the seven areas'}),
    },
    {
      title: translate({id: 'home.feature.export.title', message: 'Your record, and a way out of it'}), icon: '📦',
      description: translate({id: 'home.feature.export.description', message: 'Choose a date range and export record data as JSON or CSV, or make a PDF summary. Each table is capped at 5,000 rows per export. Export is on every plan, including Free.'}),
      to: '/reference/export-format', cta: translate({id: 'home.feature.export.cta', message: 'Read the export format'}),
    },
    {
      title: translate({id: 'home.feature.offline.title', message: 'Keep supported quick logs offline'}), icon: '📴',
      description: translate({id: 'home.feature.offline.description', message: 'When offline logging is enabled, water, mood and steps can queue on this device while you are offline. Other changes need a connection; check that queued entries have synced before relying on them elsewhere.'}),
      to: '/concepts/offline-and-sync', cta: translate({id: 'home.feature.offline.cta', message: 'What works offline'}),
    },
    {
      title: translate({id: 'home.feature.photos.title', message: 'Photos stay in your own Drive'}), icon: '🔒',
      description: translate({id: 'home.feature.photos.description', message: 'LifeWell asks Google for a permission that reaches only the files it created. We hold a reference to the file, not the file itself.'}),
      to: '/your-data/where-it-lives', cta: translate({id: 'home.feature.photos.cta', message: 'Where your record lives'}),
    },
    {
      title: translate({id: 'home.feature.no_score.title', message: 'No streak, no score, no rank'}), icon: '🌿',
      description: translate({id: 'home.feature.no_score.description', message: 'Nothing here keeps a streak or grades you on a number. A record with gaps in it is still a record, and a quiet Sunday is just a quiet Sunday.'}),
      to: '/intro', cta: translate({id: 'home.feature.no_score.cta', message: 'What LifeWell is'}),
    },
    {
      title: translate({id: 'home.feature.honest.title', message: 'Know what is available'}), icon: '📝',
      description: translate({id: 'home.feature.honest.description', message: "LifeWell's web app, Android app and browser companion have different capabilities. Android reminders need device permission; the extension's store release is pending, and there is no iOS app. The changelog records what has shipped."}),
      to: '/about/changelog', cta: translate({id: 'home.feature.honest.cta', message: 'Read the changelog'}),
    },
  ];
}

function Feature({title, icon, description, to, cta}: FeatureItem) {
  return <div className={clsx('col col--4', styles.featureCol)}><div className={styles.featureCard}>
    <div className={styles.featureIcon} aria-hidden="true">{icon}</div>
    <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
    <p className={styles.featureDescription}>{description}</p>
    <Link to={to} className={styles.featureLink}>{cta}</Link>
  </div></div>;
}

export default function HomepageFeatures(): ReactNode {
  return <section className={styles.features}><div className="container"><div className="row">
    {featureList().map((item) => <Feature key={item.to} {...item} />)}
  </div></div></section>;
}
