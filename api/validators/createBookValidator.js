const Validator = require('validatorjs')
const ApiGeneralError = require('../utils/ApiGeneralError')

/**
 * @param {*} data {
 *  - email
 *  - password
 *  - password_confirm:
 * }
 *
 * @returns Validator
 */
const createBookValidator = (data) => {
  const rules = {
    title: 'required',
    price: 'required|numeric|min:1|max:999'
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

module.exports = createBookValidator
