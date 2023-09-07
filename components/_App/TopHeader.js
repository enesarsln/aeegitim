import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6 d-none d-md-inline-block">
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
                <li className="d-md-none">
                  <a href="tel:+822456974">
                    <i className="bx bx-phone-call"></i>
                  </a>
                </li>
                <li className="d-md-none">
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-paper-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+905358765323" target="_blank">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ahmet_atila_ertan/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atilaertan_egitim/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@ahmetatilaertan4243" target="_blank">
                    <i className="bx bxl-youtube"></i>
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
