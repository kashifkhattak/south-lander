import React from "react";
import { Link } from "react-router-dom";
import blueimg from "../assets/images/02.jpeg";

const Pax = ({ data }) => {
    return (
        <>
            <div className="apart-main">
                <div className="apart-one">
                    <img src={data.imagePath} alt="" />
                </div>
                <div className="apart-two">
                    <h2>{data.title}</h2>
                    <p className="select-label">
                        <b>About: </b>{data.about}
                    </p>
                    <div>
                        <div className="select-label"><b>Number of People:</b> </div>
                        <div>
                            <select className="select-dropdown">
                            <option>Choose an Option</option>
                            <option>1-5</option>
                            <option>5-10</option>
                            <option>10-15</option>
                            <option>15-20</option>
                            <option>20-25</option>
                            <option>25-30</option>
                            <option>30-35</option>
                            <option>35-40</option>
                            <option>40-45</option>
                            <option>45-50</option>
                            <option>50-55</option>
                            <option>55-60</option>
                            <option>60-65</option>
                            <option>65-70</option>
                            <option>70-75</option>
                            <option>75-80</option>
                            <option>80-85</option>
                            <option>85-90</option>
                            <option>90-95</option>
                            <option>95-100</option>
                        </select>
                        </div>
                    </div>
                    <div>
                        <div className="select-label"><b>Ticket Sale Management: </b></div>
                        <div><select className="select-dropdown"><option>Choose an Option</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="apart-three">
                    <h5>Price Per Night</h5>
                    <span>${data.rate}</span>
                    <Link>Book Now</Link>
                </div>
            </div>
        </>
    );
};

export default Pax;
