import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import umbrella from "../assets/images/umbrella.png";
import CarouselComponent from "../components/carouselcomponent";
import Apartments from "../components/apartments";
import Amenitites from "../components/Amenities";
import DetailsPageHeader from "../components/detailspageheader";
import Description from "../components/description";
import Map from "../components/map";
import AdBar from "../components/adbar";
import { useParams } from "react-router-dom";
import accomodationService from "../services/accomodation-service";

const HotelDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  
  useEffect(() => {
    accomodationService.getAccomodationDetails().then((response) => {
      const filteredDetails = response.find((r) => r.accommodationId === id);
      setDetails(filteredDetails);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Thumbnail
        header={"Accomodation Facilities"}
        subheader={"Certified Quality Tourism"}
        tagline={"We vouch for the excellence of our accomodation facilities."}
        navigation={"Hotel Booking"}
      />
      {details && (
        <div className="pp-main">
          <div className="pp-content">
            <div className="pd-main">
              <div className="pd-left">
                <DetailsPageHeader header={details.title} rating={details.rating} />
                <Description header={"Description"} p1={details.description} />
                <CarouselComponent images={details.photoGallery} />
                <div className="umbrella-header">
                  <img src={umbrella} alt="" />
                  <h4>Whole Apartments Available</h4>
                </div>
                {details.appartments.map((appartment) => (
                  <Apartments data={appartment} />
                ))}
                <Amenitites
                  header={"Condominium Resort Amenities"}
                  data={details.amenities}
                />
                <Map header={"Location"} location={details.location} />
              </div>
              <div className="pd-right">
                <AdBar data={details?.hotelHighlights}/>
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

export default HotelDetails;
