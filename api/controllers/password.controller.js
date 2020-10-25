const crypto = require('crypto')
const globalResponseDTO = require('../responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')
const mailer = require('../domain/services/mail.service')
const PasswordModel = require('../domain/models/password.model')
const UserModel = require('../domain/models/user.model')

const sendPasswordResetEmail = catchExceptions(async (req, res, next) => {
  console.log('req.headers', req.headers)

  const { email } = req.body

  const token = crypto.createHash('md5').update(email).digest('hex')

  const password = await PasswordModel.findOneAndUpdate(
    { email, token }, // find a document with that filter
    { email, token }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true }, // options
    function (err, doc) {
      // callback
      if (err) {
        // handle error
        console.log('error:', err)
      } else {
        // handle document
        console.log('success:', err)
      }
    }
  )

  // send email with hmac
  const message = await mailer.sendMail({
    toEmail: email,
    body: `Here is the URL to reset your password: ${req.headers}/reset-password/${token}`,
    subject: 'trademebooks.com forgot password'
  })

  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      `Email successfully sent.`,
      (data = { message, password }),
      (errors = null)
    )
  )
})

const resetPassword = catchExceptions(async (req, res, next) => {
  const { email, token, new_password } = req.body

  const password = await PasswordModel.findOne({ email, token })

  if (password) {
    // userRepository.updateByEmail(email, new_password)
    const user = await UserModel.updateOne(
      { email },
      { password: new_password }
    )

    return res.json(
      globalResponseDTO(
        (status = 'success'),
        (code = 200),
        `Password Reset complete`,
        (data = user),
        (errors = null)
      )
    )
  } else {
    return res.json(
      globalResponseDTO(
        (status = 'failed'),
        (code = 200),
        `Password Reset incomplete`,
        (data = password),
        (errors = ['Invalid token and/or email combination'])
      )
    )
  }
})

module.exports = {
  sendPasswordResetEmail,
  resetPassword
}
