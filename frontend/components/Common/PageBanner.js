import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  imgClass,
}) => {
  return (
    <>
      <div className={`page-title-area ${imgClass}`}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{pageTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
