import React from "react";
import Destination from "./destination";

const Destinationbar = ({data}) => {
  return (
    <>
      <div className="destinationbar-main">
       {data.map(d => <Destination key={d._id} data={d} />)}
      </div>
    </>
  );
};

export default Destinationbar;
