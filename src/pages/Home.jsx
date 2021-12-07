import { FaBuilding, FaGavel, FaPhotoVideo } from "react-icons/fa";
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
              <Link to="#">
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
              <Link to="#">
                <button>Read More &raquo;</button>
              </Link>
            </p>
          </div>

          <div className="section-content">
            <div className="flex">
              <i>
                <FaPhotoVideo />
              </i>
              <h4>Gallery</h4>
            </div>
            <p>
              Check out our gallery container quality images from our completed
              and on going projects
            </p>
            <p>
              <Link to="#">
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
