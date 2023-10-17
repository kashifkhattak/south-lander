import React, { useEffect, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IconContext } from "react-icons";
import packageService from "../services/package-service";
import accomodationService from "../services/accomodation-service";
import eventService from "../services/event-service";
import rentalService from "../services/rental-service";
import tourService from "../services/tour-service";
import ticketService from "../services/ticket-service";
import { Link } from "react-router-dom";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  const [packages, setPackages] = useState([]);
  const [accomodations, setAccomodations] = useState([]);
  const [eventPlanning, setEventPlanning] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [tours, setTours] = useState([]);
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    packageService.getPackages().then((response) => setPackages(response));
    accomodationService
      .getAccomodations()
      .then((response) => setAccomodations(response));
    eventService
      .getEventPlannings()
      .then((response) => setEventPlanning(response));
    rentalService.getRentals().then((response) => setRentals(response));
    tourService.getTours().then((response) => setTours(response));
    ticketService.getEventTickets().then((response) => setTickets(response));
  }, []);

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
              <Link to="/home">Return Home</Link>
            </li>
          </ul>
          <h4>Packages</h4>
          <ul className="menu-items">
            {packages?.map((p) => (
              <li className="menu-item">
                <span>&gt;</span>
                <a href={`/packages/${p._id}`}>
                  {p.title} - {p.tagLine}
                </a>
              </li>
            ))}
          </ul>
          <h4>Accomodation</h4>
          <ul className="menu-items">
            {accomodations?.map((a) => (
              <li className="menu-item">
                <span>&gt;</span>
                <a href={`/hotel-details/${a._id}`}>{a.title}</a>
              </li>
            ))}
          </ul>
          <h4>Event Planning</h4>
          {eventPlanning?.map((e) => (
            <ul className="menu-items">
              <li className="menu-item">
                <span>&gt;</span>
                <a href={`/event-planning/${e._id}`}>{e.title}</a>
              </li>
            </ul>
          ))}
          <h4>Rentals</h4>
          {rentals?.map((r) => (
            <ul className="menu-items">
              <li className="menu-item">
                <span>&gt;</span>
                <a href={`/rental-details/${r._id}`}>{r.title}</a>
              </li>
            </ul>
          ))}
          <h4>Tours</h4>
          {tours?.map((t) => (
            <ul className="menu-items">
              <li className="menu-item">
                <span>&gt;</span>
                <a href={`/tour-details/${t._id}`}>{t.title}</a>
              </li>
            </ul>
          ))}
          <h4>Event Tickets</h4>
          {tickets?.map((t) => (
            <ul className="menu-items">
              <li className="menu-item">
                <span>&gt;</span>
                <a href="/index.html#tickets">{t.title}</a>
              </li>
            </ul>
          ))}

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
