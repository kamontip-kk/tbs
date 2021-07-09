import React from "react";

const FeatureSecitom = ({t}:any) =>{
    return(
        <div className="feature_section">
            <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="section_title">
                        Why ThaiBulk SMS
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="single_feature_item">
                        img1
                        <div className="single_feature_text">
                            <h3>No.1 SMS Platform</h3>
                            <p>Thailand’s no. 1 SMS service provider</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="single_feature_item">
                        img2
                        <div className="single_feature_text">
                            <h3>Fast and Reliable</h3>
                            <p>Send SMS via the fastest channel automatically with reliable and stable</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="single_feature_item">
                        img3
                        <div className="single_feature_text">
                            <h3>Smart Console</h3>
                            <p>Easy to measure sending SMS with smart reports</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="single_feature_item">
                        img4
                        <div className="single_feature_text">
                            <h3>Easily Integrated API</h3>
                            <p>Easy to connect SMS API with multiple programing languages</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FeatureSecitom;