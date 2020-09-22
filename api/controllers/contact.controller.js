const globalResponseDTO = require('../responses/globalResponseDTO');
const catchExceptions = require('../utils/catchExceptions');
const contactUsRequestDTO = require('../requests/contactUsRequestDTO');
const contactUsValidator = require('../validators/contactUsValidator');

const contactUs = catchExceptions(async (req, res, next) => {
  const contactUsRequest = contactUsRequestDTO(req.body);
  const contactUsValidation = contactUsValidator(contactUsRequest);

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