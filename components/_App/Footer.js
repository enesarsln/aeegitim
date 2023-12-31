import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row text-center text-lg-start">
            <div className="col-lg-4 single-widget"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200">
              <Link href="/" style={{ maxWidth: 180 }}>
                <img src="/img/ae-text.png" alt="Image" />
              </Link>

              <p>
                Kurumumuz, sağlık eğitimi konusunda uzmandır ve öğrencilerine mükemmel
                bir eğitim deneyimi sunmayı taahhüt eder.
                Bizimle iletişime geçin ve geleceğinize doğru bir adım atın.
              </p>

              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+905358765323" target="_blank">
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 single-widget"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200">
              <h3>Kurslar</h3>
              <ul>
                <li>
                  <Link href="porselen-laminate-veneer">Porselen Laminate Veneer</Link>
                </li>
                <li>
                  <Link href="implant-destekli-protezler">İmplant Destekli Protezler</Link>
                </li>
                <li>
                  <Link href="temporomandibular-eklem-rahatsizliklari">Temporomandibular Eklem Rahatsızlıkları, Bruksizm, Splint ve Horlama Apareyi Yapımı</Link>
                </li>
                <li>
                  <Link href="dental-foto">Dental Fotoğrafçılık</Link>
                </li>
                <li>
                  <Link href="temel-implant-cerrahisi">Temel İmplant Cerrahisi</Link>
                </li>
                <li>
                  <Link href="rejeneratif-endodonti">Rejeneratif Endodonti</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 single-widget contact">
              <h3>İletişim</h3>
              <ul>
                <li>
                  <a href="tel:+822456974">
                    <i className="bx bx-phone-call"></i>
                    <span>Telefon:</span>
                    +90 535 876 53 23
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@corf.com">
                    <i className="bx bx-envelope"></i>
                    <span>Email:</span>
                    info@aeegitim.com.tr
                  </a>
                </li>
                <li>
                  <i className="bx bx-location-plus"></i>
                  <span>Adress</span>
                  Kızılırmak mahallesi Dumlupınar Bulvarı No:9/A ofis no:248 kat:7 YDA Center Çankaya Ankara
                </li>
                <li>
                  <i className="bx bx-location-plus"></i>
                  <span>Çalışma Saatlerimiz</span>
                  09:00 - 17:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} | <a href="https://arslansoftwareservices.com/">Arslan Software Services</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
