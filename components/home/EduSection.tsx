import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const EduSection = ({ t }: any) => {
    return(
        <div className="edu_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-push-6">
                    <div className="edu_text">
                        <h2>
                            Interesting tips and knowledge regarding SMS and marketing
                        </h2>
                        {/* <a href="http://www.thaibulksms.com/blog/">{t('EduSection::View all contents')}</a> */}
                        <Link href="/resource">
                            View all contents
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-pull-6">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                            <div className="edu_box">
                                <Link href="https://bit.ly/3hEL9ac">
                                <a
                                    // href="https://bit.ly/3hEL9ac"
                                    // target="_blank"
                                    // rel="noopener"
                                >
                                    {/* <Image loader={myLoader} src="img_7.png" alt="edu1" width={100} height={100}/> */}
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_7.png`}
                                        alt="Image"
                                        width="255"
                                        height="229"
                                    /> */}
                                    <div className="edu_box_text">
                                        <p>
                                           Don’t miss!! Marketing trends in 2020
                                        </p>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                        <Link href="https://bit.ly/2RDqTuQ">
                                        <a
                                            // href="https://bit.ly/2RDqTuQ"
                                            // target="_blank"
                                            // rel="noopener"
                                        >
                                            img Edu2
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_8.png`}
                                                alt="Image"
                                                width="255"
                                                height="229"
                                            /> */}
                                            <div className="edu_box_text">
                                                <p>
                                                    4 ways to communicate with customers most effectively Conclude your sale with testimonials
                                                </p>
                                            </div>
                                        </a>                              
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                        <Link href="https://bit.ly/32L9VRT">
                                        <a
                                            // href="https://bit.ly/32L9VRT"
                                            // target="_blank"
                                            // rel="noopener"
                                        >
                                            img Edu3
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_9.png`}
                                                alt="Image"
                                                width="255"
                                                height="229"
                                            /> */}
                                            <div className="edu_box_text">
                                                <p>
                                                    EduSection::Simple to do but the results will exceed expectations
                                                </p>
                                            </div>
                                        </a>                            
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EduSection;