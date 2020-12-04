const config = require('../../../config')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.sendGridKey)

// using sendgrid templates:
// https://medium.com/@arjunbastola/sending-emails-using-node-js-and-sendgrid-5ad4dea7cf44
const sendMail = async ({
  fromEmail,
  toEmail,
  body,
  subject,
  template,
  data
}) => {
  fromEmail = fromEmail || 'no-reply@trademebooks.com'
  subject = subject || 'No Subject.'

  return await sgMail.send({
    from: fromEmail,
    to: toEmail,
    subject,
    text: body
  })
}

module.exports = {
  sendMail
}
