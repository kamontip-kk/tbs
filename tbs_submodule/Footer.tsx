import React, { useEffect } from "react";
import appConfig from "../appConfig";

  

const Footer = ({ t }: any) => {
  const makeHomePageLink = (path: string): string => {
    const url = ''
    return url+"/" + path + (path ? "/" : "");
  };
  
  useEffect(() => {}, []);

  return (
    <div className="footer_section">
      <div className="container" id="footer">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <a href={makeHomePageLink("product")}>
                <h4>Services</h4>
              </a>
              <ul>
                <li>
                  <a href={makeHomePageLink("product/smart-sms-console")}>
                    Smart SMS Console
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("product/sms-api")}>SMS API</a>
                </li>
                <li>
                  <a href={makeHomePageLink("product/otp")}>OTP Service</a>
                </li>
                <li>
                  <a href={makeHomePageLink("product/sms-tracking")}>
                    SMS Tracking
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("product/global-sms")}>
                    Global SMS
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("product/location-based-sms")}>
                    Location Based SMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href={makeHomePageLink("support/how-to-order")}>
                    Ordering Methods
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("support/faq")}>
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("developer")}>
                    For Developers
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.thaibulksms.com"
                    target="_blank"
                    rel="noopener"
                  >
                    API References
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>Use Cases</h4>
              <ul>
                <li>
                  <a href={makeHomePageLink("sms-marketing")}>
                    SMS Marketing
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("sms-alert")}>
                    SMS Alert
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href={makeHomePageLink("why-thaibulksms")}>
                    Why use ThaiBulkSMS
                  </a>
                </li>
                <li>
                  <a href={makeHomePageLink("reseller")}>SMS Reseller</a>
                </li>
                <li>
                  <a href={makeHomePageLink("contact")}>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 md-none">
            <div className="footer_contact">
              <a href="tel:027986000">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                  alt="Image"
                  width="30"
                  height="30"
                /> */}
                02-798-6000
              </a>
              <a href="mailto:contact@thaibulksms.com">
                {/* <img
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                  alt="Image"
                  width="30"
                  height="30"
                />{" "} */}
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "<!--email_off-->contact@thaibulksms.com<!--/email_off-->",
                  }}
                ></span>
              </a>
              <a
                href="https://www.facebook.com/ThaiBulkSMS"
                target="_blank"
                rel="noopener"
              >
                {/* <img
                  className="lazyload"
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                  alt=""
                  width="30"
                  height="30"
                /> */}
                Follow Us
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer_bottom">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-5 col-md-5">
                  <div className="footer_logo">
                    {/* <img
                      className="lazyload"
                      data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_2.png`}
                      alt="Image"
                      width="253"
                      height="34"
                    /> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-7 xs-none">
                  <div className="footer_contact">
                    <a href="tel:027986000">
                      {/* <img
                        className="lazyload"
                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                        alt="Image"
                        width="30"
                        height="30"
                      /> */}
                      02-798-6000
                    </a>
                    <a href="mailto:contact@thaibulksms.com">
                      {/* <img
                        className="lazyload"
                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                        alt=""
                        width="30"
                        height="30"
                      /> */}
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            "<!--email_off-->contact@thaibulksms.com<!--/email_off-->",
                        }}
                      ></span>
                    </a>
                    <a
                      href="https://www.facebook.com/ThaiBulkSMS"
                      target="_blank"
                      rel="noopener"
                    >
                      {/* <img
                        className="lazyload"
                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                        alt=""
                        width="30"
                        height="30"
                      /> */}
                      Follow Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer_copyright">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <ul className="footer_menu">
                    <li>
                      <a href={makeHomePageLink("condition")}>
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href={makeHomePageLink("policy")}>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <p className="copyright">
                    Copyright © 2020 ThaiBulkSMS.com All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;