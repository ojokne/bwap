import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/flowershop/photo-1.jpeg";
import photo_2 from "../../img/flowershop/photo-2.jpeg";
import photo_3 from "../../img/flowershop/photo-3.jpeg";
import photo_4 from "../../img/flowershop/photo-4.jpeg";

const Flowershop = () => {
  const images = [photo_2, photo_3, photo_1, photo_4];

  return <IndividualProjects images={images} />;
};
export default Flowershop;
