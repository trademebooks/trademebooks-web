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
const registerUserValidator = (data) => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6',
    password_confirmation: 'required|min:6|same:password'
  };
   
  let validator = new Validator(data, rules);

  if (validator.fails()) {
    throw new ApiException(
      'There were errors with the validation',
      'failed',
      400,
      null,
      validator.errors.errors
    );
  }

  return validator;
}

module.exports = registerUserValidator;