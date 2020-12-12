const express = require('express')
const router = express.Router()

const utilsController = require('../controllers/utils.controller')

const isAuthenticated = require('../middleware/auth.middleware')

router.get('/health', utilsController.getHealthCheck)
router.post('/contact', utilsController.contactUs)
router.get('/users', isAuthenticated, utilsController.getUsers)

module.exports = router
