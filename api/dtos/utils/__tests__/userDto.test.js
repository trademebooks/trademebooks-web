const userDto = require('../userDto')

describe('User DTO', () => {
  test('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    const user = {}

    // 2. Act
    const response = userDto(user)

    // 3. Assert
    expect(response).toEqual({})
  })
})
