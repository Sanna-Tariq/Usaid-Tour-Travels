import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-12 text-center">
            <div>
              <h1>EXPLORE</h1>
              <h1>KASHMIR</h1>
              <p>With Usaid Tour & Travels, discover the paradise of valleys, lakes, and snow-capped peaks.</p>
              <div className="globalBtn mt-4 d-md-inline-block d-none">
                <ul>
                  <li>
                    <a href="#">Discover Now<span></span><span></span><span></span><span></span></a>
                  </li>
                </ul>
              </div>
              <div className="globalBtnActive mt-4 d-inline-block d-md-none">
                <ul>
                  <li>
                    <a href="https://www.jammukashmircablecar.com/" target="_blank" >Book Gondola <span></span><span></span><span></span><span></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
