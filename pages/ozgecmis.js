import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AboutUsCourses from "../components/AboutUs/AboutUsCourses";
import ContactForm from "../components/ContactUs/ContactForm";
import AboutUsText from "../components/AboutUs/AboutUsText";
import Head from "next/head";
import Script from 'next/script';

const About = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık" />
        <meta name="keywords" content="ae eğitim ve yayıncılık, ae eğitim, atilla erkan"/>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2SWZPRKWT1" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2SWZPRKWT1');
            `,
          }}
        />
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
