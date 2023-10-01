import React, { useEffect, useState } from "react";
import bookbg from "../assets/images/book-bg.png";
import tick from "../assets/images/tick.png";
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import variantService from "../services/variant-service";

const AdBar = ({ data }) => {
  const [packageVariant, setPackageVariant] = useState([]);
  useEffect(() => {
    variantService.getPackageVariant().then((response) => {
      setPackageVariant(response);
    });
  }, []);

  return (
    <>
      <img src={bookbg} className="pd-book-img" alt="" />
      <div className="pd-highlights">
        <h3>PACKAGE HIGHLIGHTS</h3>
        <div className="pd-facilities">
          {data?.map((d) => (
            <div className="pd-tick">
              <img src={tick} className="pd-tick-img" alt="" />
              <h5>
                {d.key}: {d.value}
              </h5>
            </div>
          ))}
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
          {packageVariant.slice(0, 4).map((p) => (
            <div className="popular-packs">
              <img src={p.imagePath} className="popular-img" alt="" />
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a href={`/package-details/${p._id}`}>View This Package</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdBar;
