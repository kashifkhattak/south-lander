import React from "react";

const Inquiry = () => {
  return (
    <>
      <div className="inquiry-main">
        <div className="inquiry-card">
          <h4>Submit Your Inquiry</h4>
          <p>Let us know</p>
          <span>We'll get back to you ASAP</span>
          <form>
            <div className="inquiry-row">
              <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
              <input type="text" id="lastname" name="lastname" placeholder="Last Name" required />
            </div>
            <div className="inquiry-row">
              <input type="text" id="phonenum" name="phonenum" placeholder="Phone Number" required />
              <input type="text" id="email" name="email" placeholder="Email" required />
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
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="inquiry-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
