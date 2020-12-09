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

describe('Books API', () => {
  test('POST /api/v1/books - create a book in the datbase', async () => {
    // 1. Log the user in via the POST /auth/login api endpoint
    const user = {
      email: 'yichenzhu1337@gmail.com',
      password: 'yichen'
    }
    const response = await (
      await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: user
      })
    ).json()

    /////////////////////////////////////////////
    /**
     * TODO
     * -------
     * Figure out how to pass the cookie into the POST /books api endpoint below
     * 
     * ...
     */


    /////////////////////////////////////////////


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

    const response = await (
      await fetch(`${baseURL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: book
      })
    ).json()

    expect(response).toMatchObject({
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
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
