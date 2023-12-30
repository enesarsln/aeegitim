import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    text: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const url = 'http://localhost:8000/api/send-email';
      await axios.post(url, contact);

      setContact({
        name: '',
        email: '',
        number: '',
        subject: '',
        text: '',
      });

      console.log('E-posta başarıyla gönderildi!');
    } catch (error) {
      console.error('E-posta gönderme hatası:', error.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='contact-area'>
        <h3 className='top-title'>İletişim Formu</h3>
        <div className="form-group">
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Adınız ve Soyadınız..."
            className="form-control"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email adresiniz..."
            className="form-control"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefon</label>
          <input
            type="text"
            name="number"
            placeholder="Telefon numaranız..."
            className="form-control"
            value={contact.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Konu</label>
          <select
            className="form-control"
            name="subject"
            value={contact.subject}
            onChange={handleChange}
            required
          >
            <option value="">Bir konu seçin</option>
            <option value="Porselen Laminate">Porselen Laminate</option>
            <option value="İmplant Destekli Protezler">İmplant Destekli Protezler</option>
            <option value="Temporomandibular">Temporomandibular</option>
            <option value="Eğitim İmkanları">Eğitim İmkanları</option>
            <option value="Diplomalar">Diplomalar</option>
            <option value="Fiyatlar">Fiyatlar</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mesaj</label>
          <textarea
            name="text"
            placeholder="Eklemek istediğiniz bir şey..."
            className="form-control"
            value={contact.text}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="default-btn btn-two">
          Gönder
        </button>
      </form>
    </>
  );
}