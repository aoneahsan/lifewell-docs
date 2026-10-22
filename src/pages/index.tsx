import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/intro">
            Get started →
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://lifewell.aoneahsan.com">
            Open LifeWell
          </Link>
        </div>
        <p className={styles.builtBy}>
          Built and maintained by{' '}
          <Link to="/about/the-developer">the LifeWell team</Link>. Documentation licensed CC BY 4.0.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="LifeWell Documentation — the people and moments of your life"
      description="Public documentation for LifeWell, which keeps the people and moments of your life in one place: family, friends, memories and plans, with wellbeing around them. Web and Android.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
