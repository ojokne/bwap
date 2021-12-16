import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/maple/photo-1.jpg";
import photo_2 from "../../img/maple/photo-2.jpg";
import photo_3 from "../../img/maple/photo-3.jpg";
import photo_4 from "../../img/maple/photo-4.jpg";
import photo_5 from "../../img/maple/photo-5.jpg";
import photo_6 from "../../img/maple/photo-6.jpg";

const Maple = () => {
  const images = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];

  return <IndividualProjects images={images} />;
};
export default Maple;
