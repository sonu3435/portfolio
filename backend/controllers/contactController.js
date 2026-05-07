const { pool } = require('../config/db');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;
  const ip = req.ip || req.headers['x-forwarded-for'];

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, subject, message, ip_address)
       VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at`,
      [name, email, subject || 'Portfolio Contact', message, ip]
    );

    // Send notification email (non-blocking)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: 'sonusinghmca2024@bhu.ac.in',
        subject: `📩 New Contact: ${subject || 'Portfolio Inquiry'} — from ${name}`,
        html: `
          <div style="font-family: monospace; padding: 20px; background: #0d1117; color: #58a6ff; border-radius: 8px;">
            <h2 style="color: #3fb950;">New message from your portfolio</h2>
            <p><strong style="color: #e6edf3;">Name:</strong> ${name}</p>
            <p><strong style="color: #e6edf3;">Email:</strong> ${email}</p>
            <p><strong style="color: #e6edf3;">Subject:</strong> ${subject || 'N/A'}</p>
            <p><strong style="color: #e6edf3;">Message:</strong></p>
            <p style="background:#161b22; padding:12px; border-radius:6px; color:#c9d1d9;">${message}</p>
          </div>
        `,
        replyTo: email,
      }).catch(console.error);
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you within 24 hours.',
      id: result.rows[0].id,
    });
  } catch (err) {
    console.error('Contact submission error:', err.message);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

const getContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const trackView = async (req, res) => {
  try {
    await pool.query('INSERT INTO page_views (page) VALUES ($1)', ['portfolio']);
    const count = await pool.query('SELECT COUNT(*) FROM page_views');
    res.json({ success: true, views: parseInt(count.rows[0].count) });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports = { submitContact, getContacts, trackView };
