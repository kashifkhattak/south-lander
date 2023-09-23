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
import variantService from "../services/variant-service";

const PackagesDetails = () => {
  const {id} = useParams()
  const [packageDetails, setPackageDetails] = useState()
  useEffect(() => {
    variantService.getPackageVariantDetail().then(response => {
      const filteredDetails = response?.find(r => r.variantId === id)
      setPackageDetails(filteredDetails)
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
      <InfoBanner data={packageDetails} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader header={packageDetails?.title} rating={packageDetails?.rating} />
              <Description
                header={"Description"}
                p1={packageDetails?.description}

              />
             {packageDetails && <CarouselComponent images={packageDetails?.photoGallery}/>}
              <Map header={"Location"} location={packageDetails?.location}/>
              <div className="umbrella-header">
                <img src={umbrella} alt=""/>
                <h4>About The Package</h4>
              </div>
              <AboutPackage data={packageDetails}/>
              <div className="umbrella-header">
                <img src={umbrella} alt="" />
                <h4>Detailed Day Wise Itinerary</h4>
              </div>
              {packageDetails?.itinerary?.map(i => <Itinerary data={i}/>)}
              <InfoBannerSmall data={packageDetails}/>
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
