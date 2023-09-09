import React from "react";
import { Link } from "react-router-dom";

const InfoBanner = ({ b1, b2, b3 }) => {
  return (
    <div className="info-banner">
      <h3 id="ib-one">{b1}</h3>
      <h3 id="ib-two">{b2}</h3>
      <h3 id="ib-three">{b3}</h3>
      <Link>Book Now</Link>
    </div>
  );
};

export default InfoBanner;
