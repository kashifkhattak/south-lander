import React from "react";

import home from "../assets/images/home.jpg";

const Accomodation = () => {
  return (
    <>
      <div className="accomodation-main">
        <img src={home}></img>
        <div className="accomodation-text">
          <p>La Gavía</p>
          <span>Same | Beach Hopping</span>
        </div>
      </div>
    </>
  );
};

export default Accomodation;
