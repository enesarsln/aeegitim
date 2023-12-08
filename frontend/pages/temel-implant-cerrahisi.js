import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseFiveTop from "../components/Courses/CourseFive/CourseFiveTop";
import CourseFiveMiddle from "../components/Courses/CourseFive/CourseFiveMiddle";
import CourseProgramFive from "../components/Courses/CourseFive/CourseProgramFive";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const CourseFive = () => {
    return (
        <>
            <Head>
                <title>AE Eğitim ve Yayıncılık</title>
                <meta name="description" content="Temel Implant Cerrahisi" />
                <meta name="keywords" content="temel implant, temel implant cerrahisi, implant, implant cerrahisi, cerrahi, cerrahi implant" />
            </Head>

            <Navbar />

            <PageBanner
                pageTitle="Temel Implant Cerrahisi"
                imgClass="bg-1"
            />

            <CourseFiveTop />

            <CourseFiveMiddle />

            <CourseProgramFive />

            <Footer />
        </>
    )
}

export default CourseFive