import React from "react";
import { Link } from "react-router-dom";
import place from "../assets/images/place2.jpg";

const Tours = () => {
  return (
    <>
      <div className="tours-main">
        <img src={place}></img>
        <div className="tours-text">
          <span>Quito City And Old Town</span>
          <h5>QUITO, WHOLE DAY.</h5>
          <p>
            The beautiful capital of Ecuador welcomes you in all its historic,
            cultural and natural splendor.
          </p>
          <Link to="/tour-details">Explore</Link>
        </div>
      </div>
    </>
  );
};

export default Tours;
