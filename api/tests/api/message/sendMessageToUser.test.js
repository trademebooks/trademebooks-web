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

beforeEach(async () => {})

afterEach(async () => {})

afterAll(async () => {
  await dbTestUtils.clearDatabase()
  await api.close()
  await dbConnection.disconnect()
})

describe('Message/Chat API - Send a message', () => {
  test('POST /api/v1/conversations/messages - Sends a message from auth to specified recipientUserId', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    // 2. Make the API call to the endpoint
    const response = await fetch(`${baseURL}/conversations/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify({
        toRecipientId: '5e11e9d8eded1d23742c1c6b',
        messageBody: 'this is a message from yichen to cedric! 101.'
      })
    })
    const responseJson = await response.json()

    // 3. Assertion on the JSON response output
    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message:
        'Sent a message from the currently authenticated user to the specified userId.',
      data: {
        fromUserId: '5e11e9d8eded1d23742c1c6a',
        toUserId: '5e11e9d8eded1d23742c1c6b',
        body: 'this is a message from yichen to cedric! 101.'
      },
      errors: null
    })
  })
})
