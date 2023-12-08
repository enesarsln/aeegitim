import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseThreeTop from "../components/Courses/CourseThree/CourseThreeTop";
import CourseThreeMiddle from "../components/Courses/CourseThree/CourseThreeMiddle";
import CourseProgramThree from "../components/Courses/CourseThree/CourseProgramThree";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const CourseThree = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="Temporomandibular Eklem Rahatsızlıkları, Bruksizm, Splint yapımı, Horlama Apareyi" />
        <meta name="keywords" content="temporomandibular, eklem rahatsızlıkları, bruksizm, splint, horlama"/>
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Temporomandibular Eklem Rahatsızlıkları, Bruksizm, Splint yapımı, Horlama Apareyi"
        imgClass="bg-1"
      />

      <CourseThreeTop />

      <CourseThreeMiddle />

      <CourseProgramThree />

      <Footer />

    </>
  )
}

export default CourseThree