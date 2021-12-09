import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBuilding,
  FaCertificate,
  FaGavel,
  FaGraduationCap,
  FaHome,
  FaPhoneSquare,
  FaPhotoVideo,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const showMenu = () => {
    setMenu(!menu);
  };
  const mainNav = [
    {
      to: "/",
      icon: <FaHome />,
      text: "Home",
    },
    { to: "/profile", icon: <FaCertificate />, text: "Profile" },
    {
      to: "/services",
      icon: <FaGavel />,
      text: "Services",
    },
    {
      to: "#",
      icon: <FaBuilding />,
      text: "Projects",
    },
    {
      to: "#",
      icon: <FaPhotoVideo />,
      text: "Gallery",
    },
    {
      to: "/contacts",
      icon: <FaPhoneSquare />,
      text: "Contacts",
    },
    {
      to: "/careers",
      icon: <FaGraduationCap />,
      text: "Careers",
    },
  ];
  const [menu, setMenu] = useState(true);

  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          <div className="hide-on-small">
            <div className="nav-header">
              {mainNav.map((link, index) => (
                <div key={index}>
                  <Link to={link.to}>
                    <i>{link.icon}</i>
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hide-on-big">
          <div className="mobile-nav">
            <i className="menu-icon" onClick={showMenu}>
              {menu ? <FaBars /> : <FaTimes />}
            </i>
            {!menu && (
              <div className="menu">
                {mainNav.map((link, index) => (
                  <div key={index}>
                    <Link to={link.to} className="mobile-menu-grid" onClick={showMenu}>
                      <i>{link.icon}</i>
                      {link.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="slogan">
          <h1>Bwap construction Company limited</h1>
          <p>From concept to creation, build with architectural plans</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
