const express = require('express')
const router = express.Router()

const bookstoreController = require('../controllers/bookstore.controller')

router.get('/auth', bookstoreController.getAuthBookstore)
router.get('/:username', bookstoreController.getBookstoreByUsername)

module.exports = router
