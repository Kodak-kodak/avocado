import Head from 'next/head';
import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react';
import {UserInstance as userStore} from '../store/UserStore'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Memo Web application</title>
        <meta name='Memo' content='Memo Web application' />
      </Head>
      <main>
        <Provider UserStore={userStore} >
          <Component {...pageProps} />
        </Provider>
      </main>
    </>
  );
}

export default MyApp
