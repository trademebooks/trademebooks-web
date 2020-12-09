const mailer = require('../domain/services/mailer/email.service')

/**
 *
 * @param {*} user
 *
 * @returns boolean
 */
const userHasRegisteredEvent = ({ email, first_name, last_name }) => {
  const bodyText = `Hello ${first_name}! Thank you for registering for trademebooks!`
  return mailer.sendEmail({
    to: email,
    subject: 'Welcome aboard fellow classmate!',
    text: bodyText,
    html: bodyText
  })
}

module.exports = userHasRegisteredEvent
