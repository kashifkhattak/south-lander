import React from "react";
import { Link } from "react-router-dom";

const Events = ({ data }) => {
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
              <th style={{ textAlign: "left", paddingLeft:"30px" }}>Event | Date</th>
              <th id="toHide">Location</th>
              <th id="toHide">Time</th>
              <th id="toHide">Price</th>
              <th>Save a Spot!</th>
            </tr>
            {data?.map((d, index) => (
              <tr>
                <td>{index + 1}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "30px",
                    marginLeft: "20px"
                  }}
                >
                  <img src={d.imagePath} alt="" />
                  {d.title} | {d.date}
                </td>
                <td id="toHide">{d.location}</td>
                <td id="toHide">{d.time}</td>
                <td id="toHide">${d.price}</td>
                <td>
                <Link to={`/ticket-details/${d._id}`}>Explore</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Events;
