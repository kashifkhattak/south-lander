import React from "react";
import { Link } from "react-router-dom";
import blueimg from "../assets/images/02.jpeg";

const Apartments = ({data}) => {
  return (
    <>
      <div className="apart-main">
        <div className="apart-one">
          <img src={data.imagePath} alt="" />
        </div>
        <div className="apart-two">
          <h4>{data.title}</h4>
          <p>
            <b>Amenities: </b>{data.amenities}
          </p>
          <p>
            <b>Facilities: </b>{data.facilities}
          </p>
          <p>
            <b>Max. Occupancy: </b>{data.maxOccupancy}
          </p>
        </div>
        <div className="apart-three">
          <h5>Price Per Night</h5>
          <span>${data.pricePerNight}</span>
          <Link>Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default Apartments;
