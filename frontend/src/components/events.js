import React from "react";
import { Link } from "react-router-dom";

const Events = ({data}) => {
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
              <th >#</th>
              <th style={{textAlign: 'center'}}>Event | Date</th>
              <th >Location</th>
              <th >Time</th>
              <th >Price</th>
              <th >Save a Spot!</th>
            </tr>
            {data?.map((d, index) => <tr>
              <td>{index + 1}</td>
              <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={d.imagePath} alt="" />
                <Link to={`/package-details/${d._id}`}>
                  {d.title} | {d.date}
                </Link>
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
