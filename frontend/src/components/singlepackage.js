import React from "react";

import iplace from "../assets/images/iplace-1.jpg";
import flag from "../assets/images/flag.png";
import tick from "../assets/images/tick.png";
import { Link } from "react-router-dom";

const SinglePackage = () => {
  return (
    <div className="pp-packages">
      <div className="pp-left">
        <img src={iplace}></img>
      </div>
      <div className="pp-right">
        <h3>Galapagos Island Hopping Experience 9 Days / 8 Nights</h3>
        <p>
          All-Aboard on this 9-day land and water experience, you will get to
          know the Galapagos Islands in greater depth, with navigable tours and
          many dives; includes a round-trip flight Quito-Baltra.
        </p>
        <div className="pp-tags">
          <h4 className="pp-orange">Available Tickets: 40</h4>
          <h4 className="pp-green">Price: $XXXXX</h4>
          <h4 className="pp-green">Available Dates: Year-Round</h4>
        </div>
        <div className="flag-header">
          <img src={flag}></img>
          <h4>Land and Water Exploration</h4>
        </div>
        <h6>
          Baltra | Santa Cruz | Isabela | Bartolomé | Seymour | Chinese Hat |
          Kicker Rock | Witch Hill
        </h6>
        <div className="pp-facilities">
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Land and Water Exploration</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>All Meals</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Soft Drinks</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Activities</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Round Trip Plane Ticket</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Transfers</h5>
          </div>
          <div className="tick-header">
            <img src={tick}></img>
            <h5>Tour Guide</h5>
          </div>
        </div>
        <div className="pp-buttons">
            <button className="pp-book">Book Now</button>
            <Link to="/package-details" className="pp-view">View Package</Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
