const globalResponseDTO = require('../responses/globalResponseDTO');
const catchExceptions = require('../utils/catchExceptions');
const contactUsRequestDTO = require('../requests/contactUsRequestDTO');
const contactUsValidator = require('../validators/contactUsValidator');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('SENDGRID_API_KEY')

const contactUs = catchExceptions(async (req, res, next) => {
  const contactUsRequest = contactUsRequestDTO(req.body);
  const contactUsValidation = contactUsValidator(contactUsRequest);

  await sgMail.send({
    to: 'test@example.com',
    from: contactUsRequest.email,
    subject: 'TMB Contact Us form',
    text: contactUsRequest.body,
  });

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