import React, { useEffect, useState } from "react";
import submenuImage from "../assets/images/t9.png";
import packageService from "../services/package-service";
import accomodationService from "../services/accomodation-service"

const Submenu = ({ onMouseEnter, onMouseLeave, visibility }) => {
  const [visible, setVisible] = useState(true);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    packageService.getPackages().then((response) => setPackages(response));
  }, []);

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
            {packages?.map((p) => (
              <li>
                <span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a href={`/package-details/${p._id}`}>
                  {p.title} - {p.tagLine}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="submenu-divider"></div> */}
      </div>
      <div className="submenu-section-no-border">
        <div className="submenu-links">
          <ul>
            <li>
              <span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#">SUMMITS - High-Altitude EC</a>
            </li>
            <li>
              <span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#">3 WORLDS - Continental EC</a>
            </li>
            <li>
              <span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#">4 WORLDS - Total EC</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
