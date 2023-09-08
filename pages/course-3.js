import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseThreeTop from "../components/Courses/CourseThree/CourseThreeTop";
import CourseThreeMiddle from "../components/Courses/CourseThree/CourseThreeMiddle";
import CourseProgramThree from "../components/Courses/CourseThree/CourseProgramThree";
import Footer from "../components/_App/Footer";

const CourseThree = () => {
    return(
        <>

        <Navbar />

        <PageBanner
        pageTitle="Temporodibular"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Temporodibular"
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