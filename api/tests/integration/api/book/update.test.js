const fetch = require('node-fetch')
const api = require('../../../src/server')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

beforeAll(async () => {
  await api.listen(apiPort)
})

describe('Books API - Update', () => {
  xit('PUT /api/v1/books/1', async () => {
    let response = await (
      await fetch(`${baseURL}/books`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Harry Potter and the Order of the Phoenix - new version',
          description: 'Buy my book! This is now super awesome!',
          price: 999
        })
      })
    ).json()

    expect(response).toEqual({
      message: 'Book updated successfully!',
      data: {
        title: 'Harry Potter and the Order of the Phoenix - new version',
        description: 'Buy my book! This is now super awesome!',
        price: 999
      }
    })
  })
})

afterAll(async () => {
  await api.close()
})
