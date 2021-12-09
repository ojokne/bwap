import ham from "../img/ham.jpeg";
import stadium from "../img/stadium.jpeg";
import greenhill from "../img/stadium.jpeg";
import pentecostal from "../img/pentecostal.jpeg";
import flowershop from "../img/flowershop.jpeg";
import nol from "../img/nol.jpeg";
const Projects = () => {
  const images = [
    {
      src: stadium,
      text: " Nakivubo Stadium",
    },
    {
      src: greenhill,
      text: " GreenHill Academy",
    },
    {
      src: pentecostal,
      text: " Pentecostal Church",
    },
    {
      src: nol,
      text: " NOL-PJ",
    },
    {
      src: ham,
      text: " Ham's residence",
    },
    {
      src: flowershop,
      text: " Flower Shop",
    },
  ];
  
  return (
    <div className="projects">
      <div className="container">
        <div className="projects-flex">
          {images.map((image, index) => {
            return (
              <div className="project-item" key={index}>
                <figure>
                  <img src={image.src} alt="" />
                  <figcaption>
                    <h3>{image.text}</h3>
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
