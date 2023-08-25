import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IconContext } from "react-icons";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <div className="close-icon" onClick={toggleMenu}>
          <IconContext.Provider value={{ size: "3rem" }}>
            <CgCloseR></CgCloseR>
          </IconContext.Provider>
        </div>
        <div className="menu-subcontent">
          <h4>Home</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="index.html">Return Home</a>
            </li>
          </ul>
          <h4>Packages</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_galapagos.html">GALAPAGOS - Island Hopping</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_coast.html">COAST - Beach Hopping</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_andes_quito.html">ANDES - Quito & Beyond</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_andes_baños.html">ANDES - Baños & Beyond</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_andes_cuenca.html">ANDES - Cuenca & Beyond</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_amazonia.html">AMAZONIA - Cuyabeno</a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="/comingsoon/comingsoon.html">
                SUMMITS - High-Altitude EC
              </a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_mainland_ecuador.html">
                3 WORLDS - Continental EC
              </a>
            </li>
            <li className="menu-item">
              <span>&gt;</span>
              <a href="packages_4worlds_ecuador.html">4 WORLDS - Total EC </a>
            </li>
          </ul>
          <h4>Accomodation</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="/index.html#hotels">Accomodation</a>
            </li>
          </ul>
          <h4>Event Planning</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="timesharing.html">Weddings & Ceremonies</a>
            </li>
          </ul>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="timesharing.html">Expos, Conventions & Summits</a>
            </li>
          </ul>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="timesharing.html">Spiritual & Healing Retreats</a>
            </li>
          </ul>
          <h4>Rentals</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="/index.html#rentals">All Rentals</a>
            </li>
          </ul>
          <h4>Tours</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="tour_list_galapagos.html">Galapagos Islands</a>
            </li>
          </ul>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="tour_list_continental_ecuador.html">
                Continental Ecuador
              </a>
            </li>
          </ul>
          <h4>Event Tickets</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="/index.html#tickets">All Tickets</a>
            </li>
          </ul>
          <h4>Booking</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="booking_all.html">Book Now</a>
            </li>
          </ul>
          <h4>Contact-Us</h4>
          <ul className="menu-items">
            <li className="menu-item">
              <span>&gt;</span>
              <a href="contact.html">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
