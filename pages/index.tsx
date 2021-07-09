import React from 'react';
import Head from 'next/head'

const Homepage = ({t}:any) => {
  return(
    <>
    <h1>Hi</h1>
    </>
  )
}

// export default withTranslation('Home')(Homepage);
// export const getStaticProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['Home'],
//         },
//     };
// };

export default Homepage;
