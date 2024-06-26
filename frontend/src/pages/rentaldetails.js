import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import {  useParams } from "react-router-dom";
import CarouselComponent from "../components/carouselcomponent";
import InfoBanner from "../components/infobanner";
import Amenitites from "../components/Amenities";
import AdBar from "../components/adbar";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import InfoBannerSmall from "../components/infobannersmall";
import rentalService from "../services/rental-service";
import withAuth from "../hoc/withAuth";

const RentalDetails = () => {
  const {id} = useParams()
  const [rentalDetails, setRentalDetails] = useState()
  useEffect(() => {
    rentalService.getrentalDetail().then(response => {
      const filteredDetails = response.find(r => r.rentalId === id)
      setRentalDetails(filteredDetails)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Exclusive Vacation Rentals"}
        subheader={""}
        tagline={
          "Our stock of vacation-perfect certified properties up for rent all around continental Ecuador and the Galapagos."
        }
        navigation={"Vacation Rentals"}
      />
      <InfoBanner data={rentalDetails} />
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={rentalDetails?.title}
                rating={rentalDetails?.rating}
              />
              <Description
                header={"About Casa Bonita"}
                p1={rentalDetails?.description}

              />
              {rentalDetails && <CarouselComponent images={rentalDetails?.photoGallery}/>}
              <Amenitites header={"Rental Amenities"} data={rentalDetails?.amenities} />
              <Map header={"Location"} location={rentalDetails?.location} />
              <InfoBannerSmall data={rentalDetails}/>
            </div>
            <div className="pd-right">
              <AdBar data={rentalDetails?.rentalHighlights}/>
            </div>
          </div>
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default withAuth(RentalDetails);
