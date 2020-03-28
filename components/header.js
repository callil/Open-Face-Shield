import Head from 'next/head'
import { GA_TRACKING_ID } from './gtag'

export default function Header() {
  return (
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
      <meta property="twitter:image" content="preview_card.png" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </Head>
  )
}
