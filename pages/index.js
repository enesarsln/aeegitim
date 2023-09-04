import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Facilities from "../components/HomeOne/Facility";
import AboutUs from "../components/HomeOne/AboutUs";
import Services from "../components/HomeOne/Services";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <Services />

      <FunFactStyleOne />

      <AppointmentForm />

      <Footer />
    </>
  );
};

export default Index;
