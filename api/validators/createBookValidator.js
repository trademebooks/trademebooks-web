const Validator = require('validatorjs');
const ApiException = require('../utils/ApiException');

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
    description: 'required',
    price: 'required|numeric|min:1',
    // authors: 'required'
  };

  let validator = new Validator(data, rules);

  if (validator.fails()) {
    let errors = [];
    for (const field in validator.errors.errors) {
      errors = errors.concat(validator.errors.errors[field])
    }

    throw new ApiException(
      'There were errors with the validation',
      'failed',
      400,
      null,
      errors
    );
  }

  return validator;
}

module.exports = createBookValidator;