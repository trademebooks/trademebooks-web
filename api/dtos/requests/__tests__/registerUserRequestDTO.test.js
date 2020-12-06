const registerUserRequestDTO = require('../registerUserRequestDTO')
const ApiGeneralError = require('../../../utils/ApiGeneralError')

describe('Test Suite: Request', () => {
  test('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    const apiInputRequest = {}

    // 2. Act
    // 3. Assert
    expect(() => {
      registerUserRequestDTO(apiInputRequest)
    }).toThrow(Error)
  })

  test('Correct request 2 - extra useless parameters', () => {
    // 1. Arrange
    const apiInputRequest = {
      email: 'undefined',
      password: 'undefined',
      extraParam1: null,
      extraParam2: 'whatzup',
      body: 'John Doe is cool'
    }

    // 2. Act
    // 3. Assert
    expect(() => {
      registerUserRequestDTO(apiInputRequest)
    }).toThrow(Error)
  })

  test('Correct request 3 - happy path', () => {
    // 1. Arrange
    const apiInputRequest = {
      first_name: 'Yichen',
      last_name: 'Zhu',
      email: 'yichen@yichen.com',
      username: 'yichen12',
      password: 'yichen-and-his-awesome-password',
      password_confirmation: 'yichen-and-his-awesome-password',
      phone_number: '1234567890'
    }

    // 2. Act
    const registerUserRequest = registerUserRequestDTO(apiInputRequest)

    // 3. Assert
    expect(registerUserRequest).toMatchObject({
      first_name: 'Yichen',
      last_name: 'Zhu',
      email: 'yichen@yichen.com',
      username: 'yichen12',
      password: 'yichen-and-his-awesome-password',
      password_confirmation: 'yichen-and-his-awesome-password',
      phone_number: '1234567890'
    })
  })

  test('Correct request 4 - we input in the wrong fields, some random string', () => {
    // 1. Arrange
    const apiInputRequest = { message: 'this is awesome!' }

    // 2. + 3. Act and Assert
    expect(() => {
      registerUserRequestDTO(apiInputRequest)
    }).toThrow(ApiGeneralError)
  })
})
