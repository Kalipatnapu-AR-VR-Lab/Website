import '@/styles/globals.css'

// import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon.png"
        />
      </Head>
      <main className={`w-full min-h-screen bg-no-repeat scroll-smooth`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}

