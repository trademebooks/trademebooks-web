const Validator = require('validatorjs');
const ApiException = require('../utils/ApiException');

/**
 * @param {*} data {
 *  - email
 *  - password
 * }
 *
 * @returns Validator
 */
const loginUserValidator = (data) => {
  const rules = {
    email: 'required|email',
    password: 'required',
  };

  let validator = new Validator(data, rules);

  if (validator.fails()) {
    let errors = [];
    for (const field in validator.errors.errors) {
      errors = errors.concat(validator.errors.errors[field]);
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
};

module.exports = loginUserValidator;
