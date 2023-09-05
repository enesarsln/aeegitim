import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                   09:00-17:00
                </li>
                <li>
                  <a href="tel:+822456974">
                    <i className="bx bx-phone-call"></i>
                    +90 535 876 53 23
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-paper-plane"></i>
                    info@aeegitim.com.tr
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
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
      </div>
    </>
  );
};

export default TopHeader;
