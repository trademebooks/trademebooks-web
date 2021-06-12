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
  // await dbTestUtils.clearDatabase()
  await api.close()
  await dbConnection.disconnect()
})

describe('Message/Chat API - updateConversationAndMarkAsRead', () => {
  test('PUT /api/v1/conversations/{conversationId} - updateConversationAndMarkAsRead', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL, {
      email: 'cedric@cedric.com',
      password: 'cedric'
    })

    // 2. Make the API call to the endpoint
    const conversationId = '5fc36879a0d3010d607eaade'
    const response = await fetch(`${baseURL}/conversations/${conversationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie
      }
    })

    const responseJson = await response.json()
    
    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message: 'Updated the conversation by its conversationId, marking the conversation as read.',
      data: {},
      errors: null
    })
  })
})
