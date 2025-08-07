import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/usaid/slider/1.png';
import slide2 from '../assets/images/usaid/slider/2.png';
import slide3 from '../assets/images//usaid/slider/4.png';

const HeaderSlider = () => {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-slider">
      {slides.map((slide, index) => (
        <div className={`slide ${index === current ? 'active' : ''}`} key={index}>
          <img src={slide} alt={`slider-img-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default HeaderSlider;
