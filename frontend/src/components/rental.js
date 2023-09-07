import React from "react";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import { FaRegHandPointRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Rental = () => {
  return (
    <>
      <div className="rental-main">
        <div className="rental-header">
          <p>GALAPAGOS</p>
          <span>Rentals</span>
        </div>
        {/* <div className="rental-content">
            <div className="rental-text">
              <p>Spiritual Gatherings and Retreats</p>
              <span>Custom experiences from:</span>
              <span>5-Star</span>
            </div>
          </div> */}
        <div className="rental-content">
          <div class="hot-page2-hom-pre">
            <ul>
              <li>
                <Link to="/rental-details">
                  <div class="hot-page2-hom-pre-1">
                    {" "}
                    <img src={one} alt="" />{" "}
                  </div>
                  <div class="hot-page2-hom-pre-2">
                    <h5>Park Apartment</h5>{" "}
                    <span>San Cristobal, San Cristobal</span>{" "}
                  </div>
                  <div class="hot-page2-hom-pre-3">
                    {" "}
                    <FaRegHandPointRight className="hand-icon" />
                    {/* <FontAwesomeIcon icon={faHandPointRight} className="hand-icon"></FontAwesomeIcon>{" "} */}
                  </div>
                </Link>
              </li>
              <li>
              <Link to="/rental-details">
                  <div class="hot-page2-hom-pre-1">
                    {" "}
                    <img src={two} alt="" />{" "}
                  </div>
                  <div class="hot-page2-hom-pre-2">
                    <h5>Organic Farmhouse</h5>{" "}
                    <span>Bellavista, Santa Cruz</span>{" "}
                  </div>
                  <div class="hot-page2-hom-pre-3">
                    {" "}
                    <FaRegHandPointRight className="hand-icon" />
                    {/* <FontAwesomeIcon icon={faHandPointRight} className="hand-icon"></FontAwesomeIcon>{" "} */}
                  </div>
                </Link>
              </li>
              <li>
              <Link to="/rental-details">
                  <div class="hot-page2-hom-pre-1">
                    {" "}
                    <img src={three} alt="" />{" "}
                  </div>
                  <div class="hot-page2-hom-pre-2">
                    <h5>Rustic Beach House</h5>{" "}
                    <span>Puerto Villamil, Isabela</span>{" "}
                  </div>
                  <div class="hot-page2-hom-pre-3">
                    {" "}
                    <FaRegHandPointRight className="hand-icon" />
                    {/* <FontAwesomeIcon icon={faHandPointRight} className="hand-icon"></FontAwesomeIcon>{" "} */}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rental;
