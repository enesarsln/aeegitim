const nodemailer = require('nodemailer');

const sendEmail = async options => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `AE Eğitim <${process.env.EMAIL_USERNAME}>`,
      to: 'info@aeegitim.com.tr', 
      subject: options.subject,
      text: `
        Ad Soyad: ${options.name}
        Email: ${options.email}
        Telefon: ${options.number || 'N/A'} 
        Konu: ${options.subject}
        Mesaj: ${options.text}
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    throw new Error('E-posta gönderme hatası');
  }
};

module.exports = sendEmail;
