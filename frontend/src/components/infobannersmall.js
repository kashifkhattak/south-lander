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
          {data?.title}
        </h3>
        <h3>${data?.price || data?.pricePerNight || data?.airPackagePrice}</h3>
        <Link>Book Now</Link>
      </div>
    </>
  );
};

export default InfoBannerSmall;
