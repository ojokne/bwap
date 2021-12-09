import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhone,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Contacts = () => {
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
  ];
  return (
    <div className="contacts">
      <div className="container">
        <div className="contact-item">
          <p>
            We like to have a connection with our clients through different
            platforms
          </p>
          <h2>Get in touch with us</h2>
          <div className="contact-flex">
          {social.map((link, index) => (
              <a href={link.to} key={index}>
                <i>{link.icon}</i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
