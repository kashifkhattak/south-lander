import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <>
      <nav className="navbar-main"> 
        <div className="navbar-logo">
          <img src={logo} alt=""></img>
        </div>
        <div className={showNavMenu ? "navbar-routes-mobile" : "navbar-routes"}>
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>Accomodation</li>
            <li>Event Planning</li>
            <li>Rentals</li>
            <li>Tours</li>
            <li>Event Tickets</li>
            <li>Book Now</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="navbar-hamburger">
          <a href="#" onClick={() => setShowNavMenu(!showNavMenu)}>
            <IconContext.Provider value={{ size: "2em" }}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </IconContext.Provider>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
