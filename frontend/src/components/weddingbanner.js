import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import car from "../assets/images/30.png";
import bin from "../assets/images/6.png";
import couple from "../assets/images/dis1.png";
import plate from "../assets/images/dis2.png";
import plane from "../assets/images/31.png";
import { Link } from "react-router-dom";

const WeddingBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const bannerElement = bannerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          bannerElement.classList.add("in-viewport");
        } else {
          bannerElement.classList.remove("in-viewport");
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(bannerElement);

    return () => {
      observer.unobserve(bannerElement);
    };
  }, []);

  return (
    <>
      <div className="banner-main" ref={bannerRef}>
        <div className="content-left">
          <span class="ol-1"></span>
          <span className="ol-2">
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
            <FontAwesomeIcon icon={faStar} className="ol-icon" />
          </span>
          <h5>DESTINATION WEDDINGS</h5>
          <span class="ol-3"></span>
          <p>starting $25,000</p>
          <div className="content-icons">
          <Link to="/event-planning" className="animate-icon">
            <img src={car} />
          </Link>
          <Link to="/event-planning" className="animate-icon">
            <img src={bin} />
          </Link>
          <Link to="/event-planning" className="animate-icon">
            <img src={couple} />
          </Link>
          <Link to="/event-planning" className="animate-icon">
            <img src={plate} />
          </Link>
          <Link to="/event-planning" className="animate-icon">
            <img src={plane} />
          </Link>
        </div>

        </div>
        <div className="content-right">
          <div class="offer-r">
            <Link to="/event-planning">
              {" "}
              <div class="or-1">
                {" "}
                <span class="or-11">Buy</span> <span class="or-12">OnLine</span>{" "}
              </div>{" "}
            </Link>
            <Link to="/event-planning">
              {" "}
              <div class="or-2">
                {" "}
                <span class="or-21">Get</span> <span class="or-22">20%</span>{" "}
                <span class="or-23">Off</span>{" "}
                <span class="or-24">use code: RG54ER1</span>{" "}
                <span class="or-25"></span>{" "}
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingBanner;
