import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaCertificate,
  FaCopyright,
  FaEnvelope,
  FaFacebookSquare,
  FaGavel,
  FaGraduationCap,
  FaHome,
  FaInstagramSquare,
  FaPhone,
  FaPhoneSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const year = new Date();

function Footer() {
  // ** link set one
  const links = [
    {
      to: "/",
      icon: <FaHome />,
      text: "Home",
    },
    {
      to: "/profile",
      icon: <FaCertificate />,
      text: "Profile",
    },
    {
      to: "/services",
      icon: <FaGavel />,
      text: "Services",
    },
  ];

  //** link set two

  const links2 = [
    {
      to: "/projects",
      icon: <FaBuilding />,
      text: "Projects",
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

  //** state for social icons
  const social = [
    {
      to: "https://www.instagram.com/invites/contact/?i=1fyzxubcrc0nk&utm_content=m9u9fte",
      icon: <FaFacebookSquare />,
    },
    {
      to: "https://twitter.com/Bwap16?s=09",
      icon: <FaTwitterSquare />,
    },
    {
      to: "https://www.instagram.com/invites/contact/?i=1fyzxubcrc0nk&utm_content=m9u9fte",
      icon: <FaInstagramSquare />,
    },
    {
      to: "https://wa.me/256778384850",
      icon: <FaWhatsappSquare />,
    },
    {
      to: "mailto: bwap.ltd@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      to: "tel:0778384850",
      icon: <FaPhone />,
    },
    {
      to: "https://www.youtube.com/channel/UCWQkk8qRWQzlnnsA_Zuw27g",
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
              <a href={link.to} key={index}>
                <i>{link.icon}</i>
              </a>
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
