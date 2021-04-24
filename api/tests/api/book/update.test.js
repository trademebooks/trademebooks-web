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

describe('Books API - Update - PUT /api/v1/books/:id', () => {
  test('Update an existing book by id - with Loggedin User', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    // 2. Create a new book via the the POST /books api endpoint
    const newBook = {
      title: 'Test Book #2',
      description: 'This book is awesome, buy it - updated 2',
      condition: 'GOOD',
      location: 'UofT - 2',
      price: 200
    }

    const bookId = '5fcb3a0b2090b488b562669a'
    const bookResponse = await fetch(`${baseURL}/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newBook)
    })

    const responseJson = await bookResponse.json()

    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message: 'The book has successfully been updated.',
      data: newBook,
      errors: null
    })
  })

  test('Update a non-existing book id - with Loggedin User', async () => {
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    const newBook = {
      title: 'Test Book #2',
      description: 'This book is awesome, buy it - updated 2',
      condition: 'GOOD',
      location: 'UofT - 2',
      price: 200
    }

    const bookId = '5fcb3a0b2090b488b562660b'
    const bookResponse = await fetch(`${baseURL}/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(newBook)
    })

    const responseJson = await bookResponse.json()

    expect(responseJson).toMatchObject({
      status: 'failed',
      code: 401,
      message:
        'the book with that id: 5fcb3a0b2090b488b562660b does not exist.',
      data: {},
      errors: [
        'the book with that id: 5fcb3a0b2090b488b562660b does not exist.'
      ]
    })
  })
})
