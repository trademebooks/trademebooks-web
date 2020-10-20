const globalResponseDTO = require('../responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const mailer = require('../domain/services/mail.service')
const PasswordModel = require('../domain/models/password.model')

const sendPasswordResetEmail = catchExceptions(async (req, res, next) => {
  const { email } = req.body

  // insert into the password table
  // table: passwords
  // - userId
  // - token
  const password = await PasswordModel.save({ email })

  // send email with hmac
  const message = mailer.sendMail(contactUsRequest)

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      `Email successfully sent.`,
      (data = message),
      (errors = null)
    )
  )
})

module.exports = {
  sendPasswordResetEmail
}
