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
          <a className={`${activeIndex === 1 ? "active" : "inactive"}`} onClick={() => handleClick(1)}>Packages</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 2 ? "active" : "inactive"}`} onClick={() => handleClick(2)}>Accommodation</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 3 ? "active" : "inactive"}`} onClick={() => handleClick(3)}>Event Planning</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 4 ? "active" : "inactive"}`} onClick={() => handleClick(4)}>Rentals</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 5 ? "active" : "inactive"}`} onClick={() => handleClick(5)}>Tours</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 6 ? "active" : "inactive"}`} onClick={() => handleClick(6)}>Event Tickets</a>
        </div>
        <div className="bf-tab">
          <a className={`${activeIndex === 7 ? "active" : "inactive"}`} onClick={() => handleClick(7)}>Transfers</a>
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
        <form>
          <div className="inquiry-row">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="inquiry-row">
            <input
              type="text"
              id="phonenum"
              name="phonenum"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="inquiry-row">
            <select id="request" name="request" required>
              <option value="" disabled selected>
                How may we help you?
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
          <div className="inquiry-row">
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="inquiry-row">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForms;
