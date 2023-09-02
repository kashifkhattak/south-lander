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
import { FaCheck } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import CarouselComponent from "../components/carouselcomponent";
import Apartments from "../components/apartments";
import AboutPackage from "../components/aboutpackage";
import InfoBanner from "../components/infobanner";

const EventPlanning = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Southlander Destination Experience"}
        subheader={""}
        tagline={
          "Enjoy our professional event planning services and uniquely customized destination experiences."
        }
        navigation={"Weddings and Ceremonies"}
      ></Thumbnail>
      <InfoBanner b1={"PAX / Per Person Rates"} b2={"Customized Experience"} b3={"24/7 Dedicated Assistance"} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <div className="pd-header">
                <h2>Weddings and Ceremonies Destination Event Planning</h2>
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
                <h4>About</h4>
              </div>
              <div className="desc-p">
                <p>
                  Discover two of South America's greatest cities, Rio de
                  Janeiro and Buenos Aires, at a leisurely pace. A major
                  highlight on this journey is a visit to Iguassu Falls in
                  between your two city stays. It truly is one of the most
                  spectacular sights on Earth. See the impressive falls from
                  both the Brazilian and Argentine sides.
                </p>
                <p>
                  Brazil's view takes you through clouds of mist and the
                  opportunity to see these 275 falls, spanning nearly two miles!
                  Argentina's side allows you to walk along the boardwalk
                  network and embark on a jungle train through the forest for
                  unforgettable views. Hear the deafening roar and admire the
                  brilliant rainbows created by the clouds of spray, and take in
                  the majesty of this wonder of the world.
                </p>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Venue Option</h4>
              </div>
              <AboutPackage />
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Photo Gallery</h4>
              </div>
              <div className="carousel-container-main">
                <CarouselComponent></CarouselComponent>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Inclusions</h4>
              </div>
              <div className="amen-main">
                <div className="amen-one">
                  <div className="tick-header-y">
                    <FaCheck className="y-check"></FaCheck>
                    <h5>Land and Water Exploration</h5>
                  </div>
                </div>
                <div className="amen-one">
                  <div className="tick-header-y">
                    <FaCheck className="y-check"></FaCheck>
                    <h5>Land and Water Exploration</h5>
                  </div>
                </div>
                <div className="amen-one">
                  <div className="tick-header-y">
                    <FaCheck className="y-check"></FaCheck>
                    <h5>Land and Water Exploration</h5>
                  </div>
                </div>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>PAX / Per Person Rates</h4>
              </div>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Venue Locations</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936560.5681945613!2d-90.70041025498932!3d-0.6568819820470502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aaa5f3c9454fba5%3A0x900d7fee5795677f!2sSanta%20Cruz%20Island!5e0!3m2!1sen!2sus!4v1630763724768!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <div className="info-banner-small">
                <h3>Quito</h3>
                <h3>$XXX</h3>
                <Link>Book Now</Link>
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

export default EventPlanning;
