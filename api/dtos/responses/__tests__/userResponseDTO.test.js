const userResponseDTO = require('../userResponseDTO')
const ApiGeneralError = require('../../utils/ApiGeneralError')

describe('Test Suite: Response', () => {
  it('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    let user = {}

    // 2. Act
    let response = userResponseDTO(user)

    // 3. Assert
    expect(response).toEqual({})
  })
})
