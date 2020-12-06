const userResponseDTO = require('../userResponseDTO')

describe('Test Suite: Response', () => {
  it('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    const user = {}

    // 2. Act
    const response = userResponseDTO(user)

    // 3. Assert
    expect(response).toEqual({})
  })
})
