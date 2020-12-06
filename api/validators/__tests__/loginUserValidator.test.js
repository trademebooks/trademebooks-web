const loginUserValidator = require('../loginUserValidator')

describe('Test Suite: loginUserValidator.test.js', () => {
  it('The happy path - everything works', () => {
    // 1. Arrange
    const data = {
      email: 'yichen@yichen.com',
      password: 'password123'
    }

    // 2. Act
    const validator = loginUserValidator(data)

    // 3. Assert
    expect(Object.keys(validator.errors.errors).length).toEqual(0)
  })
})
