import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
// import CountUp from 'react-countup';

const SmsSectionV2 = () => {
    const {t}:any  = useTranslation('Home')
    const [numStart, setnumStart] = useState(4662190879);
    const [numEnd, setnumEnd] = useState(0);
    const [duration, setDuration] = useState(0);
    return(
        <div
            className="sms_section lazyload"
            // data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mobile/promo_bg.jpg [(max-width:767px)] | ${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
                        <div className="sms_text">
                            <h2>
                                {t(
                                    'SmsSection::Be confident in every instance of SMS sending'
                                )}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="sms_feature">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t(
                                                'SmsSection::The number of SMS sent by us up to now'
                                            )}
                                        </p>
                                        {/* {duration !== 0 && (
                                            <div>
                                                <CountUp
                                                    className="account-balance"
                                                    start={numStart}
                                                    end={numEnd}
                                                    duration={duration}
                                                    formattingFn={(number) => {
                                                        return `${String(
                                                            number
                                                        ).replace(
                                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                                            '$1,'
                                                        )}`;
                                                    }}
                                                />
                                            </div>
                                        )} */}
                                        {/* <h2>4,662,190,879</h2> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t(
                                                'SmsSection::The number of SMS sending on average / day'
                                            )}
                                        </p>
                                        <div>300,000+</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t(
                                                'SmsSection::The average amount of time taken to send SMS Seconds'
                                            )}
                                        </p>
                                        <div>
                                            1.9{' '}
                                            <span>
                                                {t('SmsSection::Seconds')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {!isLogin && <TestQuickregister />} */}
            </div>
        </div>
    )
}

SmsSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

export default SmsSectionV2;