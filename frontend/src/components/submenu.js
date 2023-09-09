import React, { useState } from "react";
import submenuImage from "../assets/images/t9.png";

const Submenu = ({ onMouseEnter, onMouseLeave, visibility }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`submenu-container ${visibility ? "" : "hidden"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="submenu-section">
        <img
          className="submenu-image"
          src={submenuImage}
          alt="Submenu Background"
        />
        {/* <div className="submenu-divider"></div> */}
      </div>
      <div className="submenu-section">
        <div className="submenu-text">
          <p>ECUADOR: 4 WORLDS IN 1 PLACE</p>
          <p>
            Modern infrastructure, cultural splendor, wildlife watching, sublime
            scenery, snow-capped volcanoes, waves splashing white-sand beaches
            and more!
          </p>
          <button className="submenu-button">ALL PACKAGES</button>
        </div>
        {/* <div className="submenu-divider"></div> */}
      </div>
      <div className="submenu-section">
        <div className="submenu-links">
          <ul>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">GALAPAGOS - Island Hopping</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">COAST - Beach Hopping</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">ANDES - Quito & Beyond</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">ANDES - Baños & Beyond</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">ANDES - Cuenca & Beyond</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">AMAZONIA - Cuyabeno</a></li>
          </ul>
        </div>
        {/* <div className="submenu-divider"></div> */}
      </div>
      <div className="submenu-section-no-border">
        <div className="submenu-links">
          <ul>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">SUMMITS - High-Altitude EC</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">3 WORLDS - Continental EC</a></li>
            <li><span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">4 WORLDS - Total EC</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
