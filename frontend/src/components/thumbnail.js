import React from "react";

const Thumbnail = ({ header, subheader, tagline, navigation}) => {
  return (
    <div className="thumb-main">
      <div className="thumb-content">
        <div className="thumb-left">
          <div className="thumb-left-text">
            <h3>{header}<span>{subheader}</span></h3>            
          </div>
          <p>{tagline}</p>
        </div>
        <div className="thumb-right">
          <a className="thumb-home-link">Home</a>
          <p>&gt;</p>
          <a className="thumb-self-link">{navigation}</a>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
