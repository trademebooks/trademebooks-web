const ApiGeneralError = require('../../utils/ApiGeneralError')

const fields = ['title', 'description', 'price', 'email']

const createBookRequestDto = (data) => {
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
      message: 'Create a Book listing Request DTO failed.',
      errors
    })
  }

  return data
}

module.exports = createBookRequestDto
