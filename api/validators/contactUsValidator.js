const Validator = require('validatorjs')
const ApiGeneralError = require('../utils/ApiGeneralError')

const contactUsValidator = (data) => {
  const rules = {
    name: 'required|max:128',
    toEmail: 'required|email',
    body: 'required|max:10000'
  }

  let validator = new Validator(data, rules)

  if (validator.fails()) {
    let errors = []
    for (const field in validator.errors.errors) {
      errors = errors.concat(validator.errors.errors[field])
    }

    throw new ApiGeneralError(
      'There were errors with the validation',
      'failed',
      400,
      null,
      errors
    )
  }

  return validator
}

module.exports = contactUsValidator
