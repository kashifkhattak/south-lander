import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailsPageHeader = ({ header, rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="one-star" />
  ));

  return (
    <div className="pd-header">
      <h2>{header}</h2>
      <div className="five-stars">{stars}</div>
      <span>{rating}-star</span>
    </div>
  );
};

export default DetailsPageHeader;
