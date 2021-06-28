const express = require('express')
const router = express.Router()

const messageController = require('../controllers/message.controller')
const isAuthenticated = require('../middleware/auth.middleware')

// Get global messages
router.get('/global', isAuthenticated, messageController.getGlobalMessages)

// Post global message
router.post('/global', isAuthenticated, messageController.postGlobalMessages)

// Get conversations list
router.get('/', isAuthenticated, messageController.getAllAuthConversations)

// Get messages from conversation based on the fromUserId and toUserId
router.get(
  '/messages',
  isAuthenticated,
  messageController.getConversationMessagesByUserId
)

// Starts a conversation only
router.post(
  '/messages/start-conversation',
  messageController.startConversationWithRecipient
)

// Sends a private message
router.post('/messages', messageController.sendMessageToUserInConveration)

// Update a conversation
router.put('/:conversationId', messageController.updateConversationById)

module.exports = router
