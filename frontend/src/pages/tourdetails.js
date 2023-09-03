import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/carouselcomponent";
import InfoBanner from "../components/infobanner";
import AdBar from "../components/adbar";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import InfoBannerSmall from "../components/infobannersmall";
import UmbrellaHeader from "../components/umbrellaheader";
import AboutPackage from "../components/aboutpackage";

const TourDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Ecuador Sights and Tours"}
        subheader={"Whole Day Tours"}
        tagline={
          "Nothing like a professionally guided experience of your site of choosing."
        }
        navigation={"Ecuador"}
      ></Thumbnail>
      <InfoBanner b1={"Quito"} b2={"$XXX"} b3={"Whole Day"} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={"Quito City and Old Town"}
              ></DetailsPageHeader>
              <Description
                header={"Description"}
                p1={
                  "Quito, the capital of Ecuador, today a modern and cosmopolitan south american capital, was founded in the 16th century on the ruins of an Inca city and stands at an altitude of 2,850 m. Despite the 1917 earthquake, the city has the best-preserved, least altered historic centre in Latin America. The monasteries of San Francisco and Santo Domingo, and the Church and Jesuit College of La Compañía, with their rich interiors, are pure examples of the 'Baroque school of Quito', which is a fusion of Spanish, Italian, Moorish, Flemish and indigenous art."
                }
                p2={
                  "The great majority of attributes upon which the Outstanding Universal Value of the City of Quito is based are present and intact. The Historic Centre of Quito has conserved its original configuration, new constructions being built outside of the colonial centre. Indeed, based on the first plan of Quito designed in 1734 by Dionisio Alcedo y Herrera, one notes that the original plan of the streets, the blocks of houses and squares – with a few rare exceptions – is the same can be seen today. Despite numerous earthquakes that have affected it over the course of history, the city conserves the least modified historic centre of all Latin America because of the concerted action of the Municipal authorities of the Metropolitan District of Quito and the Ecuadorean government."
                }
              ></Description>
              <CarouselComponent></CarouselComponent>
              <Map header={"Location"}></Map>
              <AboutPackage
                header={"About The Tour & Itinerary"}
                tournote={true}
                tourp={
                  "Being in the equator, yet high up in the Andes, the city of Quito and its surroundings enjoy overall spring-like weather conditions, but be advised to bring comfy walking shoes, sunscreen and a warm jacket on the side; water ponchos will be provided if the weather conditions call for it."
                }
              />
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

export default TourDetails;
