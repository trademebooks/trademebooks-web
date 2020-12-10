const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDto = require('../dtos/requests/contactUsRequestDto')
const contactUsValidator = require('../validators/contactUsValidator')
const mailer = require('../domain/services/mailer/email.service')

const getHealthCheck = catchExceptions(async (req, res) => {
  res.status(200).json(
    globalResponseDto({
      message: 'The application is up and running!'
    })
  )
})

const contactUs = catchExceptions(async (req, res) => {
  const contactUsRequest = contactUsRequestDto(req.body)

  contactUsValidator(contactUsRequest)

  res.status(200).json(
    globalResponseDto({
      message: 'Contact email successfully sent.'
    })
  )
})

module.exports = {
  getHealthCheck,
  contactUs
}
