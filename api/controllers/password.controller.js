const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')

const passwordService = require('../domain/services/password.service')

const sendPasswordResetEmail = catchExceptions(async (req, res) => {
  const { email } = req.body

  const message = passwordService.sendEmailResetPassword(email)

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `Email successfully sent.`,
      data: message,
      errors: null
    })
  )
})

const resetPassword = catchExceptions(async (req, res) => {
  const { email, token, new_password } = req.body

  const newPassword = passwordService.resetPassword({
    email,
    token,
    new_password
  })

  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: 'Password Reset complete',
      data: newPassword,
      errors: null
    })
  )
})

module.exports = {
  sendPasswordResetEmail,
  resetPassword
}
