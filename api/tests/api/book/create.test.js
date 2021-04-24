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

describe('Books API - create', () => {
  test('POST /api/v1/books - create a book in the database - User is loggedin', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const cookie = await dbTestUtils.getLogingUserCookies(baseURL)

    // 2. Create a new book via the the POST /books api endpoint
    const book = {
      title: 'Test Book #1',
      description: 'This book is awesome, buy it',
      authors: ['JK Rowling', "JK's Husbhand", 'Harry Himself'],
      condition: 'Good',
      location: 'UofT',
      price: 199,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg'
    }

    const bookResponse = await fetch(`${baseURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        cookie
      },
      body: JSON.stringify(book)
    })

    const responseJson = await bookResponse.json()

    expect(responseJson).toMatchObject({
      status: 'success',
      code: 200,
      message: 'Book has successfully been added to the database.',
      data: {
        authors: ['JK Rowling', "JK's Husbhand", 'Harry Himself'],
        userId: '5e11e9d8eded1d23742c1c6a',
        title: 'Test Book #1',
        description: 'This book is awesome, buy it',
        condition: 'Good',
        location: 'UofT',
        price: 199
      },
      errors: null
    })
  })

  test('POST /api/v1/books - create a book in the database - User is NOT loggedin', async () => {
    const book = {
      title: 'Test Book #1',
      description: 'This book is awesome, buy it',
      authors: ['JK Rowling', "JK's Husbhand", 'Harry Himself'],
      condition: 'Good',
      location: 'UofT',
      price: 199,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg'
    }

    const response = await fetch(`${baseURL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })

    const responseJson = await response.json()

    expect(responseJson).toMatchObject({
      status: 'failed',
      code: 401,
      message:
        'Access denied: you must be logged in to access this API endpoint.',
      data: {},
      errors: ['You must be logged in.']
    })
  })
})
