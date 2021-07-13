import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const CtaSection = () =>{
    const {t}:any = useTranslation('Home')
    return(
        <div className="cta_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12">
                    <div className="cta-text">
                        <h3 dangerouslySetInnerHTML={{
                                __html: t(
                                    'Improve Your Business<br/>Effectiveness with SMS from ThaiBulkSMS'
                                ),
                            }}>
                        </h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <ul className="cta-btn before-footer">
                        <li>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a className="btn v3">
                                {t('Try for free')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                <a className="btn v5">
                                {t('Check prices')}
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

CtaSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

export default CtaSection;