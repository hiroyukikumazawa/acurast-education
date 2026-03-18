import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.hero)}>
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Open-source curriculum</p>
          <Heading as="h1" className={styles.title}>
            {siteConfig.title}
          </Heading>
          <p className={styles.subtitle}>
            Learn Acurast from beginner to builder — and become the person who
            teaches others.
          </p>

          <div className={styles.ctas}>
            <Link className={clsx('button button--primary', styles.ctaPrimary)} to="/docs/introduction/overview">
              Start here
            </Link>
            <Link className={clsx('button button--secondary', styles.ctaSecondary)} to="/docs/providers/getting-started">
              Become a provider
            </Link>
            <Link className={clsx('button button--secondary', styles.ctaSecondary)} to="/docs/developers/deploy-first-app-cli">
              Deploy an app
            </Link>
          </div>

          <div className={styles.quickLinks}>
            <Link to="/docs/developers/instant-deploy-hub">Instant deploy (Hub)</Link>
            <span className={styles.dot} aria-hidden="true">•</span>
            <Link to="/docs/tokenomics/intro">Tokenomics</Link>
            <span className={styles.dot} aria-hidden="true">•</span>
            <Link to="/docs/staked-compute/overview">Staked compute</Link>
            <span className={styles.dot} aria-hidden="true">•</span>
            <Link to="/docs/community/ambassadors">Community kit</Link>
          </div>
        </div>

        <div className={styles.heroCard} role="region" aria-label="Learning paths">
          <div className={styles.heroCardHeader}>
            <div className={styles.heroCardTitle}>Choose your path</div>
            <div className={styles.heroCardMeta}>Beginner → advanced</div>
          </div>

          <div className={styles.pathGrid}>
            <Link className={styles.path} to="/docs/introduction/key-concepts">
              <div className={styles.pathTitle}>Fundamentals</div>
              <div className={styles.pathDesc}>Key concepts, roles, and the mental model.</div>
            </Link>
            <Link className={styles.path} to="/docs/providers/getting-started">
              <div className={styles.pathTitle}>Processor setup</div>
              <div className={styles.pathDesc}>Lite vs Core, onboarding, troubleshooting.</div>
            </Link>
            <Link className={styles.path} to="/docs/developers/instant-deploy-hub">
              <div className={styles.pathTitle}>Instant deploy</div>
              <div className={styles.pathDesc}>Publish “Hello World” via Hub in minutes.</div>
            </Link>
            <Link className={styles.path} to="/docs/developers/runtime-apis">
              <div className={styles.pathTitle}>Developer runtime</div>
              <div className={styles.pathDesc}>HTTP, env vars, signing, chain helpers.</div>
            </Link>
            <Link className={styles.path} to="/docs/tokenomics/intro">
              <div className={styles.pathTitle}>Tokenomics</div>
              <div className={styles.pathDesc}>ACU utility, allocation, inflation basics.</div>
            </Link>
            <Link className={styles.path} to="/docs/staked-compute/overview">
              <div className={styles.pathTitle}>Staked compute</div>
              <div className={styles.pathDesc}>Committers, delegators, rewards & slashing.</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Acurast Education"
      description="Open-source education platform for learning Acurast: providers, developers, and community creators.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                Learn by doing
              </Heading>
              <p className={styles.sectionLead}>
                Short, practical wins that map directly to official docs and real workflows.
              </p>
            </div>

            <div className={styles.cards}>
              <Link className={styles.card} to="/docs/developers/instant-deploy-hub">
                <div className={styles.cardTop}>
                  <div className={styles.pill}>Beginner</div>
                  <div className={styles.cardTitle}>Instant deploy via Hub</div>
                </div>
                <div className={styles.cardDesc}>
                  Publish a working “Hello World” deployment and verify it via <code>.acu.run</code>.
                </div>
              </Link>

              <Link className={styles.card} to="/docs/developers/deploy-first-app-cli">
                <div className={styles.cardTop}>
                  <div className={styles.pill}>Intermediate</div>
                  <div className={styles.cardTitle}>Deploy via CLI</div>
                </div>
                <div className={styles.cardDesc}>
                  Bundle a Node.js app, configure <code>acurast.json</code>, deploy and iterate.
                </div>
              </Link>

              <Link className={styles.card} to="/docs/developers/runtime-apis">
                <div className={styles.cardTop}>
                  <div className={styles.pill}>Advanced</div>
                  <div className={styles.cardTitle}>Runtime APIs</div>
                </div>
                <div className={styles.cardDesc}>
                  Use HTTP, env vars, signing, and chain helpers in production-style patterns.
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
