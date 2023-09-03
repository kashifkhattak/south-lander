import React from "react";
import { Link } from "react-router-dom";
import UmbrellaHeader from "./umbrellaheader";

const Description = ({header, p1, p2, p3}) => {
  return (
    <>
      <UmbrellaHeader header={header} />
      <div className="desc-p">
        <p>
          {p1}
        </p>
        <p>
          {p2}
        </p>
        <p>
          {p3}
        </p>
      </div>
    </>
  );
};

export default Description;
