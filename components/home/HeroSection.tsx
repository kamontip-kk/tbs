import PropTypes from 'prop-types';
import Link from 'next/link';

const HeroSectionV2 = ({ t }: any) => {
    return(
        <div className="hero_section v2">
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="hero_text_one">
                        <h1 >
                            Meeting every one of your SMS sending needs
                        </h1>
                        <p>
                            SMS sending service capable of quick sending with reliable stability. Consultation is available at every step
                        </p>
                        <ul className="cta-btn">
                            <li>
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}> 
                                <a className="btn v3">
                                    Try SMS sending for free
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a className="btn v5">
                                        View package prices
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )  
}

// HeroSectionV2.getInitialProps = async () => ({
//     namespacesRequired: ['Home'],
// });

// HeroSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default HeroSectionV2;