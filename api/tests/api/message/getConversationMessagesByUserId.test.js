const fetch = require('node-fetch')
const api = require('../../..')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

const db = require('../../../utils/db')
let dbConnection
const dbTestUtils = require('../../utils')

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db()
  await dbTestUtils.setUpDatabase()
})

beforeEach(async () => { })

afterEach(async () => { })

afterAll(async () => {
  await dbTestUtils.clearDatabase()
  await api.close()
  await dbConnection.disconnect()
})

describe('Message/Chat API - Get all messages between auth user and a specified userId', () => {
  test('POST /api/v1/conversations/messages?userId=123 - getConversationMessagesByUserId', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const userId = '5e11e9d8eded1d23742c1c6b' // cedric is the person yichen wants to talk to
    // 2. Make the API call to the endpoint
    const response = await fetch(`${baseURL}/conversations/messages?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie
      }
    })
    const responseJson = await response.json()

    // 3. Assertion on the JSON response output
    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message: 'Gets a specified conversation and its messages between the current auth user and the specified userId.',
      data: [
        {
          conversationId: '5fc36879a0d3010d607eaade',
          fromUserId: '5e11e9d8eded1d23742c1c6a',
          toUserId: '5e11e9d8eded1d23742c1c6b',
          body: 'hey',
          senderUser: {
            _id: '5e11e9d8eded1d23742c1c6a',
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          },
          recipientUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        },
        {
          conversationId: '5fc36879a0d3010d607eaade',
          fromUserId: '5e11e9d8eded1d23742c1c6a',
          toUserId: '5e11e9d8eded1d23742c1c6b',
          body: 'Do you want to grab lunch?',
          senderUser: {
            _id: '5e11e9d8eded1d23742c1c6a',
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          },
          recipientUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        },
        {
          conversationId: '5fc36879a0d3010d607eaade',
          fromUserId: '5e11e9d8eded1d23742c1c6a',
          toUserId: '5e11e9d8eded1d23742c1c6b',
          body: 'I was thinking sushi buffet, what do you think?',
          senderUser: {
            _id: '5e11e9d8eded1d23742c1c6a',
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          },
          recipientUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        },
        {
          conversationId: '5fc36879a0d3010d607eaade',
          fromUserId: '5e11e9d8eded1d23742c1c6b',
          toUserId: '5e11e9d8eded1d23742c1c6a',
          body: 'Oh hey Yichen!',
          senderUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          },
          recipientUser: {
            _id: '5e11e9d8eded1d23742c1c6a',
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          }
        },
        {
          conversationId: '5fc36879a0d3010d607eaade',
          fromUserId: '5e11e9d8eded1d23742c1c6b',
          toUserId: '5e11e9d8eded1d23742c1c6a',
          body: 'Sure let\'s do it!',
          senderUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          },
          recipientUser: {
            _id: '5e11e9d8eded1d23742c1c6a',
            first_name: 'Yi Chen',
            last_name: 'Zhu'
          }
        }
      ],
      errors: null
    })
  })
})
