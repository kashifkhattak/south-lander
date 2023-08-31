import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import umbrella from "../assets/images/umbrella.png";
import bookbg from "../assets/images/book-bg.png";
import tick from "../assets/images/tick.png";
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import CarouselComponent from "../components/carouselcomponent";
import AboutPackage from "../components/aboutpackage";

const PackagesDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail></Thumbnail>
      <div className="info-banner">
        <h3>Quito</h3>
        <h3>$XXX</h3>
        <h3>3 Days / 2 Nights</h3>
        <Link>Book Now</Link>
      </div>
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <div className="pd-header">
                <h2>Quito City</h2>
                <div className="five-stars">
                  <FontAwesomeIcon icon={faStar} className="one-star" />
                  <FontAwesomeIcon icon={faStar} className="one-star" />
                  <FontAwesomeIcon icon={faStar} className="one-star" />
                  <FontAwesomeIcon icon={faStar} className="one-star" />
                  <FontAwesomeIcon icon={faStar} className="one-star" />
                </div>
                <span>5-star</span>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Description</h4>
              </div>
              <div className="desc-p">
                <p>
                  Discover the beautiful capital city of Ecuador, high in the
                  Andes and dramatically squeezed between snow capped mountain
                  peaks; exquisitely fusing modern lifestyle, great food, nature
                  and UNESCO World Heritage architectural treasures.
                </p>
                <p>
                  Quito, today a modern and cosmopolitan south american capital,
                  was founded in the 16th century on the ruins of an Inca city
                  and stands at an altitude of 2,850 m. The city has the
                  best-preserved, least altered historic centre in Latin
                  America. The monasteries of San Francisco and Santo Domingo,
                  and the Church and Jesuit College of La Compañía, with their
                  rich interiors, are pure examples of the 'Baroque School of
                  Quito', which is a fusion of Spanish, Italian, Moorish,
                  Flemish and indigenous art.
                </p>
                <p>
                  Historically known for being a starting point for many
                  expeditions, like those of Orellana to discover the Amazon
                  river; Quito is surrounded by nature and still an strategic
                  location to set-out to the wild, both in the country of
                  Ecuador and the rest of South America.
                </p>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Photo Gallery</h4>
              </div>
              <div className="carousel-container">
                <CarouselComponent></CarouselComponent>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Location</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936560.5681945613!2d-90.70041025498932!3d-0.6568819820470502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aaa5f3c9454fba5%3A0x900d7fee5795677f!2sSanta%20Cruz%20Island!5e0!3m2!1sen!2sus!4v1630763724768!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>About The Package</h4>
              </div>
              <AboutPackage/>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Detailed Day Wise Itinerary</h4>
              </div>
            </div>
            <div className="pd-right">
              <img src={bookbg} className="pd-book-img"></img>
              <div className="pd-highlights">
                <h3>PACKAGE HIGHLIGHTS</h3>
                <div className="pd-facilities">
                  <div className="pd-tick">
                    <img src={tick} className="pd-tick-img"></img>
                    <h5>Location : Rio,Brazil</h5>
                  </div>
                  <div className="pd-tick">
                    <img src={tick} className="pd-tick-img"></img>
                    <h5>Arrival Date: Nov 12, 2017</h5>
                  </div>
                  <div className="pd-tick">
                    <img src={tick} className="pd-tick-img"></img>
                    <h5>Departure Date: Nov 21, 2017</h5>
                  </div>
                  <div className="pd-tick">
                    <img src={tick} className="pd-tick-img"></img>
                    <h5>Free Sightseeing & Hotel</h5>
                  </div>
                </div>
              </div>
              <div className="pd-highlights">
                <h3>Share This Package</h3>
                <div className="pd-social">
                  <BsFacebook size={"3rem"} color="#3b5998" />
                  <FaGooglePlus size={"3rem"} color="#DB4437" />
                  <AiFillTwitterCircle size={"3rem"} color="#00acee" />
                  <BsLinkedin size={"3rem"} color=" #0072b1" />
                  <FaWhatsappSquare size={"3rem"} color="#128C7E" />
                </div>
              </div>
              <div className="pd-highlights">
                <h3>Help & Support 24/7</h3>
                <div className="pd-help">
                  <div className="wa-title">
                    <BsWhatsapp size={"24px"} color="#dd4b39" />
                    <h4>WhatsApp Chat</h4>
                  </div>
                  <h4 className="help-num">+593-99-354-6632</h4>
                </div>
              </div>
              <div className="pd-highlights">
                <h3>Popular Packages</h3>
                <div className="popular-container">
                  <div className="popular-packs">
                    <img src={bookbg} className="popular-img"></img>
                    <h4>Dubai 7Days / 6Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>
                    <a>View This Package</a>
                  </div>
                  <div className="popular-packs">
                    <img src={bookbg} className="popular-img"></img>
                    <h4>Dubai 7Days / 6Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>
                    <a>View This Package</a>
                  </div>
                  <div className="popular-packs">
                    <img src={bookbg} className="popular-img"></img>
                    <h4>Dubai 7Days / 6Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>
                    <a>View This Package</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default PackagesDetails;
