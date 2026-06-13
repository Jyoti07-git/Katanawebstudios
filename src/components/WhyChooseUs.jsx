import "./WhyChooseUs.css";
import {
   FaRocket,
  FaChartLine,
  FaMobileScreen,
  FaHeadset,
} from "react-icons/fa6";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      text: "Lightning-fast websites optimized for speed and conversions.",
    },
    {
  icon: <FaChartLine />,
  title: "SEO Optimized",
  text: "Built with SEO best practices to help your business rank higher.",
},
    {
      icon: <FaMobileScreen />,
      title: "Mobile Responsive",
      text: "Perfect experience across desktop, tablet, and mobile devices.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      text: "Reliable communication and support throughout the project.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <span className="section-tag">
          WHY CHOOSE US
        </span>

        <h2 className="section-title">
          Why Businesses Choose Katana Web Studios
        </h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;