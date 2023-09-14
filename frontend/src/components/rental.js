import React from "react";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import { FaRegHandPointRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Rental = ({data}) => {
  return (
    <>
      <div className="rental-main">
        <div className="rental-header">
          <p>{data.title}</p>
        </div>
        {/* <div className="rental-content">
            <div className="rental-text">
              <p>Spiritual Gatherings and Retreats</p>
              <span>Custom experiences from:</span>
              <span>5-Star</span>
            </div>
          </div> */}
        <div className="rental-content">
          <div className="hot-page2-hom-pre">
            <ul>
              {data.options.map(option => <li key={option.title}>
                <Link to={`/rental-details/${data._id}`}>
                  <div className="hot-page2-hom-pre-1">
                    <img src={option.imagePath} alt="optionImage" />
                  </div>
                  <div className="hot-page2-hom-pre-2">
                    <h5>{option.title}</h5>{" "}
                    <span>{option.landmarks.map((landmark, index) => index !== 0 ? ', ' + landmark : landmark)}</span>{" "}
                  </div>
                  </Link>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rental;
