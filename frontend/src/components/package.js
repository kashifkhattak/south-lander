import React from "react";

import t1 from "../assets/images/t1.png";
import clock from "../assets/images/clock.png"
import info from "../assets/images/info.png"
import price from "../assets/images/price.png"
import map from "../assets/images/map.png"

const Package = () => {
  return (
    <>
      <div className="package-main">
        <div className="package-image">
          <img src={t1} alt=""></img>
        </div>
        <div className="package-content">
          <div className="package-text">
            <p>Coast</p>
            <span>Beach Hopping</span>
          </div>
          <div className="package-icons">
            <a href="#">
              <img src={clock}></img>
            </a>
            <a href="#">
              <img src={info}></img>
            </a>
            <a href="#">
              <img src={price}></img>
            </a>
            <a href="#">
              <img src={map}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
