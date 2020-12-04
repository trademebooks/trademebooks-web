const fetch = require('node-fetch')
const api = require('../../../..')

const apiPort = Math.round(Math.random() * 65535)

const db = require('../../../../utils/db')
let dbConnection

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db() // start the database
})

describe('Utils - General API', () => {
  it('GET /health', async () => {
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

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
