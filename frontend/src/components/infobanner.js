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
        {data?.eventPlanningId ? "PAX/Per Person Rates" : data?.title}
      </h3>
      <h3 id="ib-two">{data?.eventPlanningId ? "Customized Experience" : "$" + (data?.pricePerNight || data?.airPackagePrice || data?.price)}</h3>
      <h3 id="ib-three">{data?.eventPlanningId ? "24/7 Dedicated Assistance" : (data?.capacity || data?.duration)}</h3>
      <Link to="/booking">Book Now</Link>
    </div>
  );
};

export default InfoBanner;
