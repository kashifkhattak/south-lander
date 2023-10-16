import React from "react";
import heroBG from "../assets/images/consul-bg.jpg";
import icon1 from "../assets/icons/2.png";
import icon2 from "../assets/icons/4.png";
import icon3 from "../assets/icons/1.png";
import icon4 from "../assets/icons/6.png";

const Hero = ({tabs, title, subtitle , forms}) => {
  const backgroundClasses = [
    "background-position-1",
    "background-position-2",
    "background-position-3",
    "background-position-4",
    "background-position-5",
    "background-position-6",
  ];

  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 150;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const backgroundClass = backgroundClasses[tabs - 1];
  return (
    <>
      <div className={`hero-main ${backgroundClass}`}>
        {/* <div className="hero-bg">
          <img src={heroBG} alt=""></img>
        </div> */}
        <div className="hero-content">
          <h1>{title}</h1>
          <p>
            {subtitle}
          </p>
          <div className="hero-buttons">
            <ul>
              <li className="fadeInLeft1">
                <a className="scroll-link" href="#packages">
                  <img src={icon1} alt="" />
                  <p>All Inclusive</p>
                </a>
              </li>
              <li className="fadeInLeft2">
                <a className="scroll-link" href="#event">
                  <img src={icon2} alt="" />
                  <p>Events</p>
                </a>
              </li>
              <li className="fadeInLeft3">
                <a className="scroll-link" href="#rentals">
                  <img src={icon3} alt="" />
                  <p>Rentals</p>
                </a>
              </li>
              <li className="fadeInLeft4">
                <a className="scroll-link" href="#tours">
                  <img src={icon4} alt="" />
                  <p>Ecuador 360°</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="hero-forms">{forms}</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
