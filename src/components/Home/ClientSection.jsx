<<<<<<< HEAD
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "@/assets/images/usaid/client/1.png";
import logo3 from "@/assets/images/usaid/client/1.png";
import logo4 from "@/assets/images/usaid/client/1.png";
import logo5 from "@/assets/images/usaid/client/1.png";

const LogoipsumSlider = () => {
    const settings = {
      dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
        autoplaySpeed: 0,
     arrows: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3,  slidesToScroll: 1,} },
      { breakpoint: 768, settings: { slidesToShow: 2,  slidesToScroll: 2,} },
      { breakpoint: 576, settings: { slidesToShow: 1,  slidesToScroll: 2, }},
    ],
  };

  const logos = [logo1, logo3, logo4, logo5, logo4, logo3];

  return (
    <div className="container my-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="d-flex align-items-center justify-content-between">
            <figure className="text-center">
              <img src={logo} alt={`logo-${index}`} />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoipsumSlider;
=======
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "@/assets/images/usaid/client/hilltop.png";
import logo2 from "@/assets/images/usaid/client/grand-mumtaz.png";
import logo3 from "@/assets/images/usaid/client/khyber.png";
import logo4 from "@/assets/images/usaid/client/rosewood.png";
import logo5 from "@/assets/images/usaid/client/vintage.png";

const LogoipsumSlider = () => {
    const settings = {
      dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
        autoplaySpeed: 0,
     arrows: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3,  slidesToScroll: 2,} },
      { breakpoint: 768, settings: { slidesToShow: 2,  slidesToScroll: 2,} },
      { breakpoint: 576, settings: { slidesToShow: 2,  slidesToScroll: 1, }},
    ],
  };

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
        <div id="clients">
    <div className="container my-5 ">
       <div data-aos="fade" data-aos-duration="2000" className="mb-5">
            <h4>Hotels</h4>
            <h2>We Deal With</h2>
          </div>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="d-flex align-items-center justify-content-between">
            <figure className="text-center">
              <img src={logo} alt={`logo-${index}`} />
            </figure>
          </div>
        ))}
      </Slider>
    </div></div>
  );
};

export default LogoipsumSlider;
>>>>>>> 41a3005 (homepage)
