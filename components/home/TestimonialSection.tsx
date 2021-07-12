import React from "react";

const TestimonialSection = ({ t }: any) => {
    return(
        <div className="testimonial_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title">
                        Customers who trust ThaiBulk SMS
                        {/* {t('h1')} <span className="col_one">ThaiBulk</span>{' '}
                        <span className="col_two">SMS</span> */}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    {/* <OwlCarousel
                        className="testimonial_slider"
                        items={1}
                        nav={true}
                        dots={false}
                        loop={true}
                        navText={[
                            '<i class="ion-ios-arrow-back"></i>',
                            '<i class="ion-ios-arrow-forward"></i>',
                        ]}
                        margin={30}
                        center
                        smartSpeed={2000}
                        responsiveClass={true}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 1,
                            },
                            1000: {
                                items: 1,
                            },
                        }}
                    > */}
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    ThaiBulkSMS is an SMS-sending service provider which makes sure that sending text messages to customers is very easy and convenient because the service allows us to send the messages by ourselves without having to go through an intermediary. Plus, reports on message sending are provided, enabling more accurate assessment of the results
                                </p>
                                <div className="client_info">
                                    {/* <div className="client_img">
                    <img
                      className="lazyload"
                      data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/client_1.png`}
                      alt="Image"
                    />
                  </div> */}
                                    <div className="client_name">
                                        <h6>
                                            Syn Mun Kong Insurance PLC
                                        </h6>
                                        {/* <p>{t('p2')}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    The prices represent an excellent value considering the quality of the service. The service meets all our expectations including measurement of results, viewing of reports and controlling budgets which are adjustable in each month or until the credits run out
                                </p>
                                <div className="client_info">
                                    {/* <div className="client_img">
                    <img
                      className="lazyload"
                      data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/client_1.png`}
                      alt="Image"
                    />
                  </div> */}
                                    <div className="client_name">
                                        <h6>
                                            Smart One Logistics Co., Ltd.
                                        </h6>
                                        {/* <p>{t('p2')}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial_item">
                                <p className="client_quote">
                                    The service ensures that marketing by SMS can be executed easily and speedily. The staff are also available to provide helpful advice and rapid solutions to various problems
                                </p>
                                <div className="client_info">
                                    {/* <div className="client_img">
                    <img
                      className="lazyload"
                      data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/client_1.png`}
                      alt="Image"
                    />
                  </div> */}
                                    <div className="client_name">
                                        <h6>
                                            National Housing Authority of Thailand
                                        </h6>
                                        {/* <p>{t('p2')}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  {t('TestimonialSection::item.1.content')}
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img
                      className="lazyload"
                      data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/client_1.png`}
                      alt="Image"
                    />
                  </div>
                  <div className="client_name">
                    <h6>{t('TestimonialSection::item.1.credit')}</h6>
                    <p>{t('p2')}</p>
                  </div>
                </div>
              </div>
            </div> */}
                    {/* </OwlCarousel> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    {/* <Link href="/SuccessStoriesListing">
            <a className="btn v6">{t('TestimonialSection::storyBtn')}</a>
          </Link> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default TestimonialSection;