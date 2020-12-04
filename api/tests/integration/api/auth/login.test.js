const fetch = require('node-fetch')
const api = require('../../../../')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

const db = require('../../../../utils/db')
let dbConnection
const dbTestUtils = require('../../../testUtils/dbTestUtil')

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db()
})

beforeEach(async () => {
  await dbTestUtils.setUpDatabase()
})

afterEach(async () => {
  await dbTestUtils.clearDatabase()
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})

describe('API Test - Login', () => {
  test('POST /auth/login - Incorrect credentials', async () => {
    const user = {
      email: 'yichen@yichen.com',
      password: 'password'
    }

    const response = await (
      await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'failed',
      code: 472,
      message: 'Something went wrong...',
      data: {},
      errors: [
        'Invalid credentials, please try a different email and password combination.'
      ]
    })
  })
})