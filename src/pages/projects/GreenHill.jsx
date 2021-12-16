import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/greenhill/photo-1.jpeg";
import photo_2 from "../../img/greenhill/photo-2.jpeg";
import photo_3 from "../../img/greenhill/photo-3.jpeg";

const GreenHill = () => {
  const images = [photo_3, photo_2, photo_1];

  return <IndividualProjects images={images} />;
};
export default GreenHill;
