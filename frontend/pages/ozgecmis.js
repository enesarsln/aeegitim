import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AboutUsCourses from "../components/AboutUs/AboutUsCourses";
import ContactForm from "../components/ContactUs/ContactForm";
import AboutUsText from "../components/AboutUs/AboutUsText";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık" />
        <meta name="keywords" content="ae eğitim ve yayıncılık, ae eğitim, atilla erkan"/>
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Özgeçmiş"
        imgClass="bg-1"
      />

      <AboutUsText />

      <AboutUsCourses />

      <ContactForm />

      <Footer />
    </>
  );
};

export default About;
