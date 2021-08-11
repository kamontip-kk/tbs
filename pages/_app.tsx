import React,{useEffect} from 'react';
import App from 'next/app';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import { seo } from '../components/seo/defaultseo';
import {useRouter} from 'next/router'
import Proloader from '../components/Proloader';
// import '../public/assets/css/style.css'
// import '../public/assets/css/responsive.css'
import '../public/assets/css/globals.css'
import '../public/assets/css/backtotop.css'
import '../public/assets/css/proloader.css'
import '../public/assets/css/header.css'
import '../public/assets/css/hero.css'
// import '../public/assets/css/partner.css'
// import '../public/assets/css/feature.css'
import '../public/assets/css/service.css'
// import '../public/assets/css/simpleslider.css'
// import '../public/assets/css/globe.css'
// import '../public/assets/css/sms.css'
// import '../public/assets/css/testimonial.css'
// import '../public/assets/css/edu.css'
// import '../public/assets/css/cta.css'
import '../public/assets/css/footer.css'
import '../public/assets/css/bannercookie.css'

function MyApp({ Component, pageProps }: any) {
  let lang = Cookie.get('LANG');
  const router = useRouter();

  useEffect(() => {
    
    if (lang === undefined) {
        router.locale = 'th'
        Cookie.set('LANG','TH');
    } else {
        router.locale = `${lang.toLowerCase()}`;
        Cookie.set('LANG',router.locale.toLocaleUpperCase());
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
