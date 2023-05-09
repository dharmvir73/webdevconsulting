import Header from "./components/misc/header/page"; 
import Hero from "./components/pages/hero/page"
import Information from "./components/misc/information/page";
import Mission from "./components/misc/mission/page";
import ServiceBanner from "./components/misc/servicebanner/page";
import Services from "./components/pages/services/page";
import TeamBanner from "./components/misc/teambanner/page";
import Team from "./components/pages/team/page";
import GetStarted from "./components/misc/getstarted/page";
import Contact from "./components/pages/contact/page";
import CompanyBanner from "./components/misc/companybanner/page";
import Footer from "./components/pages/footer/page";

const Home = () => {


return(
  <>
  <div>
    {/* Navbar */}

    <Header />
   
    <div  className="overflow-hidden">
    {/* Hero Section */}
    <Hero />
    {/* Info */}
    <Information />
    {/* Mission */}
    <Mission />
    {/* ServiceBanner  */}
    <ServiceBanner />
    {/* Services */}
    <Services />
    {/* Team Banner */}
    <TeamBanner />
    {/* Team */}
    <Team />
    {/* Get Started */ }
    <GetStarted />
    {/* Contact */ }
    <Contact />
    {/* Company Banner */}
    <CompanyBanner />
    {/* Footer */}
    <Footer />
    </div>

    </div>
    </>
);
}


export default Home;