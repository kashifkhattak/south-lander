import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import umbrella from "../assets/images/umbrella.png";
import CarouselComponent from "../components/carouselcomponent";
import Apartments from "../components/apartments";
import AboutPackage from "../components/aboutpackage";
import InfoBanner from "../components/infobanner";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Amenitites from "../components/Amenities";
import UmbrellaHeader from "../components/umbrellaheader";
import Map from "../components/map";
import InfoBannerSmall from "../components/infobannersmall";
import AdBar from "../components/adbar";

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
      <InfoBanner
        b1={"PAX / Per Person Rates"}
        b2={"Customized Experience"}
        b3={"24/7 Dedicated Assistance"}
      />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={"Weddings and Ceremonies Destination Event Planning"}
              />
              <Description
                header={"About"}
                p1={
                  "Discover two of South America's greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides."
                }
                p2={
                  "Brazil's view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina's side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world."
                }
              />
              <AboutPackage header={"Venue Options"} />
                <CarouselComponent></CarouselComponent>
              <Amenitites header={"Inclusions"} />
              <UmbrellaHeader header={"PAX / Per Person Rates"}></UmbrellaHeader>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Map header={"Venue Locations"} />
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

export default EventPlanning;
