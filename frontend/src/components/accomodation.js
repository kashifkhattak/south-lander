import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/images/home.jpg";

const Accomodation = () => {
  return (
    <>
    <Link to="/hotel-details">
      <div className="accomodation-main">
        <img src={home}></img>
        <div className="accomodation-text">
          <p>La Gavía</p>
          <span>Same | Beach Hopping</span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Accomodation;
