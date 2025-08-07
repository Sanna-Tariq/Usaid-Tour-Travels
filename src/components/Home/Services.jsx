<<<<<<< HEAD
import React from "react";

// Import images
import serviceIcon1 from "@/assets/images/icon/services-1.svg";
import serviceIcon2 from "@/assets/images/icon/services-2.svg";
import serviceIcon3 from "@/assets/images/icon/services-3.svg";
import serviceImg1 from "@/assets/images/usaid/2.png";
import serviceImg2 from "@/assets/images/index/services-img2.webp";

const Services = () => {
  const features = [
    {
      icon: serviceIcon1,
      title: "Custom Destinations",
    },
    {
      icon: serviceIcon3,
      title: "Unforgettable Moments",
    },
    {
      icon: serviceIcon2,
      title: "Competitive Pricing",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          {/* Text Column */}
          <div className="col-md-7">
            <div data-aos="fade" data-aos-duration="2000">
              <h4>Our Services</h4>
              <h2>Join The Adventure With Stories</h2>
              <p>
                We specialize in Kashmir travel experiences—offering custom itineraries,
                trusted local guidance, and unforgettable adventures. Your journey starts here.
              </p>

              <div className="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                {features.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div>
                      <figure>
                        <img src={item.icon} alt="servicesIcon" />
                      </figure>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>

              <div className="globalBtnActive d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                <ul>
                  <li>
                    <a href="#">
                      See all services
                      <span></span><span></span><span></span><span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div
            className="col-md-5 mt-md-0 mt-5"
            data-aos="fade-up"
            data-aos-easing="ease-in-out-quad"
          >
            <div>
              <figure>
                <img src={serviceImg1} alt="service-img" />
              </figure>
              <figure>
                <img src={serviceImg2} alt="ser-Camera" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
=======
import React from "react";

// Import images
import serviceIcon1 from "@/assets/images/icon/services-1.svg";
import serviceIcon2 from "@/assets/images/icon/services-2.svg";
import serviceIcon3 from "@/assets/images/icon/services-3.svg";
import serviceImg1 from "@/assets/images/usaid/2.png";
import serviceImg2 from "@/assets/images/index/services-img2.webp";

const Services = () => {
  const features = [
    {
      icon: serviceIcon1,
      title: "Custom Destinations",
    },
    {
      icon: serviceIcon3,
      title: "Unforgettable Moments",
    },
    {
      icon: serviceIcon2,
      title: "Competitive Pricing",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          {/* Text Column */}
          <div className="col-md-7">
            <div data-aos="fade" data-aos-duration="2000">
              <h4>Our Services</h4>
              <h2>Join The Adventure With Stories</h2>
              <p>
                We specialize in Kashmir travel experiences—offering custom itineraries,
                trusted local guidance, and unforgettable adventures. Your journey starts here.
              </p>

              <div className="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                {features.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div>
                      <figure>
                        <img src={item.icon} alt="servicesIcon" />
                      </figure>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>

              <div className="globalBtnActive d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                <ul>
                  <li>
                    <a href="#">
                      See all services
                      <span></span><span></span><span></span><span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div
            className="col-md-5 mt-md-0 mt-5"
            data-aos="fade-up"
            data-aos-easing="ease-in-out-quad"
          >
            <div>
              <figure>
                <img src={serviceImg1} alt="service-img" />
              </figure>
              <figure>
                <img src={serviceImg2} alt="ser-Camera" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
>>>>>>> 41a3005 (homepage)
