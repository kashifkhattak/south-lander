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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 150;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  return (
    <>
      <nav className={`navbar-main ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="" />
          </Link>
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
              <a className="scroll-link" href="#packages">
                Packages
              </a>
            </li>
            <li>
              <a className="scroll-link" href="#accomodation">
                Accomodation
              </a>
            </li>
            <li>
              <a className="scroll-link" href="#event">
                Event Planning
              </a>
            </li>
            <li>
              <a className="scroll-link" href="#rentals">
                Rentals
              </a>
            </li>
            <li>
              <a className="scroll-link" href="#tours">
                Tours
              </a>
            </li>
            <li>
              <a className="scroll-link" href="#tickets">
                Event Tickets
              </a>
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
