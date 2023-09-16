import React from "react";

import Tours from "./tours";

const ToursGallery = ({data}) => {
  return (
    <>
      <div className="toursgallery-main">
        {data?.map(d => <Tours key={d._id} data={d}/>)}
      </div>
    </>
  );
};

export default ToursGallery;
