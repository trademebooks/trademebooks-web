const ApiGeneralError = require('../../utils/ApiGeneralError')

const fields = [
  'first_name',
  'last_name',
  'email',
  'username',
  'password',
  'password_confirmation'
]

registerUserRequestDto = (data) => {
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
      message: 'Register User Request DTO failed.',
      errors
    })
  }

  return data
}

module.exports = registerUserRequestDto
