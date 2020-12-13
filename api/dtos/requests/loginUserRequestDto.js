const ApiGeneralError = require('../../utils/ApiGeneralError')

const fields = ['email', 'password']

const loginUserRequestDto = (data) => {
  const errors = []
  fields.forEach((field) => {
    if (!(field in data)) {
      errors.push(`This DTO's property is required: ${field}.`)
    }
  })

  if (errors.length > 0) {
    throw new ApiGeneralError({
      status: 'failed',
      code: 422,
      message: 'loginUserRequestDto failed.',
      errors
    })
  }

  return data
}

module.exports = loginUserRequestDto
