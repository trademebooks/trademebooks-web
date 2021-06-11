const mongoose = require('mongoose')

const db = require('../../../utils/db')
let dbConnection
const dbTestUtils = require('../../../tests/utils')

const messageRepository = require('../message.repository')

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

describe('Test Suite: Message Repository', () => {
  test('Message Repository - getAllAuthConversations', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const conversations = await messageRepository.getAllAuthConversations(
      authId
    )

    // Yichen's first already existing conversation with Cedric
    expect(conversations[0]).toMatchObject({
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
    })

    // Yichen's second already existing conversation with Wesley
    expect(conversations[1]).toMatchObject({
      chattingWithUser: {
        first_name: 'Wesley',
        last_name: 'Michaels'
      },
      lastestMessage: '',
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
    })
  })

  xtest('Message Repository - getConversationMessagesByUserId', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(
      authId,
      userId
    )

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })

  xtest('Message Repository - createConversationMessage', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(
      authId,
      userId
    )

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })

  xtest('Message Repository - updateConversationById', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(
      authId,
      userId
    )

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })
})
