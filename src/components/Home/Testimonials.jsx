<<<<<<< HEAD
import React from "react";
import testimonial1 from "@/assets/images/index/testimonials-1.webp";
import testimonial2 from "@/assets/images/index/testimonials-2.webp";
import testimonial3 from "@/assets/images/index/testimonials-3.webp";

const testimonialsData = [
  {
    img: testimonial1,
    name: "Raisa Barker",
    role: "Tourist",
    text: "Usaid Tour & Travels planned our Kashmir trip flawlessly. Every destination felt magical and safe.",
    delay: 100,
  },
  {
    img: testimonial2,
    name: "Terrence Baker",
    role: "Tourist",
    text: "From houseboats to snow peaks, their guides made every moment memorable. Highly recommended!",
    delay: 500,
  },
  {
    img: testimonial3,
    name: "Xiong Lee",
    role: "Tourist",
    text: "Warm hospitality, perfect planning, and stunning views—Kashmir felt like a dream with them.",
    delay: 900,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row card-text justify-content-md-between justify-content-center gap-md-0 gap-3">
          <div data-aos="fade" data-aos-duration="2000">
            <h4>Testimonials</h4>
            <h2>We're All About Your Satisfaction</h2>
          </div>

          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="col-md-4 col-sm-8 col-11"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img src={item.img} alt="testimonialsImg" />
                </figure>
                <h6>{item.name}</h6>
                <p>{item.role}</p>
                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                  {[...Array(5)].map((_, starIdx) => (
                    <i key={starIdx} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
=======
import React from "react";
import testimonial1 from "@/assets/images/index/testimonials-1.webp";
import testimonial2 from "@/assets/images/index/testimonials-2.webp";
import testimonial3 from "@/assets/images/index/testimonials-3.webp";

const testimonialsData = [
  {
    img: testimonial1,
    name: "Raisa Barker",
    role: "Tourist",
    text: "Usaid Tour & Travels planned our Kashmir trip flawlessly. Every destination felt magical and safe.",
    delay: 100,
  },
  {
    img: testimonial2,
    name: "Terrence Baker",
    role: "Tourist",
    text: "From houseboats to snow peaks, their guides made every moment memorable. Highly recommended!",
    delay: 500,
  },
  {
    img: testimonial3,
    name: "Xiong Lee",
    role: "Tourist",
    text: "Warm hospitality, perfect planning, and stunning views—Kashmir felt like a dream with them.",
    delay: 900,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row card-text justify-content-md-between justify-content-center gap-md-0 gap-3">
          <div data-aos="fade" data-aos-duration="2000">
            <h4>Testimonials</h4>
            <h2>We're All About Your Satisfaction</h2>
          </div>

          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="col-md-4 col-sm-8 col-11"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img src={item.img} alt="testimonialsImg" />
                </figure>
                <h6>{item.name}</h6>
                <p>{item.role}</p>
                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                  {[...Array(5)].map((_, starIdx) => (
                    <i key={starIdx} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
>>>>>>> 41a3005 (homepage)
