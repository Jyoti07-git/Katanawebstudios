import "./ServicesBanner.css";
import { motion } from "framer-motion";

function ServicesBanner() {
  return (
    <section className="services-banner">
      <motion.div
        className="overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Services</h1>
        <p>Premium Web Design & Development Solutions</p>
      </motion.div>
    </section>
  );
}

export default ServicesBanner;