import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content-wrap">
              <h1>
                <span className="a">4</span> <span className="red">0</span>{" "}
                <span className="b">4</span>{" "}
              </h1>
              <h3>Sayfa Bulunamadı!</h3>
              <p>Aradığınız sayfa bulunamadı.</p>

              <Link href="/" className="default-btn page-btn active">
                Ana Sayfaya geri dönün
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;

