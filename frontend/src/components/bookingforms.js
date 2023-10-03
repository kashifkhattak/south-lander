import { React, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import bookingService from "../services/booking-service";
import toast from "react-hot-toast";

const BookingForms = ({ setTab, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const { register, control, handleSubmit } = useForm({ mode: "all" });

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  let type = "Packages";

  switch (tabs) {
    case 1:
      type = "Packages";
      break;
    case 2:
      type = "Accommodation";
      break;
    case 3:
      type = "Event Planning";
      break;
    case 4:
      type = "Rentals";
      break;
    case 5:
      type = "Tours";
      break;
    case 6:
      type = "Event Tickets";
      break;
    case 7:
      type = "Transfers";
      break;
    default:
      type = "Packages";
  }

  useEffect(() => {
    setTab(activeIndex);
  }, [activeIndex]);

  const onFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );

    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };


  const onAccomodationFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );
    
    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };



  const onFlightFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );
    
    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };

  const onToursFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );
    
    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };

  const onEventPlanningFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );
    

    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };

  const onTicketsFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );

    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };

  const onRentalFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
      userId: "64fc81643f85792c6765217f",
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== "")
    );
    
    bookingService
      .createBooking(filteredPayload)
      .then((response) => toast.success("Booking created sucessfully"));
  };

  return (
    <div className="bookingforms-main">
      <div className="bf-tabs">
        <div className="bf-tab">
          <span
            className={`${activeIndex === 1 ? "active" : "inactive"}`}
            onClick={() => handleClick(1)}
          >
            Packages
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 2 ? "active" : "inactive"}`}
            onClick={() => handleClick(2)}
          >
            Accommodation
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 3 ? "active" : "inactive"}`}
            onClick={() => handleClick(3)}
          >
            Event Planning
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 4 ? "active" : "inactive"}`}
            onClick={() => handleClick(4)}
          >
            Rentals
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 5 ? "active" : "inactive"}`}
            onClick={() => handleClick(5)}
          >
            Tours
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 6 ? "active" : "inactive"}`}
            onClick={() => handleClick(6)}
          >
            Event Tickets
          </span>
        </div>
        <div className="bf-tab">
          <span
            className={`${activeIndex === 7 ? "active" : "inactive"}`}
            onClick={() => handleClick(7)}
          >
            Transfers ✈️|🚍
          </span>
        </div>
      </div>

      {activeIndex === 1 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>All-Inclusive Vacation Packages</p>
            <span>
              Choose from the 9 perfect destination packages to travel around
              Ecuador and get the most out of your time and money.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
                {...register("email")}
              />
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
            </div>
            <div className="bf-row-single">
              <select id="package" required {...register("package")}>
                <option value="" disabled selected>
                  Select your package
                </option>
                <option value="Galapagos: Island Hopping">
                  Galapagos: Island Hopping
                </option>
                <option value="Galapagos: Isabela Island">
                  Galapagos: Isabela Island
                </option>
                <option value="Coast: Beach Hopping">
                  Coast: Beach Hopping
                </option>
                <option value="Andes: Quito & Beyond">
                  Andes: Quito & Beyond
                </option>
                <option value="Andes: Cuenca & Beyond">
                  Andes: Cuenca & Beyond
                </option>
                <option value="Amazonia: Cuyabeno">Amazonia: Cuyabeno</option>
                <option value="Summits: High Altitude Ecuador">
                  Summits: High Altitude Ecuador
                </option>
                <option value="3 Worlds: Mainland Ecuador">
                  3 Worlds: Mainland Ecuador
                </option>
                <option value="4 Worlds: Mainland Ecuador + Galapagos">
                  4 Worlds: Mainland Ecuador + Galapagos
                </option>
              </select>
            </div>
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="in-out-header">
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className="bf-row-date">
              <input
                type="date"
                id="checkIn"
                required
                {...register("checkIn")}
              />
              <input
                type="date"
                id="checkOut"
                placeholder="Enter your Email"
                required
                {...register("checkOut")}
              />
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 2 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Accomodation Facilities</p>
            <span>
              Top 4-star infraestructure around Ecuador, from modern resorts,
              small cruise-ships, to fully restored old hacienda houses on the
              andean highlands or choose from our stock of vacation-perfect
              certified properties up for rent all around continental Ecuador
              and the Galapagos.
            </span>
          </div>
          <form onSubmit={handleSubmit(onAccomodationFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your First Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row-single">
              <select
                id="facilitiesList"
                required
                {...register("facilitiesList")}
              >
                <option value="" disabled selected>
                  Facilities List
                </option>
                <option value="All-Inclusive Packages">
                  All-Inclusive Packages
                </option>
                <option value="Accommodation">Accommodation</option>
                <option value="Timesharing">Timesharing</option>
                <option value="Rentals">Rentals</option>
                <option value="Tours">Tours</option>
                <option value="Events">Events</option>
                <option value="Booking/Payment">Booking/Payment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="roomsCount" required {...register("roomsCount")}>
                <option value="" disabled selected>
                  No. of Rooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="roomOccupants"
                required
                {...register("roomOccupants")}
              >
                <option value="" disabled selected>
                  Occupants Per Room
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="in-out-header">
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className="bf-row">
              <input
                type="date"
                id="checkIn"
                required
                {...register("checkIn")}
              />
              <input
                type="date"
                id="checkOut"
                required
                {...register("checkOut")}
              />
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 3 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Event Planning</p>
            <span>
              Our all-inclusive vacation packages are perfect for you, but tell
              us more about your ideal vacation experience and let us customize
              you the perfect vacation package.
            </span>
          </div>
          <form onSubmit={handleSubmit(onEventPlanningFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your First Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="number"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row-single">
              <select id="event" required name="eventType" {...register("eventType")}>
                <option value="" disabled selected>
                  Event Type
                </option>
                <option value="Weddings and Ceremonies">
                  Weddings and Ceremonies
                </option>
                <option value="Fairs, Expos and Conventions">
                  Fairs, Expos and Conventions
                </option>
                <option value="Spiritual Gatherings and Retreats">
                  Spiritual Gatherings and Retreats
                </option>
              </select>
            </div>
            {activeIndex === 3 && (
              <div
                style={{
                  display: "flex",
                  paddingBottom: "10px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <label
                  style={{
                    fontSize: "14.5px",
                    fontFamily: "poppins",
                    color: "#333",
                  }}
                  htmlFor="event-description"
                >
                  Briefly describe the event you want us to customize:
                </label>
                <textarea
                  style={{ width: "100%", border: "1px solid #efefef", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px" }}
                  id="event-description"
                  name="event-description"
                  rows={4}
                  {...register("eventDescription")}
                />
              </div>
            )}
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="in-out-header">
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className="bf-row">
              <input
                type="date"
                id="checkIn"
                required
                {...register("checkIn")}
              />
              <input
                type="date"
                id="checkOut"
                required
                {...register("checkOut")}
              />
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 4 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Exclusive Vacation Rentals</p>
            <span>
              Top 4-star infraestructure around Ecuador, from modern resorts,
              small cruise-ships, to fully restored old hacienda houses on the
              andean highlands or choose from our stock of vacation-perfect
              certified properties up for rent all around continental Ecuador
              and the Galapagos.
            </span>
          </div>
          <form onSubmit={handleSubmit(onRentalFormSubmit)}  className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your First Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="number"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row-single">
              <select id="rental" required {...register("rental")}>
                <option value="" disabled selected>
                  Choose your rental
                </option>
                <option value="Galapagos Park Apartment">
                  Galapagos Park Apartment
                </option>
                <option value="Galapagos Organic Farmhouse">
                  Galapagos Organic Farmhouse
                </option>
                <option value="Galapagos Rustic Beach House">
                  Galapagos Rustic Beach House
                </option>
              </select>
            </div>
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="in-out-header">
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className="bf-row">
              <input
                type="date"
                id="checkIn"
                required
                {...register("checkIn")}
              />
              <input
                type="date"
                id="checkOut"
                required
                {...register("checkOut")}
              />
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 5 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Tours and Activities</p>
            <span>
              Modern infraestructure, cultural splendor, wildlife watching,
              sublime scenery, snowed peaked volcanoes, waves splashing
              white-sand beaches and more! wrapped-up in an easy-access compact
              territory the size of Nevada!
            </span>
          </div>
          <form onSubmit={handleSubmit(onToursFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your First Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input type="number" placeholder="Enter your ID number" />
            </div>
            <div className="bf-row">
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row-single">
              <select id="tour" required {...register("tour")}>
                <option value="" disabled selected>
                  Select your tour of interest
                </option>
                <option value="Quito City and Old Town">
                  Quito City and Old Town
                </option>
                <option value="Cotopaxi Volcano, Limpiopungo Lagoon and Forest Hike">
                  Cotopaxi Volcano, Limpiopungo Lagoon and Forest Hike
                </option>
                <option value="San Pablo Lake, Bird Sanctuary and Otavalo Market">
                  San Pablo Lake, Bird Sanctuary and Otavalo Market
                </option>
                <option value="Quilotoa High Altitude Volcano Lagoon Hike">
                  Quilotoa High Altitude Volcano Lagoon Hike
                </option>
                <option value="Palmira Desert and Riobamba City">
                  Palmira Desert and Riobamba City
                </option>
                <option value="Pailón del Diablo and Waterfall Experience">
                  Pailón del Diablo and Waterfall Experience
                </option>
                <option value="Cuenca City and Old Town">
                  Cuenca City and Old Town
                </option>
                <option value="Cajas National Park Paramo Hike">
                  Cajas National Park Paramo Hike
                </option>
                <option value="Cuyabeno River Canoeing, Hike and Laguna Grande Swim">
                  Cuyabeno River Canoeing, Hike and Laguna Grande Swim
                </option>
                <option value="Cuyabeno Deep Jungle Hike and Wildlife Experience">
                  Cuyabeno Deep Jungle Hike and Wildlife Experience
                </option>
                <option value="Mompiche Beach and Surf">
                  Mompiche Beach and Surf
                </option>
                <option value="Same Fishing and Whale Watching">
                  Same Fishing and Whale Watching
                </option>
              </select>
            </div>

            <div className="bf-row-single">
              <p style={{ color: "black" }}>- Pick-Up -</p>
            </div>

            <div className="bf-row-single">
              <input
                type="text"
                name="pickUpLocation"
                id="location"
                placeholder="Pick up location"
                required
                {...register("pickUpLocation")}
              />
            </div>

            <div className="bf-row">
              <select id="carType" required {...register("carType")}>
                <option value="" disabled selected>
                  Select car type
                </option>
                <option value="Micro">Micro</option>
                <option value="Mini">Mini</option>
                <option value="Prime">Prime</option>
                <option value="Prime SUV">Prime SUV</option>
                <option value="Luxury Cars">Luxury Cars</option>
                <option value="Mini Van">Mini Van</option>
                <option value="Small Bus">Small Bus</option>
                <option value="Luxury Bus">Luxury Bus</option>
              </select>
              <select
                id="noOfPassenger"
                name="passengersCount"
                required
                {...register("passengersCount")}
              >
                <option value="" disabled selected>
                  Total Passenger
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="in-out-header">
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className="bf-row">
              <input
                type="date"
                id="date"
                required
                {...register("date")}
              />
              <select id="time" required {...register("time")}>
                <option value="" disabled selected>
                  Pick Up time
                </option>
                <option value="1AM"> 01:00 AM</option>
                <option value="2AM"> 02:00 AM</option>
                <option value="3AM"> 03:00 AM</option>
                <option value="4AM"> 04:00 AM</option>
                <option value="5AM"> 05:00 AM</option>
                <option value="6AM"> 06:00 AM</option>
                <option value="7AM"> 07:00 AM</option>
                <option value="8AM"> 08:00 AM</option>
                <option value="9AM"> 09:00 AM</option>
                <option value="10AM"> 10:00 AM</option>
                <option value="11AM"> 11:00 AM</option>
                <option value="12PM"> 12:00 noon</option>
                <option value="13PM"> 13:00 PM</option>
                <option value="14PM"> 14:00 PM</option>
                <option value="15PM"> 15:00 PM</option>
                <option value="16PM"> 16:00 PM</option>
                <option value="17PM"> 17:00 PM</option>
                <option value="18PM"> 18:00 PM</option>
                <option value="19PM"> 19:00 PM</option>
                <option value="20PM"> 20:00 PM</option>
                <option value="21PM"> 21:00 PM</option>
                <option value="22PM"> 22:00 PM</option>
                <option value="23PM"> 23:00 PM</option>
                <option value="24AM"> 24:00 midnight</option>
              </select>
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 6 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Event Tickets</p>
            <span>
              Enjoy a lifetime of Ecuador to its fullest, search for
              location/size/price availability within our exclusive Interval®
              backed, lifetime offer: a unique destination experience, hop
              around continental Ecuador and its Galapagos Archipelago!
            </span>
          </div>
          <form onSubmit={handleSubmit(onTicketsFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="number"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row-single">
              <select id="event" required name="event" {...register("event")}>
                <option value="" disabled selected>
                  Choose your event
                </option>
                <option value="Mago de Oz">Mago de Oz</option>
                <option value="Miley Cyrus">Miley Cyrus</option>
                <option value="Boda Aguilar-Vielma">Boda Aguilar-Vielma</option>
                <option value="Christ King Convention">
                  Christ King Convention
                </option>
                <option value="Charles Darwin Fund Project">
                  Charles Darwin Fund Project
                </option>
              </select>
            </div>
            <div className="bf-row">
              <select id="location" required {...register("location")}>
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Non Applicable">Non Applicable</option>
                <option value="General">General</option>
                <option value="Palco">Palco</option>
                <option value="Tribuna">Tribuna</option>
                <option value="Black Box">Black Box</option>
              </select>
              <select id="ticketsCount" required {...register("ticketsCount")}>
                <option value="" disabled selected>
                  No. of Tickets
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 7 && (
        <div className="bf-card">
          <div className="bf-header">
            <p>Local Flights and Transfers</p>
            <span>
              Traveling around Ecuador requires planning and affordable flying
              and transfers in between destinations, book all your local needs
              of transportation with Southlander®.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFlightFormSubmit)} className="bf-form">
            <div className="bf-row-single">
              <input
                type="text"
                id="name"
                placeholder="Enter your First Name"
                required
                {...register("name")}
              />
            </div>
            <div className="bf-row-single">
              <input
                type="text"
                id="nationality"
                placeholder="Nationality"
                required
                {...register("nationality")}
              />
            </div>
            <div className="bf-row">
              <select id="idType" required {...register("idType")}>
                <option value="" disabled selected>
                  Type of ID
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Other Government Issued ID">
                  Other Government Issued ID
                </option>
              </select>
              <input
                type="number"
                name="idNumber"
                id="idNumber"
                placeholder="Enter your ID number"
                required
                {...register("idNumber")}
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                required
                {...register("phone")}
              />
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="origin"
                placeholder="Place/City/Port of Origin"
                required
                {...register("origin")}
              />
              <input
                type="text"
                id="destination"
                placeholder="Place/City/Port of Origin"
                required
                {...register("destination")}
              />
            </div>

            <div className="transport">
              <Controller
                name={"transportType"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <input
                      type="checkbox"
                      id="transport1"
                      onChange={(e) => onChange(e.target.value)}
                      value="Flight (If Available b/w Locations)"
                      checked={value === "Flight (If Available b/w Locations)"}
                    />
                    <label for="transport1">
                      Flight (If Available b/w Locations)
                    </label>
                    <input
                      type="checkbox"
                      id="transport2"
                      onChange={(e) => onChange(e.target.value)}
                      value="Exclusive Land Transport"
                      checked={value === "Exclusive Land Transport"}
                    />
                    <label for="transport2">Exclusive Land Transport</label>
                    <input
                      type="checkbox"
                      id="transport3"
                      onChange={(e) => onChange(e.target.value)}
                      value="Public Land Transport"
                      checked={value === "Public Land Transport"}
                    />
                    <label for="transport3">Public Land Transport</label>
                  </>
                )}
              />
            </div>

            <div
              style={{
                display: "flex",
                paddingBottom: "10px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <textarea
                style={{ width: "100%", border: "1px solid #efefef", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px" }}
                id="transportDescription"
                placeholder="Briefly describe your transport needs..."
                rows={4}
                {...register("transportDescription")}
              />
            </div>
            <div className="bf-row">
              <select id="adultsCount" name="adultsCount" required {...register("adultsCount")}>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
              <select
                id="childrenCount"
                required
                {...register("childrenCount")}
              >
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>
            <div className="bf-row">
              <input
                type="date"
                id="date"
                required
                {...register("date")}
              />
              <input
                type="date"
                id="time"
                required
                {...register("time")}
              />
            </div>
            <div className="bf-row">
              <button type="submit">Buy Now</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForms;
