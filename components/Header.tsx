import React from "react";

const Header = ({t}:any) => {
    return(
        <>
        <ul className="site-menu js-clone-nav d-none d-lg-block">
            <li className="has-children">
                <span>Product</span>
                <ul className="dropdown">
                    <li className="listsub">
                        <a href="">
                            <h6>Our Strength</h6>
                            <p>The best tools for marketer and developer</p>
                        </a>
                    </li>
                    <h6>
                        For Marketer
                    </h6>
                    <li>
                        <a href="">
                            <h6>Smart SMS Console</h6>
                            <p>Send SMS messages on your own through a website. Easy to send and can be quickly analyzed.</p>
                        </a>
                        <a href="">
                            <h6>Location Based SMS</h6>
                            <p>Enter your target group within specific areas. Send messages immediately without requiring phone numbers.</p>
                        </a>

                    </li>
                    <li>
                        <a href="">
                            <h6>SMS Tracking</h6>
                            <p>Accurate SMS Campaign results that do not waste your marketing budget.</p>
                        </a>
                        <a href="">
                            <h6>Global SMS</h6>
                            <p>Send SMS and OTP messages globally at valuable prices.</p>
                        </a>
                    </li>
                    <h6>
                        For Developer
                    </h6>
                    <li>
                        <a href="">
                            <h6>SMS API</h6>
                            <p>Simply by using SMS API, you can send messages through your platform.</p>
                        </a>
                        <a href="">
                            <h6>OTP Service</h6>
                            <p>A secure, ready-to-use OTP Service that does not require additional programming.</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="">Pricing</a>
            </li>
            <li className="has-children">
                <span>Database</span>
                <ul className="dropdown">
                    <li className="listsub">
                        <a href="">
                            <h6>Resources</h6>
                            <p>List of Resources</p>
                        </a>
                    </li>
                    <h6>Tips and Knowledge</h6>
                    <li>
                        <a href="">
                            <h6>Marheting</h6>
                            <p>Marketing and SMS marketing knowledge</p>
                        </a>
                        <a href="">
                            <h6>Tech</h6>
                            <p>Technical knowledge about SMS and related technology</p>
                        </a>                       
                    </li>
                    <li>
                        <a href="">
                            <h6>ThaiBulkSMS Features</h6>
                            <p>Features introduction, update, and tutorial</p>
                        </a>
                        <a href="">
                            <h6>Example Operations</h6>
                            <p>Example of using SMS in business</p>
                        </a>
                    </li>
                    <h6>Case Studies</h6>
                    <li>
                        <a href="">
                            <h6>Success Stories</h6>
                            <p>Case studies of many top customers who have used ThaiBulkSMS</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="has-children">
                <span>Support</span>
            </li>
            {/* 395 */}
        </ul>
        </>
    )
}

export default Header;