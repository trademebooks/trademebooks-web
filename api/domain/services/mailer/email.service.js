const config = require('../../../config')

const mailer = require('@sendgrid/mail')
mailer.setApiKey(config.sendGridKey)

const sendEmail = async ({ fromEmail, fromName, to, subject, text, html }) => {
  fromEmail = fromEmail || 'noreply@trademebooks.com'
  fromName = fromName || 'Team trademebooks'
  subject = subject || 'No Subject.'

  return await mailer.send({
    from: {
      email: fromEmail,
      name: fromName
    },
    to,
    subject,
    text,
    html
  })
}

module.exports = {
  sendEmail
}
