const express = require('express')
const router = express.Router()

const messageController = require('../controllers/message.controller')

const isAuthenticated = require('../middleware/auth.middleware')

// Get global messages
router.get('/global', isAuthenticated, messageController.getGlobalMessages)

// Post global message
router.post('/global', isAuthenticated, messageController.postGlobalMessages)

// Get conversations list
router.get(
  '/conversations',
  isAuthenticated,
  messageController.getConversations
)

// Get messages from conversation
// based on to & from
router.get(
  '/conversations/query',
  isAuthenticated,
  messageController.getConversationsQuery
)

// Post private message
router.post('/', messageController.postSendPrivateMessage)

module.exports = router
