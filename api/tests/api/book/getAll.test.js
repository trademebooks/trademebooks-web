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

describe('Books API - getAll', () => {
  test('Get /api/v1/books', async () => {
    const response = await (await fetch(`${baseURL}/books`)).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message: 'List of all books in the database.',
      errors: null
    })

    expect(Array.isArray(response.data)).toBe(true)
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
