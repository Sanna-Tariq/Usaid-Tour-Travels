// src/components/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "@/assets/images/usaid/about.png";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section id="about">
      <div className="blueBg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-9">
            <form
              id="about-form"
              className="d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center"
              data-aos="fade-down"
            >
              <div id="about-message"></div>
              <div>
                <h6>Name</h6>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div>
                <h6>Destination</h6>
                <select name="country" id="destination" defaultValue="">
                  <option value="" disabled>Destination</option>
                  <option value="srinagar">Srinagar</option>
                  <option value="gulmarg">Gulmarg</option>
                  <option value="pahalgam">Pahalgam</option>
                  <option value="sonamarg">Sonamarg</option>
                  <option value="leh-ladakh">Leh-Ladakh</option>
                </select>
              </div>
              <div>
                <h6>Tour Days</h6>
                <input type="date" name="tour-days" required />
              </div>
              <div className="globalBtn">
                <ul>
                  <li>
                    <button type="submit">
                      Book Now
                      <span></span><span></span><span></span><span></span>
                    </button>
                  </li>
                </ul>
              </div>
            </form>

            <div className="col-lg-10 col-md-9" data-aos="fade-up">
              <div>
                <h4>About Us</h4>
                <h2>Discover Kashmir With Local Experts You Can Trust</h2>
                <p>
                  Usaid Tour & Travels is a Srinagar-based travel agency committed to providing unforgettable experiences across Kashmir. With a team of local experts, we specialize in crafting personalized tours that showcase the natural beauty, culture, and hospitality of the valley.
                </p>
                <p>
                  From romantic shikara rides to thrilling snow adventures, our goal is to make every journey smooth, safe, and memorable. We pride ourselves on transparency, local insights, and 15+ years of dedicated service to travelers from all over the world.
                </p>
                <div className="globalBtnActive justify-content-md-start justify-content-center mt-4">
                  <ul>
                    <li>
                      <a href="#">
                        Learn More
                        <span></span><span></span><span></span><span></span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-9 col-12 about-Image">
            <div className="aboutImg position-relative" data-aos="fade-up">
              <figure>
                <img src={aboutImg} alt="about section" />
              </figure>
              <div className="customer d-flex flex-column justify-content-between align-items-center">
                <div className="d-flex">
                  <h2 className="count">250</h2>
                  <h2>+</h2>
                </div>
                <p>Happy Customers</p>
              </div>
              <div className="experience d-flex flex-column justify-content-between align-items-center">
                <div className="d-flex">
                  <h2 className="count">15</h2>
                  <h2>+</h2>
                </div>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
