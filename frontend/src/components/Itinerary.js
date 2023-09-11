import React from "react";
import { FaClock } from "react-icons/fa";

import home from "../assets/images/home.jpg";

const Itinerary = () => {
  return (
    <>
      <div className="itin-main">
        <div className="itin-left">
          <FaClock className="left-clock" />
          <div className="vertical-line"></div>
        </div>
        <div className="itin-right">
          <h4>
            <span>Day : 1 </span>Casco Colonial, Calle de las 7 Cruces and Visit
            to "La Ronda" Street
          </h4>
          <p>
            After breakfast you will have a tour of Quito's casco colonial where
            you will discover unique attractions such as the Plaza de San
            Francisco, Santo Domingo, El Ejido, the artisan market, among
            others. You will have a typical lunch to later walk the famous
            street of the 7 crosses that takes us through the most
            representative churches of Quito in neoclassical, gothic and
            quitenian school baroque styles. You will then return to your hotel
            for some rest before an evening visit to "La Ronda", one of the most
            cheerful and well-known colonial neighborhoods of Quito.
          </p>
        </div>
      </div>
    </>
  );
};

export default Itinerary;
