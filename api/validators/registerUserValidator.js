const Validator = require('validatorjs')
const ApiGeneralError = require('../utils/ApiGeneralError')

const registerUserValidator = (data) => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6',
    password_confirmation: 'required|min:6|same:password'
  }

  const validator = new Validator(data, rules)

  if (validator.fails()) {
    const errors = []
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

module.exports = registerUserValidator
