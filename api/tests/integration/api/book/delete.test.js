const fetch = require('node-fetch')
const api = require('../../../src/server')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

beforeAll(async () => {
  await api.listen(apiPort)
})

describe('Books API', () => {
  xit('DELETE /api/v1/books/1', async () => {
    let response = await (
      await fetch(`${baseURL}/books/1`, { method: 'DELETE' })
    ).json()

    expect(response).toEqual({
      message: 'Book deleted successfully!',
      data: {}
    })
  })
})

afterAll(async () => {
  await api.close()
})
