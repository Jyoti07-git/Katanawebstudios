import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


function Contact() {
  return (
    <>
      <Navbar />
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      <ContactBanner />
      <ContactSection />
      <Testimonials />
      <Footer />
      </motion.div>
    </>
  );
}

export default Contact;