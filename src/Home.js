import Header from "./Header";
import Navbar from './Navbar';
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from './Services';
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <Aboutus/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;
