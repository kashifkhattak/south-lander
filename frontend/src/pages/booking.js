import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Tips from "../components/tips";
import BookingForms from "../components/bookingforms";

const Booking = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        title={"BOOKING MADE EASY"}
        subtitle={
          "EXPLORE ECUADOR'S MOST INNOVATIVE DESTINATION EXPERIENCE OFFER: ALL-INCLUSIVE VACATION PACKAGES, DESTINATION EVENTS, EXPLORE ECUADOR THROUGH OUR UNIQUE TOURS, OR ENJOY OUR EXCLUSIVE VACATION RENTALS AROUND THE COUNTRY."
        }
        forms={<BookingForms/>}
      ></Hero>
      <Tips></Tips>
      <Footer></Footer>
    </>
  );
};

export default Booking;
