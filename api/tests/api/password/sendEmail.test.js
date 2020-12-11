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

describe('Password API - reset password by sending an email', () => {
  test('POST /api/v1/auth/password/send-email - email does not exist in database', async () => {
    const user = {
      email: 'yichenzhu1337asd@gmail.com'
    }

    const response = await (
      await fetch(`${baseURL}/auth/password/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'failed',
      code: 200,
      message: 'User does not exist in the database.',
      data: {},
      errors: []
    })
  })

  test('POST /api/v1/auth/password/send-email - email does exist in database', async () => {
    const user = {
      email: 'yichenzhu1337@gmail.com'
    }

    const response = await (
      await fetch(`${baseURL}/auth/password/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message:
        'If there is an email in our database, then we will have sent you a password reset email.',
      errors: null
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
