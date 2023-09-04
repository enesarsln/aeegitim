import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AppointmentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="appointment-area jarallax ptb-50">
        <div className="container">
          <div className="appointment-here-form">
            <span className="top-title">İletişim</span>
            <h2>Size Ulaşalım</h2>

            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <label>Ad Soyad</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Ad ve soyadınızı yazın"
                    />
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Email</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Email adresinizi yazın"
                    />
                    <i className="flaticon-email"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Cep Telefonu</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Telefon Numaranızı yazın"
                    />
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Konu</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="0">Bir konu seçin</option>
                      <option value="1">Porselen Laminate</option>
                      <option value="2">İmplant Destekli Protezler</option>
                      <option value="3">Temporodibular</option>
                      <option value="4">Eğitim İmkanları</option>
                      <option value="5">Diplomalar</option>
                      <option value="6">Fiyatlar</option>
                    </select>
                    <i className="flaticon-heart"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>Mesaj</label>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="Message"
                      cols="30"
                      rows="8"
                      placeholder="Eklemek istediğiniz bir şey ?"
                    ></textarea>
                    <i className="flaticon-edit"></i>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    Gönder
                  </button>
                </div>
              </div>
            </form>

            <div className="shape">
              <img src="/img/shape/appointment-shape.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
