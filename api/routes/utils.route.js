const express = require('express')
const router = express.Router()

const utilsController = require('../controllers/utils.controller')

router.get('/health', utilsController.getHealthCheck)
router.post('/contact', utilsController.contactUs)

module.exports = router
