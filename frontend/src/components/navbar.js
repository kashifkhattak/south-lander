import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import MobileNavbar from "./mobilenavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Clicked");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const collapseMenuIfNeeded = () => {
    if (window.innerWidth < 990 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", collapseMenuIfNeeded);

    return () => {
      window.removeEventListener("resize", collapseMenuIfNeeded);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-logo">
          <img src={logo} alt=""></img>
        </div>
        <div className={"navbar-routes"}>
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
          <a href="#" onClick={toggleMobileMenu}>
            <IconContext.Provider value={{ size: "2em" }}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </IconContext.Provider>
          </a>
        </div>
        <MobileNavbar
          isOpen={isMobileMenuOpen}
          toggleMenu={toggleMobileMenu}
        ></MobileNavbar>
      </nav>
    </>
  );
};

export default Navbar;
