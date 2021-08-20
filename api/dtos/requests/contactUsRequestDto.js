const ApiGeneralError = require('../../utils/ApiGeneralError')

const fields = ['name', 'fromEmail', 'body']

const contactUsRequestDto = (data) => {
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
      message: 'Contact Us Request DTO failed.',
      errors
    })
  }

  return data
}

module.exports = contactUsRequestDto
