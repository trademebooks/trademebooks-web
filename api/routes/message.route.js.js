const express = require('express')
const router = express.Router()

const bookstoreController = require('../controllers/bookstore.controller')

router.get('/messages', bookstoreController.getAuthBookstore)
router.post('/messages', bookstoreController.getBookstoreByUsername)

module.exports = router
