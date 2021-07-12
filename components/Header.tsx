import React from "react";
import Link from 'next/link'

const Header = ({t}:any) => {
    return(
        <nav>
        <ul className="site-menu js-clone-nav d-none d-lg-block">
            <li className="has-children">
                <span>Product</span>
                <ul className="dropdown">
                    <li className="listsub">
                        <Link href="">
                        <a>
                            <h6>Our Strength</h6>
                            <p>The best tools for marketer and developer</p>
                        </a>
                        </Link>
                    </li>
                    <h6>
                        For Marketer
                    </h6>
                    <li>
                        <Link  href="">
                        <a>
                            <h6>Smart SMS Console</h6>
                            <p>Send SMS messages on your own through a website. Easy to send and can be quickly analyzed.</p>
                        </a>
                        </Link>
                        <Link href="">
                        <a>
                            <h6>Location Based SMS</h6>
                            <p>Enter your target group within specific areas. Send messages immediately without requiring phone numbers.</p>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                        <a>
                            <h6>SMS Tracking</h6>
                            <p>Accurate SMS Campaign results that do not waste your marketing budget.</p>
                        </a>
                        </Link>
                        <Link href="">
                        <a>
                            <h6>Global SMS</h6>
                            <p>Send SMS and OTP messages globally at valuable prices.</p>
                        </a>
                        </Link>
                    </li>
                    <h6>
                        For Developer
                    </h6>
                    <li>
                        <Link  href="">
                        <a>
                            <h6>SMS API</h6>
                            <p>Simply by using SMS API, you can send messages through your platform.</p>
                        </a>
                        </Link>
                        <Link href="">
                        <a>
                            <h6>OTP Service</h6>
                            <p>A secure, ready-to-use OTP Service that does not require additional programming.</p>
                        </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="">
                    <a>Pricing</a>
                </Link>
            </li>
            <li className="has-children">
                <span>Database</span>
                <ul className="dropdown">
                    <li className="listsub">
                        <Link href="">
                        <a>
                            <h6>Resources</h6>
                            <p>List of Resources</p>
                        </a>
                        </Link>
                    </li>
                    <h6>Tips and Knowledge</h6>
                    <li>
                        <Link href="">
                        <a>
                            <h6>Marheting</h6>
                            <p>Marketing and SMS marketing knowledge</p>
                        </a>
                        </Link>
                        <Link href="">
                        <a>
                            <h6>Tech</h6>
                            <p>Technical knowledge about SMS and related technology</p>
                        </a> 
                        </Link>                  
                    </li>
                    <li>
                        <Link href="">
                        <a>
                            <h6>ThaiBulkSMS Features</h6>
                            <p>Features introduction, update, and tutorial</p>
                        </a>
                        </Link>
                        <Link href="">
                        <a >
                            <h6>Example Operations</h6>
                            <p>Example of using SMS in business</p>
                        </a>
                        </Link>
                    </li>
                    <h6>Case Studies</h6>
                    <li>
                        <Link href="">
                        <a>
                            <h6>Success Stories</h6>
                            <p>Case studies of many top customers who have used ThaiBulkSMS</p>
                        </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="has-children">
                <span>Support</span>
                <div className="dropdown">
                    <div className="row">
                        <ul>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Ordering</h6>
                                        <p>Ordering process for each payment channel</p>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>FAQ</h6>
                                        <p>About ordering, general and technical problem</p>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Contact us</h6>
                                        <p>Contact to ThaiBulkSMS</p>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Contact</h6>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>02-798-6000</span>
                                    </h6>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>contact@thaibulksms.com</span>
                                    </h6>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>ThaiBulkSMS</span>
                                    </h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="has-children">
                <span>Devlopers</span>
                <ul className="dropdown">
                    <li>
                        <Link href="" passHref>
                            <span>
                                <h6>Download Guide</h6>
                                <p>Manual for SMS API and OTP Service with example</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="" passHref>
                            <span>
                                <h6>Download Example SDK</h6>
                                <p>Choose the programing language as you want</p>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="" passHref>
                            <span>
                                <h6>API References</h6>
                                <p>Include SMS API and OTP API</p>
                            </span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="has-children">
                <span>About</span>
                <div className="dropdown">
                    <div className="row">
                        <ul>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Why ThaiBulkSMS?</h6>
                                        <p>How is sending SMS with ThaiBulkSMS better than others?</p>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Contact us</h6>
                                        <p>Contact us</p>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Reseller Program</h6>
                                        <p>Special reseller program from ThaiBulkSMS</p>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <span>
                                        <h6>Member</h6>
                                        <p>Member Register Or Login</p>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Contact</h6>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>02-798-6000</span>
                                    </h6>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>contact@thaibulksms.com</span>
                                    </h6>
                                </Link>
                            </li>
                            <li>
                                <Link href="" passHref>
                                    <h6>
                                        <span>ThaiBulkSMS</span>
                                    </h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        </nav>
    )
}

export default Header;