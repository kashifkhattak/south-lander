import React from "react";

const SectionHeader = ({ header, subheader, secondaryheader, description, id }) => {
  return (
    <>
      <div id={id} className="secheader-main">
        <div className="spe-title">
          <h2>
            {header} <span>{subheader}</span>{" "}
            {secondaryheader}
          </h2>
          <div className="title-line">
            <div className="tl-1"></div>
            <div className="tl-2"></div>
            <div className="tl-3"></div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
