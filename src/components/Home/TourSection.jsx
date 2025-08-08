<<<<<<< HEAD
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all tour images
import tour1 from "@/assets/images/usaid/tour/gulmarg.png";
import tour2 from "@/assets/images/usaid/tour/honeymoon.png";
import tour3 from "@/assets/images/usaid/tour/aru-valley.png";
import tour4 from "@/assets/images/usaid/tour/sonamarg.png";
import tour5 from "@/assets/images/usaid/tour/ladakh.png";
import tour6 from "@/assets/images/usaid/tour/winter.png";

const tours = [
  {
    img: tour1,
    title: "Srinagar & Gulmarg Delight",
    desc: "Explore Dal Lake, Mughal Gardens, and ride Asia’s highest gondola in Gulmarg.",
  },
  {
    img: tour2,
    title: "Romantic Kashmir Honeymoon",
    desc: "Private houseboat stays, candlelight dinners, and snowy views await couples.",
  },
  {
    img: tour3,
    title: "Pahalgam & Aru Valley Escape",
    desc: "Experience river rafting, pony rides, and serene valleys in South Kashmir.",
  },
  {
    img: tour4,
    title: "Sonamarg Glacier Adventure",
    desc: "Trek through snowy trails and ride ponies to Thajiwas Glacier.",
  },
  {
    img: tour5,
    title: "Leh-Ladakh Road Expedition",
    desc: "Journey through magnetic hills, monasteries, and high-altitude passes.",
  },
  {
    img: tour6,
    title: "Winter Wonderland Tour",
    desc: "Enjoy snowfall, skiing, and frozen lakes during Kashmir’s magical winter.",
  },
];

export default function TourSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="tour">
      <div className="container">
        <div data-aos="fade" data-aos-duration="2000">
          <h4>Tour Packages</h4>
          <h2>Explore Kashmir Like Never Before</h2>
          <div className="d-flex flex-md-row flex-column gap-3 justify-content-between align-items-center mt-3">
            <div className="tourPara">
              <p>
                Whether you're looking for romance, adventure, or serenity—
                Usaid Tour & Travels has the perfect Kashmir package for you.
              </p>
            </div>
            <div className="globalBtnActive">
              <ul>
                <li>
                  <a href="#">
                    View all
                    <span></span><span></span><span></span><span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tourCards card-text mt-5">
          <div className="row gap-4">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-5 col-11"
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 400}
              >
                <div>
                  <figure>
                    <img src={tour.img} alt="tour-img" />
                  </figure>
                  <h6>{tour.title}</h6>
                  <p>{tour.desc}</p>
                  <a href="#">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all tour images
import tour1 from "@/assets/images/usaid/tour/gulmarg.png";
import tour2 from "@/assets/images/usaid/tour/honeymoon.png";
import tour3 from "@/assets/images/usaid/tour/aru-valley.png";
import tour4 from "@/assets/images/usaid/tour/sonamarg.png";
import tour5 from "@/assets/images/usaid/tour/ladakh.png";
import tour6 from "@/assets/images/usaid/tour/winter.png";

const tours = [
  {
    img: tour1,
    title: "Srinagar & Gulmarg Delight",
    desc: "Explore Dal Lake, Mughal Gardens, and ride Asia’s highest gondola in Gulmarg.",
  },
  {
    img: tour2,
    title: "Romantic Kashmir Honeymoon",
    desc: "Private houseboat stays, candlelight dinners, and snowy views await couples.",
  },
  {
    img: tour3,
    title: "Pahalgam & Aru Valley Escape",
    desc: "Experience river rafting, pony rides, and serene valleys in South Kashmir.",
  },
  {
    img: tour4,
    title: "Sonamarg Glacier Adventure",
    desc: "Trek through snowy trails and ride ponies to Thajiwas Glacier.",
  },
  {
    img: tour5,
    title: "Leh-Ladakh Road Expedition",
    desc: "Journey through magnetic hills, monasteries, and high-altitude passes.",
  },
  {
    img: tour6,
    title: "Winter Wonderland Tour",
    desc: "Enjoy snowfall, skiing, and frozen lakes during Kashmir’s magical winter.",
  },
];

export default function TourSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="tour" className="pt-0">
      <div className="container">
        <div data-aos="fade" data-aos-duration="2000">
          <h4>Tour Packages</h4>
          <h2>Explore Kashmir Like Never Before</h2>
          <div className="d-flex flex-md-row flex-column gap-3 justify-content-between align-items-center mt-3">
            <div className="tourPara">
              <p>
                Whether you're looking for romance, adventure, or serenity—
                Usaid Tour & Travels has the perfect Kashmir package for you.
              </p>
            </div>
            <div className="globalBtnActive">
              <ul>
                <li>
                  <a href="#">
                    View all
                    <span></span><span></span><span></span><span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tourCards card-text mt-5">
          <div className="row gap-4">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-5 col-11"
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 400}
              >
                <div>
                  <figure>
                    <img src={tour.img} alt="tour-img" />
                  </figure>
                  <h6>{tour.title}</h6>
                  <p>{tour.desc}</p>
                  <a href="#">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 41a3005 (homepage)
