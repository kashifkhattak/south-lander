import React from "react";
import { Link } from "react-router-dom";
import blueimg from "../assets/images/02.jpeg";

const Apartments = () => {
  return (
    <>
      <div className="apart-main">
        <div className="apart-one">
          <img src={blueimg}></img>
        </div>
        <div className="apart-two">
          <h4>A - UPPER FLOOR APARTMENT WITH TERRACE FOR UP TO 7-8 PEOPLE</h4>
          <p>
            <b>Amenities: </b>satellite tv, wi-fi, cleaning and cooking lady,
            fully furnished and equiped apartment.
          </p>
          <p>
            <b>Facilities: </b>3 full bathrooms, 1 half-bath, 2 parking spaces,
            1 storage area, 3 bedrooms with twin beds, 1 sofa bed in the living
            room and private terrace.
          </p>
          <p>
            <b>Max. Occupancy: </b>8 people
          </p>
        </div>
        <div className="apart-three">
          <h5>Price Per Night</h5>
          <span>$300</span>
          <Link>Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default Apartments;
