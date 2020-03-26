import '../styles/index.css'
import Nav from '../components/nav'
import Header from '../components/header'

import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="md:flex flex-col items-center w-full">
      <Header />
      <Nav />
      <div className="max-w-xl pb-20 px-8 mx-auto">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
