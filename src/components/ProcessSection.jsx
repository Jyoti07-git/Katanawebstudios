import "./ProcessSection.css";

function ProcessSection() {
  return (
    <section className="process-section">

      <div className="container">

        <span className="process-subtitle">
          OUR PROCESS
        </span>

        <h2 className="process-title">
          Process We Follow
        </h2>

        <div className="process-grid">

          <div className="process-card">
            <div className="number">01</div>

            <h3>Discovery</h3>

            <p>
              Understanding your business,
              goals and requirements.
            </p>
          </div>

          <div className="process-card">
            <div className="number">02</div>

            <h3>Design</h3>

            <p>
              Creating modern layouts and
              user-friendly experiences.
            </p>
          </div>

          <div className="process-card">
            <div className="number">03</div>

            <h3>Development</h3>

            <p>
              Transforming designs into
              high-performance websites.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;