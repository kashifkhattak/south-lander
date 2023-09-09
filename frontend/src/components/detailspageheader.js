import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailsPageHeader = ({header}) => {
  return (
    <div className="pd-header">
      <h2>{header}</h2>
      <div className="five-stars">
        <FontAwesomeIcon icon={faStar} className="one-star" />
        <FontAwesomeIcon icon={faStar} className="one-star" />
        <FontAwesomeIcon icon={faStar} className="one-star" />
        <FontAwesomeIcon icon={faStar} className="one-star" />
        <FontAwesomeIcon icon={faStar} className="one-star" />
      </div>
      <span>5-star</span>
    </div>
  );
};

export default DetailsPageHeader;
