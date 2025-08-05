import React from 'react';
import HeaderSlider from './HeaderSlider';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Header = () => {
    return (
  <>
      <HeaderSlider />
    <div className="overlay">
      <div className="header-content">
        <Navbar />
        <HeroSection />
      </div>
    </div></>
  );
};

export default Header;
