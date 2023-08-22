import React from "react";
import heroBG from "../assets/images/consul-bg.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="hero-bg">
          <img src={heroBG} alt=""></img>
        </div>
        <div className="hero-content">
          <h1>South Lander Travel</h1>
          <p>
            Explore Ecuador's most innovative destination experience offer:
            all-inclusive vacation packages, destination events, explore Ecuador
            through our unique tours, or enjoy our exclusive vacation rentals
            around the country.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
