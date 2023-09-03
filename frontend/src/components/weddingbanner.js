import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import car from "../assets/images/30.png";
import bin from "../assets/images/6.png";
import couple from "../assets/images/dis1.png";
import plate from "../assets/images/dis2.png";
import plane from "../assets/images/31.png";
import { Link } from "react-router-dom";

const WeddingBanner = () => {
  return (
    <>
      <div className="banner-main">
        <div className="content-left">
          <span class="ol-1"></span>
          <span className="ol-2">
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
          </span>
          <h5>DESTINATION WEDDINGS</h5>
          <span class="ol-3"></span>
          <p>starting $25,000</p>
          <div className="content-icons">
            <Link to="/event-planning">
              <img src={car}></img>
            </Link>
            <Link to="/event-planning">
              <img src={bin}></img>
            </Link>
            <Link to="/event-planning">
              <img src={couple}></img>
            </Link>
            <Link to="/event-planning">
              <img src={plate}></img>
            </Link>
            <Link to="/event-planning">
              <img src={plane}></img>
            </Link>
          </div>
        </div>
        <div className="content-right">
          <div class="offer-r">
            <Link to="/event-planning">
              {" "}
              <div class="or-1">
                {" "}
                <span class="or-11">Buy</span> <span class="or-12">OnLine</span>{" "}
              </div>{" "}
            </Link>
            <Link to="/event-planning">
              {" "}
              <div class="or-2">
                {" "}
                <span class="or-21">Get</span> <span class="or-22">20%</span>{" "}
                <span class="or-23">Off</span>{" "}
                <span class="or-24">use code: RG54ER1</span>{" "}
                <span class="or-25"></span>{" "}
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingBanner;
