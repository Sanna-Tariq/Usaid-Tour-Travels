// src/components/DestinationsSection.jsx
import React from 'react';
import team1 from '@/assets/images/usaid/destination/gulmarg.png'; // Use destination image
import team2 from '@/assets/images/usaid/destination/pahalgam.png'; // Use destination image
import team3 from '@/assets/images/usaid/destination/sonamarg.png'; // Use destination image

const destinationsData = [
  {
    img: team1,
    name: 'Gulmarg',
    role: 'Ski Resort & Snow Paradise',
    delay: 100,
  },
  {
    img: team2,
    name: 'Pahalgam',
    role: 'Valley of Shepherds & Adventure Base',
    delay: 500,
  },
  {
    img: team3,
    name: 'Sonamarg',
    role: 'Golden Meadows & Glacier Views',
    delay: 900,
  },
];

export default function DestinationsSection() {
  return (
    <section id="team">
      <div className="container">
        <div data-aos="fade" data-aos-duration="2000">
          <h4>Top Destinations</h4>
          <h2>Explore Kashmir with Usaid Tour & Travels</h2>
        </div>
        <div className="row justify-content-md-between justify-content-center gap-md-0 gap-4">
          {destinationsData.map((place, index) => (
            <div
              className="col-md-4 col-sm-8 col-10"
              data-aos="fade-up"
              data-aos-delay={place.delay}
              key={index}
            >
              <div className="teamCard">
                <img src={place.img} alt={place.name} />
                {/* <div className="overlaythree">
                  <div className="overlay_text">
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div>
                <h6>{place.name}</h6>
                <p>{place.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
