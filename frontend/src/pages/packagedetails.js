import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link } from "react-router-dom";
import umbrella from "../assets/images/umbrella.png";
import CarouselComponent from "../components/carouselcomponent";
import AboutPackage from "../components/aboutpackage";
import Itinerary from "../components/Itinerary";
import InfoBanner from "../components/infobanner";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import AdBar from "../components/adbar";
import InfoBannerSmall from "../components/infobannersmall";

const PackagesDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Galapagos Islands"}
        subheader={"All-Inclusive Packages"}
        tagline={"Let's hop around the Galapagos Islands."}
        navigation={"Galapagos Island Hopping"}
      ></Thumbnail>
      <InfoBanner b1={"Quito"} b2={"$XXX"} b3={"3 Days / 2 Nights"} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader header={"Quito City"}></DetailsPageHeader>
              <Description
                header={"Description"}
                p1={
                  "Discover the beautiful capital city of Ecuador, high in the Andes and dramatically squeezed between snow capped mountain peaks exquisitely fusing modern lifestyle, great food, nature and UNESCO World Heritage architectural treasures."
                }
                p2={
                  "Quito, today a modern and cosmopolitan south american capital, was founded in the 16th century on the ruins of an Inca city and stands at an altitude of 2,850 m. The city has the best-preserved, least altered historic centre in Latin America. The monasteries of San Francisco and Santo Domingo, and the Church and Jesuit College of La Compañía, with their rich interiors, are pure examples of the 'Baroque School of Quito', which is a fusion of Spanish, Italian, Moorish, Flemish and indigenous art."
                }
                p3={
                  "Historically known for being a starting point for many expeditions, like those of Orellana to discover the Amazon river; Quito is surrounded by nature and still an strategic location to set-out to the wild, both in the country of Ecuador and the rest of South America."
                }
              ></Description>
              <CarouselComponent></CarouselComponent>
              <Map header={"Location"} />
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>About The Package</h4>
              </div>
              <AboutPackage />
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Detailed Day Wise Itinerary</h4>
              </div>
              <Itinerary></Itinerary>
              <Itinerary></Itinerary>
              <Itinerary></Itinerary>
              <InfoBannerSmall />
            </div>
            <div className="pd-right">
              <AdBar />
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
