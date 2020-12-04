const express = require('express')
const router = express.Router()

const appController = require('../controllers/app.controller')
const utilitiesController = require('../controllers/contact.controller')

router.get('/health', appController.getHealthCheck)
router.post('/contact', utilitiesController.contactUs)

module.exports = router
