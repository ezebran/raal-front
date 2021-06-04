import Historia from './Content/Historia';
import YoutubeVideos from './Content/YoutubeVideos';
import Cards from './Content/Cards'
import Politicas from './Content/Politicas'
import Header from './../../layouts/Header';
import Footer from './../../layouts/Footer';

export default function Empresa() {

    return (
        <>
            <Header />
            <Historia />
            <YoutubeVideos />
            <Cards />
            <Politicas />
            <Footer />
        </>
    );
}