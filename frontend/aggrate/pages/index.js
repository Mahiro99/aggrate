import Head from 'next/head'
import Image from 'next/image'
import { Button } from "@chakra-ui/react"
import { FcRating } from "react-icons/fc";
import { GrArticle } from "react-icons/gr";
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aggrate!
        </h1>

        <p className={styles.description}>
          Your one stop for all things{' '}
          <code className={styles.code}>rated</code>
        </p>

        <div className={styles.grid}>
          <a href="https://myanimelist.net/" className={styles.card}>
            <h2>MAL &rarr;</h2>
            <p>Find in-depth information about your favourite animes.</p>
            <Link href="/mal/reviews">
              <Button leftIcon={< GrArticle />} colorScheme="blue" variant="ghost">Reviews</Button>
            </Link>
          </a>

          <a href="https://www.imdb.com/" className={styles.card}>
            <h2>IMDB &rarr;</h2>
            <p>Learn more about your favorite TV Shows!</p>
            <Link href="/imdb/ratings">
              <Button leftIcon={< FcRating />} colorScheme="blue" variant="ghost">Ratings</Button>
            </Link>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
