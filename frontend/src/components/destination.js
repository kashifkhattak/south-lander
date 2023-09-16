import React from "react";
import { Link } from "react-router-dom";

const Destination = ({data}) => {
  return (
    <>
      <div className="destination-main">
        <div className="destination-image">
          <Link to={`/event-planning/${data._id}`}>
            <img src={data.imagePath} alt="" />
          </Link>
        </div>
        <div className="destination-content">
          <div className="destination-text">
            <Link to={`/event-planning/${data._id}`}>
              <p>{data?.title}</p>
            </Link>
            <span>Custom experiences from:</span>
            <span>{data?.rating}-Star</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
