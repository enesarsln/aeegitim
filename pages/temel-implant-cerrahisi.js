import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CourseFiveTop from "../components/Courses/CourseFive/CourseFiveTop";
import CourseFiveMiddle from "../components/Courses/CourseFive/CourseFiveMiddle";
import Footer from "../components/_App/Footer";
import Head from "next/head";
import Script from 'next/script';

const CourseFive = () => {
    return (
        <>
            <Head>
                <title>AE Eğitim ve Yayıncılık</title>
                <meta name="description" content="Temel Implant Cerrahisi" />
                <meta name="keywords" content="temel implant, temel implant cerrahisi, implant, implant cerrahisi, cerrahi, cerrahi implant" />
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
                pageTitle="Temel Implant Cerrahisi"
                imgClass="bg-1"
            />

            <CourseFiveTop />

            <CourseFiveMiddle />

            <Footer />
        </>
    )
}

export default CourseFive