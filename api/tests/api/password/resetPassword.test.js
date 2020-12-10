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

describe('Password API - reset password with token', () => {
  test('POST /api/v1/auth/password/reset - with invalid token', async () => {
    const user = {
      email: 'yichenzhu1337@gmail.com',
      token: 'some-random-invalid-token',
      newPassword: 'asdasd'
    }

    const response = await (
      await fetch(`${baseURL}/auth/password/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'failed',
      code: 400,
      message: 'Password Reset incomplete',
      data: {},
      errors: ['Invalid token and/or email combination']
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
