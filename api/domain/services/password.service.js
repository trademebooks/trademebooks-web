const crypto = require('crypto')

const mailer = require('./mailer/email.service')
const Password = require('../../domain/models/password.model')
const User = require('../../domain/models/user.model')

const passwordResetEmailTemplate = require('./mailer/emailTemplates/passwordResetTemplate')
const ApiGeneralError = require('../../utils/ApiGeneralError')

const sendResetPasswordEmail = async (email) => {
  const token = crypto.createHash('md5').update(email).digest('hex')

  // if we can't find the user, then we silently throw an eror with a 200 status code and not continue further
  // this means the user is not in our system
  const user = await User.findOne({ email })
  if (!user) {
    throw new ApiGeneralError({
      code: 200,
      message: 'User does not exist in the database.'
    })
  }

  const password = await Password.findOneAndUpdate(
    { email, token }, // find a document with that filter
    { email, token }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true } // options
  )

  const message = await mailer.sendEmail({
    to: email,
    subject: 'Forgot Password - Reset Link',
    text: passwordResetEmailTemplate({ token }),
    html: passwordResetEmailTemplate({ token })
  })

  return message
}

const resetPassword = async (email, token, newPassword) => {
  const permissionToResetPassword = await Password.findOne({ email, token })

  if (permissionToResetPassword) {
    const userWithUpdatedPassword = await User.updateOne(
      { email },
      { password: newPassword }
    )

    return userWithUpdatedPassword
  }

  throw new ApiGeneralError({
    message: `Password Reset incomplete`,
    errors: ['Invalid token and/or email combination']
  })
}

module.exports = {
  sendResetPasswordEmail,
  resetPassword
}
