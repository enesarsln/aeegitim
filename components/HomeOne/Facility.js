import React from "react";
import Link from "next/link";

const Facilities = () => {
  return (
    <>
      <div className="second-facility-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon1.png" alt="Image" />
                <h3>Eğitmenlerle Uzmanlığımız</h3>
                <p>
                Eğitmenlerimiz, alanlarında uzman ve deneyimlidir.
                Sizi en iyi şekilde eğitmek için tutku ve bilgiyle çalışırlar.
                Size rehberlik ederek başarınızı sağlarlar.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon7.png" alt="Image" />
                <h3>Kariyerinizi Şekillendirme Fırsatı</h3>
                <p>
                Mezunlarımızı iş dünyasına hazırlamak ve kariyer hedeflerinize ulaşmanıza yardımcı olmak için buradayız.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon3.png" alt="Image" />
                <h3>Başarı İçin En İyi Ortam</h3>
                <p>
                Eğitim alanlarımız modern ve donanımlıdır.
                Mesleğe hazırlık için sizi en iyi şekilde donatırız ve ileri düzeyde eğitim sunarız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
