import React from "react";
import { Link } from "react-router-dom";
import iplace from "../assets/images/iplace-3.jpg";

const Events = () => {
  return (
    <>
      <div className="events-main">
        <input
          type="text"
          className="event-searchbar"
          placeholder="Search Event Name.."
          title="Type in a name"
        />
        <table className="events-table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Event | Date</th>
              <th className="e_h1">Location</th>
              <th className="e_h1">Time</th>
              <th className="e_h1">Price</th>
              <th>Save a Spot!</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src={iplace} alt="" />
                <Link to="/package-details" className="events-title">
                  Mago de Oz | May 15th
                </Link>{" "}
              </td>
              <td className="e_h1">Plaza de Toros, Quito</td>
              <td className="e_h1">8:30 PM</td>
              <td className="e_h1">$120.00</td>
              <td>
                <Link to="/package-details" className="link-btn" >Details</Link>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Events;
