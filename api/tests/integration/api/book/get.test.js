const fetch = require('node-fetch')
const api = require('../../../src/server')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

const db = require('../../../src/utils/db')
let dbConnection
const ApiException = require('../../../src/utils/ApiException')

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db() // start the database
})

describe('Books API', () => {
  it('Get /api/v1/books', async () => {
    let response = await (await fetch(`${baseURL}/books`)).json()

    expect(response).toEqual({
      status: 'success',
      code: 200,
      message: 'List of all books in the database.',
      data: [],
      errors: null
    })
  })

  xit('Get /api/v1/books/1', async () => {
    let response = await (await fetch(`${baseURL}/books`)).json()

    expect(response).toEqual({
      message: 'The email: yichenzhu1337@gmail.com3 has registered.',
      data: {
        id: 1,
        user_id: 1,
        title: 'Harry Potter and the Order of the Phoenix',
        description: "Buy my book! It's awesome!",
        price: 100
      }
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
