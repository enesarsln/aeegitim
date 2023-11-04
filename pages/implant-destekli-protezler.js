import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseTwoTop from "../components/Courses/CourseTwo/CourseTwoTop";
import CourseTwoMiddle from "../components/Courses/CourseTwo/CourseTwoMiddle";
import CourseProgramTwo from "../components/Courses/CourseTwo/CourseProgramTwo";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const CourseTwo = () => {
  return (
    <>
     <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="İmplant Destekli Protezler" />
        <meta name="keywords" content="implant destekli protez, implant destekli protezler, implant, protez"/>
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="İmplant Destekli Protezler"
        imgClass="bg-1"
      />

      <CourseTwoTop />

      <CourseTwoMiddle />

      <CourseProgramTwo />

      <Footer />
    </>
  )
}

export default CourseTwo