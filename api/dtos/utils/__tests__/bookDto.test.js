const bookDto = require('../bookDto')

describe('Book DTO', () => {
  test('Correct request 1 - empty parameters', () => {
    // 1. Arrange
    const book = {}

    // 2. Act
    const response = bookDto(book)

    // 3. Assert
    expect(response).toEqual({})
  })
})
