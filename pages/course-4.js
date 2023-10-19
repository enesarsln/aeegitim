import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import CourseFourTop from "../components/Courses/CourseFour/CourseFourTop";
import CourseProgramFour from "../components/Courses/CourseFour/CourseProgramFour";
import CourseFourMiddle from "../components/Courses/CourseFour/CourseFourMiddle";

const CourseFour = () => {
  return (
    <>

      <Navbar />

      <PageBanner
        pageTitle="Dental Foto"
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