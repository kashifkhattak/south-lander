import React from "react";
import { Link } from "react-router-dom";

const InfoBanner = ({ data }) => {
  return (
    <div className="info-banner">
      <h3 id="ib-one">{data?.title}</h3>
      <h3 id="ib-two">${data?.pricePerNight}</h3>
      <h3 id="ib-three">{data?.capacity}</h3>
      <Link>Book Now</Link>
    </div>
  );
};

export default InfoBanner;
