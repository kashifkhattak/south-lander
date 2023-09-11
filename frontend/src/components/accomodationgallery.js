import React from "react";
import Accomodation from "./accomodation";

const AccomodationGallery = ({accomodation}) => {
  return (
    <>
      <div className="accomodation-gallery-main">
        <div className="gallery-main">
        {accomodation.map(a => <Accomodation title={a.title} landmarks={a.landmarks} imagePath={a.imagePath}/>)}
        </div>
        {/* <div className="gallery-main">
          <Accomodation></Accomodation>
        </div> */}
        <div className="sub-one">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-two">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-three">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-four">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-five">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-six">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-seven">
          <Accomodation></Accomodation>
        </div>
        <div className="sub-eight">
          <Accomodation></Accomodation>
        </div>
      </div>
    </>
  );
};

export default AccomodationGallery;
