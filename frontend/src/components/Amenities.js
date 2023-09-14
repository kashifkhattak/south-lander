import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import UmbrellaHeader from "./umbrellaheader";

const Amenitites = ({ header, data }) => {
  return (
    <>
      <UmbrellaHeader header={header} />
      <div className="amen-main">
        <div className="amen-one">
          {data.map((d) => (
            <div className="tick-header-y">
              <FaCheck className="y-check"></FaCheck>
              <h5>{d}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Amenitites;
