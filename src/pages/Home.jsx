import { FaBuilding, FaGavel, FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page">
      <div className="motto-wrapper">
        <div className="container">
          <div className="motto">
            <h2>Trust</h2>
            <h2>Experience</h2>
            <h2>Capability</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="section-content">
            <div className="flex">
              <i>
                <FaGavel />
              </i>
              <h4>Services</h4>
            </div>
            <p>We offer a variety of quality servives</p>
            <p>
              <Link to="/services">
                <button>Read More &raquo;</button>
              </Link>
            </p>
          </div>

          <div className="section-content">
            <div className="flex">
              <i>
                <FaBuilding />
              </i>
              <h4>Projects</h4>
            </div>
            <p>
              Over the years we have completed several projects and have plenty
              of satisfied customers
            </p>
            <p>
              <Link to="projects">
                <button>Read More &raquo;</button>
              </Link>
            </p>
          </div>

          <div className="section-content">
            <div className="flex">
              <i>
                <FaCertificate />
              </i>
              <h4>Company Profile</h4>
            </div>
            <p>
              This section contains all the legal information about the comapny
            </p>
            <p>
              <Link to="/profile">
                <button>Read More &raquo;</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
