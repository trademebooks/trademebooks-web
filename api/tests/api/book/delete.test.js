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

beforeEach(async () => {})

afterEach(async () => {})

afterAll(async () => {
  await dbTestUtils.clearDatabase()
  await api.close()
  await dbConnection.disconnect()
})

describe('Books API - DELETE - DELETE /api/v1/books/:id', () => {
  test('Delete an existing book by id - with Loggedin User', async () => {
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const bookId = '5fcb3a0b2090b488b562669a'
    const bookResponse = await fetch(`${baseURL}/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie
      }
    })

    const responseJson = await bookResponse.json()

    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message:
        'The book with the id: 5fcb3a0b2090b488b562669a was successfully deleted.',
      errors: null
    })
  })
})
