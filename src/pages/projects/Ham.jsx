import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/ham/photo_1.jpeg";
import photo_2 from "../../img/ham/photo_2.jpeg";
import photo_3 from "../../img/ham/photo_3.jpeg";
import photo_4 from "../../img/ham/photo_4.jpeg";

const Ham = () => {
  const images = [photo_1, photo_3, photo_2, photo_4];

  return <IndividualProjects images={images} />;
};
export default Ham;
