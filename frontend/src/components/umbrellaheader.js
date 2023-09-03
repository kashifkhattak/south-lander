import React from "react";
import { Link } from "react-router-dom";
import umbrella from "../assets/images/umbrella.png";

const UmbrellaHeader = ({ header }) => {
  return (
    <div className="umbrella-header">
      <img src={umbrella}></img>
      <h4>{header}</h4>
    </div>
  );
};

export default UmbrellaHeader;
