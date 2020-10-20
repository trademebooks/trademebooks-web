const express = require('express')
const router = express.Router()

const isAuthenticated = require('../middleware/auth.middleware')

const authController = require('../controllers/auth.controller')
router.post('/register', authController.registerUser)
router.post('/login', authController.logUserIn)
router.get('/logout', isAuthenticated, authController.logUserOut)
router.get('/user', isAuthenticated, authController.getAuthUser)

const passwordController = require('../controllers/password.controller')
router.post('/password/send-email', passwordController.sendPasswordResetEmail)

module.exports = router
