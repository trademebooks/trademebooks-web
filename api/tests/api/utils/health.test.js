const fetch = require('node-fetch')
const api = require('../../../')

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

describe('Utils Health Test', () => {
  test('GET /health', async () => {
    const response = await fetch(
      `http://localhost:${apiPort}/api/v1/utils/health`
    )
    const json = await response.json()
    expect(json).toEqual({
      status: 'success',
      code: 200,
      message: `The application is up and running!`,
      data: {},
      errors: null
    })
  })
})
