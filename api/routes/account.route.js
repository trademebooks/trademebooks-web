const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/auth.middleware');

const accountController = require('../controllers/account.controller');

router.get('/', isAuthenticated, accountController.getAccountById);
router.put('/', isAuthenticated, accountController.updateAccountById);
router.put('/auth-user', isAuthenticated, accountController.updateUserById);

module.exports = router;
