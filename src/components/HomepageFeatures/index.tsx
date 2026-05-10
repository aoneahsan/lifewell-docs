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

const FeatureList: FeatureItem[] = [
  {
    title: 'Track what matters',
    icon: '❤️',
    description: (
      <>
        Vitals (blood pressure, sugar, BMI), water, medications, sleep, exercise, nutrition, mental
        health, period and fertility, pregnancy, breastfeeding, and medical records. All in one
        private space.
      </>
    ),
    to: '/docs/health/overview',
    cta: 'Explore the health module →',
  },
  {
    title: '12+ wellness calculators',
    icon: '🧮',
    description: (
      <>
        BMI, BMR, calorie, TDEE, macro, protein, age. Sleep tracker, step counter, interval and
        workout timers, kegel trainer. Most run client-side — no account needed.
      </>
    ),
    to: '/docs/tools/overview',
    cta: 'See the calculator catalog →',
  },
  {
    title: 'Family, memories, and notes',
    icon: '👨‍👩‍👧',
    description: (
      <>
        Build a family tree, record journeys, geo-pin memories, write rich notes, sync to Google
        Drive. Share what you choose, with whom you choose.
      </>
    ),
    to: '/docs/family/overview',
    cta: 'Read about family features →',
  },
  {
    title: 'Privacy-first by design',
    icon: '🔒',
    description: (
      <>
        Per-user Firestore rules. No data sold or shared. Calculators run in your browser. Mobile
        permissions are requested only at the moment of use, with non-permission fallbacks.
      </>
    ),
    to: '/docs/concepts/privacy-and-security',
    cta: 'Read the privacy posture →',
  },
  {
    title: 'Web, Android, and a browser extension',
    icon: '📱',
    description: (
      <>
        One product across three surfaces. Capacitor-powered Android (iOS in prep). Chrome-Web-Store
        compliant browser extension for quick check-ins. Web app at lifewell.aoneahsan.com.
      </>
    ),
    to: '/docs/concepts/multi-platform-strategy',
    cta: 'Compare platforms →',
  },
  {
    title: 'Honest about limits',
    icon: '🧭',
    description: (
      <>
        LifeWell is a tracker — not medical advice, not a replacement for a clinician, not an EHR.
        These docs say what the app does and what it doesn&apos;t, page by page.
      </>
    ),
    to: '/docs/intro',
    cta: 'Read the welcome page →',
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
