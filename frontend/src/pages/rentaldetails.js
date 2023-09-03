import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/carouselcomponent";
import InfoBanner from "../components/infobanner";
import Amenitites from "../components/Amenities";
import AdBar from "../components/adbar";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import InfoBannerSmall from "../components/infobannersmall";

const RentalDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Exclusive Vacation Rentals"}
        subheader={""}
        tagline={
          "Our stock of vacation-perfect certified properties up for rent all around continental Ecuador and the Galapagos."
        }
        navigation={"Vacation Rentals"}
      ></Thumbnail>
      <InfoBanner b1={"Canoa, Manabí"} b2={"$200/Night"} b3={"Sleeps 7"} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={"Casa Bonita, Canoa"}
              ></DetailsPageHeader>
              <Description
                header={"About Casa Bonita"}
                p1={
                  "Discover two of South America's greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides."
                }
                p2={
                  "Brazil's view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina's side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world."
                }
              ></Description>
              <CarouselComponent></CarouselComponent>
              <Amenitites header={"Rental Amenities"}></Amenitites>
              <Map header={"Exact Location"}></Map>
              <InfoBannerSmall></InfoBannerSmall>
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

export default RentalDetails;
