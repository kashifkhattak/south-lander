import React from "react";
import Package from "./package";

const Packagebar = ({packages}) => {
  return (
    <>
      <div className="packagebar-main">
      {packages?.map((p, index) => (
          <Package
            key={index}
            id={p._id}
            title={p.title}
            tagLine={p.tagLine}
            image={p.imagePath} 
          />
        ))}        
      </div>
    </>
  );
};

export default Packagebar;
