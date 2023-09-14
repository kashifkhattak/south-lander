import React from "react";
import Package from "./package";
import coastImage from '../assets/images/t1.png'

const Packagebar = ({packages}) => {
  return (
    <>
      <div className="packagebar-main">
      {packages?.map((p, index) => (
          <Package
            key={index}
            title={p.title}
            tagLine={p.tagLine}
            image={p.imagePath} 
          />
        ))}        
        {/* <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package> */}
      </div>
    </>
  );
};

export default Packagebar;
