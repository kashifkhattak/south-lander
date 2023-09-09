import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import t1 from "../assets/images/t1.png";
import clock from "../assets/images/clock.png";
import info from "../assets/images/info.png";
import price from "../assets/images/price.png";
import map from "../assets/images/map.png";

const Package = () => {
  const packageRef = useRef(null);

  useEffect(() => {
    const packageElement = packageRef.current;

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const animateOnScroll = () => {
      if (isInViewport(packageElement)) {
        packageElement.classList.add('animate');
      }
    };

    window.addEventListener('scroll', animateOnScroll);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="package-main" ref={packageRef}>
        <div className="package-image">
          <img src={t1} alt=""></img>
        </div>
        <div className="package-content">
          <div className="package-text">
            <Link to="/packages">
              <p>Coast</p>
              <span>Beach Hopping</span>
            </Link>
          </div>
          <div className="package-icons">
            <Link to="/packages">
              <img src={clock}></img>
            </Link>
            <Link to="/packages">
              <img src={info}></img>
            </Link>
            <Link to="/packages">
              <img src={price}></img>
            </Link>
            <Link to="/packages">
              <img src={map}></img>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Package;
