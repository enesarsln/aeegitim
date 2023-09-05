import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-contact-area contact ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">İletişim</span>
            <h2>Size Ulaşalım</h2>
          </div>

          <div className="contact-wrap contact-pages mb-0">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Ad Soyad</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Telefon</label>
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
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
                  </div>
                </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Mesaj</label>
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder="Eklemek istediğiniz bir şey..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <button type="submit" className="default-btn btn-two">
                      Gönder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
