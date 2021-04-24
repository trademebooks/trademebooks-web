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

describe('Account API - update Account', () => {
  test('Get /api/v1/account', async () => {
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const newAccountFields = {
      receiveEmail: false,
      receiveSms: false,
      school: 'University of Toronto',
      location: 'Toronto, Ontario, Canada'
    }

    const response = await (
      await fetch(`${baseURL}/account`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          cookie
        },
        body: JSON.stringify(newAccountFields)
      })
    ).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message: "Updated the current auth user's account settings.",
      data: newAccountFields,
      errors: null
    })
  })
})
