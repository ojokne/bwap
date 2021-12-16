const IndividualProjects = ({ images }) => {
  return (
    <div className="individual-projects">
      <div className="container">
        <div className="projects-flex">
          {images.map((image, index) => {
            return (
              <div className="project-item " key={index}>
                <figure>
                  <img src={image} alt="" />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default IndividualProjects;
