import React from "react";
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

const HotelDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <Thumbnail
        header={"Accomodation Facilities"}
        subheader={"Certified Quality Tourism"}
        tagline={"We vouch for the excellence of our accomodation facilities."}
        navigation={"Hotel Booking"}
      ></Thumbnail>
      <div className="pp-main">
        <div className="pp-content">
          <div className="pd-main">
            <div className="pd-left">
              <DetailsPageHeader
                header={"La Gavía Condominium Resort"}
              ></DetailsPageHeader>
              <Description
                header={"Description"}
                p1={
                  "Located in one of the most beautiful and exclusive beaches in the Ecuadorian province of Esmeraldas. This elegant condominium resort, located in the hills within the Playa de Same Casablanca, is undoubtedly the most attractive and exclusive offer to enjoy your vacations. It has luxury apartments ready to receive our guests. Divided into two blocks alienated with the movement of the sun, the breeze and the best view of the mountains and 360 degree view to the bay of Same."
                }
              ></Description>
              <CarouselComponent></CarouselComponent>
              <div className="umbrella-header">
                <img src={umbrella}></img>
                <h4>Whole Apartments Available</h4>
              </div>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Apartments></Apartments>
              <Amenitites header={"Condominium Resort Amenities"}></Amenitites>
              <Map header={"Location"}></Map>
            </div>
            <div className="pd-right">
              <AdBar></AdBar>
            </div>
          </div>
        </div>
      </div>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default HotelDetails;
