import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AboutUsCourses from "../components/AboutUs/AboutUsCourses";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AboutUsText from "../components/AboutUs/AboutUsText";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Özgeçmiş"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Özgeçmiş"
        imgClass="bg-1"
      />

      <AboutUsText />

      <AboutUsCourses />

      <FunFactStyleOne />


      <Footer />
    </>
  );
};

export default About;
