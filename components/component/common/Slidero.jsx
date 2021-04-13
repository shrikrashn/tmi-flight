import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slidero({settings=default_settings, children}) {
    return (
        <>
            <Slider {...settings}>
            {children}
            </Slider>
        </>
    )
}
const default_settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:1,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  
  };