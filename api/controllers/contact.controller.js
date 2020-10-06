const globalResponseDTO = require('../responses/globalResponseDTO');
const catchExceptions = require('../utils/catchExceptions');
const contactUsRequestDTO = require('../requests/contactUsRequestDTO');
const contactUsValidator = require('../validators/contactUsValidator');
const mailer = require('../domain/services/mail.service');

const contactUs = catchExceptions(async (req, res, next) => {
  const contactUsRequest = contactUsRequestDTO(req.body);

  const contactUsValidation = contactUsValidator(contactUsRequest);

  const message = mailer.sendMail(contactUsRequest);

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      `Email successfully sent.`,
      (data = message),
      (errors = null)
    )
  );
});

module.exports = {
  contactUs,
};
