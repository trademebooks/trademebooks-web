const Validator = require('validatorjs')
const ApiGeneralError = require('../utils/ApiGeneralError')

const loginUserValidator = (data) => {
  const rules = {
    email: 'required|email',
    password: 'required'
  }

  const validator = new Validator(data, rules)

  if (validator.fails()) {
    let errors = []
    for (const field in validator.errors.errors) {
      errors = errors.concat(validator.errors.errors[field])
    }

    throw new ApiGeneralError({
      message: 'There were errors with the validation',
      errors
    })
  }

  return validator
}

module.exports = loginUserValidator
