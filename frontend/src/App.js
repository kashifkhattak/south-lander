import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SectionHeader from "./components/sectionheader";
import Packagebar from "./components/packagebar";
import AccomodationGallery from "./components/accomodationgallery";
import Destinationbar from "./components/destinationbar";
import WeddingBanner from "./components/weddingbanner";
import Rentalbar from "./components/rentalbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SectionHeader
        header={"All-Inclusive"}
        subheader={"Vacation Packages"}
        description={
          "The 9 perfect destination categories to travel around Ecuador and get the most out of your time and money."
        }
      ></SectionHeader>
      <Packagebar></Packagebar>
      <SectionHeader
        header={"Accomodation"}
        subheader={"Facilities"}
        description={
          "Top 4-star infraestructure around Ecuador, from modern resorts, small cruise-ships, to fully restored old hacienda houses on the andean highlands, give us try and have the experience of a lifetime."
        }
      ></SectionHeader>
      <AccomodationGallery></AccomodationGallery>
      <SectionHeader
        header={"Southlander"}
        subheader={"Destination Experience"}
        description={
          "Enjoy our destination experience offer, sit back and enjoy while our staff make it happen: weddings, mitzvahs, expos, conventions, summits, spiritual retreats, etc. including invites, RSVPs, cash gifts and/or ticket sale managing."
        }
      ></SectionHeader>
      <Destinationbar></Destinationbar>
      <WeddingBanner></WeddingBanner>
      <SectionHeader
        header={"Exclusive"}
        subheader={"Vacation Rentals"}
        description={
          "Our stock of vacation-perfect certified properties up for rent all around continental Ecuador and the Galapagos."
        }
      ></SectionHeader>
      <Rentalbar></Rentalbar>
      <SectionHeader
        header={"Ecuador"}
        subheader={"Sights and Tours"}
        description={
          "Modern infraestructure, cultural splendor, wildlife watching, sublime scenery, snowed peaked volcanoes, waves splashing white-sand beaches and more! wrapped-up in an easy-access compact territory the size of Nevada!"
        }
      ></SectionHeader>
      <Footer></Footer>
    </>
  );
}

export default App;
