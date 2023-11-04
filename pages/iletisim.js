import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactContent from "../components/ContactUs/ContactContent";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık İletişim" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="İletişim"
        imgClass="bg-1"
      />
      
      <ContactContent />

     <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
