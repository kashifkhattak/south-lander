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
import Apartments from "../components/apartments";
import Amenitites from "../components/Amenities";

const HotelDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Accomodation Facilities"}
        subheader={"Certified Quality Tourism"}
        tagline={"We vouch for the excellence of our accomodation facilities."}
        navigation={"Hotel Booking"}
      ></Thumbnail>
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <div className="pd-header">
                <h2>La Gavía Condominium Resort</h2>
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
                  Located in one of the most beautiful and exclusive beaches in
                  the Ecuadorian province of Esmeraldas. This elegant
                  condominium resort, located in the hills within the Playa de
                  Same Casablanca, is undoubtedly the most attractive and
                  exclusive offer to enjoy your vacations. It has luxury
                  apartments ready to receive our guests. Divided into two
                  blocks alienated with the movement of the sun, the breeze and
                  the best view of the mountains and 360 degree view to the bay
                  of Same.
                </p>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Photo Gallery</h4>
              </div>
              <div className="carousel-container-main">
                <CarouselComponent></CarouselComponent>
              </div>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Whole Apartments Available</h4>
              </div>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Condominium Resort Amenities</h4>
              </div>
              <Amenitites></Amenitites>
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

export default HotelDetails;
