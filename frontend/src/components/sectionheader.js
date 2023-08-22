import React from "react";

const SectionHeader = ({ header, subheader, description }) => {
  return (
    <>
      <div className="secheader-main">
        <div class="spe-title">
          <h2>
            {header} <span>{subheader}</span>
          </h2>
          <div class="title-line">
            <div class="tl-1"></div>
            <div class="tl-2"></div>
            <div class="tl-3"></div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
