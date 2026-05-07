const { pool } = require('../config/db');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const submitContact = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const { name, email, subject, message } = req.body;
  const ip = req.ip || req.headers['x-forwarded-for'];

  try {
    // Save to database
    const result = await pool.query(
      `INSERT INTO contacts (name, email, subject, message, ip_address)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [
        name,
        email,
        subject || 'Portfolio Contact',
        message,
        ip,
      ]
    );

    // Send email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await transporter.verify();
        console.log('✅ SMTP server ready');

        await transporter.sendMail({
          from: `"Portfolio" <${process.env.EMAIL_USER}>`,
          to: 'sonusinghmca2024@bhu.ac.in',
          subject: `📩 New Contact: ${subject || 'Portfolio Inquiry'} — from ${name}`,
          html: `
            <div style="font-family: Arial; padding: 20px; background: #0d1117; color: #ffffff;">
              <h2 style="color: #3fb950;">New Portfolio Message</h2>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || 'N/A'}</p>

              <div style="margin-top:20px; padding:15px; background:#161b22; border-radius:8px;">
                <strong>Message:</strong>
                <p>${message}</p>
              </div>
            </div>
          `,
          replyTo: email,
        });

        console.log('✅ Email sent successfully');
      } catch (mailErr) {
        console.error('❌ Email sending failed:', mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Message received successfully!',
      id: result.rows[0].id,
    });

  } catch (err) {
    console.error('❌ Contact submission error:', err.message);

    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

const trackView = async (req, res) => {
  try {
    await pool.query(
      'INSERT INTO page_views (page) VALUES ($1)',
      ['portfolio']
    );

    const count = await pool.query(
      'SELECT COUNT(*) FROM page_views'
    );

    res.json({
      success: true,
      views: parseInt(count.rows[0].count),
    });

  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
    });
  }
};

module.exports = {
  submitContact,
  getContacts,
  trackView,
};
