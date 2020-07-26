const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');

const isAuthenticated = require('../middleware/auth.middleware');
const bookPermission = require('../middleware/bookPermission.middleware');

router.get('/', bookController.getAllbooks);
router.get('/:id', bookController.getBookById);
router.post('/', isAuthenticated, bookController.createABook);
router.put('/:id', isAuthenticated, bookPermission, bookController.updateABook);
router.delete('/:id', isAuthenticated, bookPermission, bookController.deleteABook);

module.exports = router;