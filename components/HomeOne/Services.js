import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Sunduğumuz imkanlar</span>
            <h2>Eğitimde Sunduğumuz İmkanlar</h2>
            <p>
            Eğitimlerimizi daha verimli ve etkili hale getirmek için çeşitli imkanlar sunuyoruz. 
            İşte size sunduğumuz bazı eğitim imkanları:
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-man"></span>
                <h3>Modern Eğitim Ortamı</h3>
                <p>
                Eğitimlerimizi en son teknoloji ve donanımla desteklenmiş sınıflarda sunarız.
                </p>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-liver"></span>
                <h3>Uzman Eğitmenler</h3>
                <p>
                Alanlarında uzman eğitmenlerimiz, size en güncel bilgileri ve pratiği sunar.
                </p>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-kidney"></span>
                <h3>Pratik Uygulamalar</h3>
                <p>
                Teorik bilgiyi pratik uygulamalarla birleştirerek öğrenmenizi destekleriz.
                </p>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-heart"></span>
                <h3>Kişisel Danışmanlık</h3>
                <p>
                Her öğrenciye kişisel danışmanlık sağlayarak ihtiyaçlarınıza özel destek sunarız.
                </p>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-brain"></span>
                <h3>Kariyer Gelişimi</h3>
                <p>
                İş bulma, staj ve kariyer gelişimi konularında rehberlik ederiz
                </p>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services">
                <span className="flaticon-walker"></span>
                <h3>Çevrimiçi Kaynaklar</h3>
                <p>
                Eğitim materyallerine ve kaynaklara çevrimiçi erişim sağlarız, böylece öğrenme deneyiminizi destekleriz.
                </p>
                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;