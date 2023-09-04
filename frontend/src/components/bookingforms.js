import { React, useState } from "react";

const BookingForms = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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

      {activeIndex === 1 && (
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
            <div className="bf-row-date">
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
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your phone"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your phone"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="bf-row-single">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Event Type
                </option>
                <option value="Packages">Weddings and Ceremonies</option>
                <option value="Accommodation">
                  Fairs, Expos and Conventions
                </option>
                <option value="Timesharing">
                  Spiritual Gatherings and Retreats
                </option>
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
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your phone"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="bf-row-single">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Choose your rental
                </option>
                <option value="Packages">Galapagos Park Apartment</option>
                <option value="Accommodation">
                  Galapagos Organic Farmhouse
                </option>
                <option value="Timesharing">
                  Galapagos Rustic Beach House
                </option>
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
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your phone"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="bf-row-single">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Choose your event
                </option>
                <option value="Packages">Weddings and Ceremonies</option>
                <option value="Accommodation">
                  Fairs, Expos and Conventions
                </option>
                <option value="Timesharing">
                  Spiritual Gatherings and Retreats
                </option>
              </select>
            </div>
            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Packages">Passport</option>
                <option value="Accommodation">Driver's License</option>
                <option value="Timesharing">Other Government Issued ID</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Tickets
                </option>
                <option value="Packages">Passport</option>
                <option value="Accommodation">Driver's License</option>
                <option value="Timesharing">Other Government Issued ID</option>
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
      )}
    </div>
  );
};

export default BookingForms;
