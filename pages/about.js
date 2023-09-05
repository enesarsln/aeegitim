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


      <div className="about-area four abouts-six">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content ml-auto">
                <h2>Kurslarımız</h2>
                <p>
                Firmamız, sağlık eğitimi alanında geniş bir yelpazede kurslar sunmaktadır.
                 Bu kurslar, öğrencilere alanlarında uzmanlaşma ve mesleki gelişim fırsatı sunar.
                  İşte sunduğumuz kurslar:
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Porselen Laminate Eğitimi
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    İmplant Destekli Protezler Eğitimi
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Temporodibular Eğitimi
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
