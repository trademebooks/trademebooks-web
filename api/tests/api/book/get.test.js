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

describe('Books API', () => {
  test('Get /api/v1/books/:id - book with id is found', async () => {
    const response = await (
      await fetch(`${baseURL}/books/5fcb3a0b2090b488b562669a`)
    ).json()

    expect(response).toMatchObject({
      status: 'success',
      code: 200,
      message: 'Book with the specified id.',
      data: {
        _id: '5fcb3a0b2090b488b562669a',
        userId: '5e11e9d8eded1d23742c1c6a',
        title: 'Book #1 - Air',
        description:
          'This is a great description fo the book. test. search. query. air here.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg'
      },
      errors: null
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
