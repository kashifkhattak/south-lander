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
                Select your package
                </option>
                <option value="Package">Galapagos: Island Hopping</option>
                <option value="Package">Galapagos: Isabela Island</option>
                <option value="Package">Coast: Beach Hopping</option>
                <option value="Package">Andes: Quito & Beyond</option>
                <option value="Package">Andes: Cuenca & Beyond</option>
                <option value="Package">Amazonia: Cuyabeno</option>
                <option value="Package">Summits: High Altitude Ecuador</option>
                <option value="Package">3 Worlds: Mainland Ecuador</option>
                <option value="Package">4 Worlds: Mainland Ecuador + Galapagos</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="Adults">1</option>
                <option value="Adults">2</option>
                <option value="Adults">3</option>
                <option value="Adults">4</option>
                <option value="Adults">5</option>
                <option value="Adults">6+</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
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
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Occupants Per Room
                </option>
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
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
                type="number"
                id="email"
                name="email"
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
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
            {activeIndex === 3 && <div style={{display: "flex", paddingBottom: "10px", flexDirection: "column", alignItems: "flex-start"}}>
              <label style={{fontSize: "14.5px", fontFamily: "poppins", color: "#333"}} htmlFor="event-description">Briefly describe the event you want us to customize:</label>
              <textarea 
                style={{width: "100%", border: "1px solid #efefef"}}
                id="event-description"
                name="event-description"
                rows={4}
              />
            </div>}
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
                type="number"
                id="email"
                name="email"
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
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
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="Children">1</option>
                <option value="Children">2</option>
                <option value="Children">3</option>
                <option value="Children">4</option>
                <option value="Children">5</option>
                <option value="Children">6+</option>
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
              type="number"
              placeholder="Enter your ID number"
              />
             </div>
            <div className="bf-row">
              <input
                type="number"
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
                  Select your tour of interest
                </option>
                <option value="interest">Quito City and Old Town</option>
                <option value="interest">Cotopaxi Volcano, Limpiopungo Lagoon and Forest Hike</option>
                <option value="interest">San Pablo Lake, Bird Sanctuary and Otavalo Market</option>
                <option value="interest">Quilotoa High Altitude Volcano Lagoon Hike</option>
                <option value="interest">Palmira Desert and Riobamba City</option>
                <option value="interest">Pailón del Diablo and Waterfall Experience</option>
                <option value="interest">Cuenca City and Old Town</option>
                <option value="interest">Cajas National Park Paramo Hike</option>
                <option value="interest">Cuyabeno River Canoeing, Hike and Laguna Grande Swim</option>
                <option value="interest">Cuyabeno Deep Jungle Hike and Wildlife Experience</option>
                <option value="interest">Mompiche Beach and Surf</option>
                <option value="interest">Same Fishing and Whale Watching</option>
              </select>
            </div>

            <div className="bf-row-single">
              <p style={{color:"black"}}>- Pick-Up -</p>
            </div>

            <div className="bf-row-single">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Pick up location"
                required
              />
            </div>

            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Select car type
                </option>
                <option value="car">Micro</option>
                <option value="car">Mini</option>
                <option value="car">Prime</option>
                <option value="car">Prime SUV</option>
                <option value="car">Luxury Cars</option>
                <option value="car">Mini Van</option>
                <option value="car">Small Bus</option>
                <option value="car">Luxury Bus</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Total Passenger
                </option>
                <option value="Passenger">1</option>
                <option value="Passenger">2</option>
                <option value="Passenger">3</option>
                <option value="Passenger">4</option>
                <option value="Passenger">5</option>
                <option value="Passenger">10</option>
                <option value="Passenger">15</option>
                <option value="Passenger">20</option>
                <option value="Passenger">50</option>
                <option value="Passenger">100</option>
              </select>
            </div>
            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Adults
                </option>
                <option value="Passenger">1</option>
                <option value="Passenger">2</option>
                <option value="Passenger">3</option>
                <option value="Passenger">4</option>
                <option value="Passenger">5</option>
                <option value="Passenger">10</option>
                <option value="Passenger">15</option>
                <option value="Passenger">20</option>
                <option value="Passenger">50</option>
                <option value="Passenger">100</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Children
                </option>
                <option value="Passenger">1</option>
                <option value="Passenger">2</option>
                <option value="Passenger">3</option>
                <option value="Passenger">4</option>
                <option value="Passenger">5</option>
                <option value="Passenger">10</option>
                <option value="Passenger">15</option>
                <option value="Passenger">20</option>
                <option value="Passenger">50</option>
                <option value="Passenger">100</option>
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
            <select id="request" name="request" required>
                <option value="" disabled selected>
                  Pick Up time
                </option>
                <option value="time"> 01:00 AM</option>
                <option value="time"> 02:00 AM</option>
                <option value="time"> 03:00 AM</option>
                <option value="time"> 04:00 AM</option>
                <option value="time"> 05:00 AM</option>
                <option value="time"> 06:00 AM</option>
                <option value="time"> 07:00 AM</option>
                <option value="time"> 08:00 AM</option>
                <option value="time"> 09:00 AM</option>
                <option value="time"> 10:00 AM</option>
                <option value="time"> 11:00 AM</option>
                <option value="time"> 12:00 noon</option>
                <option value="time"> 13:00 PM</option>
                <option value="time"> 14:00 PM</option>
                <option value="time"> 15:00 PM</option>
                <option value="time"> 16:00 PM</option>
                <option value="time"> 17:00 PM</option>
                <option value="time"> 18:00 PM</option>
                <option value="time"> 19:00 PM</option>
                <option value="time"> 20:00 PM</option>
                <option value="time"> 21:00 PM</option>
                <option value="time"> 22:00 PM</option>
                <option value="time"> 23:00 PM</option>
                <option value="time"> 24:00 midnight</option>
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
                type="number"
                id="email"
                name="email"
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
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
                <option value="Event">Mago de Oz</option>
                <option value="Event">Miley Cyrus</option>
                <option value="Event">Boda Aguilar-Vielma</option>
                <option value="Event">Christ King Convention</option>
                <option value="Event">Charles Darwin Fund Project</option>               
              </select>
            </div>
            <div className="bf-row">
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Location">Non Applicable</option>
                <option value="Location">General</option>
                <option value="Location">Palco</option>
                <option value="Location">Tribuna</option>
                <option value="Location">Black Box</option>
              </select>
              <select id="request" name="request" required>
                <option value="" disabled selected>
                  No. of Tickets
                </option>
                <option value="Tickets">1</option>
                <option value="Tickets">2</option>
                <option value="Tickets">3</option>
                <option value="Tickets">4</option>
                <option value="Tickets">5</option>
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
                type="number"
                id="email"
                name="email"
                placeholder="Enter your ID number"
                required
              />
            </div>
            <div className="bf-row">
              <input
                type="number"
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
            <div className="bf-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Place/City/Port of Origin"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Place/City/Port of Origin"
                required
              />
            </div>

            <div className="transport">
              <input
              type="checkbox"
              id="transport1"
              />
              <label for="transport1">Flight (If Available b/w Locations)</label>
              <input
              type="checkbox"
              id="transport2"
              />
              <label for="transport2">Exclusive Land Transport</label>
              <input
              type="checkbox"
              id="transport3"
              />
              <label for="transport3">Public Land Transport</label>
            </div>

          <div style={{display: "flex", paddingBottom: "10px", flexDirection: "column", alignItems: "flex-start"}}>
              <textarea 
                style={{width: "100%", border: "1px solid #efefef"}}
                id="event-description"
                name="event-description"
                placeholder="Briefly describe your transport needs..."
                rows={4}
              />
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
