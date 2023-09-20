import React from "react";
import { Link } from "react-router-dom";
import UmbrellaHeader from "./umbrellaheader";

const Map = ({header, location}) => {
  return (
    <>
      <UmbrellaHeader header={header} />
      <iframe
        title={header}
        src={location ?? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936560.5681945613!2d-90.70041025498932!3d-0.6568819820470502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aaa5f3c9454fba5%3A0x900d7fee5795677f!2sSanta%20Cruz%20Island!5e0!3m2!1sen!2sus!4v1630763724768!5m2!1sen!2sus"}
        width="100%"
        height="350"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Map;
