import { Link } from "react-router-dom";
import ham from "../img/ham.jpeg";
import stadium from "../img/stadium.jpeg";
import greenhill from "../img/greenhill.jpeg";
import pentecostal from "../img/pentecostal.jpeg";
import flowershop from "../img/flowershop.jpeg";
import nol from "../img/nol.jpeg";
import ham_agro from "../img/ham_agro.jpeg";
import ham_palm from "../img/ham_palm.jpeg";
const Projects = () => {
  const images = [
    {
      src: stadium,
      text: " Nakivubo Stadium",
      link: "/stadium",
    },
    {
      src: greenhill,
      text: " GreenHill Academy",
      link: "/greenhill",
    },
    {
      src: pentecostal,
      text: " Pentecostal Church",
      link: "/pentecostal",
    },
    {
      src: nol,
      text: " NOL-PJ",
      link: "/nol",
    },
    {
      src: ham,
      text: " Ham Enterprises Limited Headquarters",
      link: "/ham",
    },
    {
      src: flowershop,
      text: " Flower Shop",
      link: "/flowershop",
    },
    {
      src: ham_palm,
      text: " Ham Palm Villa",
      link: "/ham_palm",
    },
    {
      src: ham_agro,
      text: " Ham agro processing Factory",
      link: "/ham_agro",
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-flex">
          {images.map((image, index) => {
            return (
              <div className="project-item " key={index}>
                <figure>
                  <img src={image.src} alt="" />
                  <figcaption>
                    <Link to={image.link}>
                      <h3>{image.text}</h3>
                    </Link>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
