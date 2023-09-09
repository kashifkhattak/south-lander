import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionHeader from "../components/sectionheader";
import Tips from "../components/tips";
import Inquiry from "../components/inquiry";
import ContactsFooter from "../components/contactsfooter";

const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="nf-main">
        <h2>Page Not Found</h2>
        <h3>404</h3>
        <h4>Top Website Pages</h4>
        <div className="pop-pages">
            <a href="#">Home</a>
            <a href="#">Tour Packages</a>
            <a href="#">Best Places</a>
            <a href="#">World Events List</a>
            <a href="#">Discount Packages</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="cf-down-nf"></div>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
