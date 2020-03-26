import '../styles/index.css'
import Nav from '../components/nav'
import Head from 'next/head'

import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="md:flex flex-col items-center w-full">
      <Head>
        <title>Open Source Face Shield V1.1 - NYU COVID-19 Task Force</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="title"
          content="Open Source Face Shield V1.1 - NYU COVID-19 Task Force"
        />
        <meta
          name="description"
          content="A low cost, easy to fabricate medical face shield designed to be quickly made using almost any flat material fabrication equipment (laser cutters, rule dies, drag knife, CNC punch, etc.), or even scissors and an office hole punch from any clear flexible material."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Open Source Face Shield V1.1 - NYU COVID-19 Task Force"
        />
        <meta
          property="og:description"
          content="A low cost, easy to fabricate medical face shield designed to be quickly made using almost any flat material fabrication equipment (laser cutters, rule dies, drag knife, CNC punch, etc.), or even scissors and an office hole punch from any clear flexible material."
        />
        <meta property="og:image" content="preview_card.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta
          property="twitter:title"
          content="Open Source Face Shield V1.1 - NYU COVID-19 Task Force"
        />
        <meta
          property="twitter:description"
          content="A low cost, easy to fabricate medical face shield designed to be quickly made using almost any flat material fabrication equipment (laser cutters, rule dies, drag knife, CNC punch, etc.), or even scissors and an office hole punch from any clear flexible material."
        />
        <meta property="twitter:image" ontent="preview_card.png" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MSThemeCompatible" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="translucent black"
        />
        <meta
          name="msapplication-navbutton-color"
          content="translucent black"
        />
        <meta name="mssmarttagspreventparsing" content="true" />
        <meta name="theme-color" content="#b1cff4" />
        <meta
          http-equiv="Page-Enter"
          content="RevealTrans(Duration=1.0,Transition=1)"
        />
        <meta
          http-equiv="Page-Exit"
          content="RevealTrans(Duration=1.0,Transition=1)"
        />
      </Head>
      <Nav />
      <div className="max-w-xl pb-20 px-8 mx-auto">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
