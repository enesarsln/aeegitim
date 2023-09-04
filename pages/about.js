import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AboutUsText from "../components/AboutUs/AboutUsText";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Özgeçmiş"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Özgeçmiş"
        imgClass="bg-1"
      />

      <AboutUsText />

      <DoctorsStyleOne />

      <div className="about-area four abouts-six">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content ml-auto">
                <span className="top-title">About Us</span>
                <h2>Free Medical Camp Importance & Objectives</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration of Deserving Cases for Surgeries
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Hepatitis B & C Screening Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Consultation & Medicine
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Blood Pressure Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Diabetes Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Childbirth
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="about-img about-img-2"></div>
            </div>
          </div>
        </div>
      </div>

      <FunFactStyleOne />


      <Footer />
    </>
  );
};

export default About;
