import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <span>
          PREMIUM WEB DESIGN AGENCY
        </span>

        <h1>
          Building Websites That Grow Businesses
        </h1>

        <p>
          Modern web design, development and SEO solutions
          crafted for ambitious brands.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Project
          </button>

          <button className="secondary-btn">
            View Work
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;