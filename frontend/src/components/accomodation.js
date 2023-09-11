import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/images/home.jpg";

const Accomodation = ({title, landmarks, imagePath}) => {
  return (
    <>
    <Link to={`/${imagePath}`}>
      <div className="accomodation-main">
        <img src={home} alt="accomodation"/>
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
