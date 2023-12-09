import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Facilities from "../components/HomeOne/Facility";
import AboutUs from "../components/HomeOne/AboutUs";
import Services from "../components/HomeOne/Services";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
// import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık" />
        <meta name="keywords" content="ae eğitim ve yayıncılık, ae eğitim, atilla erkan"/>
      </Head>

      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <Services />

      <FunFactStyleOne />

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
};

export default Index;
