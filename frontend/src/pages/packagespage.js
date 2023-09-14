import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import SectionHeader from "../components/sectionheader";
import SinglePackage from "../components/singlepackage";


const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <Thumbnail />
      <div className="pp-main">
        <div className="pp-content">
          <SectionHeader
            header={"Discover Ecuador's"}
            subheader={"Galapagos Islands"}
          />
          <SinglePackage />
          <SinglePackage />
          <SinglePackage />
          <SinglePackage />
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default PackagesPage;
