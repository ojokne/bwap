import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaCertificate,
  FaCopyright,
  FaFacebookSquare,
  FaGavel,
  FaGraduationCap,
  FaInstagramSquare,
  FaPhoneSquare,
  FaPhotoVideo,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const year = new Date();

function Footer() {
  // ** link set one
  const links = [
    {
      to: "#",
      icon: <FaCertificate />,
      text: "Profile",
    },
    {
      to: "#",
      icon: <FaGavel />,
      text: "Services",
    },
    {
      to: "#",
      icon: <FaBuilding />,
      text: "Projects",
    },
  ];

  //** link set two

  const links2 = [
    {
      to: "#",
      icon: <FaPhotoVideo />,
      text: "Gallery",
    },
    {
      to: "#",
      icon: <FaPhoneSquare />,
      text: "Contacts",
    },
    {
      to: "#",
      icon: <FaGraduationCap />,
      text: "Careers",
    },
  ];

  //** state for social icons
  const social = [
    {
      to: "#",
      icon: <FaFacebookSquare />,
    },
    {
      to: "#",
      icon: <FaTwitterSquare />,
    },
    {
      to: "#",
      icon: <FaInstagramSquare />,
    },
    {
      to: "#",
      icon: <FaYoutubeSquare />,
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="nav-footer">
            {links.map((link, index) => (
              <div key={index}>
                <Link to={link.to}>
                  <i>{link.icon}</i>
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
          <div className="nav-footer">
            {links2.map((link, index) => (
              <div key={index}>
                <Link to={link.to}>
                  <i>{link.icon}</i>
                  {link.text}
                </Link>
              </div>
            ))}
          </div>

          <div className="social-icons">
            {social.map((link, index) => (
              <Link to={link.to} key={index}>
                <i>{link.icon}</i>
              </Link>
            ))}
            <p>
              <i>
                <FaCopyright />
              </i>
              {year.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
