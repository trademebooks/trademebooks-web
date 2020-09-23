const globalResponseDTO = require('../responses/globalResponseDTO');
const catchExceptions = require('../utils/catchExceptions');
const contactUsRequestDTO = require('../requests/contactUsRequestDTO');
const contactUsValidator = require('../validators/contactUsValidator');

const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridKey);

const contactUs = catchExceptions(async (req, res, next) => {
  const contactUsRequest = contactUsRequestDTO(req.body);

  const contactUsValidation = contactUsValidator(contactUsRequest);

  await sgMail.send({
    to: 'yichenzhu1337@gmail.com',
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
  contactUs: contactUs
};