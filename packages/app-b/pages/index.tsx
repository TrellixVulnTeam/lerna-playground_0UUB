import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App A</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          App A
      </h1>
      </main>
    </div>
  )
}
