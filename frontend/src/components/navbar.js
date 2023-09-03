import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import MobileNavbar from "./mobilenavbar";
import Submenu from "./submenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  const handleNavItemHover = () => {
    setShowSubMenu(true);
  };

  const handleNavItemLeave = () => {
    setShowSubMenu(false);
  };

  const handleSubMenuMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleSubMenuMouseLeave = () => {
    setShowSubMenu(false);
  };

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <nav className={`navbar-main ${isSticky ? 'sticky' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt=""></img>
        </div>
        <div className={"navbar-routes"}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li
              onMouseEnter={handleNavItemHover}
              onMouseLeave={handleNavItemLeave}
            >
              <a>Packages</a>
            </li>
            <li>
              <a>Accomodation</a>
            </li>
            <li>
              <a>Event Planning</a>
            </li>
            <li>
              <a>Rentals</a>
            </li>
            <li>
              <a>Tours</a>
            </li>
            <li>
              <a>Event Tickets</a>
            </li>
            <li>
              <Link to="/booking">Book Now</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
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
        {showSubMenu && (
          <Submenu
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
            visibility={showSubMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
