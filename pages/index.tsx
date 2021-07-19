import React from 'react';
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import ServiceSection from '../components/home/ServiceSection';
import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
import SmsSection from '../components/home/SmsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import EduSection from '../components/home/EduSection';
import CtaSection from '../components/home/CtaSection';
import BacktoTop from '../components/BacktoTop';
import { useRouter } from 'next/router'
import th from '../locales/th/Home.json';
import en from '../locales/en/Home.json';
// import { useTranslation} from 'next-i18next';
// import useTranslation from "next-translate/useTranslation";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Homepage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'th' ? th : en;

  return(
    <React.Fragment>
      <Layout>
        <Head>
          {/* <meta name="keywords" content={t('keywords')} /> */}
          <meta name="author" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
            />
        <div className="page_wrapper">
          <HeroSection/>
          {/* <PartnerSection/> */}
          {/* <FeatureSection/> */}
          {/* <ServiceSection/> */}
          {/* <SimpleSliderSection/> */}
          {/* <GlobeSection/> */}
          {/* <SmsSection/> */}
          {/* <TestimonialSection/> */}
          {/* <EduSection/> */}
          {/* <CtaSection/> */}
        </div>
        <BacktoTop/>
      </Layout>
    </React.Fragment>
  )
}

// export default withTranslation('Home')(Homepage);
export const getStaticProps = async () => {
  return {
      props: {
          namespacesRequired: ['Home'],
      },
  };
};
// export const getStaticProps = async ({locale}:any) => ({
//   props: {
//     ...await serverSideTranslations(locale,['Home' , 'Header' , 'Footer']),
//   },
    
// })
export default Homepage;
