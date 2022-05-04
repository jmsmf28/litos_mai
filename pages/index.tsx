import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center py-2  bg-[url('/images/bg1.jpg')]">

      </main>

    </div>
  )
}

export default Home
