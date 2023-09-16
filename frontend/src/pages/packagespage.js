import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import SectionHeader from "../components/sectionheader";
import SinglePackage from "../components/singlepackage";
import variantService from "../services/variant-service";


const PackagesPage = () => {
  const [packageVariant, setPackageVariant] = useState([])
  useEffect(() => { 
    variantService.getPackageVariant().then(response => {
    console.log("package variant", packageVariant);
      setPackageVariant(response)
    })
  
  }, [])
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
          {packageVariant.map(v =>  <SinglePackage  data={v}/>)}
         
        </div>
      </div>
      <Tips />
      <Footer />
    </>
  );
};

export default PackagesPage;
