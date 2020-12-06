const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const passwordService = require('../domain/services/password.service')

const sendPasswordResetEmail = catchExceptions(async (req, res) => {
  const { email } = req.body

  const message = passwordService.sendEmailResetPassword(email)

  res.status(200).json(
    globalResponseDTO({
      message: `Email successfully sent.`,
      data: message
    })
  )
})

const resetPassword = catchExceptions(async (req, res) => {
  const newPassword = passwordService.resetPassword(req.body)

  res.status(200).json(
    globalResponseDTO({
      message: 'Password Reset complete',
      data: newPassword
    })
  )
})

module.exports = {
  sendPasswordResetEmail,
  resetPassword
}
