import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {CURRENT_SURFACE, PLATFORMS, type PlatformId} from '@site/src/data/platforms';
import styles from './apps.module.css';

/** What each surface is for in LifeWell, and the way there. */
const COPY: Record<PlatformId, {title: string; text: string; cta: string}> = {
  web: {title: 'In your browser', text: 'Your people, memories, notes and calendar on any computer. Sign in with Google and pick up where the phone left off.', cta: 'Open LifeWell'},
  android: {title: 'On your Android phone', text: 'Log a moment or check on someone from your pocket. The same account, kept in step with the web app.', cta: 'Get it on Google Play'},
  docs: {title: 'These docs', text: 'How each of the seven areas works, how to export your record, and what LifeWell keeps private.', cta: 'Read the docs'},
};

/** `/apps` — "Get LifeWell": every released surface, from `src/data/platforms.ts`. */
export default function Apps(): ReactNode {
  return (
    <Layout title="Get LifeWell" description="Every place LifeWell is released: the web app, the Android app on Google Play, and these docs.">
      <main className="container margin-vert--xl">
        <Heading as="h1">Get LifeWell</Heading>
        <p className={styles.lead}>One account, wherever you are. Start on the web, carry it on your phone, and keep these guides a tab away.</p>
        <div className={styles.grid}>
          {PLATFORMS.map((platform) => {
            const words = COPY[platform.id];
            const current = platform.id === CURRENT_SURFACE;
            return (
              <article key={platform.id} className={styles.card}>
                <span className={styles.kicker}>{platform.name}</span>
                <Heading as="h2" className={styles.title}>{words.title}</Heading>
                <p>{words.text}</p>
                {current
                  ? <span className={styles.here}>You're reading it</span>
                  : <Link className={platform.primary ? 'button button--primary' : 'button button--secondary'} href={platform.href}>{words.cta}</Link>}
              </article>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
