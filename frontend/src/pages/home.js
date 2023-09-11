import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SectionHeader from "../components/sectionheader";
import Packagebar from "../components/packagebar";
import AccomodationGallery from "../components/accomodationgallery";
import Destinationbar from "../components/destinationbar";
import WeddingBanner from "../components/weddingbanner";
import Rentalbar from "../components/rentalbar";
import ToursGallery from "../components/toursgallery";
import Events from "../components/events";
import Tips from "../components/tips";
import packageService from "../services/package-service";
import accomodationService from "../services/accomodation-service";

const Home = () => {

  const [packages, setPackages] = useState([])
  const [accomodation, setAccomodation] = useState([])
  console.log("packages", packages);
  console.log("accomodation", accomodation);

  useEffect(()=>{
    packageService.getPackages().then(response => setPackages(response))
    accomodationService.getAccomodations().then(response => setAccomodation(response))
  },[])

  return (
    <>
      <Navbar></Navbar>
      <Hero
        title={"Southlander Travel"}
        subtitle={
          "Explore Ecuador's most innovative destination experience offer: all-inclusive vacation packages, destination events, explore Ecuador through our unique tours, or enjoy our exclusive vacation rentals around the country."
        }
      ></Hero>
      <SectionHeader
        id="packages"
        header={"All-Inclusive"}
        subheader={"Vacation Packages"}
        description={
          "The 9 perfect destination categories to travel around Ecuador and get the most out of your time and money."
        }
      ></SectionHeader>
      <Packagebar packages={packages}/>
      <SectionHeader
        id="accomodation"
        header={"Accomodation"}
        subheader={"Facilities"}
        description={
          "Top 4-star infraestructure around Ecuador, from modern resorts, small cruise-ships, to fully restored old hacienda houses on the andean highlands, give us try and have the experience of a lifetime."
        }
      ></SectionHeader>
      <AccomodationGallery accomodation={accomodation} />
      <SectionHeader
        id="event"
        header={"Southlander"}
        subheader={"Destination Experience"}
        description={
          "Enjoy our destination experience offer, sit back and enjoy while our staff make it happen: weddings, mitzvahs, expos, conventions, summits, spiritual retreats, etc. including invites, RSVPs, cash gifts and/or ticket sale managing."
        }
      ></SectionHeader>
      <Destinationbar></Destinationbar>
      <WeddingBanner></WeddingBanner>
      <SectionHeader
        id="rentals"
        header={"Exclusive"}
        subheader={"Vacation Rentals"}
        description={
          "Our stock of vacation-perfect certified properties up for rent all around continental Ecuador and the Galapagos."
        }
      ></SectionHeader>
      <Rentalbar></Rentalbar>
      <SectionHeader
        id="tours"
        header={"Ecuador"}
        subheader={"Sights and Tours"}
        description={
          "Modern infraestructure, cultural splendor, wildlife watching, sublime scenery, snowed peaked volcanoes, waves splashing white-sand beaches and more! wrapped-up in an easy-access compact territory the size of Nevada!"
        }
      ></SectionHeader>
      <ToursGallery></ToursGallery>
      <SectionHeader
        id="tickets"
        header={"Hands On"}
        subheader={"Event Tickets And Event Packages"}
        description={
          "Experience the thrill of unique tourism attractions with our all-inclusive special events packages; from world-renowned events to charming community festivals and park programs, we've got you covered. Book now and let us take care of everything, so you can focus on enjoying every moment of your unforgettable event experience!"
        }
      ></SectionHeader>
      <Events></Events>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default Home;
