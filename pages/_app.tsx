import React,{useEffect} from 'react';
import App from 'next/app';
import { appWithTranslation , useTranslation} from 'next-i18next';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import { seo } from '../components/seo/defaultseo';

function MyApp({ Component, pageProps }: any) {
  // let lang = Cookie.get('LANG');
  // const {i18n} = useTranslation();

  // useEffect(() => {
    
  //   if (lang === undefined) {
  //       i18n.changeLanguage('th');
  //   } else {
  //       i18n.changeLanguage(lang.toLowerCase());
  //   }
  // },[lang]);

  return (
    <>
      <DefaultSeo {...seo}/>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

export default appWithTranslation(MyApp);
