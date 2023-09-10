import React from "react";
import Package from "./package";
import corsImage from '../assets/images/t1.png'

const Packagebar = ({packages}) => {
  const imageMap = [{
    cors: corsImage
  }]
  console.log("image path", imageMap["cors"]);
  return (
    <>
      <div className="packagebar-main">
      {packages?.map((p, index) => (
          <Package
            key={index}
            title={p.title}
            tagLine={p.tagLine}
            image={imageMap[p.title]} 
            imagePath={p.imagePath}
          />
        ))}        
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
        <Package></Package>
      </div>
    </>
  );
};

export default Packagebar;
