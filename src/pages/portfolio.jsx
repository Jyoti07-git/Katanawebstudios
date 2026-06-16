import Navbar from "../components/Navbar";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioGrid from "../components/PortfolioGrid";
import PortfolioStats from "../components/PortfolioStats";
import ServicesCTA from "../components/ServicesCTA";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>
      <Navbar />
      <PortfolioBanner />
      <PortfolioGrid />
         

      <ServicesCTA />
      <Footer />
    </>
  );
}

export default Portfolio;