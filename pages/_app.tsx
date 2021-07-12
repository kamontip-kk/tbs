import React, { useEffect } from 'react';
import App from 'next/app';
import Router, { useRouter } from 'next/router';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: any) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

// MyApp.getInitialProps = async (appContext: any) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// }

export default MyApp
