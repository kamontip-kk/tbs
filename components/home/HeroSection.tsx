import PropTypes from 'prop-types';
import Link from 'next/link';

const HeroSectionV2 = ({ t }: any) => {
    return(
        <div className="hero_section v2">
            <div className="container">
                <h1>No.1 Top SMS Marketing Provider</h1>
                <p>Send advertising SMS via SMS Gateway, Fast, Stable, Ready to give consultation at every step.</p>        
                <ul className="cta-btn">
                    <li>
                        <Link href="">
                            <a>Try for free</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>View packages</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )  
}

export default HeroSectionV2;