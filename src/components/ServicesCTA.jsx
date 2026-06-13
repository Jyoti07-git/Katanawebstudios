import { Link } from "react-router-dom";
import "./ServicesCTA.css";

function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="container cta-wrapper">

        <div className="cta-left">
          <span>LET'S BUILD SOMETHING AMAZING</span>

          <h2>Ready To Grow Your Business?</h2>

          <p>
            Book a free consultation and let's discuss your project.
          </p>
        </div>

        <div className="cta-right">
          <Link to="/contact">
            <button className="cta-btn">
              Book Free Consultation
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;