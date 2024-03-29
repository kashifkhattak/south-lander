import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clock from "../assets/images/clock.png";
import info from "../assets/images/info.png";
import price from "../assets/images/price.png";
import map from "../assets/images/map.png";

const Package = ({id, title, tagLine, image}) => {
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
          <img src={image} alt=""></img>
        </div>
        <div className="package-content">
          <div className="package-text">
            <Link to={`/packages/${id}`}>
              <p style={{whiteSpace: 'nowrap'}}>{title}</p>
              <span style={{whiteSpace: 'nowrap'}}>{tagLine}</span>
            </Link>
          </div>
          <div className="package-icons">
            <Link to={`/packages/${id}`}>
              <img src={clock} alt="" />
            </Link>
            <Link to={`/packages/${id}`}>
              <img src={info} alt="" />
            </Link>
            <Link to={`/packages/${id}`}>
              <img src={price} alt="" />
            </Link>
            <Link to={`/packages/${id}`}>
              <img src={map} alt="" />
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Package;
