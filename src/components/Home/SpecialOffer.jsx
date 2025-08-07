<<<<<<< HEAD
import React from "react";
import specialImg1 from "@/assets/images/index/special-img1.webp";
import specialImg2 from "@/assets/images/index/special-img2.webp";

const SpecialOffer = () => {
  return (
    <section id="special">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left Offer */}
          <div className="col-md-6" data-aos="fade-down">
            <h3>Romantic Getaway for Couples</h3>
            <p>
              Enjoy a dreamy escape in Kashmir with cozy houseboat stays, shikara rides,
              and private tours—designed for two.
            </p>
            <div className="offer position-relative">
              <img src={specialImg2} alt="discount" />
              <div className="overlaytwo">
                <div className="overlay_text">
                  <h3>Discount up to 50%</h3>
                  <div className="globalBtn mt-lg-5 mt-4">
                    <ul>
                      <li>
                        <a href="/contact">
                          Book Now
                          <span></span><span></span><span></span><span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Offer */}
          <div className="col-md-6 mt-md-0 mt-4" data-aos="fade-up">
            <div className="offer position-relative">
              <img src={specialImg1} alt="discount" />
              <div className="overlaytwo">
                <div className="overlay_text">
                  <h3>Discount up to 50%</h3>
                  <div className="globalBtn mt-lg-5 mt-4">
                    <ul>
                      <li>
                        <a href="/contact">
                          Book Now
                          <span></span><span></span><span></span><span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h3>Adventure Tours in the Himalayas</h3>
            <p>
              Trek glaciers, conquer mountain peaks, and ride the Gulmarg gondola—all while saving big with our adventure deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
=======
import React from "react";
import specialImg1 from "@/assets/images/index/special-img1.webp";
import specialImg2 from "@/assets/images/index/special-img2.webp";

const SpecialOffer = () => {
  return (
    <section id="special">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left Offer */}
          <div className="col-md-6" data-aos="fade-down">
            <h3>Romantic Getaway for Couples</h3>
            <p>
              Enjoy a dreamy escape in Kashmir with cozy houseboat stays, shikara rides,
              and private tours—designed for two.
            </p>
            <div className="offer position-relative">
              <img src={specialImg2} alt="discount" />
              <div className="overlaytwo">
                <div className="overlay_text">
                  <h3>Discount up to 50%</h3>
                  <div className="globalBtn mt-lg-5 mt-4">
                    <ul>
                      <li>
                        <a href="/contact">
                          Book Now
                          <span></span><span></span><span></span><span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Offer */}
          <div className="col-md-6 mt-md-0 mt-4" data-aos="fade-up">
            <div className="offer position-relative">
              <img src={specialImg1} alt="discount" />
              <div className="overlaytwo">
                <div className="overlay_text">
                  <h3>Discount up to 50%</h3>
                  <div className="globalBtn mt-lg-5 mt-4">
                    <ul>
                      <li>
                        <a href="/contact">
                          Book Now
                          <span></span><span></span><span></span><span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h3>Adventure Tours in the Himalayas</h3>
            <p>
              Trek glaciers, conquer mountain peaks, and ride the Gulmarg gondola—all while saving big with our adventure deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
>>>>>>> 41a3005 (homepage)
