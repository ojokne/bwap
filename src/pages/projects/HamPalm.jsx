import IndividualProjects from "../../components/IndividualProjects";
import photo_1 from "../../img/ham_palm/photo-1.jpeg";
import photo_2 from "../../img/ham_palm/photo-2.jpeg";
import photo_3 from "../../img/ham_palm/photo-3.jpeg";
import photo_4 from "../../img/ham_palm/photo-4.jpeg";
import photo_5 from "../../img/ham_palm/photo-5.jpeg";
import photo_6 from "../../img/ham_palm/photo-6.jpeg";
import photo_7 from "../../img/ham_palm/photo-7.jpeg";
import photo_8 from "../../img/ham_palm/photo-8.jpeg";

const HamPalm = () => {
  const images = [
    photo_1,
    photo_2,
    photo_3,
    photo_4,
    photo_5,
    photo_6,
    photo_7,
    photo_8,
  ];

  return <IndividualProjects images={images} />;
};
export default HamPalm;
