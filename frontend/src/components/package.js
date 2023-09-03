import React from "react";
import { Link } from "react-router-dom";
import t1 from "../assets/images/t1.png";
import clock from "../assets/images/clock.png";
import info from "../assets/images/info.png";
import price from "../assets/images/price.png";
import map from "../assets/images/map.png";

const Package = () => {
  return (
    <>
      <div className="package-main">
        <div className="package-image">
          <img src={t1} alt=""></img>
        </div>
        <div className="package-content">
          <div className="package-text">
            <Link to="/packages">
              <p>Coast</p>
              <span>Beach Hopping</span>
            </Link>
          </div>
          <div className="package-icons">
            <Link to="/packages">
              <img src={clock}></img>
            </Link>
            <Link to="/packages">
              <img src={info}></img>
            </Link>
            <Link to="/packages">
              <img src={price}></img>
            </Link>
            <Link to="/packages">
              <img src={map}></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
