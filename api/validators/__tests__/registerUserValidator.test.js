const registerUserValidator = require('../registerUserValidator')

describe('Test Suite: registerUserValidator.test.js', () => {
  it('The happy path - everything works', () => {
    // 1. Arrange
    const data = {
      email: 'johndoe@gmail.com',
      password: 'superduperpassword',
      password_confirmation: 'superduperpassword'
    }

    // 2. Act
    let validator = registerUserValidator(data)

    // 3. Assert
    expect(Object.keys(validator.errors.errors).length).toEqual(0)
  })

  it('Not matching passwords', () => {
    // 1. Arrange
    const data = {
      email: 'johndoe@gmail.com',
      password: 'superduperpassword',
      password_confirmation: 'superduperpassword1'
    }

    // 2. + 3. Act and Assert
    expect(() => {
      registerUserValidator(data)
    }).toThrow(Error)
  })
})
