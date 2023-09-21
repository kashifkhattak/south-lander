import React from "react";
import Accomodation from "./accomodation";

const AccomodationGallery = ({ accomodation }) => {
  return (
    <>
      <div className="accomodation-gallery-main">
        {accomodation?.map((a, index) => (
          <div
            key={a._id}
            className={index === 0 ? "gallery-main" : `sub-${index}`}
          >
            <Accomodation
              id={a._id}
              title={a.title}
              landmarks={a.landmarks}
              imagePath={a.imagePath}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AccomodationGallery;
