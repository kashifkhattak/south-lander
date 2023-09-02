import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
import PackagesPage from "./pages/packagespage";
import ScrollToTop from "./components/scrolltotop";
import PackagesDetails from "./pages/packagedetails";
import HotelDetails from "./pages/hoteldetails";
import EventPlanning from "./pages/eventplanning";
import RentalDetails from "./pages/rentaldetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="package-details" element={<PackagesDetails />} />
          <Route path="hotel-details" element={<HotelDetails />} />
          <Route path="event-planning" element={<EventPlanning />} />
          <Route path="rental-details" element={<RentalDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
