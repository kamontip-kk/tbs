import React,{useEffect} from 'react';
import App from 'next/app';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import { seo } from '../components/seo/defaultseo';
import {useRouter} from 'next/router'
import Proloader from '../components/Proloader';

function MyApp({ Component, pageProps }: any) {
  let lang = Cookie.get('LANG');
  const router = useRouter();

  useEffect(() => {
    
    if (lang === undefined) {
        router.locale = 'th'
    } else {
        router.locale = `${lang.toLowerCase()}`;
    }
  },[lang]);

  return (
    <>
        <DefaultSeo {...seo}/>
        <Proloader/>
        <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

// export default appWithTranslation(MyApp);
export default MyApp;
