import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const MainBanner = () => {

  const coursesInfo = [
    {
      name: 'Porselen Laminate Veneer',
      text: 'Porselen laminate veneer öğrenmek için heyecan verici ve kapsamlı iki günlük kursumuza katılın!',
      path: '/porselen-laminate-veneer'
    },
    {
      name: 'İmplant Destekli Protezler',
      text: 'İmplant destekli protezleri öğrenmek için uygulama dolu kapsamlı kursumuza katılmak ister misiniz?',
      path: '/implant-destekli-protezler'
    },
    {
      name: 'Temporomandibular ...',
      text: 'Temporomandibular Bozuklukları, Bruksizm, Splint ve Horlama apareyi Tedavisi Uygulamalı Kursumuza katılmak ister misiniz?',
      path: '/temporomandibular-eklem-rahatsizliklari'
    },
    {
      name: 'Dental Fotoğrafçılık',
      text: 'Sunum ile başlayacak olan kursumuzda, sunumda kullanılan slaytların spiralli dosya şeklinde çıktıları verilecektir',
      path: '/dental-foto'
    },
    {
      name: 'Temel Implant Cerrahisi',
      text: "Türkiye'nin önde gelen hocalarımızdan Prof. Dr. Ateş Parlar'ın yapacağı uygulamalı Temel implant cerrahisi kursu.",
      path: '/temel-implant-cerrahisi'
    },
    {
      name: 'Rejeneratif Endodonti',
      text: "Alanında Türkiye'nin en önde gelen isimlerinden Prof. Dr. Tuğba Türk'ün Rejeneratif Endodonti uygulamalı kursunda aşağıdaki konu başlıkları anlatılacaktır.",
      path: '/rejeneratif-endodonti'
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
                <div className="course-banner-carts">
                  {coursesInfo.map((el, key) => (
                    <CourseCart data={el} key={key}/>
                  ))}
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


const CourseCart = ({data}) => {
  return(
      <div 
        className="first-facility-item" 
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
       <Link href={data.path}>
       <h3>{data.name}</h3>
       </Link>
       <p>{data.text}</p>
      </div>
  )
}