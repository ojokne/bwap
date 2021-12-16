import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/ham/photo_1.jpeg";
import photo_2 from "../../img/ham/photo_2.jpeg";
import photo_3 from "../../img/ham/photo_3.jpg";
import photo_4 from "../../img/ham/photo_4.jpeg";
import photo_5 from "../../img/ham/photo_5.jpg";
import photo_6 from "../../img/ham/photo_6.jpg";

const Ham = () => {
  const images = [photo_1, photo_3, photo_2, photo_4, photo_5, photo_6];

  return <IndividualProjects images={images} />;
};
export default Ham;
