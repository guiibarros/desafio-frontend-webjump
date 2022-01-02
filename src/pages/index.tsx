// --------------------------- Imports --------------------------- //

import Head from 'next/head';

import { Aside } from '../Components/Aside';
import { AsideCategoriesSection } from '../Components/AsideCategoriesSection';
import { Footer } from '../Components/Footer';

import styles from '../styles/home.module.scss';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | WebJump</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Aside>
            <AsideCategoriesSection />
          </Aside>

          <main>
            <section className={styles.thumb}></section> {/* Placeholder */}
            <section className={styles.welcome}>
              <h2>Seja bem-vindo!</h2>

              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit.
                Aenean nec sapien sodales, pellentesque diam et, facilisis ligula.
                Praesent vehicula ante eget pharetra ultrices. Nulla facilisi.
                Vestibulum scelerisque velit diam, nec ornare tortor ornare nec.
                Maecenas non quam nec nisi sollicitudin eleifend sit amet et leo.
                <strong>Suspendisse rutrum ante ut magna molestie</strong>, sed hendrerit augue auctor.
                Proin elementum efficitur urna, nec condimentum augue bibendum eget.
                Mauris eget consequat ante. Cras commodo tellus et efficitur gravida.
                Nullam facilisis sapien et orci vulputate, eget commodo elit blandit.
                In dui ipsum, placerat a dapibus sed, rhoncus ac erat. Donec ut auctor eros.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}