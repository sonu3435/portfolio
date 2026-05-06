const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getContacts, trackView } = require('../controllers/contactController');

const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('subject').optional().trim().isLength({ max: 200 }),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters'),
];

router.post('/', contactValidation, submitContact);
router.get('/', getContacts);
router.post('/track', trackView);

module.exports = router;
