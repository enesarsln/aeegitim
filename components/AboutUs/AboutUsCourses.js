import React from "react";


const AboutUsCourses = () => {
    return(
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
                    Porselen Laminate Veneer Eğitimi
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    İmplant Destekli Protezler Eğitimi
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Temporomandibular Eklem Rahatsızlıkları, Bruksizm, Splint ve Horlama Apareyi Yapımı Eğitimi
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
    )
}

export default AboutUsCourses