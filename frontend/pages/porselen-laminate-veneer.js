import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseOneTop from "../components/Courses/CourseOne/CourseOneTop";
import CourseOneMiddle from "../components/Courses/CourseOne/CourseOneMiddle";
import CourseProgramOne from "../components/Courses/CourseOne/CourseProgramOne";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const CourseOne = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="Porselen Laminate Veneer" />
        <meta name="keywords" content="porselen laminate veneer, porselen laminate"/>
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