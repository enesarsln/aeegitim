const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 
const sendEmail = require('./utils/email');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, number, subject, text } = req.body;

    console.log('Received data:', { name, email, number, subject, text });

    await sendEmail({
      name,
      email,
      number,
      subject,
      text,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);

    res.status(500).json({ success: false, error: error.message || 'E-posta gönderme hatası' });
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;