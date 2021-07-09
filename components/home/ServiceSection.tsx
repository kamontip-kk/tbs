import React from "react";
import Link from 'next/link';

const ServiceSection = ({t}:any) =>{
    return(
        <div className="service_section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="service_text">
                            <h2>ThaiBulkSMS Service</h2>
                            <div className="serviceTBS">
                                <div className="serviceDetail">
                                    img Secvice1
                                    <h3>Smart SMS Console</h3>
                                    <p>Send SMS messages through website by yourself, fast, easy, measurable</p>
                                    <Link href="">learnmore</Link>
                                </div>
                                <div className="serviceDetail">
                                    img Secvice2
                                    <h3>SMS API</h3>
                                    <p>SMS API Service for developers, connecting with your chosen programing language</p>
                                    <Link href="">learnmore</Link>
                                </div>
                                <div className="serviceDetail">
                                    img Secvice3
                                    <h3>OTP Service</h3>
                                    <p>Ready-to-use OTP service to increase safety, no programming skill required</p>
                                    <Link href="">learnmore</Link>
                                </div>
                                <div className="serviceDetail">
                                    img Secvice4
                                    <h3>SMS Tracking</h3>
                                    <p>Measure SMS campaign results accurately, do not waste your marketing budget</p>
                                    <Link href="">learnmore</Link>
                                </div>
                                <div className="serviceDetail">
                                    img Secvice5
                                    <h3>Global SMS</h3>
                                    <p>Send SMS and OTP messages globally at valuable prices, fast, trackable</p>
                                    <Link href="">learnmore</Link>
                                </div>
                                <div className="serviceDetail">
                                    img Secvice6
                                    <h3>Location Based SMS</h3>
                                    <p>Reach your target group within specific areas, send messages immediately without phone numbers</p>
                                    <Link href="">learnmore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service_img">
                            img ServiceDecore
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection;