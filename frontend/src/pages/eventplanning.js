import React, { useEffect, useState } from "react";
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
import accomodationService from "../services/accomodation-service";
import { useParams } from "react-router-dom";
import eventService from "../services/event-service";

const EventPlanning = () => {
  const { id } = useParams();

  const [accomodation, setAccomodation] = useState([]);
  const [eventDetails, setEventDetails] = useState();

  useEffect(() => {
    accomodationService
      .getAccomodations()
      .then((response) => setAccomodation(response));
    eventService.getEventPlanningDetail().then((response) => {
      const filteredEvents = response.find((r) => r.eventPlanningId === id);
      setEventDetails(filteredEvents);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Southlander Destination Experience"}
        subheader={""}
        tagline={
          "Enjoy our professional event planning services and uniquely customized destination experiences."
        }
        navigation={"Weddings and Ceremonies"}
      />
      <InfoBanner data={eventDetails}
      />
      {eventDetails && (
        <div className="pp-main">
          <div className="pp-content">
            <div className="pd-main">
              <div className="pd-left">
                <DetailsPageHeader header={eventDetails.title} rating={eventDetails.rating} />
                <Description
                  header={"About"}
                  p1={eventDetails.description}
                />
                <AboutPackage header={"Venue Options"} data={eventDetails.venueOptions}/>
                <CarouselComponent images={eventDetails.photoGallery} />
                <Amenitites header={"Inclusions"} data={eventDetails.inclusions}/>
                <UmbrellaHeader
                  header={"PAX / Per Person Rates"}
                />
                {accomodation.map((a) => (
                  <Apartments data={a} />
                ))}
                <Map header={"Venue Locations"} location={eventDetails.location}/>
                <InfoBannerSmall data={eventDetails}/>
              </div>
              <div className="pd-right">
                <AdBar />
              </div>
            </div>
          </div>
        </div>
      )}
      <Tips />
      <Footer />
    </>
  );
};

export default EventPlanning;
