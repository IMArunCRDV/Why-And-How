import React, {useEffect, useState} from 'react'
import {Layout} from '../components'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Why And How</title>
        <script data-ad-client="ca-pub-6618815321294218" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
    <Layout>
  <Component {...pageProps} />
    </Layout>
  </>
  
  )
}

export default MyApp
