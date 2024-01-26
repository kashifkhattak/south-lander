import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { useParams } from "react-router-dom";
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
import withAuth from "../hoc/withAuth";

const TicketDetails = () => {
  const {id} = useParams()
  const [ticketDetails, setTicketDetails] = useState()
  useEffect(() => {
    ticketService.getEventTicketDetail().then(response => {
      const filteredDetails = response?.find(r => r.eventTicketId === id)
      setTicketDetails(filteredDetails)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Galapagos Islands"}
        subheader={"All-Inclusive Packages"}
        tagline={"Let's hop around the Galapagos Islands."}
        navigation={"Galapagos Island Hopping"}
      />
      <InfoBanner data={ticketDetails} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader header={ticketDetails?.title} rating={ticketDetails?.rating} />
              <Description
                header={"Description"}
                p1={ticketDetails?.description}

              />
             {ticketDetails && <CarouselComponent images={ticketDetails?.photoGallery}/>}
              <Map header={"Location"} location={ticketDetails?.location}/>
              <div className="umbrella-header">
                <img src={umbrella} alt=""/>
                <h4>About The Package</h4>
              </div>
              <AboutPackage data={ticketDetails}/>
              <div className="umbrella-header">
                <img src={umbrella} alt="" />
                <h4>Detailed Day Wise Itinerary</h4>
              </div>
              {ticketDetails?.itinerary?.map(i => <Itinerary data={i}/>)}
              <InfoBannerSmall data={ticketDetails}/>
            </div>
            <div className="pd-right">
              <AdBar data={ticketDetails?.eventPackageHighlights}/>
            </div>
          </div>
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default withAuth(TicketDetails);
