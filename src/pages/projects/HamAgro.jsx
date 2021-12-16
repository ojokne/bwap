import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/ham_agro/photo-1.jpeg";
import photo_2 from "../../img/ham_agro/photo-2.jpeg";

const HamAgro = () => {
  const images = [photo_1, photo_2];

  return <IndividualProjects images={images} />;
};
export default HamAgro;
