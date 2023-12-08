import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OfficeContent from "../components/Office/OfficeContent";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const Office = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık Ofis" />
        <meta name="keywords" content="ae eğitim ve yayıncılık, ae eğitim, ae eğitim ofis"/>
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Ofis Tanıtım"
        imgClass="bg-1"
      />

      <OfficeContent />

      <Footer />

    </>
  )
}

export default Office