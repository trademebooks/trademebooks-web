const ApiException = require('../utils/ApiException');

const fields = [
  'first_name',
  'last_name',
  'email',
  'username',
  'password',
  'password_confirmation',
];

/**
 * @param Object data
 */
registerUserRequestDTO = (data) => {
  const errors = [];
  fields.forEach((field) => {
    if (!(field in data)) {
      errors.push(`This DTO's property is required: ${field}.`);
    }
  });

  if (errors.length > 0) {
    throw new ApiException(
      (status = 'failed'),
      (code = 422),
      (message = 'Register User Request DTO failed.'),
      (data = errors)
    );
  }

  return data;
};

module.exports = registerUserRequestDTO;
