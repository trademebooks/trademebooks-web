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

describe('Message/Chat API - Get all converations', () => {
  test('POST /api/v1/conversations - Get all conversations for the current auth user', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    // 2. Make the API call to the endpoint
    const response = await fetch(`${baseURL}/conversations`, {
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
      message: 'A a list of conversations of the currently authenticated user.',
      data: [
        {
          _id: '5fc36879a0d3010d607eaade',
          usersWhoHaveReadLastestMessage: [
            '5e11e9d8eded1d23742c1c6a'
          ],
          lastestMessage: 'Sure let\'s do it!',
          recipientUsers: [
            {
              _id: '5e11e9d8eded1d23742c1c6a',
              first_name: 'Yi Chen',
              last_name: 'Zhu'
            },
            {
              _id: '5e11e9d8eded1d23742c1c6b',
              first_name: 'Cedric',
              last_name: 'Mosdell'
            }
          ],
          chattingWithUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        }
      ],
      errors: null
    })
  })
})
