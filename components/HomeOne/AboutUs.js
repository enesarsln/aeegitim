import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about/about1.jpg" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about/about-shape-1.png" alt="Image" />
                </div>

                <div className="shape-2">
                  <img src="/img/about/about-shape-2.png" alt="Image" />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Hakkımızda</span>
                <h2>Biz kimiz ve neden bizimle yola çıkmalısınız ?</h2>
                <p>
                Neden bizimle çalışmanız gerektiğini merak ediyor musunuz? 
                İşte size neden güçlü bir tercih olduğumuzu ve hakkımızda 
                daha fazla bilgi edinmek için bize neden katılmanız gerektiğini anlatan 5 önemli neden:
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Alanında Uzman Öğretmenler
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Gelişmiş Kaynaklar
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Pratik Beceriler
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Kişiselleştirilmiş Eğitim
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Kariyer Desteği
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                   Özgeçmiş
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
