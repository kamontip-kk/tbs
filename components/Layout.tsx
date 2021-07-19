import Header from './Header';
import Footer from '../tbs_submodule/Footer';
import BannerCookie from '../tbs_submodule/BannerCookie';

const Layout = (props:any) => {
    return(
        <div>
            {/* <Header/> */}
            {props.children}
            {/* <Footer/> */}
            <BannerCookie/>
        </div>
    )
}

export default Layout;