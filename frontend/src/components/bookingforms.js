import { React, useState } from "react";

const BookingForms = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="bookingforms-main">
      <div className="bf-tabs">
        <div className="bf-tab">
          <a
            className={`${activeIndex === 1 ? "active" : "inactive"}`}
            onClick={() => handleClick(1)}
          >
            Packages
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 2 ? "active" : "inactive"}`}
            onClick={() => handleClick(2)}
          >
            Accommodation
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 3 ? "active" : "inactive"}`}
            onClick={() => handleClick(3)}
          >
            Event Planning
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 4 ? "active" : "inactive"}`}
            onClick={() => handleClick(4)}
          >
            Rentals
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 5 ? "active" : "inactive"}`}
            onClick={() => handleClick(5)}
          >
            Tours
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 6 ? "active" : "inactive"}`}
            onClick={() => handleClick(6)}
          >
            Event Tickets
          </a>
        </div>
        <div className="bf-tab">
          <a
            className={`${activeIndex === 7 ? "active" : "inactive"}`}
            onClick={() => handleClick(7)}
          >
            Transfers ✈️|🚍
          </a>
        </div>
      </div>
      <div className="bf-card">
        <div className="bf-header">
          <p>All-Inclusive Vacation Packages</p>
          <span>
            Choose from the 9 perfect destination packages to travel around
            Ecuador and get the most out of your time and money.
          </span>
        </div>
        <form className="bf-form">
          <div className="bf-row-single">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="bf-row-single">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Nationality"
              required
            />
          </div>
          <div className="bf-row">
            <select id="request" name="request" required>
              <option value="" disabled selected>
                Type of ID
              </option>
              <option value="Packages">Passport</option>
              <option value="Accommodation">Driver's License</option>
              <option value="Timesharing">Other Government Issued ID</option>
            </select>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="bf-row-single">
            <select id="request" name="request" required>
              <option value="" disabled selected>
                Facilities List
              </option>
              <option value="Packages">All-Inclusive Packages</option>
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
            <select id="request" name="request" required>
              <option value="" disabled selected>
                No. of Rooms
              </option>
              <option value="Packages">Passport</option>
              <option value="Accommodation">Driver's License</option>
              <option value="Timesharing">Other Government Issued ID</option>
            </select>
            <select id="request" name="request" required>
              <option value="" disabled selected>
                Occupants Per Room
              </option>
              <option value="Packages">Passport</option>
              <option value="Accommodation">Driver's License</option>
              <option value="Timesharing">Other Government Issued ID</option>
            </select>
          </div>
          <div className="bf-row">
            <select id="request" name="request" required>
              <option value="" disabled selected>
                No. of Adults
              </option>
              <option value="Packages">Passport</option>
              <option value="Accommodation">Driver's License</option>
              <option value="Timesharing">Other Government Issued ID</option>
            </select>
            <select id="request" name="request" required>
              <option value="" disabled selected>
                No. of Children
              </option>
              <option value="Packages">Passport</option>
              <option value="Accommodation">Driver's License</option>
              <option value="Timesharing">Other Government Issued ID</option>
            </select>
          </div>
          <div className="in-out-header">
            <p>- Check In -</p>
            <p>- Check Out -</p>
          </div>
          <div className="bf-row">
            <input
              type="date"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <input
              type="date"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="bf-row">
            <button type="submit">Buy Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForms;
