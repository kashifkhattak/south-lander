import React from "react";
import { Link } from "react-router-dom";

const InfoBannerSmall = ({ data }) => {
  return (
    <>
      <div className="info-banner-small">
        <h3
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data?.eventPlanningId ? "PAX/Per Person Rates" : data?.title}
        </h3>
        <h3>{data?.eventPlanningId ? "Customized Experience" : "$" + (data?.price || data?.pricePerNight || data?.airPackagePric)}</h3>
        {data?.eventPlanningId ? null : <h3>{(data?.capacity || data?.duration)}</h3>}
        <Link to="/booking">Book Now</Link>
      </div>
    </>
  );
};

export default InfoBannerSmall;
