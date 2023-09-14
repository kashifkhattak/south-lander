import React from "react";

import t1 from "../assets/images/3.jpg";
import clock from "../assets/images/clock.png";
import info from "../assets/images/info.png";
import price from "../assets/images/price.png";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";

const Destination = ({data}) => {
  return (
    <>
      <div className="destination-main">
        <div className="destination-image">
          <Link to={`/event-planning/${data._id}`}>
            <img src={data.imagePath} alt=""></img>
          </Link>
        </div>
        <div className="destination-content">
          <div className="destination-text">
            <Link to={`/event-planning/${data._id}`}>
              <p>{data.title}</p>
            </Link>
            <span>Custom experiences from:</span>
            <span>{data.rating}-Star</span>
          </div>
          {/* <div className="destination-icons">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Destination;
