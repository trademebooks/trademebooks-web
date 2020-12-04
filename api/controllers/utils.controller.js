const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDTO = require('../dtos/requests/contactUsRequestDTO')
const contactUsValidator = require('../validators/contactUsValidator')
const mailer = require('../domain/services/mail.service')

const getHealthCheck = catchExceptions(async (req, res) => {
  res.status(200).json(
    globalResponseDTO({
      message: `The application is up and running!`
    })
  )
})

const contactUs = catchExceptions(async (req, res) => {
  const contactUsRequest = contactUsRequestDTO(req.body)

  contactUsValidator(contactUsRequest)

  const message = mailer.sendMail(contactUsRequest)

  res.status(200).json(
    globalResponseDTO({
      message: `Email successfully sent.`,
      data: message
    })
  )
})

module.exports = {
  getHealthCheck,
  contactUs
}
