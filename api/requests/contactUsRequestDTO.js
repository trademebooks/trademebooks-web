const ApiException = require('../utils/ApiException');

const fields = [
  'name',
  'email',
  'body',
];


contactUsRequestDTO = (data) => {
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
      message = "Contact Us Request DTO failed.",
      data = errors
    );
  }

  return data;
}

module.exports = contactUsRequestDTO;