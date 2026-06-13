import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-col">
          <h2>Katana Web Studios</h2>

          <p>
            Building premium websites that help
            businesses stand out and grow online.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/portfolio">Portfolio</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>

          <p>
  <a href="mailto:contact@katanawebstudios.com">
    contact@katanawebstudios.com
  </a>
</p>

<p>
  <a href="tel:+917656945023">
    +91 7656945023
  </a>
</p>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Katana Web Studios. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;