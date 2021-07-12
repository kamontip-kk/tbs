import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";

const CtaSection = ({ t }: any) =>{
    return(
        <div className="cta_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12">
                    <div className="cta-text">
                        <h3>
                            Improve the effectiveness of<br/>your business With SMS from ThaiBulkSMS
                        </h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <ul className="cta-btn before-footer">
                        <li>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a className="btn v3">
                                    Try SMS sending for free
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                <a className="btn v5">
                                    View package prices
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

// CtaSection.getInitialProps = async () => ({
//     namespacesRequired: ['Home'],
// });

// CtaSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSection;