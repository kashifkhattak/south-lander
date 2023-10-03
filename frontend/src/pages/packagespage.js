import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tips from "../components/tips";
import Thumbnail from "../components/thumbnail";
import SectionHeader from "../components/sectionheader";
import SinglePackage from "../components/singlepackage";
import variantService from "../services/variant-service";
import { useParams } from "react-router-dom";


const PackagesPage = () => {
  const {id} = useParams()
  const [packageVariant, setPackageVariant] = useState([])
  useEffect(() => { 
    variantService.getPackageVariant().then(response => {
      const filteredResponse = response.filter(r => r.packageId === id)
      setPackageVariant(filteredResponse)
    })
  }, [id])

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
