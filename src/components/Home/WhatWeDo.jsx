import React from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";

// Import image
import weDoImage from "@/assets/images/index/wedo-img.webp";

const WhatWeDo = () => {
  return (
    <section id="weDo">
      <div className="container">
        <div className="row">
          {/* Left Video Side */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="weDo-video">
              <div>
                <a className="video-play-button" href="#">
                  <span><FaPlay /></span>
                </a>
              </div>
              <figure>
                <img src={weDoImage} alt="weDo" />
              </figure>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="col-md-6 d-flex justify-content-center align-content-center">
            <div className="weDo-content d-flex flex-column justify-content-center align-items-start">
              <div data-aos="fade" data-aos-duration="2000">
                <h4>What We Do</h4>
                <h2>Exploring The World Without Limits</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>

              <div className="globalBtnActive mt-3" data-aos="fade" data-aos-duration="2000">
                <ul>
                  <li>
                    <a href="/services.html">
                      Learn More
                      <span></span><span></span><span></span><span></span>
                      <FaArrowRight className="ml-2" />
                    </a>
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

export default WhatWeDo;
