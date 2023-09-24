import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
import PackagesPage from "./pages/packagespage";
import ScrollToTop from "./components/scrolltotop";
import PackagesDetails from "./pages/packagedetails";
import HotelDetails from "./pages/hoteldetails";
import EventPlanning from "./pages/eventplanning";
import RentalDetails from "./pages/rentaldetails";
import TourDetails from "./pages/tourdetails";
import NotFound from "./pages/404";
import TicketDetails from "./pages/ticketdetails";

function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Simulate an asynchronous operation (e.g., data fetching) that takes time
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 350); // Adjust the delay as needed
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Preloader />
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="package-details/:id" element={<PackagesDetails />} />
          <Route path="hotel-details/:id" element={<HotelDetails />} />
          <Route path="ticket-details/:id" element={<TicketDetails />} />
          <Route path="event-planning/:id" element={<EventPlanning />} />
          <Route path="rental-details/:id" element={<RentalDetails />} />
          <Route path="tour-details/:id" element={<TourDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
