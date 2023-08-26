import React from "react";

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
          <a href="#">Explore</a>
        </div>
      </div>
    </>
  );
};

export default Tours;
