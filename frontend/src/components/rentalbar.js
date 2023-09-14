import React from "react";
import Rental from "./rental";

const Rentalbar = ({data}) => {
  return (
    <>
      <div className="rentalbar-main">
        {data.map(d => <Rental key={d._id} data={d}/>)}
      </div>
    </>
  );
};

export default Rentalbar;
