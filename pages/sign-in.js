import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const SignIn = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Giriş Yap"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Giriş Yap"
        imgClass="bg-1"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Hesabınıza Giriş Yapın</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Kullanıcı Adı veya Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Şifre"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Beni Hatırla</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Giriş Yap
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="log-in-img"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
