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
    title: 'required|max:250',
    price: 'required|integer|min:1|max:999',
    edition: 'integer|min:1|max:99'
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

module.exports = createBookValidator
