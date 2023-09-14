import React from "react";
import { Link } from "react-router-dom";
import iplace from "../assets/images/iplace-3.jpg";

const Events = ({data}) => {
  console.log("DAAA", data);
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
              <th style={{textAlign: 'center'}}>#</th>
              <th style={{textAlign: 'center'}}>Event | Date</th>
              <th style={{textAlign: 'center'}}>Location</th>
              <th style={{textAlign: 'center'}}>Time</th>
              <th style={{textAlign: 'center'}}>Price</th>
              <th style={{textAlign: 'center', whiteSpace: 'nowrap'}}>Save a Spot!</th>
            </tr>
            {data.map((d, index) => <tr>
              <td>{index + 1}</td>
              <td style={{display: 'flex', alignItems: 'center'}}>
                <img src={d.imagePath} alt="" />
                <Link to="/package-details" className="events-title">
                  {d.title} | {d.date}
                </Link>{" "}
              </td>
              <td>{d.location}</td>
              <td>{d.time}</td>
              <td>${d.price}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Events;
