const express = require('express')
const router = express.Router()

const messageController = require('../controllers/message.controller')

// Get global messages
router.get('/global', messageController.getGlobalMessages)

// Post global message
router.post('/global', messageController.postGlobalMessages)

// Get conversations list
router.get('/conversations', messageController.getConversations)

// Get messages from conversation
// based on to & from
router.post('/conversations/query', messageController.getConversationsQuery)

// Post private message
router.post('/', messageController.postSendPrivateMessage)

module.exports = router
