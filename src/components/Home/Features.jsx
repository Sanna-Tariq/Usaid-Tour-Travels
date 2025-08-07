// src/components/Features.jsx
import React, { useEffect } from "react";
import feature1 from "@/assets/images/icon/feature-1.svg";
import feature2 from "@/assets/images/icon/feature-2.svg";
import feature3 from "@/assets/images/icon/feature-3.svg";
import feature4 from "@/assets/images/icon/feature-4.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <section id="features">
      <div className="container card-text">
        <div className="row">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div>
              <figure><img src={feature1} alt="Local Expertise" /></figure>
              <h6>Local Expertise</h6>
              <p>Authentic experiences guided by local travel experts from Kashmir.</p>
            </div>
          </div>
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="500">
            <div>
              <figure><img src={feature2} alt="Custom Tour Packages" /></figure>
              <h6>Custom Tour Packages</h6>
              <p>Get tailor-made itineraries suited to your interests.</p>
            </div>
          </div>
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="900">
            <div>
              <figure><img src={feature3} alt="Beautiful Memories" /></figure>
              <h6>Beautiful Memories</h6>
              <p>Capture the magic of Kashmir with curated photo spots.</p>
            </div>
          </div>
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="1300">
            <div>
              <figure><img src={feature4} alt="Affordable Pricing" /></figure>
              <h6>Affordable Pricing</h6>
              <p>Enjoy premium services — best value guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
