import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import ExchangeRates from "./Rates";
import SupportedAssets from "./SupportedCurrency";
import StickyWhatsappIcon from "./WhatsappIcon";

function Home() {
  return (
    <div id="home">
      <Hero />
      <HowItWorks />
      <SupportedAssets />
      <Features />
      <ExchangeRates />
      <AboutUs />
      <FAQ />
      <Contact />
      <Footer />
      <StickyWhatsappIcon />
    </div>
  );
}

export default Home;
