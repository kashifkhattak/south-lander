import React from "react";
import { Link } from "react-router-dom";
import place from "../assets/images/place2.jpg";

const Tours = ({data}) => {
  return (
    <>
      <div className="tours-main">
        <img src={data.imagePath} alt="tourImage"></img>
        <div className="tours-text">
          <span>{data.title}</span>
          <h5>{data.tagLine}</h5>
          <p>
           {data.description}
          </p>
          <Link to={`/tour-details/${data._id}`}>Explore</Link>
        </div>
      </div>
    </>
  );
};

export default Tours;
