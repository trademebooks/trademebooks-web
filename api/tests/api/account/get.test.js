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

describe('Account API - get Account', () => {
  test('Get /api/v1/account', async () => {
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const response = await (
      await fetch(`${baseURL}/account`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          cookie
        }
      })
    ).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message: "The current auth user's account settings.",
      data: {
        receiveEmail: true,
        receiveSms: true,
        userId: '5e11e9d8eded1d23742c1c6a'
      },
      errors: null
    })

    expect(typeof response.data.school).toBe('string')
    expect(typeof response.data.location).toBe('string')
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
