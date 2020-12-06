const express = require('express')
const router = express.Router()

const messageController = require('../controllers/message.controller')

router.get('/conversations', messageController.getAllConversations)
router.get('/:roomId', messageController.getAllMessagesInRoom)
router.post('/', messageController.sendAMessageToRoom)

module.exports = router
