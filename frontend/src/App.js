import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
import PackagesPage from "./pages/packagespage";
import ScrollToTop from "./components/scrolltotop";
import PackagesDetails from "./pages/packagedetails";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
