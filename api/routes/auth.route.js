const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')
const passwordController = require('../controllers/password.controller')

const isAuthenticated = require('../middleware/auth.middleware')

router.post('/register', authController.registerUser)
router.post('/login', authController.logUserIn)
router.get('/logout', authController.logUserOut)
router.get('/user', isAuthenticated, authController.getAuthUser)
router.post('/password/send-email', passwordController.sendPasswordResetEmail)
router.post('/password/reset', passwordController.resetPassword)

module.exports = router
