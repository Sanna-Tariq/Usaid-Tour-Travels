// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router
import logo from '@/assets/images/usaid/white-logo.svg'; // adjust based on your setup
import WeatherWidget from '../components/WeatherWidget';

const Footer = () => {
  return (

    <footer>
      <div className="d-flex flex-column justify-content-center gap-2 position-fixed align-items-center " style={{ right: '10px',bottom:'20px', zIndex:'999'}}>
        <WeatherWidget/>
        <a href="https://api.whatsapp.com/send/?phone=%2B919797741642&text&type=phone_number&app_absent=0" className='bg-success p-3 rounded-circle d-flex align-items-center' target="_blank"><span className="fab fa-whatsapp fs-4 text-white"></span></a>
        <a href="tel:+918082183734" className='bg-primary p-3 rounded-circle d-flex align-items-center '><span className="fa fa-phone text-white"></span></a>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-sm-6 d-md-block d-none">
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/destinations">Destination</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>

    {/* Contact Info */}
<div className="col-lg-4 col-md-4 col-sm-6">
  <div>
    <h4>Contact Info</h4>
    <div className="address text-start">
      <div>
        <i className="fa-solid fa-house"></i>
        <p className="pl-0">Head office: Chandilora Tangmarg Gulmarg Road kashmir</p>
      </div>
      <div>
        <i className="fa-solid fa-envelope"></i>
        <p className="pl-0">
          <a href="mailto: sales@usaidtourtravels.com"> sales@usaidtourtravels.com </a>
          <a href="mailto: reservations.usaidtourandtravels@outlook.com" className='text-break'> reservations.usaidtourandtravels@outlook.com </a>
        </p>
      </div>
      <div>
        <i className="fa-solid fa-phone"></i>
        <p className="pl-0 ">
          <a href="tel:+919797741642" className='pe-2'>+91 9797741642,</a> 
          <a href="tel:+918082183734">+91 8082183734</a>
        </p>
      </div>
    </div>

    {/* CEO Info */}
    <div className="mt-3">
      <div className="d-flex align-items-center text-light mb-2 ms-5" style={{ fontSize: '0.9rem' }}>
        <i className="fa-solid fa-user-tie me-2 text-primary"></i>
        <span className="fst-italic">Resh Younis  </span> 
      </div>
        <span className="fst-italic text-white ms-5"> — CEO, Usaid Tour & Travels</span>
    </div>
  </div>
</div>


          {/* Reservation Section */}
          <div className="col-md-4">
            <div className="reservation">
              <h4>Make A Reservation</h4>
              <p>
                Our Support & Sales team is available 24/7 to answer your queries
              </p>
              <div className="globalBtn justify-content-start mt-lg-4 mt-4">
                <ul>
                  <li>
                    <Link to="#">
                      Book Now

                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          {/* Sub Footer */}
          <div className="row sub-footer justify-content-between align-items-center">
            <div className="col-md-5">
              <figure>
                <Link to="/">
                  <img src={logo} alt="footerLogo" />
                </Link>
              </figure>
            </div>
            <div className="col-md-7">
              <div>
                <p>
                  © 2025 Usaid Tour & Travels. Designed & Developed by <a href="http://rationaltabs.com" target="_blank" rel="noopener noreferrer">Rationaltabs Technologies.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
