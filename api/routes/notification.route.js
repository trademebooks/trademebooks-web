const { Router } = require("express");
const express = require("express");
const router = express.Router();

const notificationsController = require("../controllers/notification.controller")

const isAuthenticated = require('../middleware/auth.middleware');

router.put("/receiveEmails/:userId", isAuthenticated, notificationsController.toggleReceiveEmails);
router.put("/receiveTxts/:userId", isAuthenticated, notificationsController.toggleReceiveTxts)

module.exports = router;