import React from "react";
import Link from "next/link";

const GlobeSection = ({ t }: any) => {
    return(
        <div className="globe_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="globe_text">
                        <h2>
                            Free SMS and OTP sending worldwide at a great value price
                        </h2>
                        <p>
                            Covering more than 200 countries worldwide
                        </p>
                        <Link href="/contact">
                            <a className="btn v3">
                                Contact us for more information
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="globe_img">
                        img Globe
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GlobeSection;