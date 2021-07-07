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

//////////
const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: config.AWS.accessKeyId,
  secretAccessKey: config.AWS.secretAccessKey,
  region: 'us-east-1'
})

const params = {
  Destination: {
    CcAddresses: [],
    ToAddresses: ['shadowkinhawk@hotmail.com']
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: 'hi there, this is the body - html'
      },
      Text: {
        Charset: 'UTF-8',
        Data: 'hi there, this is the body - text'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Hello from tmb'
    }
  },
  Source: 'yichenzhu1337@gmail.com'
}

// Create the promise and SES service object
const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
  .sendEmail(params)
  .promise()

sendPromise
  .then(function (data) {
    console.log(data.MessageId)
  })
  .catch(function (err) {
    console.error(err, err.stack)
  })

module.exports = {
  sendEmail
}
