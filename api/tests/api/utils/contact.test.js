const fetch = require('node-fetch')
const api = require('../../..')

const apiPort = Math.round(Math.random() * 65535)

const db = require('../../../utils/db')
let dbConnection

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db() // start the database
})

describe('Utils Contact Test', () => {
  test('POST /contact', async () => {
    const formData = {
      name: 'John Doe',
      fromEmail: 'thejohndoe@thejohndoe.com',
      body: 'This is a sample message!'
    }

    const response = (
      await fetch(`http://localhost:${apiPort}/api/v1/utils/contact`, {
        method: 'POST',
        body: formData
      })
    ).json()

    expect(response).toEqual({
      status: 'success',
      code: 200,
      message: 'Contact email successfully sent.'
    })
  })
})

afterAll(async () => {
  await api.close()
  await dbConnection.disconnect()
})
