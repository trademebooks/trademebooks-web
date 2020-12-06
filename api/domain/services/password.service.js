const crypto = require('crypto')

const userRepository = require('../repositories/user.repository')
const mailer = require('./mailer/mailer.service')
const PasswordModel = require('../../domain/models/password.model')
const UserModel = require('../../domain/models/user.model')

const sendEmailResetPassword = async (email) => {
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
    body: `Here is the URL to reset your password: ${req.headers.host}/reset-password/${token}`,
    subject: 'trademebooks.com forgot password'
  })
}

const resetPassword = async (email) => {
  const password = await PasswordModel.findOne({ email, token })

  if (password) {
    // userRepository.updateByEmail(email, new_password)
    const user = await UserModel.updateOne(
      { email },
      { password: new_password }
    )

    res.status(200).json(
      globalResponseDTO({
        status: 'success',
        code: 200,
        message: `Password Reset complete`,
        data: user,
        errors: null
      })
    )
  } else {
    res.status(200).json(
      globalResponseDTO({
        status: 'failed',
        code: 200,
        message: `Password Reset incomplete`,
        data: password,
        errors: ['Invalid token and/or email combination']
      })
    )
  }
}

module.exports = {
  sendEmailResetPassword,
  resetPassword
}
