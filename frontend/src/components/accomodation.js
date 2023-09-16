import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/images/home.jpg";

const Accomodation = ({id, title, landmarks, image}) => {
  return (
    <>
     <Link to={`/hotel-details/${id}`}>
      <div className="accomodation-main">
        <img src={image} alt="accomodation"/>
        <div className="accomodation-text">
          <p>{title}</p>
          <span>{landmarks?.map((l, index) => (
            <React.Fragment key={index}>
              {index > 0 && " | "}
              {l}
            </React.Fragment>
       ))}</span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Accomodation;
