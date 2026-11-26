import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

import {OTHER_PLATFORMS, PRIMARY_PLATFORM} from '@site/src/data/platforms';
import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {translate({id: 'site.name', message: 'LifeWell Documentation'})}
        </Heading>
        <p className="hero__subtitle">{translate({id: 'home.tagline', message: 'Keep the people and moments of your life in one place — and everything around them.'})}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/intro">
            {translate({id: 'home.get_started', message: 'Get started →'})}
          </Link>
          <Link className="button button--secondary button--lg" href={PRIMARY_PLATFORM.href}>
            {translate({id: 'home.open_lifewell', message: 'Open LifeWell'})}
          </Link>
        </div>
        <p className={styles.also}>
          <span>{translate({id: 'home.also_on', message: 'Also on'})}</span>
          {OTHER_PLATFORMS.filter((platform) => !platform.primary).map((platform) => (
            <Link key={platform.id} href={platform.href}>{platform.name}</Link>
          ))}
          <Link to="/apps">{translate({id: 'home.all_apps', message: 'All apps →'})}</Link>
        </p>
        <p className={styles.builtBy}>
          {translate({id: 'home.built_by', message: 'Built and maintained by'})}{' '}
          <Link to="/about/the-developer">{translate({id: 'home.team', message: 'the LifeWell team'})}</Link>. {translate({id: 'home.licence', message: 'Documentation licensed CC BY 4.0.'})}
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.title', message: 'The people and moments of your life'})}
      description={translate({id: 'home.description', message: 'Public documentation for LifeWell, which keeps the people and moments of your life in one place: family, friends, memories and plans, with wellbeing around them. Web and Android.'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
