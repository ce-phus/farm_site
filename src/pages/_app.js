import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const montserrat= Montserrat({
  subsets:['latin'],
  variable : "--font-mont"
})


export default function App({ Component, pageProps }) {
  const router= useRouter();
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Navbar/>
      <Component key={router.asPath} {...pageProps}/>
      <Footer/>
      </main>
    </>
  ) 
}
