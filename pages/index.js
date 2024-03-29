import Head from 'next/head'
// import styles from '../styles/Home.scss'
import { HomePage } from '../src/components/home/home-page'

function Home({ data }) {
  return (
    <div >
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomePage data={data} />

    </div>
  )
}

export default Home;

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  }
}

