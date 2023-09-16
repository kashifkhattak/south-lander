import React from "react";
import { Link } from "react-router-dom";

import flag from "../assets/images/flag.png";
import tick from "../assets/images/tick.png";

const SinglePackage = ({data}) => {
  return (
    <div className="pp-packages">
      <div className="pp-left">
        <img src={data?.imagePath} alt=""/>
      </div>
      <div className="pp-right">
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
        <div className="pp-tags">
          <h4 className="pp-orange">Available Tickets: {data?.availableTickets}</h4>
          <h4 className="pp-green">Price: ${data?.price}</h4>
          <h4 className="pp-green">Available Dates: {data?.availableDates}</h4>
        </div>
        <div className="flag-header">
          <img src={flag} alt=""/>
          <h4>{data?.tag}</h4>
        </div>
        {data.landmarks.map(l => <h6>{l}</h6>)}
        <div className="pp-facilities">
          <div className="tick-header">
            <img src={tick} alt="" />
            <h5>{data?.tag}</h5>
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
