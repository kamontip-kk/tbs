import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const GlobeSection = ({ t }: any) => {
  return (
    <div className="globe_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
            <div className="globe_text">
              <h2>Free SMS and OTP sending worldwide at a great value price</h2>
              <p>Covering more than 200 countries worldwide</p>
              <Link href="/contact">
                <a className="btn v3">Contact us for more information</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
            <div className="globe_img">
              <div className="lazyload">
                <Image loader={myLoader} src="img_10.png" alt="globeimg" width={500} height={500}/>
              </div>
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_10.png`}
                alt="Image"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeSection;
