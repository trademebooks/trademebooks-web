const globalResponseDto = require('../globalResponseDto')

describe('Global Response DTO', () => {
  test('Correct request 1 - happy path', () => {
    // 1. Arrange
    const globalResponse = {
      status: 'success',
      code: 200,
      message: 'Default API Message.',
      data: {},
      errors: null
    }

    // 2. Act
    const response = globalResponseDto(globalResponse)

    // 3. Assert
    expect(response).toEqual(globalResponse)
  })
})
