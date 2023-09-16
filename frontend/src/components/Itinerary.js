import React from "react";
import { FaClock } from "react-icons/fa";

import home from "../assets/images/home.jpg";

const Itinerary = ({data}) => {
  return (
    <>
      <div className="itin-main">
        <div className="itin-left">
          <FaClock className="left-clock" />
          <div className="vertical-line"></div>
        </div>
        <div className="itin-right">
          <h4>{data?.dayTitle}
          </h4>
          <p>
          {data?.activities}
          </p>
        </div>
      </div>
    </>
  );
};

export default Itinerary;
