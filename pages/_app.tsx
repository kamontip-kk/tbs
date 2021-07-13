import React from 'react';
import App from 'next/app';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: any) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

export default appWithTranslation(MyApp);
