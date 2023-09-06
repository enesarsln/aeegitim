import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseTwoTop from "../components/Courses/CourseTwo/CourseTwoTop";
import CourseTwoMiddle from "../components/Courses/CourseTwo/CourseTwoMiddle";
import CourseTwoBottom from "../components/Courses/CourseTwo/CourseTwoBottom";
import Footer from "../components/_App/Footer";

const CourseTwo = () => {
    return(
        <>
        <Navbar />

        <PageBanner
        pageTitle="İmplant Destekli Protezler"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="İmplant Destekli Protezler"
        imgClass="bg-1"
      />

      <CourseTwoTop />

      <CourseTwoMiddle />

      <CourseTwoBottom />

      <Footer />
        </>
    )
}

export default CourseTwo