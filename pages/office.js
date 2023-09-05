import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OfficeContent from "../components/Office/OfficeContent";
import Footer from "../components/_App/Footer";

const Office = () =>{
    return(
        <>

        <Navbar />

        <PageBanner
        pageTitle="Ofis Tanıtım"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Ofis Tanıtım"
        imgClass="bg-1"
      />

        <span className="top-title" style={{textAlign:"center", width:"100%", marginTop: "3vh"}}>Ofis Tanıtım</span>

        <OfficeContent />

        <Footer />

          </>
    )
}

export default Office