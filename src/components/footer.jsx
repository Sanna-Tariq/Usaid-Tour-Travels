// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router
import logo from '@/assets/images/usaid/white-logo.png'; // adjust based on your setup

const Footer = () => {
  return (

    <footer>
      <div className="container">
        <div className="row justify-content-between">
          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-sm-6">
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
              <div className="address">
                <div>
                  <i className="fa-solid fa-house"></i>
                  <p>Head office: Chandilora Tangmarg Gulmarg Road kashmir</p>
                </div>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <p>
                    <a href="mailto: sales@usaidtourtravels.com"> sales@usaidtourtravels.com </a>
                    <a href="mailto: reservations.usaidtourandtravels@outlook.com"> reservations.usaidtourandtravels@outlook.com </a>
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-phone"></i>
                  <p> <a href="tel:+919797741642">+919797741642</a>,
                  <a href="tel:+918082183734">+918082183734</a></p>
                </div>
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
                      <span></span><span></span><span></span><span></span>
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
