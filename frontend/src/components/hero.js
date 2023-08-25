import React from "react";
import heroBG from "../assets/images/consul-bg.jpg";
import icon1 from "../assets/icons/2.png";
import icon2 from "../assets/icons/4.png";
import icon3 from "../assets/icons/1.png";
import icon4 from "../assets/icons/6.png";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        {/* <div className="hero-bg">
          <img src={heroBG} alt=""></img>
        </div> */}
        <div className="hero-content">
          <h1>Southlander Travel</h1>
          <p>
            Explore Ecuador's most innovative destination experience offer:
            all-inclusive vacation packages, destination events, explore Ecuador
            through our unique tours, or enjoy our exclusive vacation rentals
            around the country.
          </p>
          <div className="hero-buttons">
            <ul>
              <li class="fadeInLeft1">
                <a>
                  <img src={icon1} alt="" />
                  <p>All Inclusive</p>
                </a>
              </li>
              <li class="fadeInLeft2">
                <a>
                  <img src={icon2} alt="" />
                  <p>Events</p>
                </a>
              </li>
              <li class="fadeInLeft3">
                <a>
                  <img src={icon3} alt="" />
                  <p>Rentals</p>
                </a>
              </li>
              <li class="fadeInLeft4">
                <a>
                  <img src={icon4} alt="" />
                  <p>Ecuador 360°</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
