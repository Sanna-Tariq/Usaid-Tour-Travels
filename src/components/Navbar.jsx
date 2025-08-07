import React from 'react';
import logo from '../assets/images/usaid/logo.svg';
import sidebarLogo from '../assets/images/sidebarLogo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar container navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand position-relative p-0" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler" id="sidebarEvent" type="button">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mx-4 d-flex gap-4 justify-content-center align-items-center">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Tour Packages</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Destinations</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>

            </ul>

            <div className="globalBtn">
              <ul>
                <li>
                  <a href="#">Book Now<span></span><span></span><span></span><span></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr />
      <aside>
        <div className="sidebar">
          <div className="d-flex justify-content-between align-items-center">
            <a href="/"><img src={sidebarLogo} alt="logo" /></a>
            <button type="button" id="closeBtn" className="btn-close"></button>
          </div>
          <ul className="nav-links text-lg-start">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="more">
            <a href="#">Pages</a>
            <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample">
              <i className="fa-solid fa-plus"></i>
            </a>
          </div>
          <div className="collapse mt-2" id="collapseExample">
            <div className="card card-body">
              <a href="/services">Services</a>
              <a href="/destinations">Destinations</a>
              <a href="/testimonials">Testimonials</a>
              <a href="/faq">FAQ</a>
              <a href="/team">Team</a>
              <a href="/404">404</a>
              <a href="/comingsoon">Coming Soon</a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
