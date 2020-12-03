import '../styles/globals.css'
import '../src/css/tailwind.css'
import Layout from '../src/components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
