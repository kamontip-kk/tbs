import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';

const Homepage = ({t}:any) => {
  return(
    <React.Fragment>
      <Layout>
        <div className="page_wrapper">
          <HeroSection/>
          <PartnerSection/>
        </div>
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
