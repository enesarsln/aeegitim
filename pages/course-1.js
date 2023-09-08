import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseOneTop from "../components/Courses/CourseOne/CourseOneTop";
import CourseOneMiddle from "../components/Courses/CourseOne/CourseOneMiddle";
import CourseProgramOne from "../components/Courses/CourseOne/CourseProgramOne";
import Footer from "../components/_App/Footer";

const CourseOne = () => {
    return(
        <>
        <Navbar />

        <PageBanner
        pageTitle="Porselen Laminate"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Porselen Laminate"
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