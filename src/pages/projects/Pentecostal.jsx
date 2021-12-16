import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/pentecostal/photo-1.jpeg";
import photo_2 from "../../img/pentecostal/photo-2.jpeg";
import photo_3 from "../../img/pentecostal/photo-3.jpeg";
import photo_4 from "../../img/pentecostal/photo-4.jpeg";
import photo_5 from "../../img/pentecostal/photo-5.jpeg";

const Pentecostal = () => {
  const images = [photo_3, photo_2, photo_1, photo_4, photo_5];

  return <IndividualProjects images={images} />;
};
export default Pentecostal;
