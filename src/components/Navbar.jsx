import React from "react";
import logo from "../assets/images/usaid/logo.svg";
import sidebarLogo from "../assets/images/sidebarLogo.png";
import WeatherWidget from "./WeatherWidget";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">


          {/* Logo */}
          <a className="navbar-brand p-0" href="/">
            <img src={logo} alt="logo" className="h-75"/>
          </a>

  {/* Weather Widget on desktop */}
          {/* <div className="d-block d-lg-none ms-3">
            <WeatherWidget />
          </div> */}

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mx-4 d-flex gap-4 align-items-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tour Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li>
                <div className="globalBtnActive">
                  <ul>
                    <li>

                  <a href="https://www.jammukashmircablecar.com/" target="_blank" >Book Gondola <span></span><span></span><span></span><span></span></a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Weather Widget on desktop */}
          {/* <div className="d-none d-lg-block ms-3 ">
            <WeatherWidget />
          </div> */}
        </div>
      </nav>

      <hr />
    </header>
  );
};

export default Navbar;
