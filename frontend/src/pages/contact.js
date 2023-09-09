import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionHeader from "../components/sectionheader";
import Tips from "../components/tips";
import Inquiry from "../components/inquiry";
import ContactsFooter from "../components/contactsfooter";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <SectionHeader
        header={"Contact Us"}
        description={
          "Explore Ecuador's most innovative destination experience offer: all-inclusive vacation packages, acoomodation facilities, guaranteed life-long timeshares, exclusive vacation rentals, unique tours and events."
        }
      ></SectionHeader>
      <Inquiry></Inquiry>
      <ContactsFooter></ContactsFooter>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default Contact;
