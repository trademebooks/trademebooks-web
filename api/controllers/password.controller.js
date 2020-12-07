const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const passwordService = require('../domain/services/password.service')

const sendPasswordResetEmail = catchExceptions(async (req, res) => {
  const { email } = req.body

  const message = await passwordService.sendResetPasswordEmail(email)

  res.status(200).json(
    globalResponseDTO({
      message: 'If there is an email in our database, then we will have sent you a password reset email.',
      data: message
    })
  )
})

const resetPassword = catchExceptions(async (req, res) => {
  const { email, token, newPassword } = req.body

  const userWithUpdatedPassword = await passwordService.resetPassword(email, token, newPassword)

  res.status(200).json(
    globalResponseDTO({
      message: 'Password reset success!',
      data: userWithUpdatedPassword
    })
  )
})

module.exports = {
  sendPasswordResetEmail,
  resetPassword
}
