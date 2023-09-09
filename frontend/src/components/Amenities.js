import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import UmbrellaHeader from "./umbrellaheader";


const Amenitites = ({header}) => {
  return (
    <>
    <UmbrellaHeader header={header} />
      <div className="amen-main">
        <div className="amen-one">
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
        </div>
        <div className="amen-one">
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
        </div>
        <div className="amen-one">
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
          <div className="tick-header-y">
            <FaCheck className="y-check"></FaCheck>
            <h5>Land and Water Exploration</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenitites;
