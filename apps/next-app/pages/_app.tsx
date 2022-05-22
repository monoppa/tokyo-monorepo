import 'ui/dist/output.css'
import 'styles/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
