import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactContent from "../components/ContactUs/ContactContent";
// import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";
import Head from "next/head";
import Script from 'next/script';

const Contact = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık İletişim" />
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
        pageTitle="İletişim"
        imgClass="bg-1"
      />
      
      <ContactContent />

     {/* <ContactForm /> */}

      <Footer />
    </>
  );
};

export default Contact;
