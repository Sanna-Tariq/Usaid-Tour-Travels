<<<<<<< HEAD
import React from "react";
import choose1 from "@/assets/images/icon/choose-1.svg";
import choose2 from "@/assets/images/icon/choose-2.svg";
import choose3 from "@/assets/images/icon/choose-3.svg";
import choose4 from "@/assets/images/icon/choose-4.svg";

const WhyChooseUs = () => {
  const cards = [
    {
      img: choose1,
      title: "Customized Kashmir Packages",
      desc: "We offer personalized itineraries to suit your travel style, budget, and time.",
    },
    {
      img: choose2,
      title: "Local Expertise",
      desc: "As Kashmir locals, we know hidden gems and ensure safe, authentic experiences.",
    },
    {
      img: choose3,
      title: "Adventure & Nature Tours",
      desc: "From snow treks to river rafting, explore the wild side of Kashmir with us.",
    },
    {
      img: choose4,
      title: "Beautiful Travel Photography",
      desc: "Capture unforgettable memories with scenic backdrops and professional shots.",
      hideOnSmall: true,
    },
  ];

  return (
    <section id="choose">
      <div className="chooseBg">
        <div className="position-relative z-2" data-aos="fade" data-aos-duration="2000">
          <h4>Why choose us</h4>
          <h2>Let Us Show You The Beauty Of Kashmir</h2>
          <div className="globalBtn mt-lg-5 mt-md-5">
            <ul>
              <li>
                <a href="/contact.html">
                  Contact us
                  <span></span><span></span><span></span><span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="chooseCrads position-relative z-2">
        <div className="container">
          <div className="row gap-md-0 gap-4 justify-content-center card-text">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`col-lg-3 col-md-4 ${card.hideOnSmall ? "d-lg-block d-none" : ""}`}
                data-aos="fade-up"
                data-aos-delay={100 + index * 400}
              >
                <div>
                  <figure><img src={card.img} alt="chooseIcon" /></figure>
                  <h6>{card.title}</h6>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
=======
import React from "react";
import choose1 from "@/assets/images/icon/choose-1.svg";
import choose2 from "@/assets/images/icon/choose-2.svg";
import choose3 from "@/assets/images/icon/choose-3.svg";
import choose4 from "@/assets/images/icon/choose-4.svg";

const WhyChooseUs = () => {
  const cards = [
    {
      img: choose1,
      title: "Customized Kashmir Packages",
      desc: "We offer personalized itineraries to suit your travel style, budget, and time.",
    },
    {
      img: choose2,
      title: "Local Expertise",
      desc: "As Kashmir locals, we know hidden gems and ensure safe, authentic experiences.",
    },
    {
      img: choose3,
      title: "Adventure & Nature Tours",
      desc: "From snow treks to river rafting, explore the wild side of Kashmir with us.",
    },
    {
      img: choose4,
      title: "Beautiful Travel Photography",
      desc: "Capture unforgettable memories with scenic backdrops and professional shots.",
      hideOnSmall: true,
    },
  ];

  return (
    <section id="choose">
      <div className="chooseBg">
        <div className="position-relative z-2" data-aos="fade" data-aos-duration="2000">
          <h4>Why choose us</h4>
          <h2>Let Us Show You The Beauty Of Kashmir</h2>
          <div className="globalBtn mt-lg-5 mt-md-5">
            <ul>
              <li>
                <a href="/contact.html">
                  Contact us
                  <span></span><span></span><span></span><span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="chooseCrads position-relative z-2">
        <div className="container">
          <div className="row gap-md-0 gap-4 justify-content-center card-text">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`col-lg-3 col-md-4 ${card.hideOnSmall ? "d-lg-block d-none" : ""}`}
                data-aos="fade-up"
                data-aos-delay={100 + index * 400}
              >
                <div>
                  <figure><img src={card.img} alt="chooseIcon" /></figure>
                  <h6>{card.title}</h6>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
>>>>>>> 41a3005 (homepage)
