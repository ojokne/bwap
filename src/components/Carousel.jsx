import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from './photo-4.jpeg'
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='carousel'>
      <Slider {...settings}>
        <div className='item'>
          <img src={logo} alt="" />
        </div>
        <div className='item'>
          <h3>2</h3>
        </div>
        <div className='item'>
          <h3>3</h3>
        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
