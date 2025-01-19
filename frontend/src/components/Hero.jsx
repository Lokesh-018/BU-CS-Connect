import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"



const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <Slider {...settings} className="w-full h-72">
          <div>
            <img
              src={c1}
              alt="Slide 1"
              className="w-full h-72 object-contain "
            />
          </div>
          <div>
            <img
              src={c2}
              alt="Slide 2"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src={c3}
              alt="Slide 3"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src={c4}
              alt="Slide 4"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 5"
              className="w-full h-72 object-contain"
            />
          </div>
        </Slider>
      </section>
    </div>
  )
}

export default Hero
