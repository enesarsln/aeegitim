import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import CourseFourTop from "../components/Courses/CourseFour/CourseFourTop";
import CourseProgramFour from "../components/Courses/CourseFour/CourseProgramFour";
import CourseFourMiddle from "../components/Courses/CourseFour/CourseFourMiddle";
import Head from "next/head";
import Script from 'next/script';

const CourseFour = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="Dental Fotoğrafçılık" />
        <meta name="keywords" content="Dental Fotoğrafçılık, dental" />
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
        pageTitle="Dental Fotoğrafçılık"
        imgClass="bg-1"
      />

      <CourseFourTop />

      <CourseFourMiddle/>

      <CourseProgramFour />

      <Footer />

    </>
  )
}

export default CourseFour