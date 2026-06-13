import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrapper">

        <div className="logo">
  Katana Web Studios
</div>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaXmark /> : <FaBars />}
</div>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><NavLink to="/">Home</NavLink></li>

<li>
  <NavLink to="/services">
    Services
  </NavLink>
</li>

<li>
  <NavLink to="/portfolio">
    Portfolio
  </NavLink>
</li>

<li>
  <NavLink to="/about">
    About Us
  </NavLink>
</li>

<li>
  <NavLink to="/contact">
    Contact
  </NavLink>
</li>
</ul>
      </div>
    </nav>
  );
}

export default Navbar;