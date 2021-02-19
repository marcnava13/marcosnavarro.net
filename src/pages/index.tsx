import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcos Navarro</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Marcos Navarro</h1>

        <p className={styles.description}>Software Engineer Full Stack</p>

        <div className={styles.grid}>
          <a href='https://github.com/marcnava13' className={styles.card}>
            Github
          </a>

          <a href='https://www.linkedin.com/in/marcosnp/' className={styles.card}>
            LinkedIn
          </a>

          <a href='mailto:marcosnpcogollos@gmail.com' className={styles.card}>
            Mail
          </a>
        </div>
      </main>
    </div>
  );
}
