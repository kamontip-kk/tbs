import React from "react";
import PropTypes from 'prop-types';
import Image from 'next/image';
// import partnerlogo1 from '../public/assets/tbs_frontend_assets/partner_logo_1.png';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const PartnerSection = ({t}:any) =>{
    return(
        <div className="partner_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h6
                        className="partner_title"
                        style={{ textTransform: 'none' }}
                    >
                        Leading brands that trust ThaiBulkSMS
                    </h6>
                </div>
                <div className="col-md-12">
                    {/* <OwlCarousel
                        className="partner_wrap"
                        items={5}
                        nav={false}
                        dots={false}
                        autoplay
                        autoplayTimeout={5500}
                        loop={true}
                        margin={30}
                        center
                        smartSpeed={2000}
                        responsiveClass
                        responsive={{
                            0: {
                                items: 3,
                            },
                            768: {
                                items: 5,
                            },
                            1000: {
                                items: 5,
                            },
                        }}
                    > */}
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo1
                                {/* <Image src={partnerlogo1} alt="partnerlogo1" /> */}
                                {/* <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_1.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo2
                                <Image loader={myLoader} src="partner_logo_2.png" alt="partnerlogo2" layout="fill"/>
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_2.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo3
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_3.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo4
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_4.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo5
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_5.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                            </div>
                        </div>
                    {/* </OwlCarousel> */}
                </div>
            </div>
        </div>
    </div>
    )
}

// PartnerSection.getInitialProps = async () => ({
//     namespacesRequired: ['Home'],
// });

// PartnerSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default PartnerSection;