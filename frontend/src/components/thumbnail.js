import React from "react";

const Thumbnail = () => {
  return (
    <div className="thumb-main">
      <div className="thumb-content">
        <div className="thumb-left">
          <div className="thumb-left-text">
            <h3>Galapagos Islands</h3>
            <span>All-Inclusive Packages</span>
          </div>
          <p>Let's hop around the Galapagos Islands.</p>
        </div>
        <div className="thumb-right">
          <a className="thumb-home-link">Home</a>
          <p>&gt;</p>
          <a className="thumb-self-link">Galapagos Island Hopping</a>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
