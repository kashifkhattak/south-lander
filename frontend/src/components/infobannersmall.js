import React from "react";
import { Link } from "react-router-dom";

const InfoBannerSmall = () => {
  return (
    <>
      <div className="info-banner-small">
        <h3>Quito</h3>
        <h3>$XXX</h3>
        <Link>Book Now</Link>
      </div>
    </>
  );
};

export default InfoBannerSmall;
