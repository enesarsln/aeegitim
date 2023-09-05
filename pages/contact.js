import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactContent from "../components/ContactUs/ContactContent";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="bg-1"
      />
      <ContactContent />

     <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
