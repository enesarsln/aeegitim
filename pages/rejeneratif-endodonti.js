import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseSixTop from "../components/Courses/CourseSix/CourseSixTop";
import CourseSixMiddle from "../components/Courses/CourseSix/CourseSixMiddle";
import CourseProgramSix from "../components/Courses/CourseSix/CourseProgramSix";
import Footer from "../components/_App/Footer";
import Head from "next/head";
import Script from 'next/script';

const CourseOne = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="Rejeneratif Endodonti" />
        <meta name="keywords" content="rejeneratif, rejeneratif endodonti, endodonti, endodonti rejeneratif"/>
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
        pageTitle="Rejeneratif Endodonti"
        imgClass="bg-1"
      />

      <CourseSixTop />

      <CourseSixMiddle />

      <CourseProgramSix />

      <Footer />
    </>
  )
}

export default CourseOne