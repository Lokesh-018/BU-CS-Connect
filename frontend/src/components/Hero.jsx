import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
              src="https://via.placeholder.com/1920x288"
              alt="Slide 1"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 2"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 3"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
              alt="Slide 4"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1920x288"
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
