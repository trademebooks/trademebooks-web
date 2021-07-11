// AWS implmentation of the mailer
const config = require('../../../config')
const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: config.AWS.accessKeyId,
  secretAccessKey: config.AWS.secretAccessKey,
  region: 'us-east-1'
})

const sendEmail = async ({ fromEmail, fromName, to, subject, text, html }) => {
  fromEmail = fromEmail || 'no-reply@trademebooks.com'
  /* eslint-disable no-unused-vars */
  fromName = fromName || 'Team trademebooks'
  subject = subject || 'No Subject.'

  const params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html
        },
        Text: {
          Charset: 'UTF-8',
          Data: text
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: fromEmail
  }

  try {
    const mail = await new AWS.SES({ apiVersion: '2010-12-01' })
      .sendEmail(params)
      .promise()

    return mail
  } catch (err) {
    console.error(err, err.stack)
  }
}

module.exports = {
  sendEmail
}
