import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Head>
        <title>TMI Flights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
