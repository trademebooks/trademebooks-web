const ApiGeneralError = require('../utils/ApiGeneralError')

const fields = ['title', 'description', 'price', 'location', 'authors']

const createBookRequestDTO = (data) => {
  // const errors = [];
  // fields.forEach(field => {
  //   if (!(field in data)) {
  //     errors.push(`This DTO's property is required: ${field}.`);
  //   }
  // });

  // if (errors.length > 0) {
  //   throw new ApiGeneralError(
  //     status = "failed",
  //     code = 422,
  //     message = "Create a Book listing Request DTO failed.",
  //     data = errors
  //   );
  // }

  return data
}

module.exports = createBookRequestDTO
