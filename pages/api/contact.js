import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  host: 'mail.kurumsaleposta.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@aeegitim.com.tr',
    pass: '@HC8h@g3o2j@I_4N',
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  const { name, email, number, subject, text } = req.body;

  const data = {
    to: "info@aeegitim.com.tr",
    from: email,
    subject: "Merhabalar",
    text: text,
    html: `
            <b>Kimden:</b> ${name} <br /> 
            <b>Telefon Numarası:</b> ${number} <br /> 
            <b>Konu:</b> ${subject} <br /> 
            <b>Mesaj:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
