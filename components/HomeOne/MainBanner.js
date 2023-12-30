import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const MainBanner = () => {

  const coursesInfo = [
    {
      name: 'Porselen Laminate Veneer',
      shortName: 'Porselen Laminate Veneer',
      text: 'Porselen laminate veneer öğrenmek için heyecan verici ve kapsamlı iki günlük kursumuza katılın!',
      path: '/porselen-laminate-veneer',
      image: '/img/porselen-laminate/porselen-laminate-1.jpg'
    },
    {
      name: 'İmplant Destekli Protezler',
      shortName: 'İmplant Destekli Protezler',
      text: 'İmplant destekli protezleri öğrenmek için uygulama dolu kapsamlı kursumuza katılmak ister misiniz?',
      path: '/implant-destekli-protezler',
      image: '/img/implant-protez/implant-protez-1.jpg'
    },
    {
      name: 'TME Eklem Rahatsızlıkları, Bruksizm, Splint yapımı, Horlama Apareyi',
      shortName: 'TME Eklem Rahatsızlıkları',
      text: 'Temporomandibular Bozuklukları, Bruksizm, Splint ve Horlama apareyi Tedavisi Uygulamalı Kursumuza katılmak ister misiniz?',
      path: '/temporomandibular-eklem-rahatsizliklari',
      image: '/img/temporomandibular/temporomandibular-1.jpg'
    },
    {
      name: 'Dental Fotoğrafçılık',
      shortName: 'Dental Fotoğrafçılık',
      text: 'Sunum ile başlayacak olan kursumuzda, sunumda kullanılan slaytların spiralli dosya şeklinde çıktıları verilecektir',
      path: '/dental-foto',
      image: '/img/dental-foto/dental-foto-1.jpg'
    },
    {
      name: 'Temel İmplant Cerrahisi',
      shortName: 'Temel İmplant Cerrahisi',
      text: "Türkiye'nin önde gelen hocalarımızdan Prof. Dr. Ateş Parlar'ın yapacağı uygulamalı Temel implant cerrahisi kursu.",
      path: '/temel-implant-cerrahisi',
      image: '/img/temel-implant-cerrahisi/temel-implant-cerrahisi-1.jpg'
    },
    {
      name: 'Rejeneratif Endodonti',
      shortName: 'Rejeneratif Endodonti',
      text: "Alanında Türkiye'nin en önde gelen isimlerinden Prof. Dr. Tuğba Türk'ün Rejeneratif Endodonti uygulamalı kursunda aşağıdaki konu başlıkları anlatılacaktır.",
      path: '/rejeneratif-endodonti',
      image: '/img/rejeneratif-endodonti/rejeneratif-endodonti-1.jpg'
    },
  ]

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

              <div className="first-facility-area">
                <div className="our-work-area">
                  <div className="container">
                    <Swiper
                      spaceBetween={10}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992: {
                          slidesPerView: 3,
                        },
                      }}
                      modules={[Pagination, Autoplay]}
                      className="our-work-slide"
                    >
                      {coursesInfo.map((el, key) => (
                        <SwiperSlide key={key}>
                          <div className="single-work">
                            <img src={el.image} alt="Image" />

                            <h3 className="work-title">
                              {el.shortName}
                            </h3>

                            <div className="work-content-wrap">
                              <div className="work-content">
                                <h3>{el.name}</h3>
                                <p>
                                  {el.text}
                                </p>

                                <Link href={el.path} className="read-more">
                                  Daha Fazla Detay <i className="bx bx-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
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