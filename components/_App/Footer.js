import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div 
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  <img src="/img/logo.png" alt="Image" />
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
            </div>

            <div className="col-lg-2 col-md-6">
              <div 
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Kurslar</h3>
                <ul>
                  <li>
                    <Link href="#">Porselen Laminate</Link>
                  </li>
                  <li>
                    <Link href="#">İmplant Destekli Protezler</Link>
                  </li>
                  <li>
                    <Link href="#">Temporodibular</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Çalışma Saatlerimiz</h3>
                <ul>
                  <li>
                  <span>09:00 - 17:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div 
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
            Copyright &copy; {currentYear} | AAEGITIM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
