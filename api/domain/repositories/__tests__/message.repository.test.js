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
    const conversations = await messageRepository.getAllAuthConversations(authId)

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })

  test('Message Repository - getConversationMessagesByUserId', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(authId, userId)

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })

  xtest('Message Repository - createConversationMessage', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(authId, userId)

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })

  xtest('Message Repository - updateConversationById', async () => {
    const authId = '5e11e9d8eded1d23742c1c6a' // yichen's user id
    const userId = '5e11e9d8eded1d23742c1c6b'
    const conversations = await messageRepository.getConversationMessagesByUserId(authId, userId)

    console.log(JSON.stringify({ conversations }, null, '\t'))
  })
})
