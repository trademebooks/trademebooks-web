const config = require('../../config')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.sendGridKey)

const sendMail = async ({ email, body }) => {
  return await sgMail.send({
    to: config.contactUsEmail,
    from: email,
    subject: 'trademebooks.com Contact Us Form!',
    text: body
  })
}

module.exports = {
  sendMail
}
