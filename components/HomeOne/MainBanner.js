import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CoursesSlider from "../Courses/CoursesSlider/CoursesSlider";

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

                    {/* <div
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
                    </div> */}
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

              <div className="d-lg-block d-none">
                <CoursesSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;