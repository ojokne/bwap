import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/nol/photo-1.jpeg";
import photo_2 from "../../img/nol/photo-2.jpeg";
import photo_3 from "../../img/nol/photo-3.jpeg";
import photo_4 from "../../img/nol/photo-4.jpeg";

const Nol = () => {
  const images = [photo_2, photo_3, photo_1, photo_4];

  return <IndividualProjects images={images} />;
};
export default Nol;
