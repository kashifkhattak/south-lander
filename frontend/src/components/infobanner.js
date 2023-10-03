import React from "react";
import { Link } from "react-router-dom";

const InfoBanner = ({ data }) => {
  return (
    <div className="info-banner">
      <h3
        id="ib-one"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {data?.title}
      </h3>
      <h3 id="ib-two">${data?.pricePerNight || data?.airPackagePrice || data?.price}</h3>
      <h3 id="ib-three">{data?.capacity || data?.duration}</h3>
      <Link>Book Now</Link>
    </div>
  );
};

export default InfoBanner;
