import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';

const Homepage = ({t}:any) => {
  return(
    <React.Fragment>
      <Layout>
        <h1>Hi</h1>
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
