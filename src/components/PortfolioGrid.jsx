import "./PortfolioGrid.css";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Hotel Management System",
    category: "Full Stack",
  },

  {
    title: "Academia E-learning",
    category: "Frontend",
  },

  {
    title: "Amazon Clone",
    category: "React",
  },

  {
    title: "Book Store App",
    category: "Full Stack",
  },

  {
    title: "Restaurant Website",
    category: "Web Design",
  },

  {
    title: "Weather App",
    category: "React",
  },
];

function PortfolioGrid() {
  return (
    <section className="portfolio-section">

      <div className="container">

        <div className="portfolio-header">

          <span>FEATURED PROJECTS</span>

          <h2>
            Work That Creates
            Real Impact
          </h2>

          <p>
            Modern websites and digital experiences
            designed for growth.
          </p>

        </div>

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-overlay">

                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <div className="project-buttons">

                  <button>
                    Live Demo
                    <FaArrowRight />
                  </button>

                  <button>
                    <FaGithub />
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PortfolioGrid;