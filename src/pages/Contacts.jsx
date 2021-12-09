import {
  FaEnvelope,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Contacts = () => {
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
            <i>
              <FaTwitterSquare />
            </i>
            <i>
              <FaInstagramSquare />
            </i>
            <i>
              <FaWhatsappSquare />
            </i>
            <i>
              <FaYoutubeSquare />
            </i>
            <i>
              <FaEnvelope />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
