import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseOneTop from "../components/Courses/CourseOne/CourseOneTop";
import CourseOneMiddle from "../components/Courses/CourseOne/CourseOneMiddle";
import CourseProgramOne from "../components/Courses/CourseOne/CourseProgramOne";
import Footer from "../components/_App/Footer";
import Head from "next/head";
import Script from 'next/script';

const CourseOne = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="Porselen Laminate Veneer" />
        <meta name="keywords" content="porselen laminate veneer, porselen laminate"/>
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
        pageTitle="Porselen Laminate Veneer"
        imgClass="bg-1"
      />

      <CourseOneTop />

      <CourseOneMiddle />

      <CourseProgramOne />

      <Footer />
    </>
  )
}

export default CourseOne