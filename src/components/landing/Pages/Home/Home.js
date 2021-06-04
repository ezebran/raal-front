import BannerHome from './Content/BannerHome'
import IconsInfo from './Content/IconsInfo'
import SliderSection from './Content/SliderSection'
import Services from './Content/Services'
import Portafolio from './Content/Portafolio'
import Header from './../../layouts/Header';
import Footer from './../../layouts/Footer';


export default function Home() {
    return (
      <>
        <Header />
        <BannerHome />
        <IconsInfo />
        <SliderSection />
        <Services />
        <Portafolio />
        <Footer />
      </>
    );
}