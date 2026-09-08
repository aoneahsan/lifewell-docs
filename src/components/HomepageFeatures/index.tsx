import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  to: string;
  cta: string;
};

/**
 * Six cards, one per thing a reader arrives wanting to know. Every claim here
 * has a page behind it, and no card describes something the product does not do.
 */
const FeatureList: FeatureItem[] = [
  {
    title: 'Six areas, and you in the middle',
    icon: '🧭',
    description: (
      <>
        Health, mind, life stages, people, memories and the everyday week. Any of the six can be
        switched off — off means the menu stops listing it, not that anything is deleted.
      </>
    ),
    to: '/domains/overview',
    cta: 'Read about the six areas',
  },
  {
    title: 'Your record, and a way out of it',
    icon: '📦',
    description: (
      <>
        Export everything as JSON, CSV or PDF, built on your device rather than on a server. The file
        format is documented field by field, and export is on every plan including Free.
      </>
    ),
    to: '/reference/export-format',
    cta: 'Read the export format',
  },
  {
    title: 'Written on your device first',
    icon: '📴',
    description: (
      <>
        Entries are written locally and sync when there is a connection. A tunnel is not a reason to
        lose a day.
      </>
    ),
    to: '/concepts/offline-and-sync',
    cta: 'What works offline',
  },
  {
    title: 'Photos stay in your own Drive',
    icon: '🔒',
    description: (
      <>
        LifeWell asks Google for a permission that reaches only the files it created. We hold a
        reference to the file, not the file itself.
      </>
    ),
    to: '/your-data/where-it-lives',
    cta: 'Where your record lives',
  },
  {
    title: 'No streak, no score, no rank',
    icon: '🌿',
    description: (
      <>
        Nothing here keeps a streak or grades you on a number. A record with gaps in it is still a
        record, and a quiet Sunday is just a quiet Sunday.
      </>
    ),
    to: '/intro',
    cta: 'What LifeWell is',
  },
  {
    title: 'Honest about what is not built',
    icon: '📝',
    description: (
      <>
        Push, global search and the referral screen are not finished. iOS was removed. The extension
        is planned, not shipping. Each of those has a page saying so.
      </>
    ),
    to: '/about/changelog',
    cta: 'What changed in 3.0.0',
  },
];

function Feature({title, icon, description, to, cta}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} aria-hidden="true">
          {icon}
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
        <Link to={to} className={styles.featureLink}>
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
