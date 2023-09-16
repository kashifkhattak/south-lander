import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import { Link, useParams } from "react-router-dom";
import CarouselComponent from "../components/carouselcomponent";
import InfoBanner from "../components/infobanner";
import AdBar from "../components/adbar";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import InfoBannerSmall from "../components/infobannersmall";
import UmbrellaHeader from "../components/umbrellaheader";
import AboutPackage from "../components/aboutpackage";
import tourService from "../services/tour-service";

const TourDetails = () => {
  const {id} = useParams()
  const [tourDetails, setTourDetails] = useState()
  useEffect(() => {
    tourService.getTourDetails().then(response => {
      const filteredDetails = response.find(r => r.tourId === id)
      setTourDetails(filteredDetails)
    })
  }, [])
  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Ecuador Sights and Tours"}
        subheader={"Whole Day Tours"}
        tagline={
          "Nothing like a professionally guided experience of your site of choosing."
        }
        navigation={"Ecuador"} />
      <InfoBanner b1={"Quito"} b2={"$XXX"} b3={"Whole Day"} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={tourDetails?.title}
              />
              <Description
                header={"Description"}
                p1={tourDetails?.Description}
              />
              {tourDetails && <CarouselComponent images={tourDetails?.photoGallery}/>}
              <Map header={tourDetails?.location} />
              <AboutPackage
                header={"About The Tour & Itinerary"}
                data={tourDetails}
                tournote={true}
                tourp={tourDetails?.notes}
              />
              <InfoBannerSmall data={tourDetails}/>
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

export default TourDetails;
