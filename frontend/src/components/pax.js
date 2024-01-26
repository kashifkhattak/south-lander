import React from 'react';
import { Link } from 'react-router-dom';
import blueimg from '../assets/images/02.jpeg';

const Pax = ({ data }) => {
  return (
    <>
      <div className='apart-main'>
        <div className='apart-one'>
          <img src={data.imagePath} alt='' />
        </div>
        <div className='apart-two'>
          <h2>{data.title}</h2>
          <p>
            <b>About: </b>
            {data.about}
          </p>
        </div>
        <div className='apart-three'>
          <h5>Price Per Night</h5>
          <span>${data.rate}</span>
          <Link to="/booking">Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default Pax;
