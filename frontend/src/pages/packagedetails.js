import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link, useParams } from "react-router-dom";
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
import ticketService from "../services/ticket-service";

const PackagesDetails = () => {
  const {id} = useParams()
  const [eventTicketDetails, setEventTicketDetails] = useState()
  useEffect(() => {
    ticketService.getEventTicketDetail().then(response => {
      const filteredDetails = response?.find(r => r.eventTicketId === id)
      setEventTicketDetails(filteredDetails)
    })
  }, [])
  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Galapagos Islands"}
        subheader={"All-Inclusive Packages"}
        tagline={"Let's hop around the Galapagos Islands."}
        navigation={"Galapagos Island Hopping"}
      />
      <InfoBanner b1={"Quito"} b2={eventTicketDetails?.price} b3={eventTicketDetails?.duration} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader header={eventTicketDetails?.title} />
              <Description
                header={"Description"}
                p={eventTicketDetails?.description}

              />
             {eventTicketDetails && <CarouselComponent images={eventTicketDetails?.photoGallery}/>}
              <Map header={"Location"} />
              <div className="umbrella-header">
                <img src={umbrella} alt=""/>
                <h4>About The Package</h4>
              </div>
              <AboutPackage data={eventTicketDetails}/>
              <div className="umbrella-header">
                <img src={umbrella} alt="" />
                <h4>Detailed Day Wise Itinerary</h4>
              </div>
              {eventTicketDetails?.Itinerary?.map(i => <Itinerary data={i}/>)}
              <InfoBannerSmall data={eventTicketDetails}/>
            </div>
            <div className="pd-right">
              <AdBar />
            </div>
          </div>
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default PackagesDetails;
