import React from "react";
import { Link } from "react-router-dom";

const InfoBannerSmall = ({data}) => {
  return (
    <>
      <div className="info-banner-small">
        <h3>Quito</h3>
        <h3>${data?.price|| data?.pricePerNight}</h3>
        <Link>Book Now</Link>
      </div>
    </>
  );
};

export default InfoBannerSmall;
