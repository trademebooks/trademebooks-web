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

describe('Account API - update Account Auth', () => {
  test('Get /api/v1/account/auth-user', async () => {
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const newUserFields = {
      username: 'bobby123'
    }

    const response = await (
      await fetch(`${baseURL}/account/auth-user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          cookie
        },
        body: JSON.stringify(newUserFields)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message: "Updated the current auth user's settings.",
      data: {
        username: 'bobby123'
      },
      errors: null
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
