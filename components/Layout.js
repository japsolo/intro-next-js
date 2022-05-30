import Head from 'next/head';

// Components
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next Demo App</title>
      </Head>

      <div className="container">
        <Navbar />

        { children }
      </div>
    </>
  )
}

export default Layout;