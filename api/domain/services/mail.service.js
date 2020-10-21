const config = require('../../config')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.sendGridKey)

const sendMail = async ({ fromEmail, toEmail, body, subject }) => {
  return await sgMail.send({
    from: 'no-reply@trademebooks.com',
    to: toEmail,
    subject,
    text: body
  })
}

module.exports = {
  sendMail
}
