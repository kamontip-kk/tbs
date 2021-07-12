import Header from './Header';
import Footer from '../tbs_submodule/Footer';
import HeroSection from '../components/home/HeroSection'

const Layout = (props:any) => {
    return(
        <div>
            {/* <Header/> */}
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;