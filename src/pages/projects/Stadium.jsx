import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/stadium/photo-1.jpeg";
import photo_2 from "../../img/stadium/photo-2.jpeg";
import photo_3 from "../../img/stadium/photo-3.jpeg";
import photo_4 from "../../img/stadium/photo-4.jpeg";

const Stadium = () => {
  const images = [photo_1, photo_2, photo_3, photo_4];

  return <IndividualProjects images={images} />;
};
export default Stadium;
