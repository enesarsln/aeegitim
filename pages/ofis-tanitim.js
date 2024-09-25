import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OfficeContent from "../components/Office/OfficeContent";
import Footer from "../components/_App/Footer";
import Head from "next/head";
import Script from 'next/script';

const Office = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık Ofis" />
        <meta name="keywords" content="ae eğitim ve yayıncılık, ae eğitim, ae eğitim ofis"/>
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
        pageTitle="Ofis Tanıtım"
        imgClass="bg-1"
      />

      <OfficeContent />

      <Footer />

    </>
  )
}

export default Office