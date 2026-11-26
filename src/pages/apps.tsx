import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import {CURRENT_SURFACE, PLATFORMS, type PlatformId} from '@site/src/data/platforms';
import styles from './apps.module.css';

/** What each surface is for in LifeWell, and the way there. */
function copy(): Record<PlatformId, {name: string; title: string; text: string; cta: string}> {
  return {
    web: {name: translate({id: 'apps.web.name', message: 'LifeWell web app'}), title: translate({id: 'apps.web.title', message: 'In your browser'}), text: translate({id: 'apps.web.text', message: 'Your people, memories, notes and calendar on any computer. Sign in with Google and pick up where the phone left off.'}), cta: translate({id: 'apps.web.cta', message: 'Open LifeWell'})},
    android: {name: 'Google Play', title: translate({id: 'apps.android.title', message: 'On your Android phone'}), text: translate({id: 'apps.android.text', message: 'Log a moment or check on someone from your pocket. The same account, kept in step with the web app.'}), cta: translate({id: 'apps.android.cta', message: 'Get it on Google Play'})},
    docs: {name: translate({id: 'apps.docs.name', message: 'Documentation'}), title: translate({id: 'apps.docs.title', message: 'These docs'}), text: translate({id: 'apps.docs.text', message: 'How each of the seven areas works, how to export your record, and what LifeWell keeps private.'}), cta: translate({id: 'apps.docs.cta', message: 'Read the docs'})},
  };
}

/** `/apps` — "Get LifeWell": every released surface, from `src/data/platforms.ts`. */
export default function Apps(): ReactNode {
  const words = copy();
  return (
    <Layout title={translate({id: 'apps.title', message: 'Get LifeWell'})} description={translate({id: 'apps.description', message: 'Every place LifeWell is released: the web app, the Android app on Google Play, and these docs.'})}>
      <main className="container margin-vert--xl">
        <Heading as="h1">{translate({id: 'apps.title', message: 'Get LifeWell'})}</Heading>
        <p className={styles.lead}>{translate({id: 'apps.intro', message: 'One account, wherever you are. Start on the web, carry it on your phone, and keep these guides a tab away.'})}</p>
        <div className={styles.grid}>
          {PLATFORMS.map((platform) => {
            const platformWords = words[platform.id];
            const current = platform.id === CURRENT_SURFACE;
            return (
              <article key={platform.id} className={styles.card}>
                <span className={styles.kicker}>{platformWords.name}</span>
                <Heading as="h2" className={styles.title}>{platformWords.title}</Heading>
                <p>{platformWords.text}</p>
                {current
                  ? <span className={styles.here}>{translate({id: 'apps.here', message: 'You are reading it'})}</span>
                  : <Link className={platform.primary ? 'button button--primary' : 'button button--secondary'} href={platform.href}>{platformWords.cta}</Link>}
              </article>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
