const fetch = require('node-fetch')
const api = require('../../../..')

const apiPort = Math.round(Math.random() * 65535)

const db = require('../../../../utils/db')
let dbConnection

beforeAll(async () => {
  await api.listen(apiPort)
  dbConnection = await db() // start the database
})

describe('Utils - General API', () => {
  test('POST /contact', async () => {
    const formData = {
      name: 'John Doe',
      email: 'thejohndoe@thejohndoe.com',
      body: 'This is a sample message!'
    }

    const response = (
      await fetch(`http://localhost:${apiPort}/api/v1/contact`, {
        method: 'POST',
        body: formData
      })
    ).json()

    expect(response).toBe({
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
