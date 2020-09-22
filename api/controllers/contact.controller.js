const globalResponseDTO = require('../responses/globalResponseDTO');
const catchExceptions = require('../utils/catchExceptions');

const contactUs = catchExceptions(async (req, res, next) => {
  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      (message = `Email successfully sent.`),
      (errors = null)
    )
  );
});

module.exports = {
  contactUs: contactUs,
};