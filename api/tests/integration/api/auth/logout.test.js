const fetch = require('node-fetch')
const api = require('../../../src/server')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`

beforeAll(async () => {
  await api.listen(apiPort)
})

beforeEach(() => {
  //initializeCityDatabase();
})

afterEach(() => {
  //clearCityDatabase();
})

/**
 * 1. Arrange
 *  - setup the world
 * 2. Act
 *  - making the http call
 * 3. Assert
 *  1. database check
 *  2. response check
 */
describe('test suite', () => {
  xit('GET /auth/logout', async () => {
    let response = await (
      await fetch(`${baseURL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'yichenzhu1337@gmail.com2',
          password: 'yichen'
        })
      })
    ).json()

    expect(response).toEqual({
      message: 'The email: yichenzhu1337@gmail.com2 has registered.'
    })
  })

  // Gets the currently authenticated user
  xit('GET /auth/user', async () => {
    let response = await (
      await fetch(`${baseURL}/auth/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
    ).json()

    expect(response).toEqual({
      message: 'The currently authenticated user is: yichenzhu1337@gmail.com2.'
    })
  })
})

afterAll(async () => {
  await api.close()
})
