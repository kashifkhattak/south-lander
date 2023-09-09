import React from "react";
import { Link } from "react-router-dom";
import bookbg from "../assets/images/book-bg.png";
import tick from "../assets/images/tick.png";
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const AdBar = () => {
  return (
    <>
      <img src={bookbg} className="pd-book-img"></img>
      <div className="pd-highlights">
        <h3>PACKAGE HIGHLIGHTS</h3>
        <div className="pd-facilities">
          <div className="pd-tick">
            <img src={tick} className="pd-tick-img"></img>
            <h5>Location : Rio,Brazil</h5>
          </div>
          <div className="pd-tick">
            <img src={tick} className="pd-tick-img"></img>
            <h5>Arrival Date: Nov 12, 2017</h5>
          </div>
          <div className="pd-tick">
            <img src={tick} className="pd-tick-img"></img>
            <h5>Departure Date: Nov 21, 2017</h5>
          </div>
          <div className="pd-tick">
            <img src={tick} className="pd-tick-img"></img>
            <h5>Free Sightseeing & Hotel</h5>
          </div>
        </div>
      </div>
      <div className="pd-highlights">
        <h3>Share This Package</h3>
        <div className="pd-social">
          <BsFacebook size={"3rem"} color="#3b5998" />
          <FaGooglePlus size={"3rem"} color="#DB4437" />
          <AiFillTwitterCircle size={"3rem"} color="#00acee" />
          <BsLinkedin size={"3rem"} color=" #0072b1" />
          <FaWhatsappSquare size={"3rem"} color="#128C7E" />
        </div>
      </div>
      <div className="pd-highlights">
        <h3>Help & Support 24/7</h3>
        <div className="pd-help">
          <div className="wa-title">
            <BsWhatsapp size={"24px"} color="#dd4b39" />
            <h4>WhatsApp Chat</h4>
          </div>
          <h4 className="help-num">+593-99-354-6632</h4>
        </div>
      </div>
      <div className="pd-highlights">
        <h3>Popular Packages</h3>
        <div className="popular-container">
          <div className="popular-packs">
            <img src={bookbg} className="popular-img"></img>
            <h4>Dubai 7Days / 6Nights</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text
            </p>
            <a>View This Package</a>
          </div>
          <div className="popular-packs">
            <img src={bookbg} className="popular-img"></img>
            <h4>Dubai 7Days / 6Nights</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text
            </p>
            <a>View This Package</a>
          </div>
          <div className="popular-packs">
            <img src={bookbg} className="popular-img"></img>
            <h4>Dubai 7Days / 6Nights</h4>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text
            </p>
            <a>View This Package</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBar;
