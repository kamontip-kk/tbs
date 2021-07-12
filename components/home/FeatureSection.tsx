import React from "react";

const FeatureSecitom = ({t}:any) =>{
    return(
        <div className="feature_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title">
                        Why ThaiBulk SMS
                    </h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3 whyTBS">
                    <div className="single_feature_item">
                        img Feature1
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_1.png`}
                            alt="Image"
                            width="100"
                            height="100"
                        /> */}
                        <div className="single_feature_text">
                            <h3>No.1 SMS Platform</h3>
                            <p>
                                Thailand’s no. 1 SMS service provider
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 whyTBS">
                    <div className="single_feature_item">
                        img Feature2
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_2.png`}
                            alt="Image"
                            width="100"
                            height="100"
                        /> */}
                        <div className="single_feature_text">
                            <h3>Fast and Reliable</h3>
                            <p>
                                The fastest channel for sending is chosen automatically, resulting in fast sending and reliable stability
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 whyTBS">
                    <div className="single_feature_item">
                        img Feature3
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_3.png`}
                            alt="Image"
                            width="100"
                            height="100"
                        /> */}
                        <div className="single_feature_text">
                            <h3>Smart Console</h3>
                            <p>
                                The results of sending can be measured easily with smart reports
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 whyTBS">
                    <div className="single_feature_item">
                        img Feature4
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_4.png`}
                            alt="Image"
                            width="100"
                            height="100"
                        /> */}
                        <div className="single_feature_text">
                            <h3>
                                Easily Integrated API
                            </h3>
                            <p>
                            Easy to connect and support multiple languages
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeatureSecitom;