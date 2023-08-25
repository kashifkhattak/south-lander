import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import car from "../assets/images/30.png";
import bin from "../assets/images/6.png";
import couple from "../assets/images/dis1.png";
import plate from "../assets/images/dis2.png";
import plane from "../assets/images/31.png";

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
            <a href="#">
              <img src={car}></img>
            </a>
            <a href="#">
              <img src={bin}></img>
            </a>
            <a href="#">
              <img src={couple}></img>
            </a>
            <a href="#">
              <img src={plate}></img>
            </a>
            <a href="#">
              <img src={plane}></img>
            </a>
          </div>
        </div>
        <div className="content-right">
          <div class="offer-r">
            <a href="#">
              {" "}
              <div class="or-1">
                {" "}
                <span class="or-11">Buy</span> <span class="or-12">OnLine</span>{" "}
              </div>{" "}
            </a>
            <a href="#">
              {" "}
              <div class="or-2">
                {" "}
                <span class="or-21">Get</span> <span class="or-22">20%</span>{" "}
                <span class="or-23">Off</span>{" "}
                <span class="or-24">use code: RG54ER1</span>{" "}
                <span class="or-25"></span>{" "}
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingBanner;
