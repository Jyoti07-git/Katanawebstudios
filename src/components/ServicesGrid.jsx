import "./ServicesGrid.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMagnifyingGlass,
  FaBullhorn,
  FaWordpress,
  FaMobileScreen,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaCode />,
    title: "Website Development",
  },
  {
    icon: <FaPalette />,
    title: "Web Design",
  },
  {
  icon: <FaMagnifyingGlass />,
  title: "SEO Optimization",
},
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
  },
  {
    icon: <FaMobileScreen />,
    title: "Responsive Design",
  },
];
function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="container">

        <div className="section-header">
          <span>OUR SERVICES</span>

          <h2>
            Digital Solutions Crafted
            For Modern Businesses
          </h2>

          <p>
            We design and develop high-converting websites
            that help brands grow and stand out online.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
  <motion.div
    className="service-card"
    key={index}
    initial={{
      opacity: 0,
      y: 50,
      scale: 0.95
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: index * 0.15
    }}
  >
    <div className="card-line"></div>

    <div className="service-icon">
      {service.icon}
    </div>

    <h3>{service.title}</h3>

    <p>
      Professional solutions tailored to your
      business goals and growth.
    </p>

  </motion.div>
))}
        

        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;