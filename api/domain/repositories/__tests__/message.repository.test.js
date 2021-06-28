const db = require('../../../utils/db')
let dbConnection
const dbTestUtils = require('../../../tests/utils')

const messageRepository = require('../message.repository')
const MessageModel = require('../../models/chat/message.model')

beforeAll(async () => {
  dbConnection = await db()
})

beforeEach(async () => {
  await dbTestUtils.setUpDatabase()
})

afterEach(async () => {
  await dbTestUtils.clearDatabase()
})

afterAll(async () => {
  await dbConnection.disconnect()
})

describe('Test Suite: Message Repository - Getters', () => {
  test('Message Repository - getAllAuthConversations', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const conversations = await messageRepository.getAllAuthConversations(
      authId
    )

    const expectedConversations = [
      {
        chattingWithUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        },
        lastestMessage: "Sure let's do it!",
        usersWhoHaveReadLastestMessage: ['5e11e9d8eded1d23742c1c6a'],
        recipientUsers: [
          {
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          },
          {
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        ]
      },
      {
        chattingWithUser: {
          first_name: 'Wesley',
          last_name: 'Michaels'
        },
        lastestMessage: 'Hi Yichen, this is Wes',
        usersWhoHaveReadLastestMessage: ['5e11e9d8eded1d23742c1c6c'],
        recipientUsers: [
          {
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          },
          {
            first_name: 'Wesley',
            last_name: 'Michaels'
          }
        ]
      }
    ]

    conversations.forEach((conversation, index) => {
      expect(conversation).toMatchObject(expectedConversations[index])
    })
  })

  test('Message Repository - getConversationMessagesByUserId', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b' // cedric's user id
    const messages = await messageRepository.getConversationMessagesByUserId(
      authId,
      userId
    )

    const expectedMessages = [
      {
        body: 'hey',
        senderUser: {
          first_name: 'Yi Chen',
          last_name: 'Zhu'
        },
        recipientUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        }
      },
      {
        body: 'Do you want to grab lunch?',
        senderUser: {
          first_name: 'Yi Chen',
          last_name: 'Zhu'
        },
        recipientUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        }
      },
      {
        body: 'I was thinking sushi buffet, what do you think?',
        senderUser: {
          first_name: 'Yi Chen',
          last_name: 'Zhu'
        },
        recipientUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        }
      },
      {
        body: 'Oh hey Yichen!',
        senderUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        },
        recipientUser: {
          first_name: 'Yi Chen',
          last_name: 'Zhu'
        }
      },
      {
        body: "Sure let's do it!",
        senderUser: {
          first_name: 'Cedric',
          last_name: 'Mosdell'
        },
        recipientUser: {
          first_name: 'Yi Chen',
          last_name: 'Zhu'
        }
      }
    ]

    messages.forEach((message, index) => {
      expect(message).toMatchObject(expectedMessages[index])
    })
  })
})

describe('Test Suite: Message Repository - Updaters', () => {
  test('Message Repository - sendConversationMessageToRecipientId - existing conversation', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b' // cedric's user id
    const newMessage = await messageRepository.sendConversationMessageToRecipientId(
      authId,
      userId,
      'What is good son!'
    )

    const newMessageInDatabase = await dbTestUtils.seeInDatabase(
      MessageModel,
      newMessage
    )
    expect(newMessageInDatabase).toBe(true)
    expect(newMessage).toMatchObject({
      body: 'What is good son!'
    })
  })

  test('Message Repository - sendConversationMessageToRecipientId - non-existing conversation', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6c' // wesley's user id
    const newMessage = await messageRepository.sendConversationMessageToRecipientId(
      authId,
      userId,
      'What is good son! this is wes!'
    )

    const newMessageInDatabase = await dbTestUtils.seeInDatabase(
      MessageModel,
      newMessage
    )
    expect(newMessageInDatabase).toBe(true)
    expect(newMessage).toMatchObject({
      body: 'What is good son! this is wes!'
    })
  })

  // cedric reads the conversation between yichen and cedric
  test('Message Repository - updateConversationById - cedric reads the conversation between yichen and cedric', async () => {
    const conversationId = '5fc36879a0d3010d607eaade'
    const authId = '5e11e9d8eded1d23742c1c6b'

    const updatedConversation = await messageRepository.updateConversationByIdAndMarkAsRead(
      conversationId,
      authId
    )

    expect(updatedConversation.usersWhoHaveReadLastestMessage).toContain(authId)
  })

  // cedric reads the conversation between wes and cedric
  test('Message Repository - updateConversationById - edric reads the conversation between wes and cedric', async () => {
    const conversationId = '5fc40064c17e1f1e88dc806f'
    const authId = '5e11e9d8eded1d23742c1c6b'

    const updatedConversation = await messageRepository.updateConversationByIdAndMarkAsRead(
      conversationId,
      authId
    )

    expect(updatedConversation.usersWhoHaveReadLastestMessage).toContain(authId)
  })
})
