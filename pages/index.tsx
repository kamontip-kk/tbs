import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import ServiceSection from '../components/home/ServiceSection';
// import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
// import SmsSection from '../components/home/SmsSection';
// import TestimonialSection from '../components/home/TestimonialSection';
// import EduSection from '../components/home/EduSection';
// import CtaSection from '../components/home/CtaSection';
// import BacktoTop from '../components/BacktoTop';

const Homepage = ({t}:any) => {
  return(
    <React.Fragment>
      <Layout>
        <div className="page_wrapper">
          <HeroSection/>
          <PartnerSection/>
          <FeatureSection/>
          <ServiceSection/>
          {/* <SimpleSliderSection/> */}
          <GlobeSection/>
          {/* <SmsSection/> */}
          {/* <TestimonialSection/> */}
          {/* <EduSection/> */}
          {/* <CtaSection/> */}
        </div>
        {/* <BacktoTop/> */}
      </Layout>
    </React.Fragment>
  )
}

//export default withTranslation('Home')(Homepage);
// export const getStaticProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['Home'],
//         },
//     };
// };

export default Homepage;
