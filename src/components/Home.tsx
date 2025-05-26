import Features from "./Features";
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
      <StickyWhatsappIcon />
    </div>
  );
}

export default Home;
