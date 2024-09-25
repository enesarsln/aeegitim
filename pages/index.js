import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Facilities from "../components/HomeOne/Facility";
import AboutUs from "../components/HomeOne/AboutUs";
import Services from "../components/HomeOne/Services";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";
import Head from 'next/head';
import Script from 'next/script';

const Index = () => {
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

      <MainBanner />

      <Facilities />

      <AboutUs />

      <Services />

      <FunFactStyleOne />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Index;
