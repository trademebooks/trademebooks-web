const ApiException = require('../utils/ApiException');

const fields = [
  'email',
  'password'
];

const loginUserRequestDTO = (data) => {
  const errors = [];
  fields.forEach(field => {
    if (!(field in data)) {
      errors.push(`This DTO's property is required: ${field}.`);
    }
  });

  if (errors.length > 0) {
    throw new ApiException(
      status = "failed",
      code = 422,
      message = "loginUserRequestDTO failed.",
      data = null,
      errors
    );
  }

  return data;
}

module.exports = loginUserRequestDTO;