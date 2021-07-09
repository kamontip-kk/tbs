import React from 'react';
import Head from 'next/head'
//import { withTranslation } from '../i18n';

const Homepage = ({t}:any) => {
  return(
    <React.Fragment>
      <h1>Hi</h1>
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
