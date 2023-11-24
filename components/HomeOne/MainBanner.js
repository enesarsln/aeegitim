import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Bilime ve Kanıta Dayalı Eğitim
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Bilgilerinizi Güncellemenin En İyi Yolu
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Profesyonel Sağlık Eğitmenleri ile Yolculuğunuza Başlayın ve Bilgiye Doğru Adım Atın.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >

                      <div
                        onClick={() => setOpen(true)}
                        className="default-btn active popup-youtube"
                      >
                        Bizi tanıyın
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/img/deneme.png"
                        alt="Image"
                      />
                    </div>

                    <div className="banner-shape">
                      <img src="/img/home-one/home-one-shape.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="first-facility-area">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div 
                      className="first-facility-item" 
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-care"></i>
                      <h3>Sizlerle Her Adımda</h3>
                      <p>
                      Eğitim süreciniz boyunca ve sonrasında, sizin yanınızdayız. 
                      Profesyonel desteğimizle başarınıza katkıda bulunuyoruz.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div 
                      className="first-facility-item" 
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-support"></i>
                      <h3>Her Zaman Yanınızdayız</h3>
                      <p>
                      İhtiyacınız olduğu her an, 7/24 sizinleyiz.
                       Size her konuda yardımcı olmak için buradayız.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div 
                      className="first-facility-item" 
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-online-learning"></i>
                      <h3>Hedeflerinizi Aşın</h3>
                      <p>
                      Eğitimlerimiz, başarıya odaklanır ve beklentilerinizi karşılamayı hedefler. 
                      Siz de hedeflerinizi gerçekleştirmeye başlayın.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shape">
                  <img src="/img/shape/shape1.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
