import ServicesBanner from "../components/ServicesBanner";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesCTA from "../components/ServicesCTA";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <ServicesBanner />
      <ServicesGrid />
        <WhyChooseUs />
      <ServicesCTA />
      <ProcessSection />
      <Footer />
    </>
  );
}

export default Services;