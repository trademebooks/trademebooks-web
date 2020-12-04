const ApiGeneralError = require('../../utils/ApiGeneralError')

const fields = ['name', 'toEmail', 'body']

contactUsRequestDTO = (data) => {
  const errors = []
  fields.forEach((field) => {
    if (!(field in data)) {
      errors.push(`This DTO's property is required: ${field}.`)
    }
  })

  if (errors.length > 0) {
    throw new ApiGeneralError(
      'Contact Us Request DTO failed.',
      'failed',
      422,
      null,
      errors
    )
  }

  return data
}

module.exports = contactUsRequestDTO
