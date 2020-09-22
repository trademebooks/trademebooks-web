const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller');

router.get('/contact', contactController.contactUs);

module.exports = router;