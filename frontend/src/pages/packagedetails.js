import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import umbrella from "../assets/images/umbrella.png";
import bookbg from "../assets/images/book-bg.png";

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
            </div>
            <div className="pd-right">
                <img src={bookbg}></img>
                <div className="pd-highlights">
                    <h3>PACKAGE HIGHLIGHTS</h3>
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
